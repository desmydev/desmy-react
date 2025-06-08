import React, { Component, ChangeEvent } from 'react';

interface Props {
  searchValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

export class DropdownSearch extends Component<Props> {
  render() {
    const { searchValue, onChange, inputRef } = this.props;
    return (
      <div className="flex w-full relative z-0 p-4 group border-black dark:border-white">
        <input
          type="text"
          name="search"
          autoComplete="off"
          ref={inputRef}
          value={searchValue}
          onChange={onChange}
          className="block py-2.5 text-xs 2xl:text-sm px-0 bg-inherit w-full text-black dark:text-white border-0 border-b-2 border-black dark:border-white appearance-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white peer"
          placeholder=" Search here...."
        />
        
      </div>
    );
  }
}
