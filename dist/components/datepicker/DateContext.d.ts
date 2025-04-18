import { default as React, Component, ReactNode } from 'react';
export interface DateContextProps {
    startDate: Date | null;
    endDate: Date | null;
    setStartDate: (startDate: Date | null) => void;
    setEndDate: (endDate: Date | null) => void;
    currentMonthLeft: Date;
    currentMonthRight: Date;
    setCurrentMonthLeft: (date: Date) => void;
    setCurrentMonthRight: (date: Date) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    useRange: boolean;
    startTime: string | null;
    endTime: string | null;
    setStartTime: (time: string | null) => void;
    setEndTime: (time: string | null) => void;
}
export declare const DateContext: React.Context<DateContextProps | undefined>;
export declare class DateProvider extends Component<{
    children: ReactNode;
    useRange?: boolean;
}, {
    startDate: Date | null;
    endDate: Date | null;
    isOpen: boolean;
    currentMonthLeft: Date;
    currentMonthRight: Date;
    useRange: boolean;
    startTime: string | null;
    endTime: string | null;
}> {
    static defaultProps: {
        useRange: boolean;
    };
    constructor(props: {
        children: ReactNode;
        useRange?: boolean;
    });
    setStartDate: (startDate: Date | null) => void;
    setEndDate: (endDate: Date | null) => void;
    setCurrentMonthLeft: (date: Date) => void;
    setCurrentMonthRight: (date: Date) => void;
    setIsOpen: (open: boolean) => void;
    setStartTime: (time: string | null) => void;
    setEndTime: (time: string | null) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export declare const useDateContext: () => DateContextProps;
