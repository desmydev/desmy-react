import React, { forwardRef } from "react";

interface ComboBoxInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  hasData:boolean
  placeholder:string
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void; // added onClick prop
}

const DesmyComboBoxInput = forwardRef<HTMLInputElement, ComboBoxInputProps>(
  ({ value, onChange, onFocus, onKeyDown, onClick,placeholder,hasData }, ref) => (
    <div className="flex w-full bg-inherit" onClick={onClick}>
      <input
        type="text"
        className="flex flex-grow focus:outline-none text-sm w-full placeholder-gray-300 dark:placeholder-gray-600"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        placeholder={`${hasData ? `Search here......`:``}`}
        autoComplete="off"
        ref={ref}
      />
      <div className={`absolute left-1.5  ${ ((placeholder != undefined && (hasData)) ) ? `-top-2.5  text-xs`:` text-sm top-2.5`} px-2 bg-inherit transition-all`}>{placeholder}</div>
    </div>
  )
);

export default DesmyComboBoxInput;
