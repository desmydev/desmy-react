import { default as React } from 'react';

interface CalendarProps {
    month: Date | null;
    isRange: boolean;
    startDate?: Date | null;
    endDate?: Date | null;
    hoveredDate?: {
        date: Date | null;
    };
    onDateSelect: (date: Date) => void;
    onDateHover: (date: Date) => void;
    onNavigate: (type: string, date?: Date, isStart?: boolean) => void;
    minDate?: string;
    maxDate?: string;
}
interface CalendarState {
    isMonthSelectionOpen: boolean;
    isYearSelectionOpen: boolean;
}
declare class Calendar extends React.Component<CalendarProps, CalendarState> {
    state: CalendarState;
    toggleMonthSelection: (event: React.MouseEvent<HTMLDivElement>) => void;
    toggleYearSelection: (event: React.MouseEvent<HTMLDivElement>) => void;
    handleMonthSelect: (event: React.MouseEvent<HTMLButtonElement>, monthIndex: number) => void;
    handleYearSelect: (event: React.MouseEvent<HTMLButtonElement>, year: number) => void;
    renderMonthSelection: () => import("react/jsx-runtime").JSX.Element;
    renderYearSelection: (minDate?: string, maxDate?: string) => import("react/jsx-runtime").JSX.Element;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default Calendar;
