// lib/components/chart/trendchart/TrendReportPanel.tsx
import React from 'react';

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

export class TrendReportPanel extends React.Component<TrendReportPanelProps> {
  render() {
    const { narrative, applicationReport } = this.props;

    // Map narrative fields into an array so we can grid them
    const narrativeItems: { title: string; text: string }[] = [
      { title: 'Identify Patterns', text: narrative.identify_patterns },
      { title: 'Understand Behavior', text: narrative.understand_behavior },
      { title: 'Measure Growth/Decline', text: narrative.measure_growth_decline },
      { title: 'Detect Anomalies', text: narrative.detect_anomalies },
      { title: 'Support Forecasting', text: narrative.support_forecasting },
    ];

    return (
      <div className="space-y-12">
        {/* Narrative Grid */}
        <section>
          <h2 className="text-xl font-bold mb-6  font-poppinsBlack">Summary</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {narrativeItems.map(({ title, text }) => (
              <div
                key={title}
                className="p-4 bg-gray-50 dark:bg-darkDialogBackground dark:text-white dark:border-darkPrimaryBorder rounded-lg shadow-sm border-l-4 border-gray-300"
              >
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-gray-700 dark:text-white">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application KPIs & Programmes */}
        <section>
          <h2 className="text-xl  font-poppinsBlack font-bold mb-6">Application Trends & Growth</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applicationReport.map((item, idx) => {
              // choose border color based on trend
              const borderColor =
                item.trend === 'increase' ? 'border-green-500' : 'border-red-500';

              return (
                <div
                  key={idx}
                  className={`p-4 bg-white dark:bg-darkDialogBackground rounded-lg shadow border-l-4 ${borderColor}`}
                >
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

                  {/* Simple values or lists */}
                  {typeof item.value === 'number' || typeof item.value === 'string' ? (
                    <div
                      className={`text-3xl font-bold ${
                        item.trend === 'increase' ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {item.value}
                    </div>
                  ) : Array.isArray(item.value) && typeof item.value[0] === 'string' ? (
                    <ul className="list-disc pl-5 text-black dark:text-white space-y-1">
                      {(item.value as string[]).map((day) => (
                        <li key={day}>{day}</li>
                      ))}
                    </ul>
                  ) : (
                    /* ProgrammeGrowthItem[] */
                    <div className="space-y-4">
                      {(item.value as ProgrammeGrowthItem[]).map((prog) => {
                        const progBorder = prog.trend === 'increase'
                          ? 'border-green-400'
                          : 'border-red-400';
                        return (
                          <div
                            key={prog.programme}
                            className={`p-2 bg-gray-50 dark:bg-darkDialogBackground rounded border-l-4 ${progBorder}`}
                          >
                            <p className="font-medium">{prog.programme}</p>
                            <p className="text-black dark:text-white">
                              {prog.report}{' '}
                              <span
                                className={`font-bold ${
                                  prog.trend === 'increase'
                                    ? 'text-green-600'
                                    : 'text-red-600'
                                }`}
                              >
                                ({prog.growth}%)
                              </span>
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}
