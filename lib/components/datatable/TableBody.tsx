import React, { Component, createRef } from "react";
import { DatatableCard } from "./DatatableCard";

interface TableBodyProps {
  dataCollection: any[];
  headers: string[];
  exceptionalColumns: string[];
  selected: number;
  handleOnSuccess: (index: number) => void;
  settings: any;
  isLoading?: boolean;
  isFetchingMore?: boolean;
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

  /** ✅ MULTI SELECT SUPPORT */
  multiSelectEnabled?: boolean;
  selectedRows?: number[];
  onToggleRowSelect?: (index: number) => void;
}

export class TableBody extends Component<TableBodyProps> {
  tableBodyRef = createRef<HTMLTableSectionElement>();

  /** ✅ prevent row click when clicking on special elements */
  isBlockedClickTarget = (target: HTMLElement) => {
    return (
      target.closest("button") ||
      target.closest("a") ||
      target.closest("input") ||
      target.closest("svg") ||
      target.closest("[data-stop-row-click]")
    );
  };

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

      /** ✅ multi select props */
      multiSelectEnabled,
      selectedRows = [],
      onToggleRowSelect,
    } = this.props;

    /** 🔥 IMPORTANT FIX
     * Do NOT slice data here.
     * Infinite scroll already controls how much data exists.
     */
    const visibleData = dataCollection;

    const total =
      entities?.meta?.total ??
      entities?.meta?.count ??
      null;

    const loaded = dataCollection.length;

    /** ✅ total visible columns */
    const totalColumns = multiSelectEnabled
      ? headers.length + 1
      : headers.length;

    return (
      <tbody ref={this.tableBodyRef}>
        {/* 🔹 Error */}
        {error?.state && (
          <tr>
            <td colSpan={totalColumns} className="text-center py-6 text-sm text-red-500">
              <div className="flex h-96 flex-col justify-center items-center space-y-3">
                <span>{error.message || "Something went wrong while loading data."}</span>
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
            <td colSpan={totalColumns}>
              <div className="flex flex-col w-full h-96 mt-10 justify-center dark:text-white items-center space-y-4">
                <div className="text-xs 2xl:text-sm">Loading.......</div>
              </div>
            </td>
          </tr>
        )}

        {/* 🔹 No records */}
        {!error?.state && !isLoading && visibleData.length === 0 && !hasMore && (
          <tr>
            <td colSpan={totalColumns}>
              <div className="flex h-96 w-full justify-center items-center text-sm dark:text-white">
                No records found
              </div>
            </td>
          </tr>
        )}

        {/* 🔹 Data rows */}
        {!error?.state &&
          visibleData.map((user, index) => {
            const isSelected = selected === index;
            const isMultiSelected = selectedRows.includes(index);
            const isEvenRow = index % 2 === 0;

            const bgClass = isMultiSelected
              ? "bg-primary/30 dark:text-black dark:bg-darkPrimaryBorder dark:text-white border-b-[0.5px] dark:border-white/30"
              : isSelected
              ? "bg-gray-300 dark:bg-darkPrimary"
              : isEvenRow
              ? "dark:bg-[#1c1c1c] bg-[#f3f4f6]"
              : "bg-inherit";

            return (
              <tr
                key={index}
                className={`${bgClass} cursor-pointer dark:text-white hover:bg-gray-300 dark:hover:bg-white dark:hover:text-black transition`}
                onClick={(e) => {
                  if (window.getSelection()?.toString().length) return;

                  const target = e.target as HTMLElement;
                  if (this.isBlockedClickTarget(target)) return;

                  const td = target.closest("td");
                  if (!td) return;

                  /** ✅ Multi-select click */
                  if (multiSelectEnabled && onToggleRowSelect) {
                    onToggleRowSelect(index);
                    return;
                  }

                  const cellIndex = Array.from(td.parentElement?.children ?? []).indexOf(td);
                  const adjustedIndex = multiSelectEnabled ? cellIndex - 1 : cellIndex;
                  const colName = headers[adjustedIndex]?.toLowerCase() || "";

                  const extraHandles =
                    settings?.extra_handle?.map((item: any) => item.name?.toLowerCase()) || [];

                  if (extraHandles.includes(colName)) {
                    settings.handleOnClickExtra?.(user, colName);
                    return;
                  }

                  if (exceptionalColumns.includes(colName)) return;

                  if (onRowClick) {
                    onRowClick(user, index);
                  } else {
                    settings.handleOnViewClick?.(user);
                  }
                }}
              >
                {/* ✅ Checkbox column */}
                {multiSelectEnabled && (
                  <td className="w-12 px-2">
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={isMultiSelected}
                        onChange={() => onToggleRowSelect?.(index)}
                        onClick={(e) => e.stopPropagation()}
                        className="w-4 h-4 cursor-pointer"
                      />
                    </div>
                  </td>
                )}

                {headers.map((_, j) => (
                  <td key={`trex-${index}-${j}`} className="px-2">
                    <DatatableCard
                      index={index}
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

        {/* 🔹 Fetching more */}
        {!error?.state && isFetchingMore && dataCollection.length > 0 && (
          <tr>
            <td colSpan={totalColumns} className="text-center py-4 text-xs dark:text-white">
              Loading more...
            </td>
          </tr>
        )}

        {/* 🔹 End message */}
        {!error?.state &&
          !isLoading &&
          !isFetchingMore &&
          !hasMore &&
          dataCollection.length > 0 &&
          total !== null && (
            <tr>
              <td colSpan={totalColumns} className="text-center py-4 text-xs dark:text-white opacity-70">
                All {loaded} records loaded
              </td>
            </tr>
          )}
      </tbody>
    );
  }
}
