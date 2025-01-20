import React from 'react';
import { format, isValid, isEqual } from 'date-fns';
import { DesmyTextInput } from '../input/DesmyTextInput';

interface DatePickerInputProps {
  isRange?: boolean; // Indicates if the input is for a range picker
  startDate?: Date | null; // Optional date for start date
  endDate?: Date | null; // Optional date for end date
  separator?: string; // Separator string, e.g., '-'
  displayFormat: string; // Format string for date-fns
  placeholder: string; // Placeholder for the input
  onFocus?: React.FocusEventHandler<HTMLInputElement>; // onFocus event handler
}

class DatePickerInput extends React.Component<DatePickerInputProps> {
  render() {
    const { startDate, endDate, separator = '-', displayFormat, placeholder, onFocus } = this.props;

    // Validate startDate and endDate
    const formattedStartDate = startDate && isValid(startDate) ? format(startDate, displayFormat) : '';
    const formattedEndDate = endDate && isValid(endDate) ? format(endDate, displayFormat) : '';

    // Determine the display value
    const displayValue =
      startDate && endDate && isEqual(startDate, endDate) // Check if startDate and endDate are the same
        ? formattedStartDate // Use only the startDate
        : formattedStartDate
        ? formattedEndDate
          ? `${formattedStartDate}${separator}${formattedEndDate}` // Use range format
          : formattedStartDate // Use only startDate
        : '';

    return (
      <DesmyTextInput
        type="text"
        defaultValue={displayValue}
        readOnly={true}
        label={placeholder}
        onFocus={onFocus}
        onChange={() => {}} // Default no-op function
        onSearch={() => {}} // Default no-op function
      />
    );
  }
}

export default DatePickerInput;
