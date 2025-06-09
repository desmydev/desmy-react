import React, { Component } from "react";
import { DateContext, DateContextProps } from "./DateContext";
import TimeSelector from "./TimeSelector";

interface TimePickerProps {
  useRange?: boolean;
  onConfirm?: () => void;
}

class TimePicker extends Component<TimePickerProps> {
  static contextType = DateContext;
  declare context: DateContextProps;

  componentDidMount() {
    // Only set default times if not already set in context
    if (!this.context.startTime) {
      const defaultStart = this.formatTime(new Date());
      this.context.setStartTime(defaultStart);
    }
    if (this.props.useRange && !this.context.endTime) {
      const defaultEnd = this.formatTime(this.addHours(new Date(), 1));
      this.context.setEndTime(defaultEnd);
    }
  }

  // Helper: Format Date object to "hh:mm AM/PM"
  formatTime = (date: Date): string => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    if (hours === 0) hours = 12;
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes.toString();
    return `${hours}:${minutesStr} ${ampm}`;
  };

  addHours = (date: Date, hoursToAdd: number): Date => {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + hoursToAdd);
    return newDate;
  };

  handleStartTimeChange = (value: string) => {
    this.context.setStartTime(value);
  };

  handleEndTimeChange = (value: string) => {
    this.context.setEndTime(value);
  };

  render() {
    const { useRange, onConfirm } = this.props;
    const { startTime, endTime } = this.context;

    const isConfirmDisabled = () => {
      if (!startTime) return true;
      if (useRange && !endTime) return true;
      return false;
    };

    return (
      <div className="flex w-full flex-col gap-2 mt-4 text-xs">
        <TimeSelector
          label="Start Time"
          value={startTime || "12:00 AM"}
          onChange={this.handleStartTimeChange}
        />

        {useRange && (
          <TimeSelector
            label="End Time"
            value={endTime || "12:00 PM"}
            onChange={this.handleEndTimeChange}
          />
        )}

        <div className="flex w-full justify-end items-center">
          <button
            type="button"
            className={`mt-2 px-3 rounded-full py-2 cursor-pointer text-sm ${
              isConfirmDisabled()
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={(e) => {
              e.preventDefault();
              if (!isConfirmDisabled() && onConfirm) onConfirm();
            }}
            disabled={isConfirmDisabled()}
          >
            Confirm
          </button>
        </div>
      </div>
    );
  }
}

export default TimePicker;
