import React from 'react';
import {
  format,
  isSameDay,
  isWithinInterval,
  isBefore,
  isAfter,
  parseISO,
  setMonth,
  setYear,
  subMonths, addMonths,
} from 'date-fns';

interface CalendarProps {
  month: Date | null;
  isRange: boolean;
  startDate?: Date | null;
  endDate?: Date | null;
  hoveredDate?: { date: Date | null };
  onDateSelect: (date: Date) => void;
  onDateHover: (date: Date) => void;
  onNavigate: (type: string, date?: Date, isStart?: boolean) => void;
  minDate?: string;
  maxDate?: string;
}

interface CalendarState {
  isMonthSelectionOpen: boolean;
  isYearSelectionOpen: boolean;
}

class Calendar extends React.Component<CalendarProps, CalendarState> {
  state: CalendarState = {
    isMonthSelectionOpen: false,
    isYearSelectionOpen: false,
  };

  toggleMonthSelection = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    this.setState((prevState) => ({
      isMonthSelectionOpen: !prevState.isMonthSelectionOpen,
      isYearSelectionOpen: false,
    }));
  };

  toggleYearSelection = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    this.setState((prevState) => ({
      isYearSelectionOpen: !prevState.isYearSelectionOpen,
      isMonthSelectionOpen: false,
    }));
  };

  handleMonthSelect = (event: React.MouseEvent<HTMLButtonElement>, monthIndex: number) => {
    event.preventDefault();
    const { month, onNavigate, isRange } = this.props;
    if (month) {
      const updatedMonth = setMonth(month, monthIndex);
      onNavigate('specific', updatedMonth);

      if (isRange) {
        const nextMonth = addMonths(updatedMonth, 0);
        onNavigate('specific', nextMonth, false);
      } else {
        const prevMonth = subMonths(updatedMonth, 0);
        onNavigate('specific', prevMonth, true);
      }
    }
    this.setState({ isMonthSelectionOpen: false });
  };

  handleYearSelect = (event: React.MouseEvent<HTMLButtonElement>, year: number) => {
    event.preventDefault();
    const { month, onNavigate, isRange } = this.props;
    if (month) {
      const updatedYear = setYear(month, year);
      onNavigate('specific', updatedYear);

      if (isRange) {
        const nextYear = setYear(month, year);
        onNavigate('specific', nextYear, false);
      } else {
        const previousYear = setYear(month, year);
        onNavigate('specific', previousYear, true);
      }
    }
    this.setState({ isYearSelectionOpen: false });
  };

  renderMonthSelection = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return (
      <div className="grid grid-cols-2 max-h-80 gap-2 p-4 bg-gray-100 dark:bg-darkDialogBackground rounded">
        {months.map((month, index) => (
          <button
            key={index}
            onClick={(event) => this.handleMonthSelect(event, index)}
            className="px-4 py-2 bg-inherit rounded-lg hover:bg-blue-100 dark:hover:bg-darkPrimaryBorder focus:outline-none uppercase"
          >
            <div className=' w-full line-clamp-1'>{month}</div>
          </button>
        ))}
      </div>
    );
  };

  renderYearSelection = (minDate?: string, maxDate?: string) => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 401 }, (_, i) => currentYear - 200 + i);

    const minDateParsed = minDate ? parseISO(minDate) : null;
    const maxDateParsed = maxDate ? parseISO(maxDate) : null;

    const yearRefs: Record<number, HTMLButtonElement | null> = {};

    return (
      <div
        className=" max-h-80 overflow-y-auto grid grid-cols-2 gap-2 p-4 dark:bg-darkDialogBackground bg-gray-100 rounded"
        ref={(ref) => {
          if (ref) {
            const currentYearIndex = years.findIndex((year) => year === currentYear);
            if (currentYearIndex !== -1 && yearRefs[currentYearIndex]) {
              yearRefs[currentYearIndex]?.scrollIntoView({ block: 'start' });
            }
          }
        }}
      >
        {years.map((year, index) => {
          const isOutOfRange =
            (minDateParsed && isBefore(new Date(year, 0, 1), minDateParsed)) ||
            (maxDateParsed && isAfter(new Date(year, 11, 31), maxDateParsed));

          return (
            <button
              key={year}
              ref={(el) => (yearRefs[index] = el)}
              onClick={(event) => this.handleYearSelect(event, year)}
              className={`px-4 py-2 h-10 rounded  bg-inherit hover:bg-blue-100 dark:hover:bg-darkPrimaryBorder focus:outline-none transition-all duration-500 ease-in-out  ${
                isOutOfRange ? 'line-through text-gray-400 cursor-not-allowed' : ''
              }`}
              disabled={isOutOfRange || undefined}
            >
              {year}
            </button>
          );
        })}
      </div>
    );
  };

  render() {
    const {
      month,
      isRange,
      startDate,
      endDate,
      hoveredDate,
      onDateSelect,
      onDateHover,
      onNavigate,
      minDate,
      maxDate,
    } = this.props;

    const { isMonthSelectionOpen, isYearSelectionOpen } = this.state;

    if (!month) {
      return <div>Error: Month is not defined.</div>;
    }

    const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(month.getFullYear(), month.getMonth(), 1);
    const startingDayOfWeek = firstDayOfMonth.getDay();
    const daysInPreviousMonth = new Date(month.getFullYear(), month.getMonth(), 0).getDate();

    const calendarDays = [];
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      calendarDays.push({
        date: new Date(month.getFullYear(), month.getMonth() - 1, daysInPreviousMonth - i),
        isCurrentMonth: false,
      });
    }
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push({
        date: new Date(month.getFullYear(), month.getMonth(), day),
        isCurrentMonth: true,
      });
    }
    const totalDays = calendarDays.length;
    const remainingDays = 42 - totalDays;
    for (let i = 1; i <= remainingDays; i++) {
      calendarDays.push({
        date: new Date(month.getFullYear(), month.getMonth() + 1, i),
        isCurrentMonth: false,
      });
    }

    const today = new Date();
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    return (
      <div className="w-full font-poppinsRegular text-sm">
        <div className="flex justify-between items-center p-2 rounded-lg mb-5 border-[1px] border-gray-300 dark:border-darkPrimaryBorderLight">
          <button
            onClick={(event) => {
              event.preventDefault();
              onNavigate('prev');
            }}
            className="w-8 h-8 px-2 flex-shrink-0 py-1 bg-inherit rounded-full hover:bg-gray-200"
          >
            <svg fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 flex-shrink-0">
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
          </button>
          <div className="grid grid-cols-2 w-full">
            <div className="flex w-full justify-center">
              <div
                onClick={this.toggleMonthSelection}
                className="flex font-semibold cursor-pointer hover:underline"
              >
                {format(month, 'MMMM')}
              </div>
            </div>
            <div className="flex w-full justify-center">
              <div
                onClick={this.toggleYearSelection}
                className="flex font-semibold cursor-pointer hover:underline"
              >
                {format(month, 'yyyy')}
              </div>
            </div>
          </div>
          <button
            onClick={(event) => {
              event.preventDefault();
              onNavigate('next');
            }}
            className="w-8 h-8 px-2 flex-shrink-0 py-1 bg-inherit rounded-full hover:bg-gray-200"
          >
            <svg fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 flex-shrink-0">
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>
        </div>

        {isMonthSelectionOpen && this.renderMonthSelection()}
        {isYearSelectionOpen && this.renderYearSelection(minDate, maxDate)}

        {!isMonthSelectionOpen && !isYearSelectionOpen && (
          <div className="grid grid-cols-7 gap-0 text-center border-[1px] dark:border-darkPrimaryBorderLight border-gray-300 px-2 py-4 rounded-lg text-gray-600">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="font-semibold py-1 font-poppinsSemiBold uppercase text-gray-600 dark:text-white/75">
                {day}
              </div>
            ))}
            {calendarDays.map(({ date, isCurrentMonth }, index) => {
              const isStart = isRange && startDate && isSameDay(date, startDate) && isCurrentMonth;
              const isEnd = isRange && endDate && isSameDay(date, endDate) && isCurrentMonth;

              const isHoveredDateCurrent = hoveredDate?.date && isSameDay(date, hoveredDate?.date) && isCurrentMonth;
              const isOutOfRange = (minDate && isBefore(date, parseISO(minDate))) || (maxDate && isAfter(date, parseISO(maxDate)));
              const isHoveredRange =
                isRange &&
                startDate &&
                hoveredDate &&
                isWithinInterval(date, {
                  start: startDate && hoveredDate?.date ? (startDate < hoveredDate.date ? startDate : hoveredDate.date) : new Date(),
                  end: startDate && hoveredDate?.date ? (startDate < hoveredDate.date ? hoveredDate.date : startDate) : new Date(),

                }) &&
                isCurrentMonth;

              const isHoveredContainerHighlight =
                isRange &&
                startDate &&
                hoveredDate &&
                isWithinInterval(date, {
                  start: startDate && hoveredDate?.date ? (startDate < hoveredDate.date ? startDate : hoveredDate.date) : new Date(),
                  end: startDate && hoveredDate?.date ? (startDate < hoveredDate.date ? hoveredDate.date : startDate) : new Date(),
                }) &&
                isCurrentMonth;

              const isSelectedRangeHighlight =
                isRange &&
                startDate &&
                endDate &&
                isWithinInterval(date, {
                  start: startDate < endDate ? startDate : endDate,
                  end: startDate < endDate ? endDate : startDate,
                }) &&
                isCurrentMonth;

              const isToday = isSameDay(date, todayDate) && isCurrentMonth;

              return (
                <button
                  key={index}
                  onClick={(event) => {
                    event.preventDefault();
                    if (!isOutOfRange) {
                      onDateSelect(date);
                    }
                  }}
                  onMouseEnter={() => onDateHover(date)}
                  className={`w-full square text-sm ${
                    isToday
                      ? `bg-primary text-white dark:bg-white dark:text-black rounded-full `
                      : isStart || isEnd
                      ? `bg-primary dark:bg-darkPrimaryBorderLight text-white ${
                          isStart ? 'rounded-l-full' : 'rounded-r-full'
                        }`
                      : isHoveredDateCurrent
                      ? `bg-primary dark:bg-darkPrimaryBorderLight text-white`
                      : isHoveredContainerHighlight
                      ? 'bg-primary/25 dark:bg-darkPrimaryBorderLight/25'
                      : isSelectedRangeHighlight || isHoveredRange
                      ? 'bg-primary/25 dark:text-white dark:bg-darkPrimaryBorderLight/25'
                      : 'dark:hover:bg-white/50 dark:hover:text-white rounded-full'
                  }  ${!isCurrentMonth ? (isOutOfRange) ?`line-through cursor-not-allowed`:'text-gray-400' : (isOutOfRange) ? `text-gray-400 line-through cursor-not-allowed`:(isCurrentMonth && !isToday)? 'text-black dark:text-white':''}`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Calendar;
