import { Component } from 'react';
interface Dataset {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
}
interface ChartData {
    labels: string[];
    datasets: Dataset[];
}
interface ChartOptions {
    responsive?: boolean;
    plugins?: {
        legend?: {
            position: 'top' | 'bottom' | 'left' | 'right';
        };
        title?: {
            display: boolean;
            text: string;
            className?: string;
            hint?: string;
        };
        tooltip?: {
            enabled?: boolean;
            callbacks?: {
                label?: (value: number, label: string, datasetLabel: string) => string;
            };
        };
    };
}
interface FilterItem {
    id: string;
    name: string;
    value: any;
    label: string;
}
interface BarChartProps {
    data: ChartData;
    className?: string;
    barChartContainerClass?: string;
    options?: ChartOptions;
    url: string;
    filter: {
        url: string;
    };
}
interface BarChartState {
    hoveredIndex: number | null;
    tooltipX: number;
    tooltipY: number;
    filterhead: FilterItem[];
    queryParam: string;
    isLoading: boolean;
    error?: string;
    filterOptions: FilterItem[];
    showFilter: boolean;
}
export declare class DesmyBarChart extends Component<BarChartProps, BarChartState> {
    constructor(props: BarChartProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: BarChartProps, prevState: BarChartState): void;
    toggleFilter: () => void;
    handleOnFiltered: (filters: {
        [key: string]: any;
    }) => void;
    handleOnClose: () => void;
    removeFilterByName: (label: string) => void;
    loadFilterOptions: () => Promise<void>;
    fetchReportData: () => Promise<void>;
    handleHoverChange: (hoveredIndex: number | null, tooltipX: number, tooltipY: number) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
