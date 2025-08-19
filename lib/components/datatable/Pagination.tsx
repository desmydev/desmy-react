import React, { Component } from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export class Pagination extends Component<PaginationProps> {
  render() {
    const { totalPages, currentPage, onPageChange } = this.props;
    if (totalPages <= 1) return null;

    const paginationButtons: React.ReactElement[] = []; // use React.ReactElement here instead of JSX.Element

    const addButton = (page: number) => {
      paginationButtons.push(
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 mx-1 border-0 rounded ${
            currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {page}
        </button>
      );
    };

    addButton(1);
    if (currentPage > 3) {
      paginationButtons.push(
        <span key="left-ellipsis" className="px-3 py-1 mx-1">
          ...
        </span>
      );
    }

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      addButton(i);
    }

    if (currentPage < totalPages - 2) {
      paginationButtons.push(
        <span key="right-ellipsis" className="px-3 py-1 mx-1">
          ...
        </span>
      );
    }

    if (totalPages > 1) {
      addButton(totalPages);
    }

    return (
      <div className="flex justify-center mt-4">
        {currentPage > 1 && (
          <button
            onClick={() => onPageChange(currentPage - 1)}
            className="px-3 py-1 mx-1 border rounded bg-gray-200 hover:bg-gray-300"
          >
            Previous
          </button>
        )}
        {paginationButtons}
        {currentPage < totalPages && (
          <button
            onClick={() => onPageChange(currentPage + 1)}
            className="px-3 py-1 mx-1 border rounded bg-gray-200 hover:bg-gray-300"
          >
            Next
          </button>
        )}
      </div>
    );
  }
}
