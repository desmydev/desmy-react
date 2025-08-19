import { ScaleState } from './utils';
export type Dataset = {
    label: string;
    data: number[];
    group?: string;
};
export type ChartType = 'bar' | 'line' | 'area';
export type Mode = 'simple' | 'grouped';
export interface RenderOptions {
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
    labels: string[];
    rawData?: number[];
    datasets?: Dataset[];
    groupData?: {
        groups: string[];
        countsByGroup: Record<string, number[]>;
    };
    chartType: ChartType;
    mode: Mode;
    theme: 'light' | 'dark';
    scale: ScaleState;
    colors: string[];
    onDrill?: (label: string, group?: string) => void;
    animationProgress?: number;
    leftPadding?: number;
    yAxisCtx?: CanvasRenderingContext2D;
    yAxisWidth?: number;
}
export declare function renderChart(opt: RenderOptions): void;
