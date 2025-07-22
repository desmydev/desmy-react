import React, { Component } from 'react';

interface Props {
  value: string;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  inputClassName?: string;
  label: string;
  onFocus: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export class SearchInput extends Component<Props> {
  private inputRef = React.createRef<HTMLInputElement>();

  focus() {
    this.inputRef.current?.focus();
  }

  render() {
    const { value, placeholder, disabled, autoFocus, maxLength, inputClassName, label, onFocus, onChange } = this.props;

    return (
      <div className="relative w-full bg-inherit">
        <input
          ref={this.inputRef}
          type="text"
          maxLength={maxLength}
          disabled={disabled}
          autoFocus={autoFocus}
          placeholder={placeholder || 'Search...'}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          className={`peer bg-transparent h-12 border border-black ${
            disabled ? 'cursor-not-allowed' : ''
          } dark:border-white dark:text-white placeholder-transparent text-xs 2xl:text-sm ring-0 px-2 w-full focus:outline-none focus:ring-0 dark:focus:border-white ${inputClassName}`}
        />
        <label
          htmlFor="data"
          title={label}
          className="pointer-events-none absolute cursor-text line-clamp-1 left-0 -top-3.5 text-[11px] dark:text-white bg-inherit mx-1 px-2 peer-placeholder-shown:text-sm dark:peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-black dark:peer-focus:text-white peer-focus:text-[11px] transition-all"
        >
          {label}
        </label>
      </div>
    );
  }
}
