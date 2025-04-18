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
      <div className="flex flex-col gap-2 mt-4 text-xs">
        <TimeSelector
          label="Start Time"
          value={startTime || "12:00 AM"}
          onChange={(value) => this.context.setStartTime(value)}
        />

        {useRange && (
          <TimeSelector
            label="End Time"
            value={endTime || "12:00 PM"}
            onChange={(value) => this.context.setEndTime(value)}
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
