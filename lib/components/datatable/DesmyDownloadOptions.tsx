import React, { Component } from 'react';
import axios from 'axios';
import { DesmyModalContainer } from '../modalcontainer/DesmyModalContainer';
import DesmyAuth from '../apis/DesmyAuth';
import { DesmyState } from '../apis/DesmyState';
import { DesmyButton } from '../button/DesmyButton';
import { DesmyTextInput } from '../input/DesmyTextInput';
import { DesmyToast } from '../toasify/DesmyToast';

interface CreateProps {
  exportDetails: { url?: string; queryString?: string };
  onClose: () => void;
  onSuccess?: (data: any) => void;
}

interface InputState {
  [key: string]: any;
}

interface CreateState {
  hasRequest: boolean;
  isLoading: boolean;
  input: InputState;
}

class DesmyDownloadOptions extends Component<CreateProps, CreateState> {
  constructor(props: CreateProps) {
    super(props);
    this.state = {
      isLoading: false, // ✅ start false
      hasRequest: false,
      input: {},
    };
  }

  handleError = (message: string) => {
    DesmyToast.error(message || DesmyState.ERROR_MESSAGE);
    this.setState({ isLoading: false, hasRequest: false });
  };

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
            window.open(downloadUrl, "_blank");
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

  render() {
    const { input, hasRequest } = this.state;

    return (
      <DesmyModalContainer
        data={{ title: `Export Options` }}
        containerClassName={`bg-white dark:bg-darkBackground border-[1px] border-gray-100 dark:border-darkDialogBackground`}
        className={`add-event-multi-modal max-w-lg p-2 transition-all`}
        onClose={this.props.onClose}
      >
        <div className="flex flex-col w-full min-h-24 space-y-6">
          <div className="w-full mt-5">
            <DesmyTextInput
              autoFocus
              defaultValue={input.name}
              label="Enter File Name"
              onChange={(data: string) =>
                this.setState((prevState) => ({
                  input: { ...prevState.input, name: data },
                }))
              }
            />
          </div>

          <div className="flex justify-end mt-5">
            <DesmyButton
              onClick={this.handleOnSubmit}
              hasRequest={hasRequest}
              label="Save And Export"
            />
          </div>
        </div>
      </DesmyModalContainer>
    );
  }
}

export default DesmyDownloadOptions;
