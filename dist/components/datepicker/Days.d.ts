import { default as React } from 'react';
interface DaysProps {
    calendarIndex?: number;
    minDate?: Date;
    maxDate?: Date;
    defaultDate?: Date;
    onSelect?: (date: Date) => void;
}
declare const Days: React.FC<DaysProps>;
export default Days;
