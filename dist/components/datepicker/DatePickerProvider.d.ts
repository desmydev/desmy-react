import { default as React, Component } from 'react';
import { createPopper } from '@popperjs/core';
import { DatePickerProps } from '../apis/SharedProps';
import { DateContextProps } from './DateContext';
interface DatePickerState {
    wasOpenBeforeBlur: boolean;
    isFocusTriggered: boolean;
}
declare class DatePickerProvider extends Component<DatePickerProps, DatePickerState> {
    static contextType: React.Context<DateContextProps | undefined>;
    context: DateContextProps;
    parentContainerRef: React.RefObject<HTMLDivElement | null>;
    inputRef: React.RefObject<HTMLInputElement | null>;
    popoverDropdownRef: React.RefObject<HTMLDivElement | null>;
    popperInstance: ReturnType<typeof createPopper> | null;
    private saveDateValue;
    constructor(props: DatePickerProps);
    componentDidMount(): Promise<void>;
    handleDefault: () => void;
    handleClickOutside: (event: MouseEvent) => void;
    closeDatePickerPopover: () => void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: DatePickerProps): void;
    parseDate(date?: Date | string | null): Date | null;
    formatDate(date?: Date | null, formatType?: string): string;
    handleInputFocus: () => void;
    openDatePickerPopover: () => void;
    handleDateSelection: () => void;
    handleDatePickerPopover: () => void;
    handleVisibilityChange: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default DatePickerProvider;
