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
    render(): import("react/jsx-runtime").JSX.Element;
}
export declare const useDateContext: () => DateContextProps;
