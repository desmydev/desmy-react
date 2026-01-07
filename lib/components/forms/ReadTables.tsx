import React, { Component, createRef } from "react";
import { DesmyRxServices } from "../apis/DesmyRxServices";
import { DesmyState } from "../apis/DesmyState";
import { DesmyDataSetTable } from "../datatable/DesmyDataSetTable";
import { DesmyTableCard } from "../datatable/DesmyTableCard";
import { DesmyNetworkError } from "../errors/DesmyNetworkError";
import { DesmyButton } from "../button/DesmyButton";
import DesmyCommons from "../apis/DesmyCommons";
import {
  DataSetTableSettingsProps,
  DesmySmartFormUploadReadTable,
} from "../apis/SharedProps";

interface DataItem {
  [key: string]: any;
}

interface ReadTableProps {
  headers: string[];
  datalist: {
    data: any[];
    meta: {
      total: number;
      current_page: number;
      last_page: number;
      per_page: number;
      next_page: number | null;
    };
  };
  reader: DesmySmartFormUploadReadTable;
  settings: DataSetTableSettingsProps;
  onClose?: () => void;

  /** prerequest formData collected from DesmySmartFormUpload */
  prerequestPayload?: Record<string, any>;
}

interface ReadTableState {
  datalist: DataItem[];
  hasRequest: boolean;
  state?: string;
}

class ReadTable extends Component<ReadTableProps, ReadTableState> {
  customDatatableRef = createRef<any>();

  constructor(props: ReadTableProps) {
    super(props);
    this.state = {
      datalist: [],
      hasRequest: false,
    };
  }

  handleOnLoaded = (data: any, state: string): void => {
    if (data !== undefined) this.setState({ datalist: data, state });
  };
  handleOnSubmit = async (): Promise<void> => {
    const { reader, prerequestPayload, datalist: propsData } = this.props;

    this.setState({ hasRequest: true });

    let prerequestId: any = null;

    try {
        if (reader?.prerequest?.url && prerequestPayload) {
          const formData = new FormData();

          Object.entries(prerequestPayload).forEach(([key, val]) => {
            if (val instanceof File) formData.append(key, val);
            else formData.append(key, String(val));
          });

          const response = await fetch(reader.prerequest.url, {
            method: "POST",
            headers: {
              Authorization: `Token ${reader.prerequest.token ?? ""}`,
            },
            body: formData,
          });

          const prereqResult = await response.json();
          prerequestId =
            prereqResult?.id ??
            prereqResult?.data?.id ??
            prereqResult?.payload?.id ??
            prereqResult?.uuid ??
            null;

          if (!prerequestId) {
            this.setState({ hasRequest: false });
            return;
          }
        }

      /** STEP 2 — Now upload Excel rows */
      const fullData = propsData.data;
      const chunkSize = 1000;
      let uploadUrl = reader.url;
      if (uploadUrl && prerequestId) {
        uploadUrl = uploadUrl.replace("<requestid>", String(prerequestId));
      }
      
      for (let i = 0; i < fullData.length; i += chunkSize) {
        const chunk = fullData.slice(i, i + chunkSize);

        await DesmyRxServices.sendData(
          {
            url: uploadUrl,
            complete_url: reader.complete_url,
            datalist: chunk,
            token: reader.token,
            title: reader.title,
            key_name: reader.key_name,
            prerequest_id: prerequestId,
          },
          DesmyState.UPLOAD_MANAGER_REQUEST
        );
      }
      this.props.onClose?.()
    } catch (_) {
    }

    this.setState({ hasRequest: false });

    if (this.props.onClose) this.props.onClose();
  };

  render() {
    const { datalist: propsData, settings } = this.props;
    const { datalist, state, hasRequest } = this.state;

    return (
      <div className="flex flex-col w-full">
        <div className="w-full min-h-[20dvh] max-h-[55dvh] overflow-y-auto">
          <DesmyDataSetTable
            ref={this.customDatatableRef}
            className="h-full"
            settings={settings}
            data={propsData}
            handleOnLoaded={this.handleOnLoaded}
          >
            {state === DesmyState.LOADING ? (
              Array.from({ length: 6 }).map((_, i) => (
                <DesmyTableCard key={i} isLoading={true} />
              ))
            ) : state === DesmyState.ERROR ? (
              <DesmyNetworkError />
            ) : !DesmyCommons.isEmptyOrNull(datalist) ? (
              datalist.map((row, i) => (
                <DesmyTableCard
                  key={`row-${i}`}
                  data={row}
                  headers={settings.headers}
                  background={i % 2 === 0 ? "bg-gray-100" : ""}
                />
              ))
            ) : (
              <tr>
                <td colSpan={20} className="text-center py-12">
                  No data found
                </td>
              </tr>
            )}
          </DesmyDataSetTable>
        </div>

        <div className="flex justify-end my-6">
            <DesmyButton  hasRequest={hasRequest} label_request='Please wait' label="Continue" onClick={this.handleOnSubmit} />
          </div>
      </div>
    );
  }
}

export default ReadTable;
