import React, { Component, createRef } from "react";
import { DatatableCard } from "./DatatableCard";

interface TableBodyProps {
  dataCollection: any[];
  headers: string[];
  exceptionalColumns: string[];
  selected: number;
  handleOnSuccess: (index: number) => void;
  settings: any;
  isLoading?: boolean; // 🔹 initial load
  isFetchingMore?: boolean; // 🔹 scroll pagination
  handleEdit: (user: any, type?: string) => void;
  rowHeight: number;
  onRowClick?: (user: any, index: number) => void;
  hasMore?: boolean;
  error?: { state?: boolean; message?: string };
  onRetry?: () => void;
  entities?: {
    meta?: {
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
  searchText?: string;
}

interface TableBodyState {
  visibleCount: number;
}

export class TableBody extends Component<TableBodyProps, TableBodyState> {
  tableBodyRef = createRef<HTMLTableSectionElement>();

  constructor(props: TableBodyProps) {
    super(props);
    this.state = { visibleCount: 20 };
  }

  componentDidUpdate(prevProps: TableBodyProps) {
    const dataChanged = prevProps.dataCollection !== this.props.dataCollection;
    const searchChanged = prevProps.searchText !== this.props.searchText;

    if (dataChanged || searchChanged) {
      // reset visible count whenever new data or search changes
      this.setState({ visibleCount: 120 });
    }
  }

  render() {
    const {
      dataCollection,
      headers,
      exceptionalColumns,
      selected,
      handleOnSuccess,
      settings,
      handleEdit,
      isLoading,
      isFetchingMore,
      error,
      onRetry,
      hasMore,
      entities,
      onRowClick,
    } = this.props;

    const { visibleCount } = this.state;
    const visibleData = dataCollection.slice(0, visibleCount);

    const total = entities?.meta?.total ?? entities?.meta?.count ?? null;
    const loaded = dataCollection.length;

    return (
      <tbody ref={this.tableBodyRef}>
        {/* 🔹 Error */}
        {error?.state && (
          <tr>
            <td
              colSpan={headers.length}
              className="text-center py-6 text-sm text-red-500"
            >
              <div className="flex h-96 flex-col justify-center items-center space-y-3">
                <span>
                  {error.message || "Something went wrong while loading data."}
                </span>
                {onRetry && (
                  <button
                    onClick={onRetry}
                    className="px-4 py-2 text-xs rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    Retry
                  </button>
                )}
              </div>
            </td>
          </tr>
        )}

        {/* 🔹 Initial Loading */}
        {!error?.state && isLoading && visibleData.length === 0 && (
          <tr>
            <td colSpan={headers.length}>
              <div className="flex flex-col w-full h-96 mt-10 justify-center dark:text-white items-center space-y-4">
                <svg
                  role="status"
                  className="flex w-4 h-4 2xl:w-6 2xl:h-6 text-black dark:text-white animate-spin"
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
                <div className="text-xs 2xl:text-sm">Loading.......</div>
              </div>
            </td>
          </tr>
        )}

        {/* 🔹 No records */}
        {!error?.state &&
          !isLoading &&
          visibleData.length === 0 &&
          !hasMore && (
            <tr>
              <td colSpan={headers.length}>
                <div className="flex h-96 w-full justify-center items-center text-sm dark:text-white">
                  No records found
                </div>
              </td>
            </tr>
          )}

        {/* 🔹 Data rows */}
        {!error?.state &&
          visibleData.map((user, actualIndex) => {
            const isSelected = selected === actualIndex;
            const isEvenRow = actualIndex % 2 === 0;
            const bgClass = isSelected
              ? "bg-gray-300 dark:bg-darkPrimary"
              : isEvenRow
              ? "dark:bg-[#1c1c1c] bg-[#f3f4f6]"
              : "bg-inherit";

            return (
              <tr
                key={actualIndex}
                className={`${bgClass} cursor-pointer dark:text-white dark:hover:text-black hover:bg-gray-300 dark:hover:bg-white transition`}
                onClick={(e) => {
                  if (window.getSelection()?.toString().length) return;
                  if (
                    e.type === "contextmenu" ||
                    (e as React.MouseEvent).button === 2
                  )
                    return;

                  const target = e.target as HTMLElement;
                  const td = target.closest("td");
                  if (!td) return;

                  const cellIndex = Array.from(td.parentElement?.children ?? []).indexOf(td);
                  const colName = headers[cellIndex]?.toLowerCase() || "";

                  const extraHandles =
                    settings?.extra_handle?.map((item: any) => item.name?.toLowerCase()) || [];

                  if (extraHandles.includes(colName)) {
                    settings.handleOnClickExtra?.(user, colName);
                    return;
                  }else{
                    if (exceptionalColumns.includes(colName)) {
                      if (!extraHandles.includes(colName)) {
                        if (onRowClick) {
                          onRowClick(user, actualIndex);
                        } else {
                          settings.handleOnViewClick?.(user);
                        }
                      }
                      return;
                    }

                    if (onRowClick) {
                      onRowClick(user, actualIndex);
                    } else {
                      settings.handleOnViewClick?.(user);
                    }
                  }
                  
                }}
                onContextMenu={(e) => e.stopPropagation()}
              >
                {headers.map((_, j) => (
                  <td key={`trex-${actualIndex}-${j}`} className="px-3">
                    <DatatableCard
                      index={actualIndex}
                      handleOnSuccess={handleOnSuccess}
                      acces_key={j}
                      error={() => {}}
                      handleEdit={() => handleEdit(user)}
                      settings={settings}
                      exceptional_columns={exceptionalColumns}
                      user={user}
                      headers={headers}
                    />
                  </td>
                ))}
              </tr>
            );
          })}

        {/* 🔹 Show loader row while fetching more */}
        {!error?.state && isFetchingMore && dataCollection.length > 0 && (
          <tr>
            <td
              colSpan={headers.length}
              className="text-center py-4  mb-14 text-xs dark:text-white"
            >
              Loading more...
            </td>
          </tr>
        )}

        {/* 🔹 End message (only if total count is known) */}
        {!error?.state &&
          !isLoading &&
          !isFetchingMore &&
          !hasMore &&
          dataCollection.length > 0 &&
          total !== null && (
            <tr>
              <td
                colSpan={headers.length}
                className="text-center py-4 mb-14 text-xs dark:text-white opacity-70"
              >
                All {loaded} records loaded
              </td>
            </tr>
          )}
      </tbody>
    );
  }
}
