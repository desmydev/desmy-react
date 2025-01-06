import { default as React } from 'react';

type DatePickerModalProps = {
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
    minDate?: Date | null;
    maxDate?: Date | null;
    showActionButtons?: boolean;
    onDateSelect: (date: Date, isStart: boolean) => void;
    onDateHover: (date: Date, rangeType: "start" | "end") => void;
    resetSelection: () => void;
    toggleModal: () => void;
    onNavigate: (type: "prev" | "next" | "specific", calendarType: "start" | "end", date?: Date) => void;
};
type DatePickerModalState = {
    isStartMonthSelectionOpen: boolean;
    isStartYearSelectionOpen: boolean;
    isEndMonthSelectionOpen: boolean;
    isEndYearSelectionOpen: boolean;
};
declare class DatePickerModal extends React.Component<DatePickerModalProps, DatePickerModalState> {
    state: DatePickerModalState;
    toggleStartMonthSelection: () => void;
    toggleStartYearSelection: () => void;
    toggleEndMonthSelection: () => void;
    toggleEndYearSelection: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default DatePickerModal;
