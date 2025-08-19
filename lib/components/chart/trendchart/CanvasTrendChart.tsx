import React, { createRef, RefObject } from 'react';
import axios from 'axios';
import { renderChart, Dataset, ChartType, Mode } from './ChartRenderer';
import { ScaleState, clamp } from './utils';
import DesmyAuth from '../../apis/DesmyAuth';
import { TrendReportPanel, NarrativeReport, ApplicationReportItem} from './TrendReportPanel';
import { DesmyButton } from '../../button/DesmyButton';
import { FilterPanel } from '../FilterPanel';

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

export class DesmyTrendChart extends React.Component<Props, State> {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  yAxisCanvasRef: RefObject<HTMLCanvasElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;

  animationFrameId: number | null = null;
  animationStartTime: number | null = null;
  animationDuration = 800;
  animationProgress = 0;

  static defaultProps = {
    chartType: 'line',
    theme: 'auto',
    colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#a855f7'],
  };

  constructor(props: Props) {
    super(props);
    this.canvasRef = createRef<HTMLCanvasElement | null>();
    this.yAxisCanvasRef = createRef<HTMLCanvasElement | null>();
    this.containerRef = createRef<HTMLDivElement | null>();

    this.state = {
      scale: { zoom: 1, panX: 0 },
      hoverInfo: null,
      isLoading: false,
      error: undefined,
      labels: props.labels || [],
      rawData: props.rawData || [],
      groupData: props.groupData,
      filterhead: [],
      queryParam: '',
      filterOptions: [],
      showFilter: false,
      colors: props.colors,
      narrative: {
        identify_patterns: '',
        understand_behavior: '',
        measure_growth_decline: '',
        track_kpis: '',
        detect_anomalies: '',
        support_forecasting: '',
        improve_efficiency: '',
        guide_strategy: '',
        enhance_user_experience: '',
      },
      applicationReport: [],
    };
  }

  componentDidMount() {
    this.setupCanvas();
    window.addEventListener('resize', this.setupCanvas);

    if (this.props.request?.url) {
      this.fetchReportData();
      this.loadFilterOptions();
    } else {
      this.startAnimation();
      this.attachEvents();
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.props.request?.url && prevState.queryParam !== this.state.queryParam) {
      this.fetchReportData();
    } else if (
      this.state.labels !== prevState.labels ||
      this.state.rawData !== prevState.rawData ||
      this.state.groupData !== prevState.groupData ||
      this.state.scale !== prevState.scale ||
      this.props.theme !== prevProps.theme ||
      this.props.chartType !== prevProps.chartType
    ) {
      this.startAnimation();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setupCanvas);
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
  }

  setupCanvas = () => {
    const canvas = this.canvasRef.current;
    const yAxisCanvas = this.yAxisCanvasRef.current;
    const container = this.containerRef.current;
    if (!canvas || !yAxisCanvas || !container) return;

    const dpr = window.devicePixelRatio || 1;
    const labelWidth = 100;
    const yAxisWidth = 60;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight || 300;

    const minCanvasWidth = (this.state.labels.length || 1) * labelWidth;
    const width = Math.max(containerWidth, minCanvasWidth);
    const height = containerHeight;

    // Setup main canvas
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Setup Y-axis canvas with same height in pixels
    yAxisCanvas.width = yAxisWidth * dpr;
    yAxisCanvas.height = height * dpr;
    yAxisCanvas.style.width = `${yAxisWidth}px`;
    yAxisCanvas.style.height = `${height}px`;
    const yAxisCtx = yAxisCanvas.getContext('2d');
    if (yAxisCtx) yAxisCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

    this.redraw(this.animationProgress);
  };

  startAnimation() {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    this.animationStartTime = null;
    this.animationProgress = 0;
    this.animate();
  }

  animate = (timestamp?: number) => {
    if (!this.animationStartTime && timestamp) this.animationStartTime = timestamp;
    if (!timestamp || !this.animationStartTime) {
      this.animationFrameId = requestAnimationFrame(this.animate);
      return;
    }

    const elapsed = timestamp - this.animationStartTime;
    this.animationProgress = Math.min(elapsed / this.animationDuration, 1);

    this.redraw(this.animationProgress);

    if (this.animationProgress < 1) {
      this.animationFrameId = requestAnimationFrame(this.animate);
    } else {
      this.animationFrameId = null;
      this.animateScrollToEnd(600);
    }
  };

  animateScrollToEnd = (duration = 600) => {
    const container = this.containerRef.current;
    if (!container) return;

    const start = container.scrollLeft;
    const end = container.scrollWidth - container.clientWidth;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      container.scrollLeft = start + (end - start) * progress;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

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
          Authorization: `${this.props.request?.token}`,
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
    let url = this.props.request?.url!;
    if (this.state.queryParam) {
      url += `?${this.state.queryParam}`;
    }

    const response = await axios.get(url, {
      headers: {
        'X-CSRFToken': DesmyAuth.getCookie('csrftoken'),
        Authorization: `${this.props.request?.token}`,
      },
    });

    console.log('[fetchReportData] Response:', response.data);

    if (response.data.success) {
      // Fix: get the first element of the data array
      const apiData = response.data.data
      const { report: narrative, applicationReport } = apiData;

      let newColors = this.props.colors;
      if (apiData.groupData?._colors && apiData.groupData.groups) {
        newColors = apiData.groupData.groups.map(
          (g: string) => apiData.groupData._colors[g] || '#3b82f6'
        );
      }

      this.setState(
        {
          labels: apiData.labels || [],
          rawData: apiData.rawData || [],
          groupData: apiData.groupData || undefined,
          colors: newColors,
          narrative,
          applicationReport,
          isLoading: false,
          error: undefined,
        },
        () => {
          console.log('[fetchReportData] State updated with:', {
            labels: this.state.labels,
            rawData: this.state.rawData,
            groupData: this.state.groupData,
          });
          this.startAnimation();
        }
      );
    } else {
      this.setState({
        error: response.data.message || 'Failed to load data',
        isLoading: false,
      });
    }
  } catch (error: any) {
    this.setState({
      error: error.message || 'Network error',
      isLoading: false,
    });
  }
};


  getTheme(): 'light' | 'dark' {
    if (this.props.theme === 'auto') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return this.props.theme!;
  }

  getMode(): Mode {
    if (this.props.mode) return this.props.mode;

    if (this.state.groupData && this.state.groupData.groups && this.state.groupData.groups.length > 1) {
      return 'grouped';
    }

    if (this.props.datasets && this.props.datasets.length > 1) {
      return 'grouped';
    }

    return 'simple';
  }

  attachEvents() {
    const canvas = this.canvasRef.current;
    if (!canvas) return;

    canvas.addEventListener('wheel', this.onWheel, { passive: false });

    let dragging = false;
    let startX = 0;
    let orig = 0;

    canvas.addEventListener('mousedown', (e) => {
      dragging = true;
      startX = e.clientX;
      orig = this.state.scale.panX;
    });

    window.addEventListener('mousemove', (e) => {
      if (dragging) {
        const dx = e.clientX - startX;
        this.setState((s) => ({
          scale: { ...s.scale, panX: clamp(orig + dx, -1000, 1000) },
          hoverInfo: null,
        }));
        return;
      }

      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const { colors } = this.state;
      const { scale } = this.state;
      const pad = 60;
      const height = rect.height - pad * 2;
      const width = rect.width - pad * 2;
      const labelCount = this.state.labels.length > 1 ? this.state.labels.length - 1 : 1;
      const stepX = (width * scale.zoom) / labelCount;
      const offsetX = pad + scale.panX;
      const radius = 6;

      const datasets = this.props.datasets
        ? this.props.datasets
        : this.state.rawData.length > 0
        ? [{ label: 'Data', data: this.state.rawData }]
        : [];

      const allValues = datasets.flatMap((ds) => ds.data || []);
      const maxValRaw = Math.max(...allValues, 1);
      const minVisibleValue = 5;
      const maxVal = maxValRaw < minVisibleValue ? minVisibleValue : maxValRaw;

      let foundHover = null;

      outer: for (let di = 0; di < datasets.length; di++) {
        const ds = datasets[di];
        const color = colors[di] || '#3b82f6';
        for (let i = 0; i < ds.data.length; i++) {
          const x = pad + scale.panX + stepX * i;
          const y = pad + height - (ds.data[i] / maxVal) * height;
          const dx = mouseX - x;
          const dy = mouseY - y;
          if (dx * dx + dy * dy < radius * radius) {
            foundHover = {
              x,
              y,
              label: this.state.labels[i],
              value: ds.data[i],
              color,
            };
            break outer;
          }
        }
      }

      this.setState({ hoverInfo: foundHover });
    });

    window.addEventListener('mouseup', () => {
      dragging = false;
    });

    canvas.addEventListener('mouseleave', () => {
      this.setState({ hoverInfo: null });
    });

    canvas.addEventListener('click', () => {
      if (this.props.onDrill && this.state.hoverInfo) {
        this.props.onDrill(this.state.hoverInfo.label);
      }
    });
  }

  onWheel = (e: WheelEvent) => {
    e.preventDefault();
    this.setState((s) => {
      const z = clamp(s.scale.zoom - e.deltaY * 0.001, 0.5, 4);
      return { scale: { ...s.scale, zoom: z } };
    });
  };

  redraw(animationProgress: number = 1) {
    const canvas = this.canvasRef.current;
    const yAxisCanvas = this.yAxisCanvasRef.current;
    const container = this.containerRef.current;
    if (!canvas || !container || !yAxisCanvas) return;

    const ctx = canvas.getContext('2d');
    const yCtx = yAxisCanvas.getContext('2d');
    if (!ctx || !yCtx) return;

    const dpr = window.devicePixelRatio || 1;
    const labelWidth = 200;
    const yAxisWidth = 60;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight || 300;

    const minCanvasWidth = (this.state.labels.length || 1) * labelWidth;
    const width = Math.max(containerWidth, minCanvasWidth);
    const height = containerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    yAxisCanvas.width = yAxisWidth * dpr;
    yAxisCanvas.height = height * dpr;
    yAxisCanvas.style.width = `${yAxisWidth}px`;
    yAxisCanvas.style.height = `${height}px`;
    yCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

    renderChart({
      ctx,
      width,
      height,
      labels: this.state.labels,
      rawData: [],
      groupData: this.state.groupData,
      chartType: this.props.chartType!,
      mode: this.getMode(),
      theme: this.getTheme(),
      scale: this.state.scale,
      colors: this.state.colors,
      datasets: this.props.datasets ?? (this.state.rawData ? [{ label: 'Data', data: this.state.rawData }] : []),
      onDrill: this.props.onDrill,
      animationProgress,
      leftPadding: yAxisWidth,
      yAxisCtx: yCtx,
      yAxisWidth: yAxisWidth,
    });

    const { hoverInfo } = this.state;
    if (hoverInfo) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(hoverInfo.x, hoverInfo.y, 6, 0, Math.PI * 2);
      ctx.strokeStyle = hoverInfo.color;
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();
    }
  }

  render() {
    const { hoverInfo, isLoading, error, showFilter, filterhead } = this.state;
    const { options, filter, className } = this.props;
    return (
      <div className={`p-4 relative h-full ${className ?? ''}`} style={{ userSelect: 'none' }}>
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
        </header>

        <FilterPanel
          filterhead={filterhead}
          showFilter={showFilter}
          onRemoveFilter={this.removeFilterByName}
          onFiltered={this.handleOnFiltered}
          onClose={this.handleOnClose}
          filter={filter}
        />

        {isLoading && <div>Loading data...</div>}
        {error && <div className="text-red-600">Error: {error}</div>}

        <div className="relative w-full h-[80vh] overflow-auto">
        {!isLoading && 
            <div className="relative w-full h-[70vh] overflow-overflow">
                <div className="flex w-full h-full" style={{ minHeight: 300 }}>
                    <div className="flex-shrink-0 h-full" style={{ width: 60, margin: 0, padding: 0 }}>
                        <canvas
                        ref={this.yAxisCanvasRef}
                        style={{ width: 60, height: '100%', display: 'block', margin: 0, padding: 0 }}
                        className="rounded-l"
                        />
                    </div>
                    <div
                        className="overflow-x-auto overflow-y-hidden flex-1 h-full"
                        ref={this.containerRef}
                        style={{ margin: 0, padding: 0 }}
                    >
                        <canvas
                        ref={this.canvasRef}
                        className="rounded-r"
                        style={{ height: '100%', display: isLoading ? 'none' : 'block', width: '100%', margin: 0, padding: 0 }}
                        />
                    </div>
                </div>
            </div>}
            {this.state.narrative && this.state.applicationReport && (
                <TrendReportPanel
                    narrative={this.state.narrative}
                    applicationReport={this.state.applicationReport}
                />
            )}
            {hoverInfo && !isLoading && (
            <div
                style={{
                position: 'absolute',
                pointerEvents: 'none',
                left: hoverInfo.x + 70, // account for Y axis width + margin
                top: hoverInfo.y + 10,
                backgroundColor: 'rgba(0,0,0,0.75)',
                color: '#fff',
                padding: '4px 8px',
                borderRadius: 4,
                fontSize: 12,
                whiteSpace: 'nowrap',
                userSelect: 'none',
                zIndex: 10,
                }}
            >
                <strong>{hoverInfo.label}</strong>: {hoverInfo.value}
            </div>
            )}
        </div>
        
      </div>
    );
  }
}
