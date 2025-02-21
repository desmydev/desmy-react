import React, { useEffect, useState } from "react";
import {
  format,
  addMonths,
  setMonth,
  setYear,
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
} from "date-fns";
import { useDateContext } from "./DateContext";
import Months from "./Months";
import Years from "./Years";

interface DaysProps {
  calendarIndex?: number;
  minDate?: Date;
  maxDate?: Date;
  defaultDate?: Date;  // ✅ Add defaultDate prop
  onSelect?: (date: Date) => void; // ✅ Add onSelect callback
}

const Days: React.FC<DaysProps> = ({
  calendarIndex = 0,
  minDate,
  maxDate,
  defaultDate,  // ✅ Add defaultDate prop
  onSelect,
}) => {
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    useRange,
    isOpen,
    setIsOpen,
    currentMonthLeft,
    setCurrentMonthLeft,
    currentMonthRight,
    setCurrentMonthRight,
  } = useDateContext();

  const [viewMode, setViewMode] = useState<"days" | "months" | "years">("days");

  const currentMonth = calendarIndex === 0 ? currentMonthLeft : currentMonthRight;
  const setCurrentMonth = calendarIndex === 0 ? setCurrentMonthLeft : setCurrentMonthRight;

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const weekStart = startOfWeek(monthStart);
  const weekEnd = endOfWeek(monthEnd);
  const days = eachDayOfInterval({ start: weekStart, end: weekEnd });

  // ✅ If useRange is false and a defaultDate is provided, set the startDate and move to that date
  useEffect(() => {
    if (!useRange && defaultDate) {
      setStartDate(defaultDate);  // Set the start date to the provided default date
      setEndDate(null);  // No need for an end date when useRange is false

      // Update the left calendar to the month of the defaultDate
      console.log(startOfMonth(defaultDate))
      setCurrentMonthLeft(startOfMonth(defaultDate));  // Jump to the month of the default date
    }
  }, [useRange, defaultDate, setStartDate, setEndDate, setCurrentMonthLeft, setCurrentMonthRight]);

  // ✅ Handle enabling/disabling prev/next buttons based on minDate/maxDate
  const isPrevDisabled = minDate && isBefore(currentMonth, minDate);
  const isNextDisabled = maxDate && isAfter(currentMonth, maxDate);

  // ✅ Prevent infinite loop by only updating state when necessary
  useEffect(() => {
    if (!useRange && startDate) {
      setIsOpen(false);
    }
    if (useRange && startDate && endDate) {
      setIsOpen(false);
    }
  }, [startDate, endDate, useRange, setIsOpen]);

  // ✅ Fix: Prevent setting state inside useEffect if already in correct order
  useEffect(() => {
    if (useRange && startDate && endDate && isAfter(startDate, endDate)) {
      setStartDate(endDate); // ✅ Directly set Date value
      setEndDate(startDate); // ✅ Directly set Date value
    }
  }, [startDate, endDate, useRange]);

  const handleSelectDay = (event: React.MouseEvent<HTMLButtonElement>, day: Date) => {
    event.preventDefault();
    
    // Apply the minDate and maxDate check regardless of useRange
    if (minDate && isBefore(day, minDate)) return;
    if (maxDate && isAfter(day, maxDate)) return;

    if (!useRange) {
      setStartDate(day);
      setEndDate(null); // No endDate needed when useRange is false
    } else if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null); // Reset endDate if it's a new selection
    } else {
      setEndDate(day);
    }

    if (onSelect) {
      onSelect(day); // ✅ Call onSelect when a date is picked
    }
  };

  const handleSelectMonth = (event: React.MouseEvent, monthIndex: number) => {
    event.preventDefault(); // ✅ Prevent default when clicking button
    const newDate = setMonth(currentMonth, monthIndex);
    if (minDate && isBefore(newDate, minDate)) return;
    if (maxDate && isAfter(newDate, maxDate)) return;
    setCurrentMonth(newDate);
    setViewMode("days");
  };

  const handleSelectYear = (event: React.MouseEvent, year: number) => {
    event.preventDefault(); // ✅ Prevent default when clicking button
    const newDate = setYear(currentMonth, year);
    if (minDate && isBefore(newDate, minDate)) return;
    if (maxDate && isAfter(newDate, maxDate)) return;
    setCurrentMonth(newDate);
    setViewMode("days");
  };

  // ✅ Separate function to allow selecting month/year WITHOUT an event
  const selectMonth = (monthIndex: number) => {
    const newDate = setMonth(currentMonth, monthIndex);
    if (minDate && isBefore(newDate, minDate)) return;
    if (maxDate && isAfter(newDate, maxDate)) return;
    setCurrentMonth(newDate);
    setViewMode("days");
  };

  const selectYear = (year: number) => {
    const newDate = setYear(currentMonth, year);
    if (minDate && isBefore(newDate, minDate)) return;
    if (maxDate && isAfter(newDate, maxDate)) return;
    setCurrentMonth(newDate);
    setViewMode("days");
  };

  // Helper function to determine if the day is within the selected range
  const isWithinSelectedRange = (day: Date) => {
    return (
      useRange &&
      startDate &&
      endDate &&
      isWithinInterval(day, { start: startDate, end: endDate })
    );
  };

  // Helper function to check if the day is the selected start or end date
  const isSelectedDate = (day: Date) => {
    return (
      (startDate && isSameDay(day, startDate)) || (endDate && isSameDay(day, endDate))
    );
  };

  // Helper function to check if it's today's date
  const isTodayDate = (day: Date) => {
    return isToday(day);
  };

  return (
    <div className="w-[350px] text-xs h-96 p-4">
      {/* Month and Year Navigation */}
      <div className="flex justify-between items-center mb-2">
        <button
          className={`p-1 text-gray-500 hover:bg-gray-200 rounded ${isPrevDisabled ? "cursor-not-allowed text-gray-300" : ""}`}
          onClick={(event) => !isPrevDisabled && handleSelectMonth(event, currentMonth.getMonth() - 1)}
          disabled={isPrevDisabled}
        >
          &lt;
        </button>
        <div className="flex justify-between w-full space-x-2 px-10">
          <span
            className={`text-lg font-semibold cursor-pointer ${
              viewMode === "months" ? "text-blue-500 underline" : "hover:text-blue-500"
            }`}
            onClick={() => setViewMode(viewMode === "months" ? "days" : "months")}
          >
            {format(currentMonth, "MMM")}
          </span>
          <span
            className={`text-lg font-semibold cursor-pointer ${
              viewMode === "years" ? "text-blue-500 underline" : "hover:text-blue-500"
            }`}
            onClick={() => setViewMode(viewMode === "years" ? "days" : "years")}
          >
            {format(currentMonth, "yyyy")}
          </span>
        </div>
        <button
          className={`p-1 text-gray-500 hover:bg-gray-200 rounded ${isNextDisabled ? "cursor-not-allowed text-gray-300" : ""}`}
          onClick={(event) => !isNextDisabled && handleSelectMonth(event, currentMonth.getMonth() + 1)}
          disabled={isNextDisabled}
        >
          &gt;
        </button>
      </div>

      {/* Month Selection */}
      {viewMode === "months" && (
        <Months
          currentMonth={currentMonth}
          onSelectMonth={selectMonth}
          minDate={minDate}
          maxDate={maxDate}
        />
      )}

      {/* Year Selection */}
      {viewMode === "years" && (
        <Years
          currentYear={currentMonth.getFullYear()}
          onSelectYear={selectYear}
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
              const isDisabled = (minDate && isBefore(day, minDate)) || (maxDate && isAfter(day, maxDate));
              const selected = isSelectedDate(day);
              const inRange = isWithinSelectedRange(day);
              const today = isTodayDate(day);

              return (
                <button
                  key={day.toString()}
                  className={`h-10 w-10 rounded-full text-sm cursor-pointer ${
                    isDisabled
                      ? "text-gray-400 line-through cursor-not-allowed"
                      : inRange
                      ? "bg-blue-200 text-blue-600 dark:bg-darkPrimaryBorder dark:text-white"
                      : selected
                      ? "bg-blue-500 dark:bg-darkBackground text-white"
                      : today
                      ? "bg-yellow-200 dark:bg-white dark:text-black text-yellow-800" // Highlight today
                      : " dark:hover:bg-darkPrimaryBorder hover:bg-gray-100 text-black dark:text-white"
                  }`}
                  onClick={(event) => !isDisabled && handleSelectDay(event, day)}
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
};

export default Days;
