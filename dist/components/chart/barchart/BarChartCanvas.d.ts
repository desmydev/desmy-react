import { default as React, Component, RefObject } from 'react';
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
        tooltip?: {
            enabled?: boolean;
            callbacks?: {
                label?: (value: number, label: string, datasetLabel: string) => string;
            };
        };
    };
}
interface BarChartCanvasProps {
    data: ChartData;
    options?: ChartOptions;
    className?: string;
    onHoverIndexChange?: (hoveredIndex: number | null, tooltipX: number, tooltipY: number) => void;
    hoveredIndex: number | null;
    tooltipX: number;
    tooltipY: number;
}
export declare class BarChartCanvas extends Component<BarChartCanvasProps> {
    canvasRef: RefObject<HTMLCanvasElement | null>;
    containerRef: RefObject<HTMLDivElement | null>;
    canvasWrapperRef: RefObject<HTMLDivElement | null>;
    ctx: CanvasRenderingContext2D | null;
    animationFrameId: number | null;
    animationStartTime: number | null;
    animationDuration: number;
    animationProgress: number;
    constructor(props: BarChartCanvasProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: BarChartCanvasProps): void;
    componentWillUnmount(): void;
    handleResize: () => void;
    setupCanvas(): void;
    startAnimation(): void;
    animate: (timestamp?: number) => void;
    drawChart(progress?: number): void;
    handleMouseMove: (event: React.MouseEvent<HTMLCanvasElement>) => void;
    handleMouseLeave: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
declare global {
    interface CanvasRenderingContext2D {
        roundRect(x: number, y: number, w: number, h: number, r: number): void;
    }
}
export {};
