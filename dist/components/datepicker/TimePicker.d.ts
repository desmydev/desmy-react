import { default as React, Component } from 'react';
import { DateContextProps } from './DateContext';
interface TimePickerProps {
    useRange?: boolean;
    onConfirm?: () => void;
}
declare class TimePicker extends Component<TimePickerProps> {
    static contextType: React.Context<DateContextProps | undefined>;
    context: DateContextProps;
    componentDidMount(): void;
    formatTime: (date: Date) => string;
    addHours: (date: Date, hoursToAdd: number) => Date;
    handleStartTimeChange: (value: string) => void;
    handleEndTimeChange: (value: string) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default TimePicker;
