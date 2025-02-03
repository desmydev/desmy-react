import { Component } from 'react';
type DatePickerProps = {
    isRange?: boolean;
    date?: {
        startDate?: string;
        endDate?: string;
    };
    placeholder?: string;
    separator?: string;
    displayFormat?: string;
    minDate?: string;
    maxDate?: string;
    onSelected?: (selected: {
        startDate?: string;
        endDate?: string;
    } | string | null) => void;
    showActionButtons?: boolean;
};
type DatePickerState = {
    isOpen: boolean;
    isRange: boolean;
    startDate: Date | null;
    endDate: Date | null;
    hoveredDate: {
        date: Date;
        type: string;
        isOutOfCurrentMonth: boolean;
    } | null;
    currentMonth: Date;
    endMonth: Date;
    parsedMinDate: Date | null;
    parsedMaxDate: Date | null;
};
declare class DesmyDatePicker extends Component<DatePickerProps, DatePickerState> {
    private btnDropdownRef;
    private popoverDropdownRef;
    private popperInstance;
    constructor(props: DatePickerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    toggleModal: () => void;
    createDropdownPopper: () => void;
    destroyDropdownPopper: () => void;
    handleClickOutside: (event: MouseEvent) => void;
    populateDates: () => void;
    handleDateSelect: (date: Date) => void;
    handleDateHover: (date: Date, type: string) => void;
    resetSelection: () => void;
    handleNavigate: (type: "prev" | "next" | "specific", calendarType: "start" | "end", date?: Date) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyDatePicker };
