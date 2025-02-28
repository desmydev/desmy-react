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
  useRange: boolean; // this is correctly part of the context
}

// Create the context
export const DateContext = createContext<DateContextProps | undefined>(undefined);

// Define the DateProvider class component
export class DateProvider extends Component<{ children: ReactNode; useRange?: boolean }, { startDate: Date | null; endDate: Date | null; isOpen: boolean; currentMonthLeft: Date; currentMonthRight: Date; useRange: boolean }> {
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
      useRange: props.useRange || true,
    };
  }

  // Setters for state
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
        }}
      >
        {this.props.children}
      </DateContext.Provider>
    );
  }
}

// ✅ Export the custom hook for consuming the DateContext
export const useDateContext = (): DateContextProps => {
  const context = React.useContext(DateContext);
  if (!context) {
    throw new Error("useDateContext must be used within a DateProvider");
  }
  return context;
};
