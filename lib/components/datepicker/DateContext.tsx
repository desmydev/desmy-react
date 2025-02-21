import React, { createContext, useContext, useState } from "react";
import { addMonths, startOfMonth } from "date-fns";

export interface DateContextProps {
    startDate: Date | null;
    endDate: Date | null;
    setStartDate: React.Dispatch<React.SetStateAction<Date | null>>; // ✅ Allow function
    setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;   // ✅ Allow function
    currentMonthLeft: Date;
    currentMonthRight: Date;
    setCurrentMonthLeft: (date: Date) => void;
    setCurrentMonthRight: (date: Date) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    useRange: boolean;
  }
  

export const DateContext = createContext<DateContextProps | undefined>(undefined);

export const DateProvider: React.FC<{ children: React.ReactNode; useRange?: boolean }> = ({
  children,
  useRange = true,
}) => {
  const today = new Date();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonthLeft, setCurrentMonthLeft] = useState(startOfMonth(today));
  const [currentMonthRight, setCurrentMonthRight] = useState(startOfMonth(addMonths(today, 1)));

  return (
    <DateContext.Provider
      value={{
        startDate,
        endDate,
        setStartDate,
        setEndDate,
        currentMonthLeft,
        currentMonthRight,
        setCurrentMonthLeft,
        setCurrentMonthRight,
        isOpen,
        setIsOpen,
        useRange,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

// ✅ Export useDateContext
export const useDateContext = () => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error("useDateContext must be used within a DateProvider");
  }
  return context;
};
