import { default as React, Component } from 'react';
import { createPopper } from '@popperjs/core';
import { DatePickerProps } from '../apis/SharedProps';
import { DateContextProps } from './DateContext';
interface DatePickerState {
    wasOpenBeforeBlur: boolean;
    isFocusTriggered: boolean;
    isMobile: boolean;
    isModal: boolean;
}
declare class DatePickerProvider extends Component<DatePickerProps, DatePickerState> {
    static contextType: React.Context<DateContextProps | undefined>;
    context: DateContextProps;
    parentContainerRef: React.RefObject<HTMLDivElement | null>;
    inputRef: React.RefObject<HTMLInputElement | null>;
    popoverDropdownRef: React.RefObject<HTMLDivElement | null>;
    arrowRef: React.RefObject<HTMLDivElement | null>;
    popperInstance: ReturnType<typeof createPopper> | null;
    private saveDateValue;
    constructor(props: DatePickerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    handleResize: () => void;
    handleDefault: () => void;
    parseDate(date?: string | Date | null): Date | null;
    extractTime(date?: string | Date | null): string | null;
    toISOStringString(value: string | Date | undefined | null): string;
    handleClickOutside: (event: MouseEvent) => void;
    closeDatePickerPopover: () => void;
    handleInputFocus: () => void;
    openDatePickerPopover: () => void;
    handleDatePickerPopover: () => void;
    convertTo24Hour(time: string): string;
    formatWithTime: (date: Date | null, time: string | null) => string;
    handleDateSelection: () => void;
    handleClose: () => void;
    handleVisibilityChange: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default DatePickerProvider;
