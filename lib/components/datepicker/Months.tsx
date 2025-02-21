import React from "react";
import { format, setMonth, isBefore, isAfter } from "date-fns";

interface MonthsProps {
  currentMonth: Date;
  onSelectMonth: (month: number) => void;
  minDate?: Date;
  maxDate?: Date;
}

const Months: React.FC<MonthsProps> = ({ currentMonth, onSelectMonth, minDate, maxDate }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {Array.from({ length: 12 }).map((_, index) => {
        const monthDate = setMonth(currentMonth, index);
        const isDisabled = (minDate && isBefore(monthDate, minDate)) || (maxDate && isAfter(monthDate, maxDate));

        return (
          <button
            key={index}
            className={`p-2 rounded border ${
              isDisabled ? "text-gray-400 line-through cursor-not-allowed" : "hover:bg-gray-200"
            }`}
            onClick={() => !isDisabled && onSelectMonth(index)}
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
