import { default as React } from 'react';
export interface NarrativeReport {
    identify_patterns: string;
    understand_behavior: string;
    measure_growth_decline: string;
    track_kpis: string;
    detect_anomalies: string;
    support_forecasting: string;
    improve_efficiency: string;
    guide_strategy: string;
    enhance_user_experience: string;
}
export interface ProgrammeGrowthItem {
    programme: string;
    first: number;
    second: number;
    growth: number;
    trend: 'increase' | 'decrease';
    report: string;
}
export interface ApplicationReportItem {
    title: string;
    value: number | string | string[] | ProgrammeGrowthItem[];
    trend: 'increase' | 'decrease';
}
export interface TrendReportPanelProps {
    narrative: NarrativeReport;
    applicationReport: ApplicationReportItem[];
}
export declare class TrendReportPanel extends React.Component<TrendReportPanelProps> {
    render(): import("react/jsx-runtime").JSX.Element;
}
