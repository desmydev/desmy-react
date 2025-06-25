import React, { Component,RefObject, createRef } from "react";
import { format, parseISO, isValid } from "date-fns";
import { DatePickerProps } from "../apis/SharedProps";
import { DesmyTextInput } from "../input/DesmyTextInput";
import Days from "./Days";
import { DateContext, DateContextProps } from "./DateContext";
import DesmyCommons from "../apis/DesmyCommons";
import TimePicker from "./TimePicker";
import {DropdownPositionWrapper} from "../apis/DropdownPositionWrapper";

interface DatePickerState {
  wasOpenBeforeBlur: boolean;
  isFocusTriggered: boolean;
}

class DatePickerProvider extends Component<DatePickerProps, DatePickerState> {
  static contextType = DateContext;
  declare context: DateContextProps;

  
  private dropdownContentRef: RefObject<HTMLDivElement | null> = createRef();
  parentContainerRef = createRef<HTMLDivElement>();
  inputRef = createRef<HTMLInputElement | null>();

  private saveDateValue: { startDate: string; endDate: string };

  constructor(props: DatePickerProps) {
    super(props);
    this.state = {
      wasOpenBeforeBlur: false,
      isFocusTriggered: false,
    };
    this.saveDateValue = { startDate: "", endDate: "" };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
    this.handleDefault();
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    document.removeEventListener("visibilitychange", this.handleVisibilityChange);
  }

  componentDidUpdate() {
    this.handleDateSelection();
  }

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

  convertTo24Hour(time: string): string {
    if (!time) return "";

    const [timePart, modifier] = time.split(" ");
    if (!timePart || !modifier) return time;

    let [hours, minutes] = timePart.split(":").map(Number);

    if (modifier.toLowerCase() === "pm" && hours < 12) hours += 12;
    if (modifier.toLowerCase() === "am" && hours === 12) hours = 0;

    return `${String(hours).padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  }
  handleClickOutside = (event: MouseEvent): void => {
        const btn = this.parentContainerRef.current;
        const content = this.dropdownContentRef.current;
        if (btn && !btn.contains(event.target as Node) && content && !content.contains(event.target as Node)) {
            this.context.setIsOpen(false);
        }
    }
  handleInputFocus = () => {
    setTimeout(() => {
      this.context.setIsOpen(true);
    }, 500);
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

    this.saveDateValue = {
      startDate: newStartDate,
      endDate: newEndDate,
    };

    if (typeof onSelected === "function") {
      onSelected({
        startDate: newStartDate,
        endDate: newEndDate,
      });

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

        <DropdownPositionWrapper
          targetRef={this.inputRef}
          visible={isOpen}
          viewType={`${useRange ? `full`:`auto`}`}
          onClose={() => this.handleClose()}
        >
          <div
            className={`bg-white max-w-5xl mx-auto boxShadow flex-wrap md:flex-nowrap dark:bg-darkDialogBackground border-gray-100 dark:border-darkPrimaryBorder dark:text-white border-[2px] shadow-lg rounded p-4 z-50 flex gap-4`}  ref={this.dropdownContentRef}
          >
            <Days calendarIndex={0} useRange={useRange} withTime={withTime} minDate={minDate} maxDate={maxDate} />
            {useRange && (
              <Days calendarIndex={1} useRange={useRange} withTime={withTime} minDate={minDate} maxDate={maxDate} />
            )}
            {withTime && <TimePicker useRange={useRange} onConfirm={() => this.context.setIsOpen(false)} />}
          </div>
        </DropdownPositionWrapper>
      </div>
    );
  }
}

export default DatePickerProvider;
