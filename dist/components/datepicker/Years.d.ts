import { default as React } from 'react';
interface YearsProps {
    currentYear: number;
    onSelectYear: (year: number) => void;
    minDate?: Date;
    maxDate?: Date;
}
declare const Years: React.FC<YearsProps>;
export default Years;
