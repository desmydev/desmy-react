import { default as React } from 'react';
interface TimeSelectorProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}
export default class TimeSelector extends React.Component<TimeSelectorProps> {
    parseTime(value: string): {
        h: number;
        m: number;
        meridian: string;
    };
    formatTime(h: number, m: number, meridian: string): string;
    updateTime(part: "h" | "m" | "meridian", direction: "up" | "down"): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
