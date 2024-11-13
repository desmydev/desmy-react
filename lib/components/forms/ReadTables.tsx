import { Component, createRef } from 'react';
import { DesmyRxServices } from '../apis/DesmyRxServices';
import { DesmyState } from '../apis/DesmyState';
import { DesmyDataSetTable } from '../datatable/DesmyDataSetTable';
import { DesmyTableCard } from '../datatable/DesmyTableCard';
import { DesmyNetworkError } from '../errors/DesmyNetworkError';
import { DesmyButton } from '../button/DesmyButton';

interface DataItem {
  [key: string]: any;
}

interface ReadTableProps {
  headers: string[];
  datalist: {
    meta: {
      count: number;
      current_page: number;
      next_page: number | null;
      total: number;
      from: number;
      to: number;
      last_page: number;
      per_page: number;
    };
    links: {
      first: string | null;
      last: string | null;
    };
    next: string | null;
    previous: string | null;
    count: number;
    data: any[];
  };
  reader:{
    sheet_name : string,
    url?:string,
    title?:string,
    token?:string,
    template_url?:string,
    key_name?: string,
    ui:{
      label?:string,
      icon?:string
    }
  }
  onClose?: () => void;
  settings: {
    url: string;
    default_sorted_column: string;
    pagination: {
      per_page: number;
    };
    search?: boolean;
    filter?: boolean;
    header?: {
      title: string;
      class: string;
      hint: string;
    };
    server_request:{
      enable?: boolean
    },
    deleteinfo: {
      id: string;
    };
    headers: any[]; // Adjust these types as needed
    columns: any[];
    table_data: any[];
  };
}

interface ReadTableState {
  datalist: DataItem[];
  hasRequest: boolean;
  show: boolean;
  state?: string;
}

class ReadTable extends Component<ReadTableProps, ReadTableState> {
  customDatatableRef = createRef<any>();

  constructor(props: ReadTableProps) {
    super(props);
    this.state = {
      datalist: [],
      hasRequest: false,
      show: true,
    };
  }

  clearList = (): void => {
    this.setState({
      datalist: [],
    });
  };

  handleOnLoaded = (data: any, state: string): void => {
    try {
      if (data !== undefined) {
        this.clearList();
        this.setState({ datalist: data, state });
      }
    } catch (e) {
      console.error(e);
    }
  };

  handleOnSubmit = (): void => {
    DesmyRxServices.sendData(
      {
        datalist: this.state.datalist,
        url: this.props.reader?.url,
        title: this.props.reader?.title,
        token: this.props.reader?.token,
        key_name: this.props.reader?.key_name,
      },
      DesmyState.UPLOAD_MANAGER_REQUEST
    );
    if (this.props.onClose) this.props.onClose();
  };

  handleOnClose = (): void => {
    this.setState({ show: false });
  };

  render() {
    const { headers, datalist, settings } = this.props;
    const { datalist: stateDatalist, state: loadState, hasRequest } = this.state;

    return (
      <>
        <DesmyDataSetTable
          className={`h-full font-poppinsRegular`}
          settings={settings}
          data={datalist}
          handleOnLoaded={this.handleOnLoaded}
        >
          {stateDatalist.length > 0 ? (
            stateDatalist.map((data, i) => (
              <DesmyTableCard
                data={data}
                headers={headers}
                key={`camp${data.id}${i}`}
              />
            ))
          ) : loadState !== DesmyState.LOADING ? (
            <tr>
              <td colSpan={20}>
                <div className="flex flex-col space-y-2 w-full h-96 justify-center items-center">
                  <div className="font-poppinsMedium">No data found</div>
                </div>
              </td>
            </tr>
          ) : null}
          {loadState === DesmyState.LOADING
            ? Array.from({ length: 6 }).map((_, i) => (
                <DesmyTableCard key={`dtal${i}`} isLoading={true} />
              ))
            : loadState === DesmyState.ERROR && <DesmyNetworkError />}
        </DesmyDataSetTable>
        {!hasRequest && (
          <div className="fixed bottom-14 right-3">
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
      </>
    );
  }
}

export default ReadTable;