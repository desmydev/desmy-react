import React, { Component, createRef } from "react";
import { createPopper } from "@popperjs/core";
import { format, parseISO, isValid } from "date-fns";
import { DatePickerProps } from "../apis/SharedProps";
import { DesmyTextInput } from "../input/DesmyTextInput";
import Days from "./Days";
import { DateContext, DateContextProps } from "./DateContext";
import DesmyCommons from "../apis/DesmyCommons";
import TimePicker from "./TimePicker";

interface DatePickerState {
  wasOpenBeforeBlur: boolean;
  isFocusTriggered: boolean;
  isMobile: boolean;
  isModal: boolean;
}

class DatePickerProvider extends Component<DatePickerProps, DatePickerState> {
  static contextType = DateContext;
  declare context: DateContextProps;

  parentContainerRef = createRef<HTMLDivElement>();
  inputRef = createRef<HTMLInputElement | null>();
  popoverDropdownRef = createRef<HTMLDivElement | null>();
  arrowRef = createRef<HTMLDivElement | null>();
  popperInstance: ReturnType<typeof createPopper> | null = null;

  private saveDateValue: { startDate: string; endDate: string };

  constructor(props: DatePickerProps) {
    super(props);
    this.state = {
      wasOpenBeforeBlur: false,
      isFocusTriggered: false,
      isMobile: window.innerWidth <= 768 ||  window.innerHeight < 1000,
      isModal: window.innerHeight < 1000
    };
    this.saveDateValue = { startDate: "", endDate: "" };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
    window.addEventListener("resize", this.handleResize);
    this.handleDefault();

    if (!this.state.isMobile) {
      this.handleDatePickerPopover();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    document.removeEventListener("visibilitychange", this.handleVisibilityChange);
    window.removeEventListener("resize", this.handleResize);
    this.popperInstance?.destroy();
  }

  componentDidUpdate() {
    this.handleDateSelection();
  }

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth <= 768 ||  window.innerHeight < 1000,isModal: window.innerHeight < 1000 }, this.handleClose);
  };

  handleDefault = () => {
    const { defaultValue, withTime, useRange } = this.props;
    const { setStartDate, setEndDate, setStartTime, setEndTime } = this.context;
  
    const normalizeDateInput = (input: any): string => {
      if (!input) return "";
      if (typeof input === "string") return input;
      if (input instanceof Date) return input.toISOString();
      if (typeof input === "object" && "toISOString" in input) return input.toISOString();
      return "";
    };
  
    const rawStart = normalizeDateInput(defaultValue?.startDate || defaultValue);
    const rawEnd = normalizeDateInput(defaultValue?.endDate || defaultValue);
  
    const splitRange = useRange && rawStart.includes(" - ")
      ? rawStart.split(" - ")
      : [rawStart, rawEnd];
  
    const parseDateTime = (input: string): { date: Date | null; time: string | null } => {
      if (!input) return { date: null, time: null };
  
      if (input.includes("T")) {
        const dateObj = parseISO(input);
        const timeMatch = input.match(/T(\d{2}:\d{2})/);
        return {
          date: isValid(dateObj) ? dateObj : null,
          time: timeMatch ? timeMatch[1] : null,
        };
      }
  
      const parts = input.trim().split(" ");
      const datePart = parts[0];
      const timePart = parts.length > 1 ? parts[1] : null;
  
      const parsedDate = isValid(parseISO(datePart)) ? parseISO(datePart) : null;
  
      return {
        date: parsedDate,
        time: typeof timePart === "string" ? timePart : null,
      };
    };
  
    const { date: startDate, time: startTime } = parseDateTime(splitRange[0]);
    const { date: endDate, time: endTime } = parseDateTime(splitRange[1]);
  
    if (startDate) setStartDate(startDate);
    if (endDate) setEndDate(endDate);
  
    if (startTime) setStartTime(startTime);
    if (endTime) setEndTime(endTime);
  
    const formatWithTime = (date: Date | null, time: string | null): string => {
      if (!date) return "";
      const dateStr = format(date, "yyyy-MM-dd");
      if (withTime && time) {
        const cleanTime = time.includes("AM") || time.includes("PM")
          ? this.convertTo24Hour(time)
          : time;
        return `${dateStr} ${cleanTime}`;
      }
      return dateStr;
    };
  
    this.saveDateValue = {
      startDate: formatWithTime(startDate, startTime),
      endDate: formatWithTime(endDate, endTime),
    };
  };
  
  

  parseDate(date?: string | Date | null): Date | null {
    if (!date) return null;
    if (typeof date === "string") {
      const parsed = parseISO(date);
      return isValid(parsed) ? parsed : null;
    }
    return date;
  }

  extractTime(date?: string | Date | null): string | null {
    if (!date) return null;
  
    let iso = "";
  
    if (typeof date === "string") {
      iso = date;
    } else if (date instanceof Date) {
      iso = date.toISOString();
    }
  
    const timeMatch = iso.match(/T(\d{2}:\d{2})/);
    return timeMatch ? timeMatch[1] : null;
  }

  toISOStringString(value: string | Date | undefined | null): string {
    if (!value) return "";
    if (typeof value === "string") return value;
    if (value instanceof Date) return value.toISOString();
    return "";
  }

  handleClickOutside = (event: MouseEvent) => {
    if (
      this.parentContainerRef.current &&
      !this.parentContainerRef.current.contains(event.target as Node)
    ) {
      this.closeDatePickerPopover();
    }
  };

  closeDatePickerPopover = () => {
    this.context.setIsOpen(false);
  };

  handleInputFocus = () => {
    setTimeout(() => {
      this.openDatePickerPopover();
    }, 500);
  };

  openDatePickerPopover = () => {
    this.context.setIsOpen(true);
    if (!this.state.isMobile) {
      this.handleDatePickerPopover();
      setTimeout(this.handleDatePickerPopover, 2);
    }
  };

  handleDatePickerPopover = () => {
    if (this.inputRef.current && this.popoverDropdownRef.current) {
      this.popperInstance?.destroy();
      this.popperInstance = createPopper(this.inputRef.current, this.popoverDropdownRef.current, {
        placement: "bottom-start",
        strategy: "fixed",
        modifiers: [
          { name: "offset", options: { offset: [0, 10] } },
          {
            name: "flip",
            options: {
              fallbackPlacements: ["top", "top-start", "bottom", "bottom-start"],
            },
          },
          { name: "preventOverflow", options: { boundary: "viewport" } },
        ],
      });
    }
  };
  convertTo24Hour(time: string): string {
    if (!time) return "";
  
    const [timePart, modifier] = time.split(" ");
    if (!timePart || !modifier) return time;
  
    let [hours, minutes] = timePart.split(":").map(Number);
  
    if (modifier.toLowerCase() === "pm" && hours < 12) hours += 12;
    if (modifier.toLowerCase() === "am" && hours === 12) hours = 0;
  
    return `${String(hours).padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  }
  formatWithTime = (date: Date | null, time: string | null) => {
    const {withTime} = this.props
    if (!date) return "";
    const time24 = withTime && time ? this.convertTo24Hour(time) : "";
    return time24 ? `${format(date, "yyyy-MM-dd")} ${time24}` : format(date, "yyyy-MM-dd");
  };

  handleDateSelection = () => {
    const { onSelected, useRange, defaultValue, withTime } = this.props;
    const { startDate, endDate, startTime, endTime, setIsOpen } = this.context;
  
    const appendTime = (dateStr: string, timeStr: string | null): string => {
      if (!withTime || !timeStr) return dateStr;
      return `${dateStr} ${this.convertTo24Hour(timeStr)}`;
    };
  
    const hasInitialDefault = !DesmyCommons.isEmptyOrNull(defaultValue);
    const saveValueEmpty = DesmyCommons.isEmptyOrNull(this.saveDateValue?.startDate);
  
    if (hasInitialDefault && saveValueEmpty) {
      this.handleDefault();
      return;
    }
  
    const newStartDate = startDate ? appendTime(format(startDate, "yyyy-MM-dd"), startTime) : "";
    const newEndDate = endDate ? appendTime(format(endDate, "yyyy-MM-dd"), endTime) : "";
  
    if (
      newStartDate === this.saveDateValue?.startDate &&
      newEndDate === this.saveDateValue?.endDate
    ) {
      return;
    }
    // Save and notify
    this.saveDateValue = {
      startDate: newStartDate,
      endDate: newEndDate,
    };
  
    if (typeof onSelected === "function") {
      onSelected({
        startDate: newStartDate,
        endDate: newEndDate,
      });
  
      // Auto-close picker if range not used and no time picker
      if (!useRange && !withTime) {
        setIsOpen(false);
      }
    }
  };
  
  handleClose = () => {
    this.context.setIsOpen(false);
    this.props.onSelected?.({});
  };

  handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      this.setState({ wasOpenBeforeBlur: this.context.isOpen });
    } else if (
      document.visibilityState === "visible" &&
      this.state.wasOpenBeforeBlur
    ) {
      setTimeout(() => this.context.setIsOpen(true), 100);
    }
  };

  render() {
    const { minDate, maxDate, label, disabled, useRange = true, withTime } = this.props;
    const { isOpen, startDate, endDate } = this.context;
    const { isMobile,isModal } = this.state;
    // console.log("isModal=",isModal)

    const formatValue = () => {
      const dateFormat = this.props.displayFormat || "MM/dd/yyyy";
      const { startTime, endTime } = this.context;
      const formatDateTime = (date: Date | null, time: string | null) => {
        if (!date) return "";
      
        const dateStr = format(date, dateFormat);
        const timeStr = typeof time === "string" ? time : "";
      
        return withTime && timeStr ? `${dateStr} ${timeStr}` : dateStr;
      };
      const start = formatDateTime(startDate, startTime);
      const end = formatDateTime(endDate, endTime);

    
      return useRange ? (start && end ? `${start} - ${end}` : "") : start;
    };

    return (
      <div className="relative w-full" ref={this.parentContainerRef}>
        <div ref={this.inputRef}>
          <DesmyTextInput
            onFocus={this.handleInputFocus}
            label={label}
            disabled={disabled}
            readOnly={true}
            defaultValue={formatValue()}
            onChange={() => {}}
          />
        </div>

        {isOpen && (
          <div
            ref={this.popoverDropdownRef}
            className={`${isMobile ? `fixed top-0 left-0 right-0 bottom-0 flex flex-col ${(isModal) ? `bg-black/40`:`bg-white dark:bg-darkDialogBackground`} z-[9999999] p-4 overflow-auto` : "absolute"} ${
              isOpen ? "flex opacity-100" : "hidden opacity-0"
            } ${(isModal) ? `bg-black/40`:`bg-white dark:bg-darkDialogBackground dark:border-darkPrimaryBorder dark:text-white border-[2px]`} shadow-lg border-gray-100 rounded p-4 z-50 transition-opacity duration-[2000ms] ${
              useRange ? "flex gap-4" : ""
            }`}
          >
            {!isMobile && (
              <div
                ref={this.arrowRef}
                id="arrow"
                className="absolute w-4 h-4 bg-white rotate-45 dark:bg-darkDialogBackground"
              />
            )}
            {isMobile && (
              <div className="absolute z-[9999] right-3 top-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12"
                  className={`size-8 ${(isModal) ? `text-white`:`text-red-600`} cursor-pointer`}
                  onClick={this.handleClose}
                >
                  <path
                    fill="currentColor"
                    d="M3.85 3.15a.5.5 0 0 0-.707.707l2.15 2.15l-2.15 2.15a.5.5 0 0 0 .707.707L6 6.714l2.15 2.15a.5.5 0 0 0 .707-.707l-2.15-2.15l2.15-2.15a.5.5 0 0 0-.707-.707L6 5.3z"
                  ></path>
                </svg>
              </div>
            )}

            {
              (isModal) ? <div className="flex max-w-lg h-full w-full justify-center items-center  mx-auto">
            <div className="bg-white dark:bg-darkDialogBackground mx-auto rounded-2xl">
              <Days calendarIndex={0} useRange={useRange} withTime={withTime} minDate={minDate} maxDate={maxDate} />
              {useRange && (
                <Days calendarIndex={1} useRange={useRange} withTime={withTime} minDate={minDate} maxDate={maxDate} />
              )}
              {withTime && <TimePicker useRange={useRange} onConfirm={() => this.context.setIsOpen(false)} />}
            </div>
            </div>
            :(
             <>
             <Days calendarIndex={0} useRange={useRange} withTime={withTime} minDate={minDate} maxDate={maxDate} />
              {useRange && (
                <Days calendarIndex={1} useRange={useRange} withTime={withTime} minDate={minDate} maxDate={maxDate} />
              )}
              {withTime && <TimePicker useRange={useRange} onConfirm={() => this.context.setIsOpen(false)} />}
             </> 
            )
            }
            
          </div>
        )}
      </div>
    );
  }
}

export default DatePickerProvider;