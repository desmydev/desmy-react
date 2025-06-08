import React, { Component } from "react";
import { OptionType } from "./types";

interface ComboBoxOptionProps<T extends OptionType> {
  option: T;
  isSelected: boolean;
  isHighlighted: boolean;
  onClick: (option: T) => void;
  onMouseEnter: () => void;
}

export default class ComboBoxOption<T extends OptionType> extends Component<ComboBoxOptionProps<T>> {
  render() {
    const { option, isSelected, isHighlighted, onClick, onMouseEnter } = this.props;
    const bgClass = isHighlighted ? "bg-gray-200 dark:bg-darkPrimaryBorderLight" : isSelected ? "bg-black-200 text-white dark:bg-darkPrimaryBorder" : "";
    return (
      <div
        className={`cursor-pointer px-6 py-3 font-normal  font-poppinsRegular hover:bg-gray-100 text-black dark:text-white dark:hover:bg-white dark:hover:text-black ${bgClass}`}
        onClick={() => onClick(option)}
        onMouseEnter={onMouseEnter}
        role="option"
        aria-selected={isSelected}
        tabIndex={-1}
      >
        {option.name}
      </div>
    );
  }
}
