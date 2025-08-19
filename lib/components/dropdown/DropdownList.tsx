import React, { Component } from 'react';
import { FixedSizeList as List } from 'react-window';
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
  renderRow = ({
    index,
    style,
    data,
  }: {
    index: number;
    style: React.CSSProperties;
    data: {
      items: DesmyDropdownItem[];
      isMultiple?: boolean;
      selectedMultiple: DesmyDropdownItem[];
      selectedSingle: DesmyDropdownItem;
      onSelectItem: (e: React.MouseEvent<HTMLDivElement>, item: DesmyDropdownItem) => void;
      dropdownListClass?: string;
      enableDecrypt?: boolean;
      encryptHandler?: (data: any) => any;
    };
  }) => {
    const {
      items,
      isMultiple,
      selectedMultiple,
      selectedSingle,
      onSelectItem,
      dropdownListClass,
      enableDecrypt,
      encryptHandler,
    } = data;

    const item = items[index];
    const isSelected = isMultiple
      ? selectedMultiple.some((sel) => sel.id === item.id)
      : selectedSingle.id === item.id;

    const handleEncrypt = (val: any) => {
      if (enableDecrypt && encryptHandler) return encryptHandler(val);
      return val;
    };

    return (
      <div
        style={style}
        key={item.id}
        className={`flex text-sm py-2 px-4 my-3 cursor-pointer w-full whitespace-nowrap hover:bg-gray-200 dark:hover:bg-white dark:text-white dark:hover:text-black ${
          isSelected ? 'font-poppinsBold' : 'font-normal'
        } ${dropdownListClass}`}
        onClick={(e) => onSelectItem(e, item)}
        title={handleEncrypt(item.name)}
      >
        {item.icon && <img className="w-4 h-4 mr-2" alt="icon" src={handleEncrypt(item.icon)} />}
        <div className="line-clamp-1">{handleEncrypt(item.name)}</div>
        {isSelected ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-auto">
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        ) : null}
      </div>
    );
  };

  render() {
    const {
      items,
      filterText,
      isMultiple,
      allText,
      selectedAll,
      dropdownListClass,
      onSelectAll,
      onClearSelected,
      clearLabel,
      error,
      isLoading,
      onRetry,
      emptyMessage,
      selectedMultiple,
      selectedSingle,
      onSelectItem,
      enableDecrypt,
      encryptHandler,
    } = this.props;

    const filteredItems = items.filter(
      (item: any) => item?.name?.toLowerCase().includes(filterText.toLowerCase())
    );
    const ITEM_SIZE = 50; // row height in px
    const MAX_HEIGHT = 250;

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

    if (filteredItems.length === 0) {
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
            className={`flex text-sm py-2 px-4 cursor-pointer w-full whitespace-nowrap dark:hover:bg-white dark:text-white dark:hover:text-black ${
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

        <List
          height={Math.min(filteredItems.length * ITEM_SIZE, MAX_HEIGHT)}
          width="100%"
          itemCount={filteredItems.length}
          itemSize={40}
          itemData={{
            items: filteredItems,
            isMultiple,
            selectedMultiple,
            selectedSingle,
            onSelectItem,
            dropdownListClass,
            enableDecrypt,
            encryptHandler,
          }}
        >
          {this.renderRow}
        </List>
      </>
    );
  }
}
