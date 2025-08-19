import React, { Component, ReactNode } from 'react';

interface TableHeaderProps {
  headers: string[];
  sortedColumn: string;
  order: 'asc' | 'desc';
  exceptionalColumns: string[];
  onSort: (col: string) => void;
  tableDataSettings: { name: string; class: string }[] | undefined;
}

export class TableHeader extends Component<TableHeaderProps> {
  columnHead(value: string): string {
    const header = value.split('_');
    if (header.length > 1 && this.props.exceptionalColumns.includes(header.slice(-1)[0].toLowerCase())) {
      return header.slice(0, -1).join(' ').toUpperCase();
    } else {
      return header.join(' ').toUpperCase();
    }
  }

  renderIcon() {
    if (this.props.order === 'asc') {
      return (
        <svg
          className="w-3 h-3 2xl:w-4 2xl:h-4 dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      );
    }
  }

  render(): ReactNode {
    return (
      <thead className="w-full">
        <tr className="text-sm">
          {this.props.headers.map((column, index) => {
            const exceptionalColumns = this.props.exceptionalColumns.includes(column.toLowerCase());
            const columnClass = this.props.tableDataSettings?.find((item) => item.name === column.toLowerCase());
            return (
              <th
                key={index}
                onClick={() => this.props.onSort(column)}
                className={`py-2 sticky ${
                  exceptionalColumns ? `w-4` : columnClass ? columnClass.class : ``
                }  top-0 border-b border-gray-200 text-xs 2xl:text-sm bg-gray-100 dark:border-gray-700 dark:bg-darkPrimary cursor-pointer`}
              >
                <div className="flex dark:text-white sticky top-0 px-6 py-2 2xl:py-3 text-gray-600 font-poppinsSemiBold tracking-wider uppercase text-xs select-none">
                  <span>{this.columnHead(column)}</span>
                  <span>{this.props.sortedColumn === column && this.renderIcon()}</span>
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}
