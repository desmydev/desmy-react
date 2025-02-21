import React, { Component, createRef } from "react";
import { createPopper } from "@popperjs/core";
import { format, parseISO, isValid } from "date-fns";
import { DatePickerProps } from "../apis/SharedProps";
import { DesmyTextInput } from "../input/DesmyTextInput";
import Days from "./Days";
import { DateContext, DateContextProps } from "./DateContext";
import DesmyCommons from "../apis/DesmyCommons";

interface DatePickerState {
    wasOpenBeforeBlur: boolean;
    isFocusTriggered: boolean;
  }

class DatePickerProvider extends Component<DatePickerProps,DatePickerState> {
  static contextType = DateContext;
  declare context: DateContextProps;
  parentContainerRef = createRef<HTMLDivElement>();
  inputRef = createRef<HTMLInputElement | null>();
  popoverDropdownRef = createRef<HTMLDivElement | null>();
  popperInstance: ReturnType<typeof createPopper> | null = null;


  private saveDateValue: { startDate: string; endDate: string };

  constructor(props: DatePickerProps) {
    super(props);

    this.inputRef = React.createRef();
    this.popoverDropdownRef = React.createRef();
    this.state = {
        wasOpenBeforeBlur: false,
        isFocusTriggered: false,
    };
    this.saveDateValue = { startDate: "", endDate: "" };
  }

  async componentDidMount(): Promise<void> {
    document.addEventListener('mousedown', this.handleClickOutside);
    this.handleDefault()
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }
  handleDefault=()=>{
    const { defaultValue } = this.props;
    const { startDate, endDate, setStartDate, setEndDate } = this.context;
    
    const parsedStartDate = this.parseDate(defaultValue?.startDate);
    const parsedEndDate = this.parseDate(defaultValue?.endDate);
    
    if (parsedStartDate && parsedStartDate.getTime() !== startDate?.getTime()) {
      setStartDate(parsedStartDate);
    }
    if (parsedEndDate && parsedEndDate.getTime() !== endDate?.getTime()) {
      setEndDate(parsedEndDate);
    }
  }
  handleClickOutside = (event: MouseEvent) => {
    if (this.parentContainerRef.current && !this.parentContainerRef.current.contains(event.target as Node)) {
        this.closeDatePickerPopover()
    }
};
closeDatePickerPopover = (): void => {
    this.context.setIsOpen(false)
};
  componentWillUnmount() {
    document.removeEventListener("visibilitychange", this.handleVisibilityChange);
    this.popperInstance?.destroy();
  }


  componentDidUpdate(prevProps: DatePickerProps) {
    this.handleDateSelection()
  }

  parseDate(date?: Date | string | null): Date | null {
    if (!date) return null;
    if (typeof date === "string") {
      const parsed = parseISO(date);
      return isValid(parsed) ? parsed : null;
    }
    return date;
  }

  formatDate(date?: Date | null, formatType: string = this.props.displayFormat || "MM/dd/yyyy") {
    return date ? format(date, formatType) : "";
  }

  handleInputFocus = () => {
    setTimeout(this.openDatePickerPopover, 200);
  };
  openDatePickerPopover = (): void => {
    this.context.setIsOpen(true)
    this.handleDatePickerPopover();
    this.handleDatePickerPopover();
    // setTimeout(this.handleDatePickerPopover, 3)
};

handleDateSelection = () => {
  const { onSelected, useRange, defaultValue } = this.props;
  const { startDate, endDate } = this.context;

  if (!DesmyCommons.isEmptyOrNull(defaultValue) && DesmyCommons.isEmptyOrNull(this.saveDateValue)){
    this.handleDefault()
  } else {
    const newDateValue = {
      startDate: startDate ? format(startDate, "yyyy-MM-dd") : "",
      endDate: endDate ? format(endDate, "yyyy-MM-dd") : ""
    };

    // Prevent unnecessary updates
    if (newDateValue.startDate === this.saveDateValue.startDate &&newDateValue.endDate === this.saveDateValue.endDate) {
      return; // Stop execution to prevent infinite loop
    }

    this.saveDateValue = newDateValue;

    if (onSelected) {
      onSelected(this.saveDateValue);
      if(!useRange)
        this.context.setIsOpen(false)
    }
  }
};

handleDatePickerPopover = () => {
    createPopper(this.inputRef.current!, this.popoverDropdownRef.current!, {
        placement: "bottom-start",
        strategy: "fixed",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 10],
            },
          },
          {
            name: "flip",
            options: {
              fallbackPlacements: ["top", "bottom-start"],
            },
          },
        ],
      });
  };
  
  handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      this.setState({ wasOpenBeforeBlur: this.context.isOpen });
    } else if (document.visibilityState === "visible" && this.state.wasOpenBeforeBlur) {
      setTimeout(() => this.context.setIsOpen(true), 100);
    }
  };


  render() {
    const { minDate, maxDate, label, useRange = true, onSelected } = this.props;
    const { isOpen, startDate, endDate, setIsOpen } = this.context;

    return (
        
      <div className="relative w-full" ref={this.parentContainerRef}>
        <div ref={this.inputRef}>
          <DesmyTextInput
            onFocus={this.handleInputFocus}
            label={label}
            readOnly={true}
            defaultValue={
              useRange
                ? startDate && endDate
                  ? `${this.formatDate(startDate)} - ${this.formatDate(endDate)}`
                  : ""
                : this.formatDate(startDate)
            }
            onChange={() => {}}
          />
        </div>

        <div
            ref={this.popoverDropdownRef}
            className={`absolute ${isOpen ? "flex " : "hidden "} bg-white dark:bg-darkDialogBackground dark:border-darkPrimaryBorder dark:text-white border-[2px] shadow-lg border-gray-100 rounded p-4 z-50 ${
              useRange ? "flex gap-4" : ""
            }`}
          >
            <Days calendarIndex={0} minDate={minDate} maxDate={maxDate} />
            {useRange && <Days calendarIndex={1} minDate={minDate} maxDate={maxDate} />}
          </div>
      </div>
    );
  }
}

export default DatePickerProvider;
