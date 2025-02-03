import { default as React } from 'react';
interface DatePickerInputProps {
    isRange?: boolean;
    startDate?: Date | null;
    endDate?: Date | null;
    separator?: string;
    displayFormat: string;
    placeholder: string;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
}
declare class DatePickerInput extends React.Component<DatePickerInputProps> {
    render(): import("react/jsx-runtime").JSX.Element;
}
export default DatePickerInput;
