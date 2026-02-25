import React, { Component } from "react";
import axios, { AxiosRequestConfig } from "axios";

import { DesmyModalContainer } from "../modalcontainer/DesmyModalContainer";
import { DesmyModalHandler } from "../dialog/DesmyAlertDialog";

import DesmyAuth from "../apis/DesmyAuth";
import { DesmyState } from "../apis/DesmyState";

import { DesmyButton } from "../button/DesmyButton";
import { DesmyTextInput } from "../input/DesmyTextInput";
import { DesmyToast } from "../toasify/DesmyToast";

import { DesmyDropdownItem } from "../apis/SharedProps";
import { DesmyDropdown } from "../dropdown/DesmyDropdown";
import DesmyCommons from "../apis/DesmyCommons";

/* -------------------------------------------
   TYPES
--------------------------------------------*/

interface ExportOptions {
  confirm?: boolean;
  redirect?: boolean;
  successMessage?: string;
  confirmationMessage?: string;
}

interface ExportExtraDropdown {
  title: string;
  key: string;
  endpoint: string;
  dependsOn?: string;
}

interface CreateProps {
  exportDetails: {
    url?: string;
    queryString?: string;
    options?: ExportOptions;
    data?: ExportExtraDropdown[];
  };
  onClose: () => void;
  onSuccess?: (data: any) => void;
}

interface InputState {
  name: string;
  format: string;
  redirect: boolean;
  confirm: boolean;
  extraSelections: Record<string, any>;
}

interface CreateState {
  hasRequest: boolean;
  input: InputState;
  formatList: DesmyDropdownItem[];
  extraDropdownLists: Record<string, DesmyDropdownItem[]>;
  modal?: React.ReactNode | null;
}

/* -------------------------------------------
   COMPONENT
--------------------------------------------*/

class DesmyDownloadOptions extends Component<CreateProps, CreateState> {
  constructor(props: CreateProps) {
    super(props);

    this.state = {
      hasRequest: false,
      formatList: [{ id: "xlsx", name: "XLSX" }],
      extraDropdownLists: {},
      input: {
        name: "",
        format: "xlsx",
        confirm: props.exportDetails.options?.confirm ?? false,
        redirect: props.exportDetails.options?.redirect ?? false,
        extraSelections: {},
      },
      modal: null,
    };
  }

  componentDidMount() {
    this.loadInitialDropdowns();
  }

  /* -------------------------------------------
     COMMON REQUEST CONFIG
  --------------------------------------------*/

  private getAuthConfig(): AxiosRequestConfig {
    return {
      headers: {
        Authorization: `Token ${DesmyAuth.get(
          DesmyState.ACCESS_TOKEN
        )}`,
        "X-CSRFToken": DesmyAuth.getCookie("csrftoken"),
      },
    };
  }

  /* -------------------------------------------
     FETCH HELPERS
  --------------------------------------------*/

  private async fetchDropdown(
    endpoint: string
  ): Promise<DesmyDropdownItem[]> {
    const response = await axios.get(endpoint, this.getAuthConfig());

    if (!response.data?.success) return [];

    return (
      response.data.data?.map((row: any) => ({
        id: row.id,
        name: row.name,
        data: row.data || {}, // ✅ preserve metadata
      })) || []
    );
  }

  /* -------------------------------------------
     LOAD DROPDOWNS
  --------------------------------------------*/

  loadInitialDropdowns = async () => {
    try {
      const dropdowns = this.props.exportDetails.data || [];
      const lists: Record<string, DesmyDropdownItem[]> = {};

      for (const item of dropdowns) {
        if (item.dependsOn) continue;
        lists[item.key] = await this.fetchDropdown(item.endpoint);
      }

      this.setState({ extraDropdownLists: lists });
    } catch (err) {
      console.error("Dropdown load failed:", err);
    }
  };

  loadDependentDropdown = async (
    dropdown: ExportExtraDropdown,
    parentValue: string
  ) => {
    if (!parentValue) return;

    try {
      const endpoint = `${dropdown.endpoint}?${dropdown.dependsOn}=${parentValue}`;
      const list = await this.fetchDropdown(endpoint);

      this.setState((prev) => ({
        extraDropdownLists: {
          ...prev.extraDropdownLists,
          [dropdown.key]: list,
        },
      }));
    } catch (err) {
      console.error("Dependent dropdown load failed:", err);
    }
  };

  /* -------------------------------------------
     DEPENDENCY LOGIC
  --------------------------------------------*/

  private shouldShowDropdown(
    item: ExportExtraDropdown
  ): boolean {
    const { input, extraDropdownLists } = this.state;

    if (!item.dependsOn) return true;

    const parentValue = input.extraSelections[item.dependsOn];
    if (!parentValue) return false;

    const parentList =
      extraDropdownLists[item.dependsOn] || [];

    const selectedParent = parentList.find(
      (p) => p.id === parentValue
    );

    return selectedParent?.data?.show_dependant === true;
  }

  /* -------------------------------------------
     HANDLE DROPDOWN CHANGE
  --------------------------------------------*/

  private handleDropdownChange = (
    item: ExportExtraDropdown,
    value: DesmyDropdownItem
  ) => {
    const dropdowns = this.props.exportDetails.data || [];

    const childDropdowns = dropdowns.filter(
      (d) => d.dependsOn === item.key
    );

    this.setState(
      (prev) => {
        const updatedSelections = {
          ...prev.input.extraSelections,
          [item.key]: value.id,
        };

        // ✅ auto-clear children
        childDropdowns.forEach((child) => {
          delete updatedSelections[child.key];
        });

        return {
          input: {
            ...prev.input,
            extraSelections: updatedSelections,
          },
        };
      },
      () => {
        // ✅ only load children if allowed
        if (value?.data?.show_dependant) {
          childDropdowns.forEach((child) => {
            this.loadDependentDropdown(child, value.id);
          });
        }
      }
    );
  };

  /* -------------------------------------------
     EXPORT SUBMIT
  --------------------------------------------*/

  handleOnSubmit = async () => {
    try {
      const { exportDetails } = this.props;
      const { input } = this.state;

      if (!exportDetails.url) {
        DesmyToast.error("Invalid export URL.");
        return;
      }

      this.setState({ hasRequest: true });

      const urlParams = new URLSearchParams(
        exportDetails.queryString || ""
      );

      Object.entries(input.extraSelections).forEach(([k, v]) => {
        if (!DesmyCommons.isEmptyOrNull(v)) {
          urlParams.set(k, String(v));
        }
      });

      urlParams.set("format", input.format);

      const response = await axios.post(
        exportDetails.url,
        {
          filename: input.name,
          exportDetails: {
            queryString: urlParams.toString(),
            options: { confirm: input.confirm },
          },
        },
        this.getAuthConfig()
      );

      const fileUrl = response.data?.data?.url;

      if (fileUrl) {
        if (input.redirect) {
          window.open(fileUrl, "_blank");
        }

        DesmyToast.success(
          response.data.message ||
            exportDetails.options?.successMessage ||
            "Export successful!"
        );

        this.props.onSuccess?.(response.data);
        this.props.onClose();
      } else {
        DesmyToast.error("Export failed.");
      }
    } catch (error: any) {
      DesmyToast.error(
        error?.response?.data?.detail ||
          error?.message ||
          "Export failed."
      );
    } finally {
      this.setState({ hasRequest: false });
    }
  };

   handleConfirmation = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) e.preventDefault();

    const confirmationText =
      this.props.exportDetails.options?.confirmationMessage ||
      "Are you sure you want to export this data?";

    const settings = {
      title: "Confirmation!",
      btnPosition: "Continue",
      btnNegative: "Cancel",
      loadinghint: "Processing export, please wait...",
      loading: true,
    };

    const handleClose = (state: { status: boolean }) => {
      if (state.status) {
        this.setState({ modal: null }, this.handleOnSubmit);
      } else {
        this.setState({ modal: null });
      }
    };

    this.setState({
      modal: (
        <DesmyModalHandler settings={settings} onClose={handleClose}>
          <div className="flex flex-col w-full text-sm py-2">
            {confirmationText}
            <br />
            <br />
            Are you sure you want to continue?
          </div>
        </DesmyModalHandler>
      ),
    });
  };

  handleExportClick = () => {
    const { confirm } = this.props.exportDetails.options ?? {};
    if (confirm) {
      this.handleConfirmation();
    } else {
      this.handleOnSubmit();
    }
  };

  
  /* -------------------------------------------
     RENDER
  --------------------------------------------*/

  render() {
    const { input, hasRequest, extraDropdownLists, modal } =
      this.state;

    const dropdowns = this.props.exportDetails.data || [];

    return (
      <>
        {modal}

        <DesmyModalContainer
          data={{ title: "Export Options" }}
          containerClassName="bg-white dark:bg-darkBackground border border-gray-100 dark:border-darkDialogBackground"
          className="add-event-multi-modal max-w-lg p-4 transition-all"
          onClose={this.props.onClose}
        >
          <div className="flex flex-col space-y-6">
            <DesmyTextInput
              autoFocus
              defaultValue={input.name}
              label="Enter File Name"
              onChange={(value: string) =>
                this.setState((prev) => ({
                  input: { ...prev.input, name: value },
                }))
              }
            />

            {dropdowns.map((item) => {
              if (!this.shouldShowDropdown(item))
                return null;

              return (
                <DesmyDropdown
                  key={item.key}
                  data={
                    extraDropdownLists[item.key] || []
                  }
                  defaultValue={
                    input.extraSelections[item.key]
                  }
                  placeholder={`Select ${item.title}`}
                  handleChange={(value: any) =>
                    this.handleDropdownChange(
                      item,
                      value
                    )
                  }
                />
              );
            })}

            <div className="flex justify-end">
              <DesmyButton
                onClick={this.handleExportClick}
                hasRequest={hasRequest}
                label="Save And Export"
              />
            </div>
          </div>
        </DesmyModalContainer>
      </>
    );
  }
}

export default DesmyDownloadOptions;