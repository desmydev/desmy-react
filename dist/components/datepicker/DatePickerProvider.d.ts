import { default as React, Component } from 'react';
import { DatePickerProps } from '../apis/SharedProps';
import { DateContextProps } from './DateContext';
interface DatePickerState {
    wasOpenBeforeBlur: boolean;
}
declare class DatePickerProvider extends Component<DatePickerProps, DatePickerState> {
    static contextType: React.Context<DateContextProps | undefined>;
    context: DateContextProps;
    private dropdownContentRef;
    parentContainerRef: React.RefObject<HTMLDivElement | null>;
    inputRef: React.RefObject<HTMLDivElement | null>;
    private saveDateValue;
    constructor(props: DatePickerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    handleInputFocus: () => void;
    handleClickOutside: (event: MouseEvent) => void;
    handleVisibilityChange: () => void;
    convertTo24Hour(time: string): string;
    handleDefault: () => void;
    handleDateSelection: () => void;
    handleClose: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default DatePickerProvider;
