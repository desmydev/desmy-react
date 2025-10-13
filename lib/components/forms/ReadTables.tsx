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
    if (data !== undefined) {
      this.setState({ datalist: data, state });
    }
  };

  handleOnSubmit = (): void => {
    const { datalist } = this.state;
    const { reader } = this.props;

    DesmyRxServices.sendData(
      {
        datalist,
        url: reader?.url,
        complete_url: reader?.complete_url,
        title: reader?.title,
        token: reader?.token,
        key_name: reader?.key_name,
      },
      DesmyState.UPLOAD_MANAGER_REQUEST
    );

    if (this.props.onClose) this.props.onClose();
  };

  render() {
    const { datalist: propsData, settings } = this.props;
    const { datalist, state, hasRequest } = this.state;

    return (
      <div className="flex flex-col w-full">
        <div className="w-full min-h-[20dvh] max-h-[55dvh] overflow-y-auto overflow-x-hidden">
          <DesmyDataSetTable
            ref={this.customDatatableRef}
            className="h-full font-poppinsRegular"
            settings={settings}
            data={propsData}
            handleOnLoaded={this.handleOnLoaded}
          >
            {state === DesmyState.LOADING ? (
              Array.from({ length: 6 }).map((_, i) => (
                <DesmyTableCard key={`dtal${i}`} isLoading={true} />
              ))
            ) : state === DesmyState.ERROR ? (
              <DesmyNetworkError />
            ) : !DesmyCommons.isEmptyOrNull(datalist) ? (
              datalist.map((data, i) => (
                <DesmyTableCard
                  key={`row-${i}`}
                  data={data}
                  headers={settings.headers}
                  background={
                    i % 2 === 0
                      ? "dark:bg-[#1c1c1c] bg-[#f3f4f6] dark:hover:bg-white"
                      : "bg-inherit"
                  }
                />
              ))
            ) : (
              <tr>
                <td colSpan={20}>
                  <div className="flex flex-col space-y-2 w-full h-96 justify-center items-center">
                    <div className="font-poppinsMedium">No data found</div>
                  </div>
                </td>
              </tr>
            )}
          </DesmyDataSetTable>
        </div>

        {!hasRequest && (
          <div className="flex w-full justify-end relative my-8">
            <DesmyButton
              onClick={this.handleOnSubmit}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 inline-block lg:mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              label="Continue"
            />
          </div>
        )}
      </div>
    );
  }
}

export default ReadTable;
