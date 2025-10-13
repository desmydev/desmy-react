import React, { Component, KeyboardEvent, ChangeEvent } from "react";
import axios from "axios";
import DesmyAuth from "../apis/DesmyAuth";
import Commons from "../apis/DesmyCommons";
import { DesmyState } from "../apis/DesmyState";
import { DesmyFilter } from "../utilities/DesmyFilter";
import {
  DesmyDataTableSettingsProps,
  DesmyFilterItem,
} from "../apis/SharedProps";

import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { DesmyFilterTags } from "./DesmyFilterTags";
import DesmyDownloadOptions from "./DesmyDownloadOptions";

interface DataTableProps {
  settings: DesmyDataTableSettingsProps;
  content?:
    | React.ReactElement<{ searchText?: string; filterhead?: DesmyFilterItem[] }>
    | ((args: {
        searchText?: string;
        filterhead?: any | any[];
      }) => React.ReactNode);
  className?: string;
  onRef?: (ref: DesmyDataTable | null) => void;
  onFilteredURL?: (data: any) => void;
}

interface DataTableState {
  isFocused?: boolean;
  searchText?: string;
  dtablemodal: React.ReactNode | null;
  hasRequest: boolean;
  exceptionalColumns: string[];
  selected: number;
  isLoading: boolean;
  isFetchingMore: boolean;
  showFilter: boolean;
  filterhead: DesmyFilterItem[];
  showExportOption: boolean;
  exportDetails: { url?: string; queryString?: string };
  filters: {
    data: { name: string; data: string; defaults?: { [key: string]: string } }[];
  };
  input: { search: string; is_searching: boolean };
  entities: {
    data: any[];
    meta: {
      current_page: number;
      from: number;
      last_page: number;
      per_page: number;
      to: number;
      total: number;
      next?: string | null;
      next_page?: number | null;
      next_cursor?: string | null;
      count?: number | null;
    };
  };
  custom_settings: {
    sorted_column: string;
    order: "asc" | "desc";
    first_page: number;
    current_page: number;
    offset: number;
  };
  settings: DesmyDataTableSettingsProps & {
    table_data?: { name: string; class: string }[];
  };
  error: {
    state?: boolean;
    message?: string;
    type?: string;
    color?: string;
    retry?: boolean;
  };
  alerterror: { state: boolean; message: string; type: string; color: string };
  scrollTop: number;
}

class DesmyDataTable extends Component<DataTableProps, DataTableState> {
  search: string;
  queryParam: string;
  debounceTimer?: ReturnType<typeof setTimeout>;
  scrollContainer = React.createRef<HTMLDivElement>();

  rowHeight: number = 48;

  constructor(props: DataTableProps) {
    super(props);
    this.state = {
      exceptionalColumns: ["view", "edit", "delete"],
      selected: -1,
      isLoading: true,
      isFetchingMore: false,
      dtablemodal: null,
      hasRequest: false,
      showFilter: false,
      showExportOption: false,
      exportDetails: {},
      filterhead: [],
      filters: { data: [] },
      input: { search: "", is_searching: false },
      entities: {
        data: [],
        meta: {
          current_page: 1,
          from: 1,
          last_page: 1,
          per_page: 50,
          to: 1,
          total: 0,
          next: null,
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
        order: "asc",
        header: { title: "", class: "", hint: "" },
        breadcrumb: [],
        headers: [],
        columns: [],
        table_data: [],
      },
      error: {
        state: false,
        message: "",
        type: DesmyState.ERROR,
        color: "",
        retry: true,
      },
      alerterror: {
        state: false,
        message: "",
        type: DesmyState.ERROR,
        color: "",
      },
      scrollTop: 0,
      searchText: "",
    };

    this.search = "";
    this.queryParam = "";

    this.handleScroll = this.handleScroll.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  componentDidMount() {
    if (this.props.onRef) this.props.onRef(this);
    const custom_settings = this.state.custom_settings;
    custom_settings.sorted_column = this.props.settings.default_sorted_column;
    custom_settings.order = this.props.settings.order || "asc";
    this.setState(
      { custom_settings, settings: this.props.settings },
      this.fetchEntities
    );
    this.handleFiltered();
  }

  handleExport = (url: string, queryString: string) => {
    this.setState({
      showExportOption: true,
      exportDetails: { url, queryString },
    });
  };

  handleOnFiltered = (data: any) => {
    const filteredDataAndFilterHead = Object.entries(data)
      .map(([key, value]) => {
        if (value && typeof value === "object" && "id" in value) {
          const filterValue = value as DesmyFilterItem;

          if (
            key.toLowerCase().includes("date") &&
            filterValue.value?.startDate &&
            filterValue.value?.endDate
          ) {
            return {
              queryParam: `start_date=${encodeURIComponent(
                String(filterValue.value?.startDate)
              )}&end_date=${encodeURIComponent(
                String(filterValue.value?.endDate)
              )}`,
              filterItem: { ...filterValue, label: key },
            };
          }

          const rawValue = filterValue.id ?? filterValue.value;
          if (rawValue === undefined || rawValue === null || rawValue === "") {
            return null;
          }

          return {
            queryParam: `${encodeURIComponent(key)}=${encodeURIComponent(
              String(rawValue)
            )}`,
            filterItem: { ...filterValue, label: key },
          };
        }

        if (Array.isArray(value)) {
          if (value.length === 0) return null;

          const mapped = value.map((item: any) => ({
            id: item.id,
            name: item.name,
            ...(item.data ? { data: item.data } : {}),
          }));

          return {
            queryParam: `${encodeURIComponent(key)}=${encodeURIComponent(
              JSON.stringify(mapped)
            )}`,
            filterItem: {
              id: key,
              name: key,
              value: mapped,
              label: key,
            } as DesmyFilterItem,
          };
        }

        return null;
      })
      .filter((item) => item !== null);

    const filtered_data = filteredDataAndFilterHead
      .map((item) => item!.queryParam)
      .join("&");
    const filterhead = filteredDataAndFilterHead.map(
      (item) => item!.filterItem
    ) as DesmyFilterItem[];

    this.handleClear();
    this.queryParam = filtered_data;
    this.setState({ showFilter: false, filterhead }, () => {
      this.props.onFilteredURL?.(filtered_data);
      this.fetchEntities();
    });
  };

  handleFiltered = () => {
    const { sorted_column, order } = this.state.custom_settings;
    this.props.onFilteredURL?.(
      `column=${sorted_column}&order=${order}&search=${this.search}`
    );
  };

  handleScroll() {
    if (!this.scrollContainer.current) return;
    const { scrollTop, clientHeight, scrollHeight } =
      this.scrollContainer.current;

    const nearBottom = scrollTop + clientHeight >= scrollHeight - 50;
    if (
      nearBottom &&
      !this.state.isLoading &&
      !this.state.isFetchingMore &&
      this.state.entities.meta.next
    ) {
      this.fetchEntities(true);
    }

    this.setState({ scrollTop });
  }

  fetchEntities = async (append = false) => {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
    // 🔹 Show "Loading more..." instantly
    if (append) {
      this.setState({ isFetchingMore: true });
    } else {
      this.setState({ isLoading: true, error: { state: false } as any });
    }
    this.debounceTimer = setTimeout(async () => {
      try {
        const { sorted_column, order } = this.state.custom_settings;
        const { per_page, next } = this.state.entities.meta;

        let fetchUrl: string;

        if (append && next) {
          fetchUrl = next;
        } else {
          fetchUrl = `${this.props.settings.url}/?column=${sorted_column}&order=${order}&per_page=${per_page}&search=${this.search}`;
          if (this.queryParam) fetchUrl += `&${this.queryParam}`;
        }

        if (append) {
          this.setState({ isFetchingMore: true });
        } else {
          this.setState({ isLoading: true, error: { state: false } as any });
        }

        const response = await axios.get(fetchUrl, {
          headers: {
            "X-CSRFToken": `${DesmyAuth.getCookie("csrftoken")}`,
            Authorization: `Token ${DesmyAuth.get(DesmyState.ACCESS_TOKEN)}`,
          },
        });

        const data = response.data;
        if (data.success) {
          this.setState((prev) => ({
            isLoading: false,
            isFetchingMore: false,
            entities: {
              data: append
                ? [...prev.entities.data, ...data.data.data]
                : data.data.data,
              meta: {
                ...data.data.meta,
                next: data.data.links?.next || null,
                next_page: data.data.meta.next_page ?? null,
                next_cursor: data.data.meta.next_cursor ?? null,
                count: data.data.meta.count ?? null,
              },
            },
          }));
        } else {
          this.handleError(data.message, false);
        }
      } catch (e) {
        this.handleError(e);
      } finally {
        this.setState({ isFetchingMore: false });
      }
    }, 400);
  };

  handleError = (message: unknown = "", retry = true) => {
    const msg =
      typeof message === "string"
        ? message
        : message instanceof Error
        ? message.message
        : "";
    const error = this.state.error;
    const input = this.state.input;
    input.is_searching = false;
    error.state = true;
    error.message = Commons.isEmptyOrNull(msg)
      ? DesmyState.ERROR_MESSAGE
      : msg;
    error.type = DesmyState.ERROR;
    error.color = "red";
    error.retry = retry;
    this.setState({ isLoading: false, error, input });
  };

  handleClear = () => {
    const { input, entities, error } = this.state;
    error.state = false;
    input.is_searching = false;
    this.setState({
      input,
      entities: { ...entities, data: [], meta: { ...entities.meta, total: 0 } },
      error,
    });
  };

  clearFetchEntities = () => {
    this.setState(
      {
        entities: {
          data: [],
          meta: { ...this.state.entities.meta, next: null, total: 0 },
        },
      },
      () => this.fetchEntities(false)
    );
  };

  handleSearchInput(event: ChangeEvent<HTMLInputElement>) {
  const value = event.target.value;

  // ⛔ Block input-triggered search while endpoint still loading
  if (this.state.isLoading || this.state.isFetchingMore) return;

  this.setState(
    (prev) => ({
      input: { ...prev.input, search: value },
      searchText: value,
    }),
    () => {
      this.search = value;
       if (!this.state.isLoading && !this.state.isFetchingMore && Commons.isEmptyOrNull(this.search)) {
        this.clearFetchEntities();
      }
    }
  );
}

handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
  // ⛔ Prevent Enter key search while endpoint still loading
  if (this.state.isLoading || this.state.isFetchingMore) return;

  if (e.key === "Enter" && !Commons.isEmptyOrNull(this.search)) {
    this.clearFetchEntities();
  }
};
handleSort = (column: string) => {
  const custom_settings = this.state.custom_settings;

  // 🧠 Combine built-in exceptional columns and extra_handle names from settings
  const extraHandles =
    this.props.settings?.extra_handle?.map((item) =>
      item.name?.toLowerCase()
    ) || [];

  const exceptionalColumns = [
    ...this.state.exceptionalColumns.map((c) => c.toLowerCase()),
    ...extraHandles,
  ];

  // 🛑 Skip sorting for any exceptional column (including extra_handle)
  if (exceptionalColumns.includes(column.toLowerCase())) return;

  // 🔄 Toggle sorting order
  const order =
    column === this.state.custom_settings.sorted_column
      ? this.state.custom_settings.order === "asc"
        ? "desc"
        : "asc"
      : "asc";

  // ♻️ Reset table data and fetch again
  this.handleClear();
  custom_settings.current_page = 1;
  custom_settings.sorted_column = column;
  custom_settings.order = order;

  this.props.onFilteredURL?.(
    `column=${custom_settings.sorted_column}&order=${custom_settings.order}&search=${this.search}`
  );

  this.setState({ isLoading: true, error: {}, custom_settings }, () =>
    this.fetchEntities(false)
  );
};

  removeFilterByName = (data: string) => {
    try {
      const updatedFilters = this.state.filterhead.filter(
        (filter) => filter.label !== data
      );
      const filtered_data = updatedFilters
        .filter((filter) => typeof filter === "object" && "id" in filter)
        .map((filter) => {
          const { id, value, label } = filter as DesmyFilterItem;
          return `${encodeURIComponent(String(label))}=${encodeURIComponent(
            String(id ?? value ?? "")
          )}`;
        })
        .join("&");

      this.handleClear();
      this.queryParam = filtered_data;
      this.setState({ filterhead: updatedFilters }, () => {
        this.props.onFilteredURL?.(filtered_data);
        this.fetchEntities();
      });
    } catch (_) {}
  };

  renderBreadcrumb() {
    const { breadcrumb } = this.props.settings;
    if (!breadcrumb || breadcrumb.length === 0) {
      return null;
    }

    return (
      <nav className="flex text-sm mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {breadcrumb.map((item, index) => (
            <li key={index} className="inline-flex items-center">
              {index !== breadcrumb.length - 1 ? (
                <a
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.settings.onURLClick?.(item.url);
                  }}
                  className="text-gray-700 w-full line-clamp-1 dark:text-white/75 dark:hover:text-blue-500 hover:text-blue-600"
                >
                  {item.name}
                </a>
              ) : (
                <span
                  className="text-gray-500 dark:text-white/75"
                  aria-current="page"
                >
                  {item.name}
                </span>
              )}
              {index !== breadcrumb.length - 1 && (
                <svg
                  className="w-4 h-4 mx-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  handlePageChange = (pageNumber: number) => {
    const { custom_settings } = this.state;
    this.handleClear();
    custom_settings.current_page = pageNumber;
    this.setState({ custom_settings, isLoading: true }, () =>
      this.fetchEntities(false)
    );
  };

  handleOnClose = () => {
    this.setState({ showFilter: false, showExportOption: false });
  };

  handleOnSuccess = (index: number) => {
    const newData = [...this.state.entities.data];
    newData.splice(index, 1);
    this.setState((prev) => ({
      entities: { ...prev.entities, data: newData },
    }));
  };

  handleOnOpenFilter = () => {
    this.setState({ showFilter: true });
  };

  handleRetry = () => {
    this.setState({ isLoading: true }, this.clearFetchEntities);
  };

  renderExtraActions() {
    const { extraActions } = this.props.settings;
    const { custom_settings } = this.state;
    const filterParams = new URLSearchParams();

    filterParams.set("page", String(custom_settings.current_page));
    filterParams.set("column", custom_settings.sorted_column);
    filterParams.set("order", custom_settings.order);
    filterParams.set("per_page", String(this.state.entities.meta.per_page));
    filterParams.set("search", this.search || "");

    if (this.queryParam) {
      this.queryParam.split("&").forEach((kv) => {
        const [key, value] = kv.split("=");
        if (key && value !== undefined) filterParams.set(key, value);
      });
    }

    const queryString = filterParams.toString();

    return (
      <div className="flex w-full justify-end space-x-2 mt-5">
        {extraActions?.map(
          (
            action: {
              name?: string;
              url: string;
              icon?: React.ReactNode;
              className?: string;
            },
            index: number
          ) => (
            <button
              key={index}
              onClick={() => this.handleExport(action.url, queryString)}
              className={`flex items-center px-5 py-3 text-xs rounded-full border border-green-500
                        ${
                          action.url
                            ? "bg-green-500 hover:bg-green-600 text-white"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }
                        ${action.className || ""}`}
              disabled={!action.url}
            >
              {action.icon && <span className="mr-2">{action.icon}</span>}
              {action.name ||
                (index === 0 ? "Export to PDF" : "Export to Excel")}
            </button>
          )
        )}
      </div>
    );
  }

  handleHint = () => {
    const { settings, error, entities } = this.state;
    if (error.state) return "";
    const hint = settings?.header?.hint || "";
    const total = entities?.meta?.total ?? 0;

    if (!hint) {
      return `Loaded ${total} data`;
    }
    return `${hint} | Loaded ${total}`;
  };

  render() {
    const {
      isFocused,
      searchText,
      showFilter,
      filterhead,
      exportDetails,
      showExportOption,
      error,
      isLoading,
      entities,
      selected,
    } = this.state;
    const { settings } = this.props;
    const isExpanded = isFocused && searchText !== "";

    return (
      <>
        {this.state.dtablemodal}
        {showExportOption && (
          <DesmyDownloadOptions
            exportDetails={exportDetails}
            onClose={this.handleOnClose}
          />
        )}
        {showFilter && (
          <DesmyFilter
            content={filterhead}
            filter={settings.filter}
            onSuccess={this.handleOnFiltered}
            onClose={this.handleOnClose}
          />
        )}

        {/* Header */}
        <div className="flex flex-col w-full mb-5">
          <header className="flex w-full flex-col md:flex-row justify-start md:justify-between items-center space-x-6">
            <div className="flex flex-col w-full mx-10 md:mx-0 ">
              {settings.header !== undefined && (
                <div className="flex w-full flex-col">
                  <h3
                    className={
                      settings.header !== undefined
                        ? !Commons.isEmptyOrNull(settings.header.class)
                          ? settings.header.class
                          : "text-grey-darkest uppercase text-3xl 2xl:text-5xl dark:text-white font-poppinsBlack"
                        : ""
                    }
                  >
                    {settings.header.title}
                  </h3>
                  <div className="text-grey font-thin text-xs 2xl:text-sm dark:text-white">
                    {this.handleHint()}
                  </div>
                </div>
              )}
            </div>

            {/* Search + Filter */}
            <div className="flex w-max flex-col lg:items-end justify-start lg:justify-end">
              <div className="flex flex-col lg:items-end justify-start lg:justify-end ">
                <div className="flex items-center w-full lg:max-w-md justify-start lg:justify-end mt-5 lg:mt-0">
                  <div className="flex w-full text-grey font-thin text-sm dark:text-white">
                    <div className="w-full">
                      <div className="flex w-full relative">
                        <input
                            className={`rounded-full py-3 px-4 text-gray-700 text-xs 2xl:text-sm leading-tight border focus:outline-none focus:border-primary dark:focus:border-white  focus:ring-0 bg-inherit dark:text-white transition-all duration-300 ease-in-out ${
                              isExpanded ? "w-[300px]" : "w-[200px]"
                            } ${
                              this.state.isLoading || this.state.isFetchingMore
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                            disabled={this.state.isLoading || this.state.isFetchingMore}
                            title={
                              this.state.isLoading || this.state.isFetchingMore
                                ? "Please wait for data to finish loading"
                                : "Search"
                            }
                            onFocus={() => this.setState({ isFocused: true })}
                            onBlur={() => this.setState({ isFocused: false })}
                            name="search"
                            onChange={this.handleSearchInput}
                            onKeyDown={this.handleSearchKeyDown}
                            id="search"
                            type="text"
                            placeholder={
                              this.state.isLoading || this.state.isFetchingMore
                                ? "Please wait..."
                                : "Search"
                            }
                            value={searchText || ""}
                          />
                        {this.state.input.is_searching &&
                          !Commons.isEmptyOrNull(this.search) && (
                            <svg
                              role="status"
                              className="inline absolute top-2.5 bottom-0 right-2 w-4 h-4 2xl:w-6 2xl:h-6 text-primary dark:text-white animate-spin"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                              />
                            </svg>
                          )}
                      </div>
                    </div>
                    <div
                      className="flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full dark:hover:text-black bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-800 dark:bg-darkDialogBackground cursor-pointer"
                      onClick={() => this.handleRetry()}
                    >
                      <svg
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-4 h-4 2xl:w-5 2xl:h-5"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeMiterlimit={10}
                          strokeWidth={32}
                          d="M320 146s24.36-12-64-12a160 160 0 10160 160"
                        />
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                          d="M256 58l80 80-80 80"
                        />
                      </svg>
                    </div>

                    {settings.filter && (
                      <div
                        className="flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
                        onClick={() => this.handleOnOpenFilter()}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </header>

          {this.renderExtraActions()}
          {this.props.content != null
            ? typeof this.props.content === "function"
              ? this.props.content({
                  searchText: this.state.searchText,
                  filterhead: this.queryParam,
                })
              : React.isValidElement(this.props.content)
              ? React.cloneElement(this.props.content as React.ReactElement<any>, {
                  searchText: this.state.searchText,
                  filterhead: this.queryParam,
                })
              : this.props.content
            : null}
        </div>

        <DesmyFilterTags
          filters={filterhead}
          onRemove={this.removeFilterByName}
        />
        {this.renderBreadcrumb()}

        {/* Table */}
        <div
          ref={this.scrollContainer}
          className={`scrollable_table pb-16 flex flex-col min-h-[200px] ${
            entities.data.length > 10 ? `h-[75vh]` : `h-auto`
          } overflow-auto scrollbar-width`}
          onScroll={this.handleScroll}
        >
          <table>
            <TableHeader
              headers={settings.headers}
              sortedColumn={this.state.custom_settings.sorted_column}
              order={this.state.custom_settings.order}
              exceptionalColumns={this.state.exceptionalColumns}
              onSort={this.handleSort}
              tableDataSettings={settings.table_data}
            />
            <TableBody
              dataCollection={entities.data}
              headers={settings.headers}
              exceptionalColumns={this.state.exceptionalColumns}
              selected={selected}
              handleOnSuccess={this.handleOnSuccess}
              settings={settings}
              handleEdit={(user) => settings.handleEdit?.(user)}
              isLoading={isLoading}
              rowHeight={48}
              hasMore={
                !!(
                  entities.meta.next ||
                  entities.meta.next_cursor ||
                  entities.meta.next_page
                )
              }
              onRetry={this.handleRetry}
              error={error}
              entities={entities}
              searchText={this.state.searchText}
              onRowClick={(user, index) => {
                settings.handleOnViewClick?.(user);
              }}
              isFetchingMore={this.state.isFetchingMore}
            />
          </table>
        </div>
      </>
    );
  }
}

export { DesmyDataTable };
