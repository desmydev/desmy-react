import { default as React, Component, RefObject } from 'react';
interface Dataset {
    label: string;
    data: number[];
    backgroundColor: string | string[];
    borderColor: string | string[];
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
        };
        tooltip?: {
            enabled?: boolean;
            callbacks?: {
                label?: (value: number, label: string, datasetLabel: string) => string;
            };
        };
    };
}
interface PieChartProps {
    data: ChartData;
    options?: ChartOptions;
    width?: number;
    height?: number;
}
interface PieChartState {
    hoveredIndex: number | null;
    tooltipX: number;
    tooltipY: number;
}
export declare class DesmyPieChart extends Component<PieChartProps, PieChartState> {
    static defaultProps: {
        width: number;
        height: number;
    };
    canvasRef: RefObject<HTMLCanvasElement | null>;
    ctx: CanvasRenderingContext2D | null;
    state: PieChartState;
    constructor(props: PieChartProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    setupCanvas(): void;
    drawRoundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number): void;
    drawChart(): void;
    shadeColor(color: string, percent: number): string;
    handleMouseMove: (event: React.MouseEvent<HTMLCanvasElement>) => void;
    handleMouseLeave: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
