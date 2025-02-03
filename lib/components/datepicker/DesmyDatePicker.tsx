import { Component, createRef } from 'react';
import { createPopper } from '@popperjs/core';
import { addMonths, format,subMonths, parseISO } from 'date-fns';
import DatePickerInput from './DatePickerInput';
import DatePickerModal from './DatePickerModal';

type DatePickerProps = {
  isRange?: boolean;
  date?: {
    startDate?: string;
    endDate?: string;
  };
  placeholder?: string;
  separator?: string;
  displayFormat?: string;
  minDate?: string;
  maxDate?: string;
  onSelected?: (selected: { startDate?: string; endDate?: string } | string | null) => void;
  showActionButtons?: boolean;
};

type DatePickerState = {
  isOpen: boolean;
  isRange: boolean;
  startDate: Date | null;
  endDate: Date | null;
  hoveredDate: { date: Date; type: string; isOutOfCurrentMonth: boolean } | null;
  currentMonth: Date;
  endMonth: Date;
  parsedMinDate: Date | null;
  parsedMaxDate: Date | null;
};

class DesmyDatePicker extends Component<DatePickerProps, DatePickerState> {
  private btnDropdownRef = createRef<HTMLDivElement>();
  private popoverDropdownRef = createRef<HTMLDivElement>();
  private popperInstance: ReturnType<typeof createPopper> | null = null;

  constructor(props: DatePickerProps) {
    super(props);
    this.state = {
      isOpen: false,
      isRange: props.isRange ?? true,
      startDate: props.date?.startDate ? parseISO(props.date.startDate) : null,
      endDate: props.date?.endDate ? parseISO(props.date.endDate) : null,
      hoveredDate: null,
      currentMonth: props.date?.startDate
        ? new Date(parseISO(props.date.startDate).getFullYear(), parseISO(props.date.startDate).getMonth(), 1)
        : new Date(),
      endMonth: props.date?.endDate
        ? new Date(parseISO(props.date.endDate).getFullYear(), parseISO(props.date.endDate).getMonth(), 1)
        : addMonths(new Date(), 1),
      parsedMinDate: props.minDate ? parseISO(props.minDate) : null,
      parsedMaxDate: props.maxDate ? parseISO(props.maxDate) : null,
    };
  }

  componentDidMount(): void {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount(): void {
    this.destroyDropdownPopper();
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  toggleModal = (): void => {
    this.setState(
      (prevState) => ({ isOpen: !prevState.isOpen }),
      () => {
        if (this.state.isOpen) {
          this.createDropdownPopper();
          this.populateDates();
        } else {
          this.destroyDropdownPopper();
        }
      }
    );
  };

  createDropdownPopper = (): void => {
    if (this.btnDropdownRef.current && this.popoverDropdownRef.current) {
      this.popperInstance = createPopper(this.btnDropdownRef.current, this.popoverDropdownRef.current, {
        placement: 'bottom-start',
        modifiers: [
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['top', 'bottom-start'],
            },
          },
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ],
      });
    }
  };

  destroyDropdownPopper = (): void => {
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  };

  handleClickOutside = (event: MouseEvent): void => {
    if (
      this.state.isOpen &&
      this.popoverDropdownRef.current &&
      this.btnDropdownRef.current &&
      !this.popoverDropdownRef.current.contains(event.target as Node) &&
      !this.btnDropdownRef.current.contains(event.target as Node)
    ) {
      this.setState({ isOpen: false });
      this.destroyDropdownPopper();
    }
  };

  populateDates = (): void => {
    const { startDate, endDate } = this.state;

    this.setState({
      startDate,
      endDate,
      currentMonth: startDate
        ? new Date(startDate.getFullYear(), startDate.getMonth(), 1)
        : new Date(),
      endMonth: endDate
        ? new Date(endDate.getFullYear(), endDate.getMonth(), 1)
        : addMonths(new Date(), 1),
    });
  };

  handleDateSelect = (date: Date): void => {
    const { isRange, startDate, endDate } = this.state;
    const { onSelected } = this.props;

    const formattedDate = format(date, 'yyyy-MM-dd');

    if (isRange) {
      if (startDate && endDate) {
        this.setState({ startDate: date, endDate: null, hoveredDate: null });
        onSelected?.({ startDate: formattedDate, endDate: undefined });
        return;
      }

      if (!startDate) {
        this.setState({ startDate: date, hoveredDate: null });
        onSelected?.({ startDate: formattedDate, endDate: undefined });
      } else {
        const newStartDate = startDate < date ? startDate : date;
        const newEndDate = startDate > date ? startDate : date;

        this.setState(
          { startDate: newStartDate, endDate: newEndDate, hoveredDate: null },
          this.toggleModal
        );

        onSelected?.({
          startDate: format(newStartDate, 'yyyy-MM-dd'),
          endDate: format(newEndDate, 'yyyy-MM-dd'),
        });
      }
    } else {
      this.setState({ startDate: date, endDate: date, hoveredDate: null }, this.toggleModal);
      onSelected?.({
        startDate: format(date, 'yyyy-MM-dd'),
        endDate: format(date, 'yyyy-MM-dd'),
      });
    }
  };

  handleDateHover = (date: Date, type: string): void => {
    const { isRange, startDate } = this.state;
    if (isRange && startDate) {
      this.setState({
        hoveredDate: {
          date,
          type,
          isOutOfCurrentMonth: false,
        },
      });
    }
  };

  resetSelection = (): void => {
    this.setState({
      startDate: null,
      endDate: null,
      hoveredDate: null,
      currentMonth: new Date(),
      endMonth: addMonths(new Date(), 1),
    });
    this.props.onSelected?.(null);
  };
  handleNavigate = (
    type: 'prev' | 'next' | 'specific',
    calendarType: 'start' | 'end',
    date?: Date
  ) => {
    this.setState((prevState) => {
      let updatedState: Partial<DatePickerState> = {};
  
      if (calendarType === 'start') {
        const newStartMonth =
          type === 'prev'
            ? subMonths(prevState.currentMonth, 1)
            : type === 'next'
            ? addMonths(prevState.currentMonth, 1)
            : date || prevState.currentMonth;
  
        updatedState = { currentMonth: newStartMonth, endMonth: prevState.endMonth };
      } else if (calendarType === 'end') {
        const newEndMonth =
          type === 'prev'
            ? subMonths(prevState.endMonth, 1)
            : type === 'next'
            ? addMonths(prevState.endMonth, 1)
            : date || prevState.endMonth;
  
        updatedState = { currentMonth: prevState.currentMonth, endMonth: newEndMonth };
      }
  
      return updatedState as DatePickerState;
    });
  };
  render() {
    const { isOpen, isRange, startDate, endDate, hoveredDate, currentMonth, endMonth } = this.state;
    const {
      placeholder = '',
      separator = ' to ',
      displayFormat = 'MMMM dd, yyyy',
      date,
      minDate,
      maxDate,
      showActionButtons,
    } = this.props;

    const parsedMinDate = minDate ? parseISO(minDate as string) : null;
    const parsedMaxDate = maxDate ? parseISO(maxDate as string) : null;
    const parsedStartDate = startDate || (date?.startDate ? parseISO(date.startDate) : null);
    const parsedendDate = endDate || (date?.endDate ? parseISO(date.endDate) : null);
    
   

    return (
      <div ref={this.btnDropdownRef}>
        <DatePickerInput
          isRange={isRange}
          startDate={parsedStartDate}
          endDate={parsedendDate}
          separator={separator}
          displayFormat={displayFormat}
          placeholder={placeholder}
          onFocus={this.toggleModal}
        />
        {isOpen && (
          <div ref={this.popoverDropdownRef} style={{ zIndex: 1000 }}>
            <DatePickerModal
              isRange={isRange}
              startDate={startDate}
              endDate={endDate}
              hoveredDate={hoveredDate}
              currentMonth={currentMonth}
              endMonth={endMonth}
              minDate={parsedMinDate}
              maxDate={parsedMaxDate}
              onDateSelect={this.handleDateSelect}
              onDateHover={this.handleDateHover}
              resetSelection={this.resetSelection}
              toggleModal={this.toggleModal}
              onNavigate={this.handleNavigate}
              showActionButtons={showActionButtons}
            />
          </div>
        )}
      </div>
    );
  }
}

export { DesmyDatePicker };
