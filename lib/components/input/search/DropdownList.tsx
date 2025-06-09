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
  selectedCount: number;
  searchText: string;
}

interface State {
  maxHeight: number;
}

export class DropdownList extends Component<Props, State> {
  dropdownRef = createRef<HTMLDivElement>();

  state: State = {
    maxHeight: 300, // default fallback height
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
    const spaceBelow = viewportHeight - rect.top - 10; // 10px margin from bottom

    this.setState({ maxHeight: spaceBelow > 100 ? spaceBelow : 100 }); // minimum 100px height
  };

  handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    this.props.onScroll(e);
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
    } = this.props;
    const { maxHeight } = this.state;

    return (
      <div className='w-full' ref={this.dropdownRef}>
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
            options.map((option) => (
              <li key={option.id ?? option.name ?? Math.random()}>
                <div
                  onClick={() => onOptionClick(option)}
                  className="flex items-center text-sm py-4 px-4 font-normal cursor-pointer w-full whitespace-no-wrap hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black transition duration-500 ease-in-out dark:text-white group"
                >
                  {option.icon && <img src={option.icon} alt="icon" className="w-4 h-4 mr-2" />}
                  <div>
                    <div>{option.name}</div>
                    <div className="text-xs text-gray-600 dark:text-white dark:group-hover:text-black">{option?.hint}</div>
                  </div>
                </div>
              </li>
            ))
          ) : isLoading ? (
            <div className="flex text-xs dark:text-white h-32 w-full justify-center items-center">Loading...</div>
          ) : error.state ? (
            <li className="p-2 text-red-500">
              <div className="flex w-full text-xs h-32 p-5 justify-center items-center text-center">{error.message}</div>
            </li>
          ) : (
            <li className="p-2 text-gray-500">
              <div className="flex w-full h-32 justify-center items-center">No results found</div>
            </li>
          )}

          {/* Bottom loading indicator when loading more and some data already loaded */}
          {isLoading && options.length > 0 && (
            <li className="p-2 text-center text-xs dark:text-white select-none">Loading...</li>
          )}
        </ul>
      </div>
    );
  }
}
