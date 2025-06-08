import React, { Component } from 'react';
import { DesmyDropdownItem } from '../apis/SharedProps';

interface Props {
  items: DesmyDropdownItem[];
  filterText: string;
  isMultiple?: boolean;
  selectedMultiple: DesmyDropdownItem[];
  selectedSingle: DesmyDropdownItem;
  allText?: string;
  selectedAll?: boolean;
  dropdownListClass?: string;
  onSelectAll?: () => void;
  onClearSelected?: () => void;
  onSelectItem: (e: React.MouseEvent<HTMLDivElement>, item: DesmyDropdownItem) => void;
  clearLabel?: string;
  error?: { state: boolean; message: string };
  isLoading?: boolean;
  onRetry?: () => void;
  emptyMessage?: string;
  enableDecrypt?: boolean;
  encryptHandler?: (data: any) => any;
}

export class DropdownList extends Component<Props> {
  render() {
    const {
      items,
      filterText,
      isMultiple,
      selectedMultiple,
      selectedSingle,
      allText,
      selectedAll,
      dropdownListClass,
      onSelectAll,
      onClearSelected,
      onSelectItem,
      clearLabel,
      error,
      isLoading,
      onRetry,
      emptyMessage,
      enableDecrypt,
      encryptHandler,
    } = this.props;

    const handleEncrypt = (data: any) => {
      if (enableDecrypt && encryptHandler) return encryptHandler(data);
      return data;
    };

    const filteredItems = items.filter((item:any) =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    if (error?.state) {
      return (
        <div className="flex flex-col w-full text-red-500 justify-center items-center h-24">
          <div className="text-xs">{error.message}</div>
          <div
            onClick={onRetry}
            className="text-xs uppercase bg-red-500 hover:bg-red-600 transition-all rounded-full text-white px-4 py-2 font-poppinsBold mt-2 cursor-pointer"
          >
            Retry
          </div>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="flex flex-col w-full justify-center items-center mt-5">
          <span className="text-sm">Loading...</span>
        </div>
      );
    }

    if (items.length === 0) {
      return (
        <div className="flex w-full h-24 text-sm dark:text-white justify-center items-center text-center">
          {emptyMessage ?? 'No data found'}
        </div>
      );
    }

    return (
      <>
        {isMultiple && allText && (
          <div
            className={`flex text-sm py-2 px-4 cursor-pointer w-full whitespace-nowrap dark:hover:bg-white dark:hover:text-black ${
              selectedAll ? 'font-poppinsBold' : 'font-normal'
            } ${dropdownListClass}`}
            onClick={onSelectAll}
          >
            {allText}
          </div>
        )}

        {clearLabel && (
          <div
            className={`flex text-sm py-2 px-4 cursor-pointer w-full whitespace-nowrap dark:hover:bg-white dark:hover:text-black ${dropdownListClass}`}
            onClick={onClearSelected}
          >
            {clearLabel}
          </div>
        )}

        {filteredItems.map((data, i) => {
          const isSelected = isMultiple
            ? selectedMultiple.some((item) => item.id === data.id)
            : selectedSingle.id === data.id;

          return (
            <div
              key={i}
              className={`flex text-sm py-2 px-4 cursor-pointer w-full whitespace-nowrap hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black ${
                isSelected ? 'font-poppinsBold' : 'font-normal'
              } ${dropdownListClass}`}
              onClick={(e) => onSelectItem(e, data)}
              title={handleEncrypt(data.name)}
            >
              {data.icon && (
                <img
                  className="w-4 h-4 mr-2"
                  alt="icon"
                  src={handleEncrypt(data.icon)}
                />
              )}
              <div className="line-clamp-1">{handleEncrypt(data.name)}</div>
              {isSelected ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 ml-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              ):(
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-5 h-5 ml-auto">
                  <path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"></path>
                </svg>
              )}
            </div>
          );
        })}
      </>
    );
  }
}
