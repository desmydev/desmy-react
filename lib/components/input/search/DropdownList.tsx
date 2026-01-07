import React, { Component, createRef } from 'react';
import { DesmyDropdownItem } from '../../apis/SharedProps';

interface Props {
  options: DesmyDropdownItem[];
  isLoading: boolean;
  error: { state: boolean; message: string };
  total: number;
  onScroll: (e: React.UIEvent<HTMLUListElement>) => void;
  onOptionClick: (option: DesmyDropdownItem) => void;
  onDoneClick: () => void;
  dropdownClass?: string;
  is_multiple?: boolean;
  selectedCount: number;
  searchText: string;
  onLoadMore: () => void;
  hasMore: boolean;

  // ✅ NEW: used to bold and check selected items
  selectedIds: string[];
}

interface State {
  maxHeight: number;
}

export class DropdownList extends Component<Props, State> {
  dropdownRef = createRef<HTMLDivElement>();

  state: State = {
    maxHeight: 300,
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateMaxHeight);
    this.updateMaxHeight();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.options !== this.props.options) {
      this.updateMaxHeight();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateMaxHeight);
  }

  updateMaxHeight = () => {
    if (!this.dropdownRef.current) return;

    const rect = this.dropdownRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - rect.top - 10;

    this.setState({ maxHeight: spaceBelow > 100 ? spaceBelow : 100 });
  };

  handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    const target = e.currentTarget;
    if (target.scrollHeight - target.scrollTop <= target.clientHeight + 50) {
      this.props.onScroll(e);
    }
  };

  // ✅ circular checked svg
  CheckedCircle = ({ checked }: { checked: boolean }) => {
    if (!checked) return <svg className="w-5 h-5 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
      <path  fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8" ></path>
    </svg>;

    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-3 flex-shrink-0">
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
    </svg>
    );
  };

  render() {
    const {
      options,
      isLoading,
      error,
      total,
      onOptionClick,
      onDoneClick,
      selectedCount,
      searchText,
      onLoadMore,
      is_multiple,
      hasMore,
      selectedIds,
    } = this.props;

    const { maxHeight } = this.state;

    // ✅ fast lookup of selected items
    const selectedSet = new Set(selectedIds.map(String));

    return (
      <div className="w-full" ref={this.dropdownRef}>
        <div
          className="sticky top-0 bg-white dark:bg-darkDialogBackground z-20
            flex w-full justify-between px-3 py-2.5 items-center border-b-[1px] border-gray-200 dark:border-darkPrimaryBorder"
        >
          <div className="flex w-full dark:text-white text-sm justify-start uppercase font-bold items-center">
            {selectedCount > 0
              ? `Selected Data: ${selectedCount}`
              : !searchText
              ? `Recent Data`
              : `Search Found (${total})`}
          </div>

          <div className="flex justify-end ml-3">
            <div
              className="border border-gray-300 dark:border-darkPrimaryBorder text-gray-500 hover:bg-gray-600 hover:text-white cursor-pointer text-xs px-2 py-1 uppercase rounded-full"
              onClick={onDoneClick}
            >
              Done
            </div>
          </div>
        </div>

        <ul
          onScroll={this.handleScroll}
          className="z-10"
          style={{ maxHeight: maxHeight, minHeight: 100, overflowY: 'auto' }}
        >
          {options.length > 0 ? (
            options.map((option) => {
              const isSelected = selectedSet.has(String(option.id));

              return (
                <li key={option.id ?? option.name ?? Math.random()}>
                  <div
                    onClick={() => onOptionClick(option)}
                    className={`flex items-center text-sm py-4 px-4 cursor-pointer w-full whitespace-no-wrap 
                      hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black transition duration-500 ease-in-out 
                      dark:text-white group ${
                        isSelected
                          ? 'font-bold '
                          : 'font-normal'
                      }`}
                  >
                    {/* ✅ selected indicator */}
                    

                    {option.icon && (
                      <img src={option.icon} alt="icon" className="w-4 h-4 mr-2" />
                    )}

                    <div className='flex justify-between'>
                      <div>
                        <div className={`${isSelected ? ' font-poppinsBold' : ''} mr-1`}>
                          {option.name}
                        </div>
                        <div
                          className={`text-xs text-gray-600 dark:text-white dark:group-hover:text-black ${
                            isSelected ? 'dark:text-black text-gray-700' : ''
                          }`}
                        >
                          {option?.hint}
                        </div>
                      </div>
                    </div>
                   {/* {is_multiple && <this.CheckedCircle checked={isSelected} />} */}
                  </div>
                </li>
              );
            })
          ) : isLoading ? (
            <div className="flex text-xs dark:text-white h-32 w-full justify-center items-center">
              Loading...
            </div>
          ) : error.state ? (
            <li className="p-2 text-red-500">
              <div className="flex w-full text-xs h-32 p-5 justify-center items-center text-center">
                {error.message}
              </div>
            </li>
          ) : (
            <li className="p-2 text-gray-500">
              <div className="flex w-full h-32 justify-center items-center">
                No results found
              </div>
            </li>
          )}

          {/* Bottom loading indicator */}
          {isLoading && options.length > 0 && (
            <li className="p-2 text-center text-xs dark:text-white select-none">
              Loading...
            </li>
          )}

          {/* Load More Button */}
          {!isLoading && hasMore && (
            <li className="p-2 text-center">
              <button
                onClick={onLoadMore}
                className="px-4 py-1 text-xs bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                Load More
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
