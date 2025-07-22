import { default as React } from 'react';
import { DateContextProps } from './DateContext';
interface DaysProps {
    calendarIndex?: number;
    minDate?: Date;
    maxDate?: Date;
    defaultDate?: Date;
    useRange?: boolean;
    withTime?: boolean;
    disableWeekends?: boolean;
    disabledDates?: string[];
    onSelect?: (date: Date) => void;
    dateContext: DateContextProps;
}
declare const _default: {
    new (props: Omit<DaysProps, "dateContext">): {
        render(): import("react/jsx-runtime").JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<DaysProps, "dateContext">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<DaysProps, "dateContext">>;
        state: Readonly<{}>;
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<DaysProps, "dateContext">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<DaysProps, "dateContext">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<DaysProps, "dateContext">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<DaysProps, "dateContext">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<DaysProps, "dateContext">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<DaysProps, "dateContext">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<DaysProps, "dateContext">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
    propTypes?: any;
};
export default _default;
