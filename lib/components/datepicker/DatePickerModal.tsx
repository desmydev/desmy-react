import React from 'react';
import Calendar from './Calendar';
import { addDays, subDays } from 'date-fns';

type DatePickerModalProps = {
  isRange: boolean;
  startDate: Date | null;
  endDate: Date | null;
  hoveredDate: { date: Date; type: string; isOutOfCurrentMonth: boolean } | null;
  currentMonth: Date;
  endMonth: Date;
  minDate?: Date | null; // Allow undefined
  maxDate?: Date | null; // Allow undefined
  showActionButtons?: boolean;
  onDateSelect: (date: Date, isStart: boolean) => void;
  onDateHover: (date: Date, rangeType: "start" | "end") => void;
  resetSelection: () => void;
  className? :string;
  toggleModal: () => void;
  onNavigate: (type: "prev" | "next" | "specific", calendarType: "start" | "end", date?: Date) => void;
};

type DatePickerModalState = {
  isStartMonthSelectionOpen: boolean;
  isStartYearSelectionOpen: boolean;
  isEndMonthSelectionOpen: boolean;
  isEndYearSelectionOpen: boolean;
};

class DatePickerModal extends React.Component<DatePickerModalProps, DatePickerModalState> {
  state: DatePickerModalState = {
    isStartMonthSelectionOpen: false,
    isStartYearSelectionOpen: false,
    isEndMonthSelectionOpen: false,
    isEndYearSelectionOpen: false,
  };

  toggleStartMonthSelection = () => {
    this.setState((prevState) => ({
      isStartMonthSelectionOpen: !prevState.isStartMonthSelectionOpen,
      isStartYearSelectionOpen: false,
    }));
  };

  toggleStartYearSelection = () => {
    this.setState((prevState) => ({
      isStartYearSelectionOpen: !prevState.isStartYearSelectionOpen,
      isStartMonthSelectionOpen: false,
    }));
  };

  toggleEndMonthSelection = () => {
    this.setState((prevState) => ({
      isEndMonthSelectionOpen: !prevState.isEndMonthSelectionOpen,
      isEndYearSelectionOpen: false,
    }));
  };

  toggleEndYearSelection = () => {
    this.setState((prevState) => ({
      isEndYearSelectionOpen: !prevState.isEndYearSelectionOpen,
      isEndMonthSelectionOpen: false,
    }));
  };

  render() {
    const {
      isRange,
      startDate,
      endDate,
      hoveredDate,
      currentMonth,
      endMonth: originalEndMonth,
      minDate,
      maxDate,
      // showActionButtons,
      onDateSelect,
      onDateHover,
      // resetSelection,
      // toggleModal,
      onNavigate,
    } = this.props;
  
    const adjustedMinDate = minDate ? subDays(minDate, 1) : undefined;
    const adjustedMaxDate = maxDate ? addDays(maxDate, 1) : undefined;
  
    // Ensure endMonth is next month if startDate and endDate are in the same month
    const isSameMonth =
      startDate &&
      endDate &&
      startDate.getFullYear() === endDate.getFullYear() &&
      startDate.getMonth() === endDate.getMonth();
  
    const adjustedEndMonth = isSameMonth
      ? addDays(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1), 0)
      : originalEndMonth;
  
    return (
     <>
      <div
            className={`p-4 rounded-lg overflow-hidden bg-white dark:bg-darkDialogBackground font-poppinsRegular ${
              isRange
                ? `grid grid-col-1 lg:grid-cols-2 gap-8 mt-4`
                : ` flex flex-col w-full`
            } ${this.props.className}`}
          >
            <Calendar
              month={currentMonth}
              isRange={isRange}
              startDate={startDate}
              endDate={endDate}
              hoveredDate={hoveredDate ? { date: hoveredDate.date } : undefined}
              minDate={adjustedMinDate ? adjustedMinDate.toISOString() : undefined}
              maxDate={adjustedMaxDate ? adjustedMaxDate.toISOString() : undefined}
              onDateSelect={(date) => onDateSelect(date, true)}
              onDateHover={(date) => onDateHover(date, 'start')}
              onNavigate={(type, date) =>
                onNavigate(type as "prev" | "next" | "specific", 'start', date)
              }
            />
            {isRange && (
              <Calendar
              month={adjustedEndMonth}
              isRange={isRange}
              startDate={startDate}
              endDate={endDate}
              hoveredDate={hoveredDate ? { date: hoveredDate.date } : undefined}
              minDate={adjustedMinDate ? adjustedMinDate.toISOString() : undefined}
              maxDate={adjustedMaxDate ? adjustedMaxDate.toISOString() : undefined}
              onDateSelect={(date) => onDateSelect(date, false)}
              onDateHover={(date) => onDateHover(date, 'end')}
              onNavigate={(type, date) => onNavigate(type as "prev" | "next" | "specific",'end', date)}
            />
            )}
          </div>
     </>
    );
  }
  
}

export default DatePickerModal;
