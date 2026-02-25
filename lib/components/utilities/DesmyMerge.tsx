import React, { Component } from "react";
import axios from "axios";
import { DesmyModalContainer } from "../modalcontainer/DesmyModalContainer";
import { DesmyDropdown } from "../dropdown/DesmyDropdown";
import DesmyCommons from "../apis/DesmyCommons";
import { DesmyButton } from "../button/DesmyButton";
import { DesmyToast } from "../toasify/DesmyToast";
import DesmyAuth from "../apis/DesmyAuth";
import { DesmyState } from "../apis/DesmyState";

interface DesmyMergeProps {
  selectedItems: any[];

  // ✅ merge config from settings
  mergeConfig: {
    endpoint: string;
    method?: "POST" | "PUT" | "PATCH";
    payloadKeys?: {
      selectedKey?: string;
      mergeWithKey?: string;
    };
    dropdownColumns?: string[];
    successMessage?: string;
    errorMessage?: string;
  };

  onClose: () => void;

  // ✅ called after successful merge so datatable can refresh
  onSuccess?: () => void;
}

interface DesmyMergeState {
  merge_with: any | null;
  hasRequest: boolean;
}

class DesmyMerge extends Component<DesmyMergeProps, DesmyMergeState> {
  constructor(props: DesmyMergeProps) {
    super(props);
    this.state = {
      merge_with: null,
      hasRequest: false,
    };
  }

  buildMergeLabel = (item: any) => {
    const columns = this.props.mergeConfig?.dropdownColumns || [];
    const values = columns
      .map((c) => item?.[c])
      .filter((v) => v !== undefined && v !== null && String(v).trim() !== "");

    if (values.length > 0) return values.join(" - ");
    return item?.name ?? item?.title ?? item?.id ?? "Unnamed";
  };

  handleSubmitMerge = async () => {
  const { merge_with } = this.state;
  const { selectedItems, mergeConfig } = this.props;

  if (selectedItems.length < 2) {
    DesmyToast.error("Select at least 2 items to merge.");
    return;
  }

  if (!merge_with) {
    DesmyToast.error("Please select merge destination.");
    return;
  }

  if (!mergeConfig?.endpoint) {
    DesmyToast.error("Merge endpoint missing.");
    return;
  }

  // ✅ payload keys
  const selectedKey = mergeConfig?.payloadKeys?.selectedKey || "selected";
  const mergeWithKey = mergeConfig?.payloadKeys?.mergeWithKey || "merge_with";

  // ✅ convert selected records to IDs
  const selectedIds = selectedItems
    .map((item: any) => item?.id ?? item)
    .filter((id: any) => id !== undefined && id !== null);

  // ✅ convert merge target to ID
  const mergeWithId = merge_with?.id ?? merge_with;

  // ✅ backend-safe payload
  const payload: any = {};
  payload[selectedKey] = selectedIds;
  payload[mergeWithKey] = mergeWithId;

  // ✅ final sanity check
  if (!Array.isArray(payload[selectedKey]) || payload[selectedKey].length < 2) {
    DesmyToast.error("Select at least 2 valid records to merge.");
    return;
  }

  try {
    this.setState({ hasRequest: true });

    const response = await axios({
      method: mergeConfig.method || "POST",
      url: mergeConfig.endpoint,
      data: payload,
      headers: {
        "X-CSRFToken": `${DesmyAuth.getCookie("csrftoken")}`,
        Authorization: `Token ${DesmyAuth.get(DesmyState.ACCESS_TOKEN)}`,
      },
    });

    const resData = response.data;

    // ✅ handle backend response properly
    if (resData?.success) {
      DesmyToast.success(
        resData?.message || mergeConfig.successMessage || "Merged successfully!"
      );

      this.props.onSuccess?.();
      this.props.onClose();
    } else {
      DesmyToast.error(
        resData?.message || mergeConfig.errorMessage || "Merge failed!"
      );
    }
  } catch (e: any) {
    const backendMessage =
      e?.response?.data?.message || e?.message || "Merge failed!";
    DesmyToast.error(backendMessage);
  } finally {
    this.setState({ hasRequest: false });
  }
};


  render() {
    const { selectedItems, onClose } = this.props;

    const dropdownOptions = selectedItems.map((item) => ({
      id: item?.id ?? item,
      name: this.buildMergeLabel(item),
      data: item,
    }));

    return (
      <DesmyModalContainer
        data={{ title: `Merge Selected Records` }}
        containerClassName={`bg-white dark:bg-darkBackground border-[1px] border-gray-100 dark:border-darkDialogBackground`}
        className={`add-event-multi-modal max-w-lg p-2 transition-all`}
        onClose={onClose}
      >
        <div className="flex flex-col w-full min-h-52 space-y-6 py-5">
          <div className="flex flex-col space-y-2">
            <div className="text-xs text-gray-500 mb-3 dark:text-white/60">
              Select which record should remain after merging selected records.
            </div>

            <DesmyDropdown
              data={dropdownOptions}
              defaultValue={null}
              placeholder="Select Merge Destination"
              handleChange={(data: any) => {
                if (!DesmyCommons.isEmptyOrNull(data)) {
                  this.setState({ merge_with: data?.data ?? data });
                }
              }}
            />
          </div>

          <div className="flex justify-end mt-5">
            <DesmyButton
              onClick={this.handleSubmitMerge}
              hasRequest={this.state.hasRequest}
              className="dark:bg-white dark:text-black dark:hover:bg-white dark:hover:text-black"
              label={`Submit Merge`}
            />
          </div>
        </div>
      </DesmyModalContainer>
    );
  }
}

export { DesmyMerge };
