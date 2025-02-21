import { default as React } from 'react';
interface MonthsProps {
    currentMonth: Date;
    onSelectMonth: (month: number) => void;
    minDate?: Date;
    maxDate?: Date;
}
declare const Months: React.FC<MonthsProps>;
export default Months;
