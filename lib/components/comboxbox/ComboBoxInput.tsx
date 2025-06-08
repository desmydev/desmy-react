import React, { forwardRef } from "react";

interface ComboBoxInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void; // added onClick prop
}

const DesmyComboBoxInput = forwardRef<HTMLInputElement, ComboBoxInputProps>(
  ({ value, onChange, onFocus, onKeyDown, onClick }, ref) => (
    <div className="flex w-full mt-4" onClick={onClick}>
      <input
        type="text"
        className="flex flex-grow focus:outline-none text-sm w-full"
        placeholder="Search..."
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        autoComplete="off"
        ref={ref}
      />
    </div>
  )
);

export default DesmyComboBoxInput;
