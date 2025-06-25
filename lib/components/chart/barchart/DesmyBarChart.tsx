import React, { Component } from 'react';
import axios from 'axios';
import DesmyAuth from '../../apis/DesmyAuth';
import { DesmyState as CommonState } from '../../apis/DesmyState';
import { FilterPanel } from '../FilterPanel';
import { BarChartCanvas } from './BarChartCanvas';
import { DesmyButton } from '../../button/DesmyButton';

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
    legend?: { position: 'top' | 'bottom' | 'left' | 'right' };
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
  barChartContainerClass?:string
  options?: ChartOptions;
  url: string;
  filter: { url: string };
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

export class DesmyBarChart extends Component<BarChartProps, BarChartState> {
  constructor(props: BarChartProps) {
    super(props);
    this.state = {
      hoveredIndex: null,
      tooltipX: 0,
      tooltipY: 0,
      filterhead: [],
      queryParam: '',
      isLoading: false,
      error: undefined,
      filterOptions: [],
      showFilter: false,
    };
  }

  componentDidMount() {
    this.loadFilterOptions();
    this.fetchReportData();
  }

  componentDidUpdate(prevProps: BarChartProps, prevState: BarChartState) {
    if (prevState.queryParam !== this.state.queryParam) {
      this.fetchReportData();
    }
  }

  toggleFilter = () => {
    this.setState((prev) => ({ showFilter: !prev.showFilter }));
  };

  handleOnFiltered = (filters: { [key: string]: any }) => {
    const filteredDataAndFilterHead = Object.entries(filters)
      .map(([key, value]) => {
        if (value && typeof value === 'object' && 'id' in value) {
          const filterValue = value as FilterItem;
          const valueId = filterValue.id || filterValue.value || value;

          if (
            key.toLowerCase().includes('date') &&
            filterValue.value?.startDate &&
            filterValue.value?.endDate
          ) {
            return {
              queryParam: `start_date=${encodeURIComponent(
                String(filterValue.value?.startDate)
              )}&end_date=${encodeURIComponent(String(filterValue.value?.endDate))}`,
              filterItem: { ...filterValue, label: key },
            };
          }

          return {
            queryParam: `${encodeURIComponent(key)}=${encodeURIComponent(String(valueId))}`,
            filterItem: { ...filterValue, label: key },
          };
        }
        return null;
      })
      .filter((item) => item !== null);

    const filtered_data = filteredDataAndFilterHead.map((item) => item!.queryParam).join('&');
    const filterhead = filteredDataAndFilterHead.map((item) => item!.filterItem) as FilterItem[];

    this.setState({
      filterhead,
      queryParam: filtered_data,
      isLoading: true,
      error: undefined,
      showFilter: false,
    });
  };

  handleOnClose = () => {
    this.setState({ showFilter: false });
  };

  removeFilterByName = (label: string) => {
    const newFilterhead = this.state.filterhead.filter((f) => f.label !== label);
    const newQueryParam = newFilterhead
      .map((f) => {
        if (
          f.value &&
          typeof f.value === 'object' &&
          'startDate' in f.value &&
          'endDate' in f.value
        ) {
          return `start_date=${encodeURIComponent(f.value.startDate)}&end_date=${encodeURIComponent(f.value.endDate)}`;
        }
        return `${encodeURIComponent(f.label)}=${encodeURIComponent(f.id || f.value || '')}`;
      })
      .join('&');

    this.setState({ filterhead: newFilterhead, queryParam: newQueryParam, isLoading: true });
  };

  loadFilterOptions = async () => {
    if (!this.props.filter?.url) return;

    try {
      const response = await axios.get(this.props.filter.url, {
        headers: {
          'X-CSRFToken': DesmyAuth.getCookie('csrftoken'),
          Authorization: `Token ${DesmyAuth.get(CommonState.ACCESS_TOKEN)}`,
        },
      });
      if (response.data.success) {
        this.setState({ filterOptions: response.data.data });
      } else {
        this.setState({ error: response.data.message });
      }
    } catch (error: any) {
      this.setState({ error: error.message || 'Failed to load filters' });
    }
  };

  fetchReportData = async () => {
    this.setState({ isLoading: true, error: undefined });

    try {
      let url = this.props.url;
      if (this.state.queryParam) {
        url += `?${this.state.queryParam}`;
      }

      const response = await axios.get(url, {
        headers: {
          'X-CSRFToken': DesmyAuth.getCookie('csrftoken'),
          Authorization: `Token ${DesmyAuth.get(CommonState.ACCESS_TOKEN)}`,
        },
      });

      if (response.data.success) {
        const apiData = response.data.data;

        if (!Array.isArray(apiData) || apiData.length === 0) {
          this.setState({ error: 'No data received', isLoading: false });
          return;
        }

        const labels = apiData.map((item: any) => item.date);
        const keys = Object.keys(apiData[0]).filter((k) => k !== 'date' && k !== '_colors');
        const colorsMap: { [key: string]: string } = apiData[0]._colors || {};

        const hexToRgba = (hex: string, alpha: number) => {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return `rgba(${r},${g},${b},${alpha})`;
        };

        const datasets: Dataset[] = keys.map((key) => {
          const baseColor = colorsMap[key] || '#888888'; // fallback gray
          return {
            label: key.charAt(0).toUpperCase() + key.slice(1),
            data: apiData.map((item: any) => Number(item[key] ?? 0)),
            backgroundColor: hexToRgba(baseColor, 0.7),
            borderColor: hexToRgba(baseColor, 1),
            borderWidth: 1,
          };
        });
        
        this.props.data.labels = labels;
        this.props.data.datasets = datasets;

        this.setState({ isLoading: false, error: undefined });
      } else {
        this.setState({ error: response.data.message, isLoading: false });
      }
    } catch (error: any) {
      this.setState({ error: error.message || 'Failed to fetch chart data', isLoading: false });
    }
  };

  handleHoverChange = (hoveredIndex: number | null, tooltipX: number, tooltipY: number) => {
    this.setState({ hoveredIndex, tooltipX, tooltipY });
  };

  render() {
    const { className, options, data, filter ,barChartContainerClass} = this.props;
    const { isLoading, error, showFilter, filterhead, hoveredIndex, tooltipX, tooltipY } = this.state;

    return (
      <div className={`${className ?? ''} w-full h-full relative`}>
        <header className="flex w-full flex-col md:flex-row justify-start md:justify-between items-center space-x-6">
          <div className="flex flex-col w-full mx-10 md:mx-0">
            {options?.plugins?.title?.display && (
              <div className="flex w-full flex-col mb-3">
                <h3
                  className={`${
                    options?.plugins?.title?.className ??
                    'text-grey-darkest uppercase text-3xl 2xl:text-5xl dark:text-white font-poppinsBlack'
                  }`}
                >
                  {options.plugins.title.text}
                </h3>
                {options.plugins.title?.hint && (
                  <div className="text-grey font-thin text-xs 2xl:text-sm dark:text-white">
                    {options.plugins.title?.hint}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex w-max flex-col lg:items-end justify-start lg:justify-end">
            <div className="flex flex-col lg:items-end justify-start lg:justify-end ">
              <DesmyButton
                onClick={this.toggleFilter}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                    />
                  </svg>
                }
                label={`Filters`}
              />
            </div>
          </div>
        </header>

        <FilterPanel
          filterhead={filterhead}
          showFilter={showFilter}
          onRemoveFilter={this.removeFilterByName}
          onFiltered={this.handleOnFiltered}
          onClose={this.handleOnClose}
          filter={filter}
        />
        {isLoading ? (
          <div className="relative flex justify-center items-center min-h-72 w-full ">Loading...</div>
        ) : error ? (
          <div className="flex justify-center items-center text-red-600 min-h-96 z-10 px-3 py-1 rounded">{error}</div>
        ) : (
          <BarChartCanvas
            data={data}
            options={options}
            hoveredIndex={hoveredIndex}
            tooltipX={tooltipX}
            tooltipY={tooltipY}
            onHoverIndexChange={this.handleHoverChange}
            className={`${barChartContainerClass}`}
          />
        )}
      </div>
    );
  }
}
