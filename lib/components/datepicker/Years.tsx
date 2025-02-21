import React from "react";
import { setYear, isBefore, isAfter, format } from "date-fns";

interface YearsProps {
  currentYear: number;
  onSelectYear: (year: number) => void;
  minDate?: Date;
  maxDate?: Date;
}

const Years: React.FC<YearsProps> = ({ currentYear, onSelectYear, minDate, maxDate }) => {
  const startYear = currentYear - 10; // Show 10 years before
  const endYear = currentYear + 10; // Show 10 years after

  return (
    <div className="grid grid-cols-4 gap-2">
      {Array.from({ length: endYear - startYear + 1 }).map((_, index) => {
        const year = startYear + index;
        const yearDate = setYear(new Date(), year);
        const isDisabled = (minDate && isBefore(yearDate, minDate)) || (maxDate && isAfter(yearDate, maxDate));

        return (
          <button
            key={year}
            className={`p-2 rounded border ${
              isDisabled ? "text-gray-400 line-through cursor-not-allowed" : "hover:bg-gray-200"
            }`}
            onClick={() => !isDisabled && onSelectYear(year)}
            disabled={isDisabled}
          >
            {year}
          </button>
        );
      })}
    </div>
  );
};

export default Years;
