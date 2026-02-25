import React, {
  Component,
  KeyboardEvent,
  ChangeEvent,
  ReactNode,
  ReactElement,
} from "react";
import axios from "axios";
import DesmyAuth from "../apis/DesmyAuth";
import Commons from "../apis/DesmyCommons";
import { DesmyState } from "../apis/DesmyState";
import { DesmyFilter } from "../utilities/DesmyFilter";
import { DesmyMerge } from "../utilities/DesmyMerge";
import { DesmyInfiniteScroll } from "../utilities/DesmyInfiniteScroll";
import {
  DesmyDataTableSettingsProps,
  DesmyDropdownItem,
  DesmyFilterItem,
} from "../apis/SharedProps";

import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { DesmyFilterTags } from "./DesmyFilterTags";
import DesmyDownloadOptions from "./DesmyDownloadOptions";
import { DesmyToast } from "../toasify/DesmyToast";

/* ------------------- INLINE MERGE MODAL ------------------- */

interface MergeSelectionModalProps {
  open: boolean;
  options: DesmyDropdownItem[];
  mergeTarget: any | null;
  onChangeTarget: (item: any) => void;
  onClose: () => void;
  onSubmit: () => void;
  loading?: boolean;
}

/* ------------------- DATATABLE PROPS & STATE ------------------- */

interface DataTableProps {
  settings: DesmyDataTableSettingsProps;
  content?:
    | React.ReactElement<{
        searchText?: string;
        filterhead?: DesmyFilterItem[] | string;
        entities?: any[];
        meta?: DataTableState["entities"]["meta"];
      }>
    | ((args: {
        searchText?: string;
        filterhead?: any | any[];
        entities?: any[];
        meta?: DataTableState["entities"]["meta"];
      }) => React.ReactNode);

  className?: string;
  onRef?: (ref: DesmyDataTable | null) => void;
  onFilteredURL?: (data: any) => void;
}

interface DataTableState {
  isFocused?: boolean;
  searchText?: string;

  /** ✅ action dropdown state */
  openActionDropdown: number | null;

  dtablemodal: ReactNode | null;
  hasRequest: boolean;
  exceptionalColumns: string[];
  selected: number;
  isLoading: boolean;

  /** ✅ multi-select state */
  selectedRows: number[];
  mergeTarget: any | null;
  isSubmittingSelected: boolean;

  isFetchingMore: boolean;
  showFilter: boolean;
  confirmExport: boolean;
  filterhead: DesmyFilterItem[];
  showExportOption: boolean;

  exportDetails: {
  url?: string;
  queryString?: string;
  data?: {
    title: string;
    key: string;
    endpoint: string;
    dependsOn?: string;
  }[];
  dropdown?: {
    label: string;
    url: string;
    formats?: string[];
    icon?: ReactNode;
  }[];

  options?: {
    confirm?: boolean;
    redirect?: boolean;
    successMessage?: string;
    confirmationMessage?: string;
  };
};

  filters: {
    data: {
      name: string;
      data: string;
      defaults?: { [key: string]: string };
    }[];
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
      has_next?: boolean;
      count?: number | null;

      /** optional server extras */
      prev_cursor?: string | null;
      cursor_ttl?: number | null;
      cursor_expires_at?: number | null;
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

/* ------------------- DATATABLE CLASS ------------------- */

class DesmyDataTable extends Component<DataTableProps, DataTableState> {
  search: string;
  queryParam: string;

  infiniteScroll = new DesmyInfiniteScroll();

  sentinelRef = React.createRef<HTMLDivElement>();
  scrollContainer = React.createRef<HTMLDivElement>();

  DEBUG_INFINITE_SCROLL = false;

  /** fallback scroll-based loading */
  private lastFallbackTriggerAt = 0;
  private FALLBACK_THRESHOLD_PX = 140;
  private FALLBACK_COOLDOWN_MS = 800;

  rowHeight: number = 48;

  constructor(props: DataTableProps) {
    super(props);
    this.state = {
      exceptionalColumns: ["view", "edit", "delete"],
      selected: -1,

      /** ✅ multi-select defaults */
      selectedRows: [],
      mergeTarget: null,
      isSubmittingSelected: false,

      isLoading: true,
      isFetchingMore: false,

      /** ✅ action dropdown default */
      openActionDropdown: null,

      dtablemodal: null,
      hasRequest: false,
      showFilter: false,
      showExportOption: false,
      confirmExport: false,
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
          next_page: null,
          next_cursor: null,
          has_next: false,
          count: null,
          prev_cursor: null,
          cursor_ttl: null,
          cursor_expires_at: null,
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
      isFocused: false,
    };

    this.search = "";
    this.queryParam = "";

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    if (this.props.onRef) this.props.onRef(this);

    const custom_settings = {
      ...this.state.custom_settings,
      sorted_column: this.props.settings.default_sorted_column,
      order: this.props.settings.order || "asc",
    };

    this.setState(
      {
        custom_settings,
        settings: {
          ...this.state.settings,
          ...this.props.settings,
        },
      },
      () => {
        this.fetchEntities(false);
        this.handleFiltered();

        requestAnimationFrame(() => {
          const sentinel = this.sentinelRef.current;
          const container = this.scrollContainer.current;
          if (!sentinel || !container) return;

          this.infiniteScroll.observe(sentinel, this.handleInfiniteLoad, {
            root: container,
            rootMargin: "260px",
            threshold: 0,
          });
        });
      }
    );

    // ✅ close dropdown when clicking outside
    document.addEventListener("mousedown", this.handleOutsideClick);
  }

  componentWillUnmount() {
    this.infiniteScroll.disconnect();
    document.removeEventListener("mousedown", this.handleOutsideClick);
  }

  /* ------------------- OUTSIDE CLICK ------------------- */

  handleOutsideClick = (e: MouseEvent) => {
    if (this.state.openActionDropdown === null) return;

    const target = e.target as HTMLElement;
    if (!target?.closest?.(".desmy-extra-action-dropdown")) {
      this.setState({ openActionDropdown: null });
    }
  };

  /* ------------------- HELPERS ------------------- */

  hasMore = () => {
    const meta = this.state.entities.meta;

    // prefer has_next if backend provides it
    if (typeof meta.has_next === "boolean") return meta.has_next;

    // fallback legacy fields
    return !!(meta.next || meta.next_cursor || meta.next_page);
  };

  multiSelectEnabled = () => {
    return !!this.props.settings.multiSelectEnabled;
  };

  mergeEnabled = () => {
    return !!this.props.settings.mergeSelection?.enabled;
  };

  buildMergeLabel = (item: any) => {
    const columns = this.props.settings.mergeSelection?.dropdownColumns || [];
    const values = columns
      .map((c) => item?.[c])
      .filter((v) => v !== undefined && v !== null && String(v).trim() !== "");

    if (values.length > 0) return values.join(" - ");
    return item?.name ?? item?.title ?? item?.id ?? "Unnamed";
  };

  /* ------------------- EXPORT HANDLING ------------------- */
handleExport = (
  action: {
    url?: string;
    dropdown?: {
      label: string;
      url: string;
      formats?: string[];
      icon?: ReactNode;
    }[];
    options?: {
      confirm?: boolean;
      redirect?: boolean;
      successMessage?: string;
      confirmationMessage?: string;
    };
    data?: {
      title: string;
      key: string;
      endpoint: string;
      dependsOn?: string;
    }[];
  },
  queryString: string
) => {
  this.setState({
    showExportOption: true,
    confirmExport: action.options?.confirm ?? false,

    exportDetails: {
      url: action.url,
      queryString,
      dropdown: action.dropdown ?? [],
      data: action.data ?? [],
      options: {
        confirm: action.options?.confirm ?? false,
        redirect: action.options?.redirect ?? false,
        successMessage:
          action.options?.successMessage || "Export successful!",
        confirmationMessage:
          action.options?.confirmationMessage ||
          "Are you sure you want to export this data?",
      },
    },

    openActionDropdown: null,
  });
};

  /* ------------------- MULTI SELECT ------------------- */

  logScroll = (...args: any[]) => {
    if (this.DEBUG_INFINITE_SCROLL) {
      console.log("[DesmyInfiniteScroll]", ...args);
    }
  };

  toggleRowSelect = (index: number) => {
    this.setState((prev) => {
      const exists = prev.selectedRows.includes(index);
      const selectedRows = exists
        ? prev.selectedRows.filter((i) => i !== index)
        : [...prev.selectedRows, index];

      const selectedItems = selectedRows.map((i) => prev.entities.data[i]);

      let mergeTarget = prev.mergeTarget;
      if (mergeTarget && !selectedItems.includes(mergeTarget)) mergeTarget = null;

      return { selectedRows, mergeTarget };
    });
  };

  toggleSelectAll = () => {
    this.setState((prev) => {
      const allIndexes = prev.entities.data.map((_, i) => i);
      const isAllSelected =
        prev.selectedRows.length === allIndexes.length && allIndexes.length > 0;

      return {
        selectedRows: isAllSelected ? [] : allIndexes,
        mergeTarget: null,
      };
    });
  };

  /* ------------------- MERGE MODAL LOGIC ------------------- */

  openMergeModal = () => {
    if (!this.mergeEnabled()) return;

    const selectedItems = this.state.selectedRows.map(
      (i) => this.state.entities.data[i]
    );

    if (selectedItems.length < 2) {
      DesmyToast.error("Select at least 2 items to merge.");
      return;
    }

    const mergeConfig = this.props.settings.mergeSelection;

    if (!mergeConfig?.endpoint) {
      DesmyToast.error("Merge endpoint missing in settings.");
      return;
    }

    this.setState({
      openActionDropdown: null, // ✅ close dropdown if open
      dtablemodal: (
        <DesmyMerge
          selectedItems={selectedItems}
          mergeConfig={{
            endpoint: mergeConfig.endpoint,
            method: mergeConfig.method || "POST",
            payloadKeys: mergeConfig.payloadKeys,
            dropdownColumns: mergeConfig.dropdownColumns,
            successMessage: mergeConfig.successMessage,
            errorMessage: mergeConfig.errorMessage,
          }}
          onClose={() => this.setState({ dtablemodal: null })}
          onSuccess={() => {
            this.setState({ selectedRows: [] }, () => this.clearFetchEntities());
          }}
        />
      ),
    });
  };

  /* ------------------- INFINITE LOAD (OBSERVER) ------------------- */

  handleInfiniteLoad = () => {
    const meta = this.state.entities.meta;

    if (this.state.isLoading) {
      this.logScroll("Blocked: initial loading in progress");
      return;
    }

    if (this.state.isFetchingMore) {
      this.logScroll("Blocked: already fetching more");
      return;
    }

    if (!this.hasMore()) {
      this.logScroll("Blocked: no more data");
      return;
    }

    if (!this.infiniteScroll.shouldFetch(meta)) {
      this.logScroll("Blocked: cursor/page already fetched", meta.next_cursor);
      return;
    }

    this.logScroll("Observer trigger. Fetching next cursor:", meta.next_cursor);
    this.fetchEntities(true);
  };

  /* ------------------- FALLBACK SCROLL ------------------- */

  handleScroll = () => {
    // ✅ close dropdown when scrolling table area
    if (this.state.openActionDropdown !== null) {
      this.setState({ openActionDropdown: null });
    }

    const container = this.scrollContainer.current;
    if (!container) return;

    const { scrollTop, clientHeight, scrollHeight } = container;

    if (this.state.scrollTop !== scrollTop) {
      this.setState({ scrollTop });
    }

    const distToBottom = scrollHeight - (scrollTop + clientHeight);
    const now = Date.now();

    if (distToBottom > this.FALLBACK_THRESHOLD_PX) return;
    if (now - this.lastFallbackTriggerAt < this.FALLBACK_COOLDOWN_MS) return;

    if (this.state.isLoading || this.state.isFetchingMore) return;
    if (!this.hasMore()) return;

    if (!this.infiniteScroll.shouldFetch(this.state.entities.meta)) return;

    this.lastFallbackTriggerAt = now;
    this.logScroll("Fallback scroll trigger. Fetching…");
    this.fetchEntities(true);
  };

  /* ------------------- FETCH ENTITIES ------------------- */

  fetchEntities = async (append = false) => {
    if (append && this.state.isFetchingMore) return;

    const container = this.scrollContainer.current;

    const anchor =
      append && container ? this.infiniteScroll.captureAnchor(container) : null;

    const { custom_settings, entities } = this.state;
    const { sorted_column, order } = custom_settings;
    const meta = entities.meta;
    const per_page = meta.per_page;

    if (append) {
      this.setState({ isFetchingMore: true });
    } else {
      this.setState({
        isLoading: true,
        error: { ...this.state.error, state: false, message: "" },
      });
    }

    try {
      let fetchUrl: string;

      if (append) {
        if (meta.next) {
          fetchUrl = meta.next;
        } else if (meta.next_cursor) {
          fetchUrl =
            `${this.props.settings.url}/?` +
            `column=${sorted_column}` +
            `&order=${order}` +
            `&per_page=${per_page}` +
            `&search=${encodeURIComponent(this.search || "")}` +
            `&cursor=${encodeURIComponent(meta.next_cursor)}` +
            (this.queryParam ? `&${this.queryParam}` : "");
        } else if (meta.next_page) {
          fetchUrl =
            `${this.props.settings.url}/?` +
            `column=${sorted_column}` +
            `&order=${order}` +
            `&per_page=${per_page}` +
            `&search=${encodeURIComponent(this.search || "")}` +
            `&page=${meta.next_page}` +
            (this.queryParam ? `&${this.queryParam}` : "");
        } else {
          this.setState({ isFetchingMore: false });
          return;
        }
      } else {
        fetchUrl =
          `${this.props.settings.url}/?` +
          `column=${sorted_column}` +
          `&order=${order}` +
          `&per_page=${per_page}` +
          `&search=${encodeURIComponent(this.search || "")}` +
          (this.queryParam ? `&${this.queryParam}` : "");
      }

      this.logScroll("Fetch URL:", fetchUrl);

      const response = await axios.get(fetchUrl, {
        headers: {
          "X-CSRFToken": `${DesmyAuth.getCookie("csrftoken")}`,
          Authorization: `Token ${DesmyAuth.get(DesmyState.ACCESS_TOKEN)}`,
        },
      });

      const payload = response.data;

      if (!payload?.success) {
        this.handleError(payload?.message, false);
        return;
      }

      const apiWrap = payload.data;
      const apiMeta = apiWrap?.meta || {};
      const apiLinks = apiWrap?.links || {};
      const apiRows = Array.isArray(apiWrap?.data)
        ? apiWrap.data
        : Array.isArray(apiWrap?.data?.data)
        ? apiWrap.data.data
        : [];

      this.setState(
        (prev) => {
          const mergedData = append
            ? [...prev.entities.data, ...apiRows]
            : apiRows;

          return {
            isLoading: false,
            isFetchingMore: false,
            entities: {
              data: mergedData,
              meta: {
                ...prev.entities.meta,
                ...apiMeta,
                next: apiLinks?.next ?? apiMeta?.next ?? null,
                next_cursor: apiMeta?.next_cursor ?? null,
                prev_cursor: apiMeta?.prev_cursor ?? null,
                has_next:
                  typeof apiMeta?.has_next === "boolean"
                    ? apiMeta.has_next
                    : Boolean(
                        apiLinks?.next ||
                          apiMeta?.next_cursor ||
                          apiMeta?.next_page
                      ),
                cursor_ttl: apiMeta?.cursor_ttl ?? null,
                cursor_expires_at: apiMeta?.cursor_expires_at ?? null,
              },
            },
          };
        },
        () => {
          if (anchor && container) {
            this.infiniteScroll.restoreAnchor(container, anchor);
          }

          const loaded = this.state.entities.data.length;
          const total = this.state.entities.meta.total ?? 0;
          const remaining = Math.max(total - loaded, 0);

          this.logScroll("Loaded:", loaded);
          this.logScroll("Total:", total);
          this.logScroll("Remaining:", remaining);
          this.logScroll("Next cursor:", this.state.entities.meta.next_cursor);
          this.logScroll("Has next:", this.hasMore());

          this.infiniteScroll.resetObservation();
        }
      );
    } catch (e) {
      this.handleError(e);
    }
  };

  /* ------------------- ERROR & CLEARING ------------------- */

  handleError = (message: unknown = "", retry = true) => {
    const msg =
      typeof message === "string"
        ? message
        : message instanceof Error
        ? message.message
        : "";

    const newError = {
      ...this.state.error,
      state: true,
      message: Commons.isEmptyOrNull(msg) ? DesmyState.ERROR_MESSAGE : msg,
      type: DesmyState.ERROR,
      color: "red",
      retry,
    };

    this.setState((prev) => ({
      isLoading: false,
      input: { ...prev.input, is_searching: false },
      error: newError,
      isFetchingMore: false,
    }));
  };

  handleClear = () => {
    this.setState((prev) => ({
      input: { ...prev.input, is_searching: false },
      entities: {
        ...prev.entities,
        data: [],
        meta: {
          ...prev.entities.meta,
          total: 0,
          next: null,
          next_cursor: null,
          next_page: null,
          has_next: false,
        },
      },
      error: { ...prev.error, state: false, message: "" },
    }));
  };

  clearFetchEntities = () => {
    this.infiniteScroll.reset();
    this.lastFallbackTriggerAt = 0;

    this.setState(
      (prev) => ({
        entities: {
          data: [],
          meta: {
            ...prev.entities.meta,
            next: null,
            next_cursor: null,
            next_page: null,
            has_next: false,
            total: 0,
          },
        },
      }),
      () => this.fetchEntities(false)
    );
  };

  /* ------------------- OTHER HANDLERS ------------------- */

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
                  className="text-gray-700 w-full line-clamp-1 dark:text-white/75 dark:hover:text-white dark:text-white hover:text-blue-600"
                >
                  {item.name}
                </a>
              ) : (
                <span
                  className="text-gray-500 dark:text:white/75 dark:text-white/75"
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

  /* ------------------- SEARCH ------------------- */

  handleSearchInput(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (this.state.isLoading || this.state.isFetchingMore) return;

    this.setState(
      (prev) => ({
        input: { ...prev.input, search: value },
        searchText: value,
      }),
      () => {
        this.search = value;

        if (
          !this.state.isLoading &&
          !this.state.isFetchingMore &&
          Commons.isEmptyOrNull(this.search)
        ) {
          this.clearFetchEntities();
        }
      }
    );
  }

  handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (this.state.isLoading || this.state.isFetchingMore) return;

    if (e.key === "Enter" && !Commons.isEmptyOrNull(this.search)) {
      this.clearFetchEntities();
    }
  };

  /* ------------------- SORT ------------------- */

  handleSort = (column: string) => {
    const extraHandles =
      this.props.settings?.extra_handle?.map((item) =>
        item.name?.toLowerCase()
      ) || [];

    const exceptionalColumns = [
      ...this.state.exceptionalColumns.map((c) => c.toLowerCase()),
      ...extraHandles,
    ];

    if (exceptionalColumns.includes(column.toLowerCase())) return;

    const { custom_settings } = this.state;

    const newOrder: "asc" | "desc" =
      column === custom_settings.sorted_column
        ? custom_settings.order === "asc"
          ? "desc"
          : "asc"
        : "asc";

    const updatedCustomSettings = {
      ...custom_settings,
      sorted_column: column,
      order: newOrder,
      current_page: 1,
    };

    this.setState(
      {
        custom_settings: updatedCustomSettings,
        isLoading: true,
      },
      () => {
        this.handleRetry();
      }
    );
  };

  /* ------------------- OTHER ------------------- */

  handleOnFiltered = (data: any) => {
    const filteredDataAndFilterHead =
      Object.entries(data)
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

            const rawValue =
              (filterValue as any).id ?? (filterValue as any).value;
            if (rawValue === undefined || rawValue === null || rawValue === "")
              return null;

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
        .filter((item) => item !== null) || [];

    const filtered_data = filteredDataAndFilterHead
      .map((item) => item!.queryParam)
      .join("&");

    const filterhead = filteredDataAndFilterHead.map(
      (item) => item!.filterItem
    ) as DesmyFilterItem[];

    this.handleClear();
    this.queryParam = filtered_data;

    this.setState(
      {
        showFilter: false,
        filterhead,
        openActionDropdown: null, // ✅ close dropdown when filtering
      },
      () => {
        this.props.onFilteredURL?.(filtered_data);
        this.fetchEntities(false);
      }
    );
  };

  handleFiltered = () => {
    const { sorted_column, order } = this.state.custom_settings;
    this.props.onFilteredURL?.(
      `column=${sorted_column}&order=${order}&search=${this.search}`
    );
  };

  handleOnClose = () => {
    this.setState({
      showFilter: false,
      showExportOption: false,
      dtablemodal: null,
      openActionDropdown: null, // ✅ NEW
    });
  };

  handleOnOpenFilter = () => {
    this.setState({ showFilter: true, openActionDropdown: null });
  };

  handleRetry = () => {
    this.setState(
      { isLoading: true, openActionDropdown: null },
      this.clearFetchEntities
    );
  };

  handleHint() {
    const { settings, error, entities, isLoading, isFetchingMore } = this.state;

    if (error.state) return "";

    const hint = settings?.header?.hint || "";

    const loaded = entities?.data?.length ?? 0;
    const total = entities?.meta?.total ?? 0;
    const remaining = Math.max(total - loaded, 0);

    let statusText = "";

    if (isLoading) {
      statusText = "Loading data...";
    } else if (isFetchingMore) {
      statusText = `Loaded ${loaded} of ${total} • Fetching more...`;
    } else if (total > 0) {
      if (remaining === 0) {
        statusText = `Loaded ${loaded} of ${total}`;
      } else {
        statusText = `Loaded ${loaded} of ${total} • ${remaining} remaining`;
      }
    } else {
      statusText = "No data found";
    }

    if (!hint) return statusText;

    return `${hint} | ${statusText}`;
  }

  handleOnSuccess = (index: number) => {
    this.setState((prev) => {
      const newData = [...prev.entities.data];
      newData.splice(index, 1);
      return { entities: { ...prev.entities, data: newData } };
    });
  };

  removeFilterByName = (name: string) => {
    try {
      const updatedFilters = this.state.filterhead.filter(
        (filter) => filter.label !== name
      );

      const filtered_data = updatedFilters
        .filter((filter) => typeof filter === "object" && "id" in filter)
        .map((filter) => {
          const { id, value, label } = filter as DesmyFilterItem;
          return `${encodeURIComponent(String(label))}=${encodeURIComponent(
            String((id as any) ?? (value as any) ?? "")
          )}`;
        })
        .join("&");

      this.handleClear();
      this.queryParam = filtered_data;

      this.setState({ filterhead: updatedFilters, openActionDropdown: null }, () => {
        this.props.onFilteredURL?.(filtered_data);
        this.fetchEntities(false);
      });
    } catch (_) {}
  };

  /* ------------------- EXTRA ACTIONS ------------------- */

renderExtraActions() {
  const { extraActions } = this.props.settings;
  const { custom_settings, entities, openActionDropdown } = this.state;

  const filterParams = new URLSearchParams();

  filterParams.set("page", String(custom_settings.current_page));
  filterParams.set("column", custom_settings.sorted_column);
  filterParams.set("order", custom_settings.order);
  filterParams.set("per_page", String(entities.meta.per_page));
  filterParams.set("search", this.search || "");

  if (this.queryParam) {
    this.queryParam.split("&").forEach((kv) => {
      const [key, value] = kv.split("=");
      if (key && value !== undefined) filterParams.set(key, value);
    });
  }

  const queryString = filterParams.toString();

  const multiEnabled = this.multiSelectEnabled();
  const mergeEnabled = this.mergeEnabled();
  const canMerge =
    multiEnabled && mergeEnabled && this.state.selectedRows.length > 1;

  return (
    <div className="flex w-full justify-end space-x-2 mt-5 relative">
      {canMerge && (
        <button
          onClick={this.openMergeModal}
          className="flex items-center px-5 py-3 text-xs rounded-full border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white"
        >
          Merge Selected ({this.state.selectedRows.length})
        </button>
      )}

      {extraActions?.map((action, index) => {
        const hasDropdown =
          Array.isArray(action.dropdown) && action.dropdown.length > 0;

        const hasDirectUrl = !!action.url;

        return (
          <div
            key={index}
            className="relative desmy-extra-action-dropdown"
          >
            {/* MAIN BUTTON */}
            <button
              onClick={() => {
                if (hasDropdown) {
                  this.setState({
                    openActionDropdown:
                      openActionDropdown === index ? null : index,
                  });
                } else if (hasDirectUrl) {
                  // ✅ NEW CORRECT CALL
                  this.handleExport(action, queryString);
                }
              }}
              disabled={!hasDropdown && !hasDirectUrl}
              className={`flex items-center px-5 py-3 text-xs rounded-full border border-green-500
                ${
                  hasDropdown || hasDirectUrl
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }
                ${action.className || ""}`}
            >
              {action.icon && <span className="mr-2">{action.icon}</span>}
              {action.name}

              {hasDropdown && (
                <svg
                  className="w-3 h-3 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </button>

            {/* DROPDOWN */}
            {hasDropdown && openActionDropdown === index && (
              <div
                className="
                  absolute right-0 mt-2 w-56
                  bg-white dark:bg-gray-800
                  border border-gray-200 dark:border-gray-700
                  rounded-xl shadow-xl z-50 overflow-hidden
                "
              >
                <div className="py-2">
                  {action.dropdown!.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        this.setState({ openActionDropdown: null });

                        // ✅ PASS SELECTED DROPDOWN ITEM PROPERLY
                        this.handleExport(
                          {
                            ...action,
                            url: item.url,
                            dropdown: [
                              {
                                label: item.label,
                                url: item.url,
                                formats: item.formats,
                                icon: item.icon,
                              },
                            ],
                          },
                          queryString
                        );
                      }}
                      className="
                        w-full text-left px-4 py-2.5 text-sm
                        flex items-center
                        text-gray-700 dark:text-gray-200
                        hover:bg-gray-100 dark:hover:bg-gray-700
                      "
                    >
                      {item.icon && (
                        <span className="mr-3">{item.icon}</span>
                      )}
                      <span className="font-medium">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

  getContentPayload() {
    const { searchText, filterhead, entities } = this.state;

    return {
      searchText,
      filterhead,
      entities: entities.data,
      meta: entities.meta,
    };
  }

  /* ------------------- RENDER ------------------- */

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

    const isExpanded = isFocused && (searchText || "") !== "";
    const multiEnabled = this.multiSelectEnabled();

    const allSelected =
      this.state.selectedRows.length === this.state.entities.data.length &&
      this.state.entities.data.length > 0;

    const computedHeaders = settings.headers;
    const contentPayload = this.getContentPayload();

    const contentNode =
      typeof this.props.content === "function"
        ? this.props.content(contentPayload)
        : this.props.content
        ? React.cloneElement(
            this.props.content as ReactElement<any>,
            contentPayload
          )
        : null;

    return (
      <div className="flex flex-col h-[100dvh] w-full">
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

        <div className="shrink-0">
          <div className="flex flex-col w-full mb-5">
            <header className="flex w-full flex-col md:flex-row justify-start md:justify-between items-center space-x-6">
              <div className="flex flex-col w-full mx-10 md:mx-0 ">
                {settings.header && (
                  <div className="flex w-full flex-col">
                    <h3
                      className={
                        !Commons.isEmptyOrNull(settings.header.class)
                          ? settings.header.class
                          : "text-grey-darkest uppercase text-3xl 2xl:text-5xl dark:text-white font-poppinsBlack"
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
                            disabled={
                              this.state.isLoading || this.state.isFetchingMore
                            }
                            title={
                              this.state.isLoading || this.state.isFetchingMore
                                ? "Please wait for data to finish loading"
                                : "Search"
                            }
                            onFocus={() =>
                              this.setState({
                                isFocused: true,
                                openActionDropdown: null,
                              })
                            }
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
                        </div>
                      </div>

                      <div
                        className="flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full dark:hover:text-black bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-800 dark:bg-darkDialogBackground cursor-pointer"
                        onClick={this.handleRetry}
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
                          onClick={this.handleOnOpenFilter}
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

            {contentNode && (
              <div className="w-full md:w-auto mt-7 md:mt-0">{contentNode}</div>
            )}

            {this.renderExtraActions()}
          </div>

          <DesmyFilterTags
            filters={filterhead}
            onRemove={this.removeFilterByName}
          />
          {this.renderBreadcrumb()}
        </div>

        <div className="flex-1 min-h-0">
          <div
            ref={this.scrollContainer}
            className="scrollable_table pb-20 mb-16 flex flex-col h-full overflow-auto scrollbar-width"
            onScroll={this.handleScroll}
          >
            <table>
              <TableHeader
                headers={computedHeaders}
                sortedColumn={this.state.custom_settings.sorted_column}
                order={this.state.custom_settings.order}
                exceptionalColumns={this.state.exceptionalColumns}
                onSort={this.handleSort}
                tableDataSettings={settings.table_data}
                multiSelectEnabled={multiEnabled}
                allSelected={allSelected}
                onToggleSelectAll={this.toggleSelectAll}
              />

              <TableBody
                dataCollection={entities.data}
                headers={computedHeaders}
                exceptionalColumns={this.state.exceptionalColumns}
                selected={selected}
                handleOnSuccess={this.handleOnSuccess}
                settings={settings}
                handleEdit={(row: any) => settings.handleEdit?.(row)}
                isLoading={isLoading}
                rowHeight={this.rowHeight}
                hasMore={this.hasMore()}
                onRetry={this.handleRetry}
                error={error}
                entities={entities}
                searchText={this.state.searchText}
                isFetchingMore={this.state.isFetchingMore}
                multiSelectEnabled={multiEnabled}
                selectedRows={this.state.selectedRows}
                onToggleRowSelect={this.toggleRowSelect}
              />
            </table>

            <div ref={this.sentinelRef} className="h-1 w-full" />
          </div>
        </div>
      </div>
    );
  }
}

export { DesmyDataTable };