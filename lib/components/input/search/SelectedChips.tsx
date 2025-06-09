import React, { Component } from 'react';
import { DesmyDropdownItem } from '../../apis/SharedProps';


interface Props {
  selectedOptions: DesmyDropdownItem[];
  onChipRemove: (option: DesmyDropdownItem) => void;
}

export class SelectedChips extends Component<Props> {
  render() {
    const { selectedOptions, onChipRemove } = this.props;

    return (
      <div className="flex flex-wrap max-h-32 overflow-y-scroll mt-4 items-center gap-2">
        {selectedOptions.map(
          (option) =>
            option.id && (
              <div
                key={option.id}
                className="flex items-center bg-gray-200 dark:bg-darkPrimaryBorder dark:text-white dark:hover:bg-white dark:hover:text-black rounded-full px-3 py-2 text-xs transition duration-500 ease-in-out"
              >
                {option.icon && <img src={option.icon} alt="icon" className="w-4 h-4 mr-2" />}
                {option.name}
                <button onClick={() => onChipRemove(option)} className="ml-2">
                  <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4 text-red-500">
                    <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
                  </svg>
                </button>
              </div>
            )
        )}
      </div>
    );
  }
}
