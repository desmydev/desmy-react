import React, { Component, RefObject } from 'react';
import DesmyCommons from '../apis/DesmyCommons';

interface Props {
  placeholder?: string;
  disabled?: boolean;
  selectedMultiple: any[];
  selectedList: any;
  all?: string;
  selectedAll?: boolean;
  onClick: () => void;
  onClear: () => void;
  buttonRef: RefObject<HTMLDivElement | null>;
  dropdownPopoverShow: boolean;
}

export class DropdownButton extends Component<Props> {
  render() {
    const {
      placeholder,
      disabled,
      selectedMultiple,
      selectedList,
      all,
      selectedAll,
      onClick,
      onClear,
      buttonRef,
      dropdownPopoverShow,
    } = this.props;

    return (
      <div className={`relative w-full h-12 border font-poppinsRegular bg-inherit border-black dark:border-white`}>
        
        <div
          className="relative h-full w-full text-xs bg-inherit"
          ref={buttonRef}
          onClick={() => {
            if (!disabled) onClick();
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && !disabled) onClick();
          }}
        >
          <div
            className={`absolute left-1.5 ${
              (placeholder &&
              (selectedList.name != null || selectedMultiple.length > 0)) ||
              (all && selectedAll)
                ? '-top-2.5 text-xs'
                : 'text-sm top-2.5'
            } px-2 bg-inherit transition-all`}
          >
            {placeholder}
          </div>
          <div
            className={`flex relative h-12 ${
              disabled ? 'cursor-not-allowed' : 'cursor-pointer'
            } px-2 items-center w-full`}
          >
            <div className="flex w-full justify-between">
              <div className='pr-5'>
                <div className={`mr-2 bg-inherit text-black text-xs dark:text-white w-full justify-start text-start line-clamp-1`}>
                {selectedMultiple.length > 0
                  ? selectedMultiple.map((i) => i.name).join(', ')
                  : selectedList.name || (all && selectedAll ? all : '')}
                </div>
                
              </div>
              {!disabled && (
                <div>
                  {!dropdownPopoverShow ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 dark:text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 dark:text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div onClick={onClear} className={`absolute right-6 top-4 transition duration-300 ease-in-out ${
                    (!DesmyCommons.isEmptyOrNull(selectedList?.name) || !DesmyCommons.isEmptyOrNull(selectedMultiple)) ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 text-red-500 cursor-pointer">
                    <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" ></path>
                  </svg>
                </div>
      </div>
    );
  }
}
