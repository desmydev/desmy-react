import React, { Component } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
  isWithinInterval,
  isToday,
  isAfter,
  isBefore,
  setMonth,
  setYear,
  subDays,
  addDays,
  addMonths,
  subMonths,
} from "date-fns";
import { withDateContext } from "./withDateContext"; // Import the HOC
import { DateContextProps } from "./DateContext"; // Import DateContextProps
import Months from "./Months";
import Years from "./Years";

interface DaysProps {
  calendarIndex?: number;
  minDate?: Date;
  useRange?:boolean
  maxDate?: Date;
  defaultDate?: Date;
  onSelect?: (date: Date) => void;
  dateContext: DateContextProps; // Access the context directly via props
}

interface DaysState {
  viewMode: "days" | "months" | "years";
}

class Days extends Component<DaysProps, DaysState> {
  
  constructor(props: DaysProps) {
    super(props);
    this.state = {
      viewMode: "days",
    };
  }

  componentDidMount() {
    const { useRange, setStartDate, setEndDate, setCurrentMonthLeft, setCurrentMonthRight } = this.props.dateContext;
    const { defaultDate } = this.props;

    if (!useRange && defaultDate) {
      setStartDate(defaultDate);
      setEndDate(null);
      setCurrentMonthLeft(startOfMonth(defaultDate));
      setCurrentMonthRight(startOfMonth(addMonths(defaultDate, 1)));
    }
  }

  componentDidUpdate(prevProps: DaysProps) {
    const { startDate, endDate, setStartDate, setEndDate, setIsOpen } = this.props.dateContext;
    const {useRange} = this.props
    if (!useRange && startDate !== prevProps.dateContext.startDate) {
      setIsOpen(false);
    }

    if (useRange && startDate && endDate && (startDate !== prevProps.dateContext.startDate || endDate !== prevProps.dateContext.endDate)) {
      setIsOpen(false);
    }

    if (useRange && startDate && endDate && isAfter(startDate, endDate)) {
      setStartDate(endDate);
      setEndDate(startDate);
    }
  }

  handleSelectDay = (event: React.MouseEvent<HTMLButtonElement>, day: Date) => {
    event.preventDefault();
    const { minDate, maxDate, useRange, onSelect } = this.props;
    const { setStartDate, setEndDate } = this.props.dateContext;

    // Prevent selecting days outside the min/max range
    if (minDate && isBefore(day, subDays(minDate, 1))) return;
    if (maxDate && isAfter(day, addDays(maxDate, 1))) return;

    if (!useRange) {
        // If range is not used, just select the startDate
        setStartDate(day);
        setEndDate(null);
    } else {
        const { startDate, endDate } = this.props.dateContext;
        if (!startDate || (startDate && endDate)) {
            // If no start date is set or both start and end dates are selected, set new start date
            setStartDate(day);
            setEndDate(null);
        } else {
            // If start date is set and no end date, set end date
            setEndDate(day);
        }
    }

    // Call the onSelect callback if provided
    if (onSelect) {
        onSelect(day);
    }
};


  // Function to check if navigation is allowed
canNavigate = (direction: "next" | "prev", calendarIndex: number) => {
  const { dateContext, minDate, maxDate,useRange } = this.props;
  const { currentMonthLeft, currentMonthRight } = dateContext;

  // If useRange is false, handle the navigation freely with checks for minDate and maxDate
  if (!useRange) {
    const newMonth = direction === "next" ? addMonths(currentMonthLeft, 1) : subMonths(currentMonthLeft, 1);
    
    // If moving to the previous month, check if it's after minDate
    if (direction === "prev" && minDate && isBefore(newMonth, minDate)) {
      return false; // Prevent navigation if it's before minDate
    }
    
    // If moving to the next month, check if it's before maxDate
    if (direction === "next" && maxDate && isAfter(newMonth, maxDate)) {
      return false; // Prevent navigation if it's after maxDate
    }
    
    return true;
  }

  if (calendarIndex === 0) {
    const newMonth = direction === "next" ? addMonths(currentMonthLeft, 1) : subMonths(currentMonthLeft, 1);
    return maxDate && isBefore(newMonth, currentMonthRight) && !(minDate && isBefore(newMonth, minDate));
  } else if (calendarIndex === 1) {
    const newMonth = direction === "next" ? addMonths(currentMonthRight, 1) : subMonths(currentMonthRight, 1);
    return minDate && isAfter(newMonth, currentMonthLeft) && !(maxDate && isAfter(newMonth, maxDate));
  }

  return true;
};


  navigateMonth = (direction: "next" | "prev", calendarIndex: number) => {
    const { dateContext } = this.props;
    const { currentMonthLeft, setCurrentMonthLeft, currentMonthRight, setCurrentMonthRight } = dateContext;
    if (this.canNavigate(direction, calendarIndex)) {
      if (calendarIndex === 0) {
        const newMonth = direction === "next" ? addMonths(currentMonthLeft, 1) : subMonths(currentMonthLeft, 1);
        setCurrentMonthLeft(newMonth);
      } else if (calendarIndex === 1) {
        const newMonth = direction === "next" ? addMonths(currentMonthRight, 1) : subMonths(currentMonthRight, 1);
        setCurrentMonthRight(newMonth);
      }
    }
  };

  selectMonth = (monthIndex: number) => {
    const { calendarIndex, dateContext } = this.props;
    const { currentMonthLeft, setCurrentMonthLeft, currentMonthRight, setCurrentMonthRight } = dateContext;
  
    if (calendarIndex === 0) {
      const newDate = setMonth(currentMonthLeft, monthIndex);
      if (!this.canNavigate("next", 0) && isAfter(newDate, currentMonthRight)) return; 
      setCurrentMonthLeft(newDate);
    } else if (calendarIndex === 1) {
      const newDate = setMonth(currentMonthRight, monthIndex);

    if (!this.canNavigate("prev", 1) && isBefore(newDate, currentMonthLeft)) return; 
      setCurrentMonthRight(newDate);
    }
  
    this.setState({ viewMode: "days" });
  };

  selectYear = (year: number) => {
    const { calendarIndex, dateContext } = this.props;
    const { currentMonthLeft, setCurrentMonthLeft, currentMonthRight, setCurrentMonthRight } = dateContext;
  
    if (calendarIndex === 0) {
      const newDate = setYear(currentMonthLeft, year);
      if (!this.canNavigate("next", 0) && isAfter(newDate, currentMonthRight)) return;
      setCurrentMonthLeft(newDate);
    } else if (calendarIndex === 1) {
      const newDate = setYear(currentMonthRight, year);
      if (!this.canNavigate("prev", 1) && isBefore(newDate, currentMonthLeft)) return; 
      setCurrentMonthRight(newDate);
    }
  
    this.setState({ viewMode: "days" });
  };
  isWithinSelectedRange = (day: Date) => {
    const { startDate, endDate } = this.props.dateContext;
    const {useRange} = this.props
    return useRange && startDate && endDate && isWithinInterval(day, { start: startDate, end: endDate });
  };

  isSelectedDate = (day: Date) => {
    const { startDate, endDate } = this.props.dateContext;
    return (startDate && isSameDay(day, startDate)) || (endDate && isSameDay(day, endDate));
  };

  isWithinCurrentMonth = (day: Date, month: Date) => {
    const startOfGivenMonth = startOfMonth(month);
    const endOfGivenMonth = endOfMonth(month);
    return isWithinInterval(day, { start: startOfGivenMonth, end: endOfGivenMonth });
  };

  isTodayDate = (day: Date) => {
    return isToday(day);
  };

  render() {
    const {
      calendarIndex = 0,
      minDate,
      maxDate,
      dateContext,
    } = this.props;

    const { currentMonthLeft, currentMonthRight } = dateContext;
    const { viewMode } = this.state;

    const currentMonth = calendarIndex === 0 ? currentMonthLeft : currentMonthRight;

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const weekStart = startOfWeek(monthStart);
    const weekEnd = endOfWeek(monthEnd);
    const days = eachDayOfInterval({ start: weekStart, end: weekEnd });

    const isPrevDisabled = minDate && isBefore(currentMonth, minDate);
    const isNextDisabled = maxDate && isAfter(currentMonth, maxDate);

    return (
      <div className="w-[350px] text-xs h-96 p-4">
        {/* Month and Year Navigation */}
        <div className="flex justify-between items-center mb-2">
          <button
            className={`p-1 text-gray-500 hover:bg-gray-200 rounded ${isPrevDisabled ? "cursor-not-allowed text-gray-300" : ""}`}
            onClick={(event) => {
              event.preventDefault();
              !isPrevDisabled && this.navigateMonth("prev", calendarIndex);
            }}
            disabled={isPrevDisabled}
          >
            &lt;
          </button>
          <div className="flex justify-between w-full space-x-2 px-10">
            <span
              className={`text-lg font-semibold cursor-pointer ${
                viewMode === "months" ? "text-blue-500 underline" : "hover:text-blue-500"
              }`}
              onClick={() => this.setState({ viewMode: viewMode === "months" ? "days" : "months" })}
            >
              {format(currentMonth, "MMM")}
            </span>
            <span
              className={`text-lg font-semibold cursor-pointer ${
                viewMode === "years" ? "text-blue-500 underline" : "hover:text-blue-500"
              }`}
              onClick={() => this.setState({ viewMode: viewMode === "years" ? "days" : "years" })}
            >
              {format(currentMonth, "yyyy")}
            </span>
          </div>
          <button
            className={`p-1 text-gray-500 hover:bg-gray-200 rounded ${isNextDisabled ? "cursor-not-allowed text-gray-300" : ""}`}
            onClick={(event) => {
              event.preventDefault();
              !isNextDisabled && this.navigateMonth("next", calendarIndex);
            }}
            disabled={isNextDisabled}
          >
            &gt;
          </button>
        </div>

        {/* Month Selection */}
        {viewMode === "months" && (
          <Months
            currentMonth={currentMonth}
            onSelectMonth={this.selectMonth}
            minDate={minDate}
            maxDate={maxDate}
          />
        )}

        {/* Year Selection */}
        {viewMode === "years" && (
          <Years
            currentYear={currentMonth.getFullYear()}
            onSelectYear={this.selectYear}
            minDate={minDate}
            maxDate={maxDate}
          />
        )}

        {/* Days Grid */}
        {viewMode === "days" && (
          <>
            <div className="grid grid-cols-7 gap-1 text-center font-semibold text-gray-600 dark:text-white">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="h-8">{day}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
              {days.map((day) => {
                const isDisabled = 
                (minDate && isBefore(day, subDays(minDate, 1))) || 
                (maxDate && isAfter(day, addDays(maxDate, 1)));  
              
                const selected = this.isSelectedDate(day);
                const inRange = this.isWithinSelectedRange(day);
                const today = this.isTodayDate(day);
                const withinCurrentMonth = this.isWithinCurrentMonth(day, currentMonth);

                return (
                  <button
                    key={day.toString()}
                    className={`h-10 w-10 rounded-full text-sm cursor-pointer ${
                      isDisabled
                        ? "text-gray-400 line-through cursor-not-allowed"
                        : !withinCurrentMonth?"text-gray-400 cursor-not-allowed"
                        : inRange
                        ? "bg-blue-200 text-blue-600 dark:bg-darkPrimaryBorder dark:text-white"
                        : selected
                        ? "bg-blue-500 dark:bg-darkBackground text-white"
                        : today
                        ? "bg-yellow-200 dark:bg-white dark:text-black text-yellow-800"
                        : " dark:hover:bg-darkPrimaryBorder hover:bg-gray-100 text-black dark:text-white"
                    } ${(today && !inRange && !selected && calendarIndex==0)? `bg-primary/100 dark:bg-white dark:text-black text-white`:``} `}
                    onClick={(event) =>{
                      event.preventDefault()
                      !isDisabled && this.handleSelectDay(event, day)
                    }}
                    disabled={isDisabled}
                  >
                    {format(day, "d")}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default withDateContext(Days);
