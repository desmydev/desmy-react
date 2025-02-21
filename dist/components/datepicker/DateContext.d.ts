import { default as React } from 'react';
export interface DateContextProps {
    startDate: Date | null;
    endDate: Date | null;
    setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
    setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
    currentMonthLeft: Date;
    currentMonthRight: Date;
    setCurrentMonthLeft: (date: Date) => void;
    setCurrentMonthRight: (date: Date) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    useRange: boolean;
}
export declare const DateContext: React.Context<DateContextProps | undefined>;
export declare const DateProvider: React.FC<{
    children: React.ReactNode;
    useRange?: boolean;
}>;
export declare const useDateContext: () => DateContextProps;
