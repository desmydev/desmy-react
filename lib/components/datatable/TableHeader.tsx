import React, { Component, ReactNode } from "react";

interface TableHeaderProps {
  headers: string[];
  sortedColumn: string;
  order: "asc" | "desc";
  exceptionalColumns: string[];
  onSort: (col: string) => void;
  tableDataSettings: { name: string; class: string }[] | undefined;

  /** ✅ Multi select support */
  multiSelectEnabled?: boolean;
  allSelected?: boolean;
  onToggleSelectAll?: () => void;
}

export class TableHeader extends Component<TableHeaderProps> {
  columnHead(value: string): string {
    const header = value.split("_");
    if (
      header.length > 1 &&
      this.props.exceptionalColumns.includes(header.slice(-1)[0].toLowerCase())
    ) {
      return header.slice(0, -1).join(" ").toUpperCase();
    } else {
      return header.join(" ").toUpperCase();
    }
  }

  renderIcon() {
    if (this.props.order === "asc") {
      return (
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
      );
    } else {
      return (
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
    }
  }

  render(): ReactNode {
    const {
      headers,
      sortedColumn,
      exceptionalColumns,
      tableDataSettings,
      multiSelectEnabled,
      allSelected,
      onToggleSelectAll,
    } = this.props;

    return (
      <thead className="w-full">
        <tr className="text-sm">
          {/* ✅ Checkbox header column (REAL column like body) */}
          {multiSelectEnabled && (
            <th className="w-12 px-2 py-2 sticky top-0 border-b border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-darkPrimary">
              <div className="flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={!!allSelected}
                  onChange={(e) => {
                    e.stopPropagation();
                    onToggleSelectAll?.();
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-4 h-4 cursor-pointer"
                />
              </div>
            </th>
          )}

          {/* ✅ Normal header columns */}
          {headers.map((column, index) => {
            const isExceptional = exceptionalColumns.includes(column.toLowerCase());
            const columnClass = tableDataSettings?.find(
              (item) => item.name === column.toLowerCase()
            );

            return (
              <th
                key={index}
                onClick={() => this.props.onSort(column)}
                className={`py-2 sticky top-0 border-b border-gray-200 text-xs 2xl:text-sm bg-gray-100 dark:border-gray-700 dark:bg-darkPrimary cursor-pointer ${
                  isExceptional ? `w-4` : columnClass ? columnClass.class : ``
                }`}
              >
                <div className="flex items-center px-6 py-2 2xl:py-3 text-gray-600 dark:text-white font-poppinsSemiBold tracking-wider uppercase text-xs select-none">
                  <span>{this.columnHead(column)}</span>
                  <span className="ml-2">
                    {sortedColumn === column && this.renderIcon()}
                  </span>
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}
