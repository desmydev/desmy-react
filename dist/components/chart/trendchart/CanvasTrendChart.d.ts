import { default as React, RefObject } from 'react';
import { Dataset, ChartType, Mode } from './ChartRenderer';
import { ScaleState } from './utils';
import { NarrativeReport, ApplicationReportItem } from './TrendReportPanel';
interface FilterItem {
    id: string;
    name: string;
    value: any;
    label: string;
}
type Props = {
    options?: {
        plugins: {
            title?: {
                display: boolean;
                text: string;
                className?: string;
                hint?: string;
            };
        };
    };
    request: {
        url?: string;
        token?: string;
    };
    filter: {
        url?: string;
        token?: string;
    };
    queryParam?: string;
    labels?: string[];
    rawData?: number[];
    datasets?: Dataset[];
    groupData?: {
        groups: string[];
        countsByGroup: Record<string, number[]>;
        _colors?: Record<string, string>;
    };
    colors: string[];
    mode?: Mode;
    chartType?: ChartType;
    theme?: 'light' | 'dark' | 'auto';
    className?: string;
    onDrill?: (label: string, group?: string) => void;
};
type State = {
    scale: ScaleState;
    hoverInfo: null | {
        x: number;
        y: number;
        label: string;
        value: number;
        color: string;
    };
    isLoading: boolean;
    labels: string[];
    rawData: number[];
    groupData?: {
        groups: string[];
        countsByGroup: Record<string, number[]>;
        _colors?: Record<string, string>;
    };
    queryParam: string;
    filterhead: FilterItem[];
    error?: string;
    filterOptions: FilterItem[];
    showFilter: boolean;
    colors: string[];
    narrative: NarrativeReport;
    applicationReport: ApplicationReportItem[];
};
export declare class DesmyTrendChart extends React.Component<Props, State> {
    canvasRef: RefObject<HTMLCanvasElement | null>;
    yAxisCanvasRef: RefObject<HTMLCanvasElement | null>;
    containerRef: RefObject<HTMLDivElement | null>;
    animationFrameId: number | null;
    animationStartTime: number | null;
    animationDuration: number;
    animationProgress: number;
    static defaultProps: {
        chartType: string;
        theme: string;
        colors: string[];
    };
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    componentWillUnmount(): void;
    setupCanvas: () => void;
    startAnimation(): void;
    animate: (timestamp?: number) => void;
    animateScrollToEnd: (duration?: number) => void;
    toggleFilter: () => void;
    handleOnFiltered: (filters: {
        [key: string]: any;
    }) => void;
    handleOnClose: () => void;
    removeFilterByName: (label: string) => void;
    loadFilterOptions: () => Promise<void>;
    fetchReportData: () => Promise<void>;
    getTheme(): 'light' | 'dark';
    getMode(): Mode;
    attachEvents(): void;
    onWheel: (e: WheelEvent) => void;
    redraw(animationProgress?: number): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
