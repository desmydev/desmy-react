import React from "react";
import {
  format,
  setMonth,
  startOfMonth,
  endOfMonth,
  isBefore,
  isAfter,
  isWithinInterval,
} from "date-fns";

interface MonthsProps {
  currentMonth: Date;
  onSelectMonth: (month: number) => void;
  minDate?: Date;
  maxDate?: Date;
}

const Months: React.FC<MonthsProps> = ({
  currentMonth,
  onSelectMonth,
  minDate,
  maxDate,
}) => {
  // Helper function to check if a month should be disabled
  const isMonthDisabled = (index: number): boolean => {
    const monthStart = startOfMonth(setMonth(currentMonth, index));
    const monthEnd = endOfMonth(monthStart);

    if (minDate && maxDate) {
      const overlapsMin = isWithinInterval(minDate, { start: monthStart, end: monthEnd });
      const overlapsMax = isWithinInterval(maxDate, { start: monthStart, end: monthEnd });
      const overlapsMonth = isWithinInterval(monthStart, { start: minDate, end: maxDate }) ||
                            isWithinInterval(monthEnd, { start: minDate, end: maxDate });

      return !(overlapsMin || overlapsMax || overlapsMonth);
    }

    if (minDate) {
      return isBefore(monthEnd, minDate);
    }

    if (maxDate) {
      return isAfter(monthStart, maxDate);
    }

    return false;
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {Array.from({ length: 12 }).map((_, index) => {
        const monthDate = setMonth(currentMonth, index);
        const isDisabled = isMonthDisabled(index);

        return (
          <button
            key={index}
            className={`p-2 rounded border text-sm font-medium ${
              isDisabled
                ? "text-gray-400 line-through cursor-not-allowed"
                : "hover:bg-gray-200 dark:hover:bg-darkPrimaryBorder"
            }`}
            onClick={(e) => {
              e.preventDefault()
              !isDisabled && onSelectMonth(index)
            }
            }
            disabled={isDisabled}
          >
            {format(monthDate, "MMM")}
          </button>
        );
      })}
    </div>
  );
};

export default Months;
