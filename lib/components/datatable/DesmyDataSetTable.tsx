import axios from "axios";
import React, { Component, ReactNode } from "react";
import Commons from "../apis/DesmyCommons";
import DesmyAuth from "../apis/DesmyAuth";
import { DesmyState as CommonState } from "../apis/DesmyState";
import { DesmyAlert as Alert } from "../apis/DesmyAlert";
import { DataSetTableSettingsProps } from "../apis/SharedProps";

interface DesmyDataSetTableProps {
  onRef?: (instance: DesmyDataSetTable) => void;
  className?: string;
  children?: React.ReactNode;
  data?: any;
  settings: DataSetTableSettingsProps;
  content?: React.ReactNode;
  handleOnLoaded: (data: any[], state: CommonState) => void;
}

interface DesmyCustomState {
  isFocused?: boolean;
  searchText?: string;
  dtablemodal: React.ReactNode | null;
  hasRequest: boolean;
  exceptionalColumns: string[];
  selected: number;
  isLoading: boolean;
  filterhead: { name: string; data: string }[];
  filters: {
    search?: { [key: string]: { id: string; name: string } };
    data: { name: string; data: string; defaults?: { [key: string]: string } }[];
  };
  input: {
    search: string;
    is_searching: boolean;
  };
  entities: {
    data: any[];
    meta: {
      current_page: number;
      next_page: number | null;
      from: number;
      last_page: number;
      per_page: number;
      to: number;
      total: number;
    };
  };
  custom_settings: {
    sorted_column?: string;
    order: "asc" | "desc";
    first_page: number;
    current_page: number;
    offset: number;
  };
  settings: {
    default_sorted_column?: string;
    header?: {
      title?: string;
      class?: string;
      hint?: string;
      search?: boolean;
    };
    headers?: string[];
    columns?: string[];
    table_data?: { name: string; class: string }[];
  };
  error: {
    state?: boolean;
    message?: string;
    type?: string;
    color?: string;
    retry?: boolean;
  };
  alerterror: {
    state: boolean;
    message: string;
    type: string;
    color: string;
  };
}

class DesmyDataSetTable extends Component<DesmyDataSetTableProps, DesmyCustomState> {
  private renderedSettings: any[] = [];
  private dataCollection: any[] = [];
  private chunkSize: number = 6;
  private currentIndex: number = 0;
  private hasClear: boolean = false;
  private hasFinished: boolean = false;
  private current_page: number = 0;
  private search: string = "";
  private isLoading: boolean = false;
  private observer?: IntersectionObserver;
  private bottomRef: HTMLDivElement | null = null;

  constructor(props: DesmyDataSetTableProps) {
    super(props);
    this.state = {
      exceptionalColumns: ["view", "edit", "delete"],
      selected: -1,
      isLoading: true,
      dtablemodal: null,
      hasRequest: false,
      filterhead: [],
      filters: { search: {}, data: [] },
      input: { search: "", is_searching: false },
      entities: {
        data: [],
        meta: {
          current_page: 1,
          next_page: null,
          from: 1,
          last_page: 1,
          per_page: 500,
          to: 1,
          total: 0,
        },
      },
      custom_settings: {
        sorted_column: "",
        order: "asc",
        first_page: 1,
        current_page: 1,
        offset: 4,
      },
      settings: {
        default_sorted_column: "",
        header: {
          title: "",
          class: "",
          hint: "",
          search: true,
        },
        headers: [],
        columns: [],
        table_data: [],
      },
      error: {
        state: false,
        message: "",
        type: CommonState.ERROR,
        color: "",
      },
      alerterror: {
        state: false,
        message: "",
        type: CommonState.ERROR,
        color: "",
      },
    };

    this.handleScroll = this.handleScroll.bind(this);
  }
 componentDidUpdate(prevProps: Readonly<DesmyDataSetTableProps>): void {
  // ✅ Attach observer only after bottomRef is ready
  if (this.bottomRef && !this.observer && !this.props.settings.server_request?.enable) {
    this.setupAutoLoadObserver();
  }

  // ✅ Excel upload detection stays here
  if (
    !this.props.settings.server_request?.enable &&
    this.props.data &&
    prevProps.data !== this.props.data
  ) {
    this.handleExcelDataUpdate();

    // Re-attach observer after updating data
    if (this.observer && this.bottomRef) {
      this.observer.unobserve(this.bottomRef);
      this.observer.observe(this.bottomRef);
    }
  }
}
  handleExcelDataUpdate() {
  try {
    if (!this.props.data?.data?.length) return;

    // Reset and refill everything
    this.handleClear();
    this.dataCollection = [...this.props.data.data];

    // Ensure metadata is set correctly
    const entities = {
      ...this.state.entities,
      meta: this.props.data.meta ?? {
        total: this.props.data.data.length,
        current_page: 1,
        last_page: 1,
        per_page: this.props.data.data.length,
        next_page: null,
      },
    };

    // Immediately show all uploaded rows
    this.renderedSettings = [...this.dataCollection];
    this.setState({ entities, isLoading: false }, () => {
      this.props.handleOnLoaded(this.renderedSettings, CommonState.LOADED);
      this.forceUpdate();
    });
  } catch (err) {
    console.error("Excel data update error:", err);
  }
}

  async componentDidMount() {
    if (this.props.onRef) this.props.onRef(this);

    const { default_sorted_column } = this.props.settings;
    const custom_settings = {
      ...this.state.custom_settings,
      sorted_column: default_sorted_column,
    };
    this.chunkSize = this.props.settings.pagination?.per_page ?? 10;

    this.setState({ custom_settings, settings: this.props.settings }, () => {
      this.handleFetchEntities();
      if (!this.props.settings.server_request?.enable) this.setupAutoLoadObserver();
    });
  }

  componentWillUnmount(): void {
    if (this.observer) this.observer.disconnect();
  }

  setupAutoLoadObserver() {
      // Clean any existing observer
      if (this.observer) {
        this.observer.disconnect();
        this.observer = undefined;
      }

      // Create a new observer
      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            console.log(
              "📌 Observer triggered | rendered:",
              this.renderedSettings.length,
              "of",
              this.dataCollection.length
            );
            this.autoLoadNextChunk();
          }
        },
        { rootMargin: "120px" }
      );

      // Observe when ref is available
      if (this.bottomRef) {
        this.observer.observe(this.bottomRef);
      }
    }


  autoLoadNextChunk = () => {
  // ✅ If all data is loaded, stop here
  if (this.renderedSettings.length >= this.dataCollection.length) {
    if (this.observer && this.bottomRef) {
      this.observer.unobserve(this.bottomRef);
    }
    this.hasFinished = true;
    this.setState({ isLoading: false });  // hide spinner
    return;
  }

  if (
    !this.isLoading &&
    !this.props.settings.server_request?.enable &&
    this.renderedSettings.length < this.dataCollection.length
  ) {
    this.isLoading = true;
    this.setState({ isLoading: true }, () => {
      this.chunkSize = Math.min(this.chunkSize + 20, 30);
      setTimeout(() => this.loadNextBatch(), 50);
    });
  }
};



  handleManualLoadMore = () => {
    if (!this.isLoading) {
      this.isLoading = true;
      this.setState({ isLoading: true }, () => {
        this.chunkSize = Math.min(this.chunkSize + 20, 30);
        setTimeout(() => this.loadNextBatch(), 50);
      });
    }
  };

  handleScroll(event: React.UIEvent<HTMLDivElement>) {
    const div = event.currentTarget;
    if (div.scrollTop + div.clientHeight >= div.scrollHeight - 10) {
      this.loadNextPage();
    }
  }

  handleError = (message: string = "") => {
    const error = {
      ...this.state.error,
      state: true,
      message: Commons.isEmptyOrNull(message)
        ? CommonState.ERROR_MESSAGE
        : message,
      type: CommonState.ERROR,
      color: "red",
    };
    this.setState({ isLoading: false, error }, () => {
      this.props.handleOnLoaded(this.renderedSettings, CommonState.ERROR);
    });
  };

  async fetchEntities() {
    try {
      const entities = { ...this.state.entities };

      // Client-side mode (local data)
      if (!this.props.settings.server_request?.enable) {
        const dataset = this.props.data;
        if (this.hasClear) this.handleClear();
        this.dataCollection = [...this.dataCollection, ...dataset.data];
        this.hasClear = false;
        this.hasFinished = true;
        entities.meta = dataset.meta;
        this.setState({ isLoading: false, entities }, this.initialChunk);
        return;
      }

      // Server-side mode (API)
      const fetchUrl = `${this.props.settings.url}/?page=${this.state.custom_settings.current_page}&column=${this.state.custom_settings.sorted_column}&order=${this.state.custom_settings.order}&per_page=${this.state.entities.meta.per_page}&search=${this.search}`;
      const response = await axios.get(fetchUrl, {
        headers: {
          "X-CSRFToken": `${DesmyAuth.getCookie("csrftoken")}`,
          Authorization: `Token ${DesmyAuth.get(CommonState.ACCESS_TOKEN)}`,
        },
      });

      const data = response.data;
      if (data.success) {
        if (this.hasClear) this.handleClear();
        this.dataCollection = [...this.dataCollection, ...data.data.data];
        entities.meta = data.data.meta;
        this.setState({ isLoading: false, entities }, this.initialChunk);
      } else this.handleError();
    } catch (e) {
      console.error(e);
      this.handleError();
    }
  }

  handleFetchEntities = () => {
    this.props.handleOnLoaded(this.renderedSettings, CommonState.LOADING);
    this.fetchEntities();
  };

  handleClear = () => {
    const input = { ...this.state.input, is_searching: false };
    const entities = {
      ...this.state.entities,
      meta: { ...this.state.entities.meta, total: 0 },
    };
    this.setState({ input, entities });
    this.dataCollection = [];
    this.renderedSettings = [];
    this.currentIndex = 0;
    this.current_page = 0;
  };

  initialChunk = () => this.loadNextBatch();

  loadNextBatch = () => {
    this.renderChunk();
    this.currentIndex += this.chunkSize;
    this.isLoading = false;

    // ✅ If all data has been loaded, stop observing and hide spinner
    if (this.renderedSettings.length >= this.dataCollection.length) {
      if (this.observer && this.bottomRef) {
        this.observer.unobserve(this.bottomRef);
      }
      this.hasFinished = true;
      this.setState({ isLoading: false });
    } else {
      this.setState({ isLoading: false });
    }

    this.forceUpdate();
  };

  renderChunk() {
    const end = Math.min(
      this.currentIndex + this.chunkSize,
      this.dataCollection.length
    );
    for (let i = this.currentIndex; i < end; i++) {
      const data = this.dataCollection[i];
      if (
        !this.renderedSettings.some(
          (item) =>
            item[this.props.settings.deleteinfo.id] ===
            data[this.props.settings.deleteinfo.id]
        )
      ) {
        this.renderedSettings.push(data);
      }
    }
    this.props.handleOnLoaded(this.renderedSettings, CommonState.LOADED);
  }

  loadNextPage = () => {
    const next_page = this.state.entities.meta.next_page;
    if (
      !this.isLoading &&
      next_page &&
      this.current_page !== next_page &&
      this.props.settings.server_request?.enable
    ) {
      const custom_settings = {
        ...this.state.custom_settings,
        current_page: next_page,
      };
      this.current_page = next_page;
      this.setState({ isLoading: true, custom_settings }, this.handleFetchEntities);
    }
  };

  columnHead(value: string): string {
    const header = value.split("_");
    if (
      header.length > 1 &&
      this.state.exceptionalColumns.includes(
        Commons.toString(header.slice(-1)).toLowerCase()
      )
    ) {
      return header.slice(0, -1).join(" ").toUpperCase();
    }
    return header.join(" ").toUpperCase();
  }

  sortByColumn(column: string) {
    const custom_settings = { ...this.state.custom_settings };
    const order =
      column === this.state.custom_settings.sorted_column
        ? this.state.custom_settings.order === "asc"
          ? "desc"
          : "asc"
        : "asc";
    this.handleClear();
    custom_settings.current_page = 1;
    custom_settings.sorted_column = column;
    custom_settings.order = order as "asc" | "desc";
    this.setState({ isLoading: true, error: {}, custom_settings }, this.fetchEntities);
  }

  tableHeads(): ReactNode[] {
    const icon =
      this.state.custom_settings.order === "asc" ? (
        <svg
          className="w-3 h-3 2xl:w-4 2xl:h-4 dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      ) : (
        <svg
          className="w-3 h-3 2xl:w-4 2xl:h-4 dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      );

    return (
      this.props.settings.headers?.map((column, index) => {
        const exceptional = this.state.exceptionalColumns.includes(
          column.toLowerCase()
        );
        const columnClass = this.state.settings.table_data?.find(
          (item) => item.name === column.toLowerCase()
        );
        return (
          <th
            key={index}
            onClick={() =>
              this.sortByColumn(this.props.settings?.columns?.[index] ?? "")
            }
            className={`py-2 sticky ${
              exceptional ? "w-4" : columnClass ? columnClass.class : ""
            } top-0 border-b border-gray-200 text-xs 2xl:text-sm bg-gray-100 dark:border-gray-700 dark:bg-darkPrimary`}
          >
            <div className="flex dark:text-white px-6 py-2 2xl:py-3 text-gray-600 font-poppinsSemiBold tracking-wider uppercase text-xs">
              <span>{this.columnHead(column)}</span>
              <span>
                {this.state.custom_settings.sorted_column ===
                  this.props.settings?.columns?.[index] && icon}
              </span>
            </div>
          </th>
        );
      }) ?? []
    );
  }

  render() {
    return (
      <div className="flex flex-col">
        {/* Header */}
        {this.state.settings.header && (
          <header className="flex w-full flex-col lg:flex-row justify-between items-center mb-4">
            <div className="flex flex-col w-full">
              <h3
                className={
                  this.state.settings.header.class ??
                  "text-grey-darkest uppercase text-3xl dark:text-white font-poppinsBlack"
                }
              >
                {this.state.settings.header.title}
              </h3>
              {this.props.content && <div>{this.props.content}</div>}
              <div className="text-xs dark:text-gray-300">
                Loaded {this.state.entities.meta.total ?? 0} rows
              </div>
            </div>
          </header>
        )}

        {/* Table */}
        <div
          className={`scrollable_table flex flex-col relative h-[calc(100vh-290px)] overflow-auto scrollbar-width ${this.props.className}`}
          onScroll={this.handleScroll}
        >
          <div className="flex flex-col w-full">
            <div className="w-full overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <thead>
                  <tr className="text-left text-sm w-full bg-white dark:bg-darkPrimary">
                    {this.tableHeads()}
                  </tr>
                </thead>
                <tbody>{this.props.children}</tbody>
              </table>
            </div>
          </div>

          {/* ✅ Sticky Footer */}
          
          
          {/* Empty state / error */}
          {!this.state.isLoading &&
            (!this.dataCollection.length || this.state.error.state) && (
              <div
                className={`flex flex-col w-full h-96 justify-center dark:bg-darkBackground ${
                  this.state.error.state
                    ? "text-red-500"
                    : "dark:text-white text-gray-600"
                } space-y-5 items-center text-base`}
              >
                <div className="flex w-full text-sm justify-center text-center">
                  {this.state.error.state
                    ? this.state.error.message
                    : "No data available to show"}
                </div>
              </div>
            )}

          {/* Spinner */}
          {this.state.isLoading && !this.hasFinished && (
            <div className="flex flex-col w-full mt-10 justify-center dark:text-white items-center space-y-4">
              <svg
                role="status"
                className="flex w-5 h-5 2xl:w-6 2xl:h-6 text-black dark:text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 
                     100.591C22.3858 100.591 0 78.2051 0 
                     50.5908C0 22.9766 22.3858 0.59082 50 
                     0.59082C77.6142 0.59082 100 22.9766 
                     100 50.5908ZM9.08144 50.5908C9.08144 
                     73.1895 27.4013 91.5094 50 91.5094C72.5987 
                     91.5094 90.9186 73.1895 90.9186 
                     50.5908C90.9186 27.9921 72.5987 9.67226 
                     50 9.67226C27.4013 9.67226 9.08144 
                     27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 
                     97.8624 35.9116 97.0079 33.5539C95.2932 
                     28.8227 92.871 24.3692 89.8167 
                     20.348C85.8452 15.1192 80.8826 
                     10.7238 75.2124 7.41289C69.5422 
                     4.10194 63.2754 1.94025 56.7698 
                     1.05124C51.7666 0.367541 46.6976 
                     0.446843 41.7345 1.27873C39.2613 
                     1.69328 37.813 4.19778 38.4501 
                     6.62326C39.0873 9.04874 41.5694 
                     10.4717 44.0505 10.1071C47.8511 
                     9.54855 51.7191 9.52689 55.5402 
                     10.0491C60.8642 10.7766 65.9928 
                     12.5457 70.6331 15.2552C75.2735 
                     17.9648 79.3347 21.5619 82.5849 
                     25.841C84.9175 28.9121 86.7997 
                     32.2913 88.1811 35.8758C89.083 
                     38.2158 91.5421 39.6781 93.9676 
                     39.0409Z"
                  fill="currentColor"
                />
              </svg>
              <div className="text-xs 2xl:text-sm">Loading...</div>
            </div>
          )}
          <div
              ref={(ref: HTMLDivElement | null) => { this.bottomRef = ref; }}
              className="h-1 w-full"
            ></div>
        </div>
        {!this.props.settings.server_request?.enable &&
            this.dataCollection.length > 0 && (
              <div className="sticky bottom-0 left-0 right-0 flex justify-between items-center px-6 py-3 text-xs 2xl:text-sm text-gray-700 dark:text-white border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-darkPrimary backdrop-blur-sm z-10 shadow-sm">
                <div className="flex items-center space-x-1">
                  <span>Showing</span>
                  <span className="font-poppinsSemiBold">
                    {this.dataCollection.length}
                  </span>
                  {this.state.entities.meta.total > 0 && (
                    <>
                      <span>of</span>
                      <span className="font-poppinsSemiBold">
                        {this.state.entities.meta.total}
                      </span>
                    </>
                  )}
                  <span>rows loaded</span>
                </div>

                {this.dataCollection.length <
                  (this.state.entities.meta.total ?? 0) && (
                  <button
                    onClick={() => this.handleManualLoadMore()}
                    disabled={this.isLoading}
                    className={`flex items-center justify-center px-4 py-2 rounded-full text-xs 2xl:text-sm 
                      transition-all duration-200 ${
                        this.isLoading
                          ? "bg-gray-400 dark:bg-gray-600 text-white cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800"
                      }`}
                  >
                    {this.isLoading ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          ></path>
                        </svg>
                        Loading...
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        Load More
                      </>
                    )}
                  </button>
                )}
                {/* 👇 put this just above the sticky footer */}


              </div>
            )}
            {!this.state.isLoading && this.hasFinished && this.dataCollection.length > 0 && (
              <div className="flex justify-center text-gray-500 dark:text-gray-300 py-4 text-xs 2xl:text-sm">
                All {this.dataCollection.length} rows loaded ✅
              </div>
            )}
      </div>
    );
  }
}

export { DesmyDataSetTable };
