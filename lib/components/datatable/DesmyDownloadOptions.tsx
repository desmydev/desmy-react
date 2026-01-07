import React, { Component } from "react";
import axios from "axios";
import { DesmyModalContainer } from "../modalcontainer/DesmyModalContainer";
import  {DesmyModalHandler} from "../dialog/DesmyAlertDialog";
import DesmyAuth from "../apis/DesmyAuth";
import { DesmyState } from "../apis/DesmyState";
import { DesmyButton } from "../button/DesmyButton";
import { DesmyTextInput } from "../input/DesmyTextInput";
import { DesmyToast } from "../toasify/DesmyToast";
import { DesmyDropdownItem } from "../apis/SharedProps";
import { DesmyDropdown } from "../dropdown/DesmyDropdown";
import DesmyCommons from "../apis/DesmyCommons";

interface ExportOptions {
  confirm?: boolean;
  redirect?: boolean;
  formats?: string[];
  successMessage?: string;
  confirmationMessage?: string;
}

interface CreateProps {
  exportDetails: {
    url?: string;
    queryString?: string;
    options?: ExportOptions;
  };
  onClose: () => void;
  onSuccess?: (data: any) => void;
}

interface InputState {
  name?: string;
  format?: string;
  redirect?: boolean;
  confirm?: boolean;
}

interface CreateState {
  hasRequest: boolean;
  isLoading: boolean;
  input: InputState;
  optionsList: DesmyDropdownItem[];
  modal?: React.ReactNode | null; // ✅ for confirmation dialog
}

class DesmyDownloadOptions extends Component<CreateProps, CreateState> {
  constructor(props: CreateProps) {
    super(props);

    const formats = props.exportDetails.options?.formats ?? ["xlsx"];
    const dropdownItems = formats.map((fmt) => ({
      id: fmt,
      name: fmt.toUpperCase(),
    })) as DesmyDropdownItem[];

    this.state = {
      isLoading: false,
      hasRequest: false,
      optionsList: dropdownItems,
      input: {
        name: "",
        format: dropdownItems[0]?.id ?? "xlsx",
        confirm: props.exportDetails.options?.confirm ?? false,
        redirect: props.exportDetails.options?.redirect ?? false,
      },
      modal: null,
    };
  }

  handleError = (message: string) => {
    DesmyToast.error(message || DesmyState.ERROR_MESSAGE);
    this.setState({ isLoading: false, hasRequest: false });
  };

  /** ✅ Confirmation dialog */
  handleConfirmation = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) e.preventDefault();

    try {
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
          this.setState({ modal: null }, () => this.handleOnSubmit());
          return;
        }
        this.setState({ modal: null });
      };

      const modal = (
        <DesmyModalHandler settings={settings} onClose={handleClose}>
          <div className="flex flex-col w-full text-sm py-2">
            {confirmationText}

            <br /><br /><br />
            Are you sure you want to continue?
          </div>
        </DesmyModalHandler>
      );

      this.setState({ modal });
    } catch (_) {}
  };

  /** ✅ Export logic */
  handleOnSubmit = async () => {
    try {
      const { exportDetails } = this.props;
      const { input } = this.state;
      
      if (!exportDetails.url) {
        this.handleError("Export URL is missing.");
        return;
      }
      if (!input.name) {
        this.handleError("Please enter a file name.");
        return;
      }

      this.setState({ hasRequest: true, isLoading: true });

      const postUrl = `${exportDetails.url}`;
      const response = await axios.post(
        postUrl,
        { filename: input.name, exportDetails },
        {
          headers: {
            'X-CSRFToken': `${DesmyAuth.getCookie('csrftoken')}`,
            Authorization: `Token ${DesmyAuth.get(DesmyState.ACCESS_TOKEN)}`,
          },
        }
      );

      if (response.data && response.data.data?.url) {
        const downloadUrl = response.data.data.url;

        if (input.redirect || !exportDetails?.options?.confirm) {
          window.open(downloadUrl, "_blank");
        } else {
          DesmyToast.success(response.data.message || "Export successful!");
        }
        this.props.onSuccess?.(response.data);
        this.props.onClose?.();
      } else {
        this.handleError("Export failed: No download URL returned.");
      }
    } catch (error: any) {
      this.handleError(error?.message || "Export failed. Please try again.");
    } finally {
      this.setState({ hasRequest: false, isLoading: false });
    }
  };

  /** ✅ Trigger confirmation or export directly */
  handleExportClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
    const { confirm } = this.props.exportDetails.options ?? {};
    if (confirm) {
      this.handleConfirmation(e);
    } else {
      this.handleOnSubmit();
    }
  };

  render() {
    const { input, hasRequest, optionsList, modal } = this.state;

    return (
      <>
        {modal}
        <DesmyModalContainer
          data={{ title: `Export Options` }}
          containerClassName="bg-white dark:bg-darkBackground border border-gray-100 dark:border-darkDialogBackground"
          className="add-event-multi-modal max-w-lg p-2 transition-all"
          onClose={this.props.onClose}
        >
          <div className="flex flex-col w-full min-h-24 space-y-6">
            {/* File Name Input */}
            <div className="w-full mt-5">
              <DesmyTextInput
                autoFocus
                defaultValue={input.name}
                label="Enter File Name"
                onChange={(data: string) =>
                  this.setState((prev) => ({
                    input: { ...prev.input, name: data },
                  }))
                }
              />
            </div>

            {/* ✅ Show dropdown only if multiple formats exist */}
            {optionsList.length > 1 && (
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                  Select File Format
                </label>
                <DesmyDropdown
                  data={optionsList}
                  defaultValue={input.format}
                  handleChange={(data: DesmyDropdownItem | DesmyDropdownItem[]) => {
                    if (!DesmyCommons.isEmptyOrNull(data)) {
                      const selected =
                        Array.isArray(data) && data.length > 0
                          ? data[0]?.id
                          : (data as DesmyDropdownItem)?.id;
                      this.setState((prev) => ({
                        input: { ...prev.input, format: selected },
                      }));
                    }
                  }}
                  placeholder="Select Format"
                />
              </div>
            )}

            {/* Action Button */}
            <div className="flex justify-end mt-5">
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
