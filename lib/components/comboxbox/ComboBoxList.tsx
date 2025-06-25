import React, { Component } from "react";
import ComboBoxOption from "./ComboBoxOption";
import { OptionType } from "./types";

interface ComboBoxListProps<T extends OptionType> {
  options: T[];
  loading: boolean;
  selectedOptions: T[];
  className?: string;
  highlightedIndex: number;
  onOptionClick: (option: T) => void;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  onOptionHover: (index: number) => void;
  style?: React.CSSProperties;
}

export default class ComboBoxList<T extends OptionType> extends Component<ComboBoxListProps<T>> {
  render() {
    const {
      options,
      loading,
      selectedOptions,
      highlightedIndex,
      onOptionClick,
      onScroll,
      onOptionHover,
      className,
      style,
    } = this.props;

    return (
      <div
        onScroll={onScroll}
        className={`z-10 max-h-72 border-[1px] min-h-48 border-gray-200 dark:border-gray-700 shadow-lg w-full overflow-auto rounded text-sm ${
          className || "bg-white dark:bg-darkBackground dark:text-white"
        }`}
        role="listbox"
        style={style}
      >
        {options.length === 0 && !loading && (
          <div className="flex w-full h-24 text-sm dark:text-white justify-center items-center text-center">No record found</div>
        )}
        {options.map((opt, i) => (
          <ComboBoxOption
            key={opt.id}
            option={opt}
            isSelected={selectedOptions.some((sel) => sel.id === opt.id)}
            isHighlighted={highlightedIndex === i}
            onClick={onOptionClick}
            onMouseEnter={() => onOptionHover(i)}
          />
        ))}
        {loading && (
          <div className="p-2 text-center text-gray-500 dark:text-white">Loading...</div>
        )}
      </div>
    );
  }
}
