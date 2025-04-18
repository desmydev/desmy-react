import React, { createContext, Component, ReactNode } from "react";
import { addMonths, startOfMonth } from "date-fns";

// Interface for context properties
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

// Create the context
export const DateContext = createContext<DateContextProps | undefined>(undefined);

// Define the DateProvider class component
export class DateProvider extends Component<
  { children: ReactNode; useRange?: boolean },
  {
    startDate: Date | null;
    endDate: Date | null;
    isOpen: boolean;
    currentMonthLeft: Date;
    currentMonthRight: Date;
    useRange: boolean;
    startTime: string | null;
    endTime: string | null;
  }
> {
  static defaultProps = {
    useRange: true,
  };

  constructor(props: { children: ReactNode; useRange?: boolean }) {
    super(props);
    const today = new Date();

    this.state = {
      startDate: null,
      endDate: null,
      isOpen: false,
      currentMonthLeft: startOfMonth(today),
      currentMonthRight: startOfMonth(addMonths(today, 1)),
      useRange: props.useRange ?? true,
      startTime: null,
      endTime: null,
    };
  }

  // Setters
  setStartDate = (startDate: Date | null) => {
    this.setState({ startDate });
  };

  setEndDate = (endDate: Date | null) => {
    this.setState({ endDate });
  };

  setCurrentMonthLeft = (date: Date) => {
    this.setState({ currentMonthLeft: date });
  };

  setCurrentMonthRight = (date: Date) => {
    this.setState({ currentMonthRight: date });
  };

  setIsOpen = (open: boolean) => {
    this.setState({ isOpen: open });
  };

  setStartTime = (time: string | null) => {
    this.setState({ startTime: time });
  };

  setEndTime = (time: string | null) => {
    this.setState({ endTime: time });
  };

  render() {
    return (
      <DateContext.Provider
        value={{
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          setStartDate: this.setStartDate,
          setEndDate: this.setEndDate,
          currentMonthLeft: this.state.currentMonthLeft,
          currentMonthRight: this.state.currentMonthRight,
          setCurrentMonthLeft: this.setCurrentMonthLeft,
          setCurrentMonthRight: this.setCurrentMonthRight,
          isOpen: this.state.isOpen,
          setIsOpen: this.setIsOpen,
          useRange: this.state.useRange,
          startTime: this.state.startTime,
          endTime: this.state.endTime,
          setStartTime: this.setStartTime,
          setEndTime: this.setEndTime,
        }}
      >
        {this.props.children}
      </DateContext.Provider>
    );
  }
}

// ✅ Custom hook for consuming the DateContext
export const useDateContext = (): DateContextProps => {
  const context = React.useContext(DateContext);
  if (!context) {
    throw new Error("useDateContext must be used within a DateProvider");
  }
  return context;
};
