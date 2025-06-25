import React, { Component, createRef, RefObject } from 'react';

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
  onHoverIndexChange?: (
    hoveredIndex: number | null,
    tooltipX: number,
    tooltipY: number
  ) => void;
  hoveredIndex: number | null;
  tooltipX: number;
  tooltipY: number;
}

export class BarChartCanvas extends Component<BarChartCanvasProps> {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  canvasWrapperRef: RefObject<HTMLDivElement | null>;

  ctx: CanvasRenderingContext2D | null = null;

  animationFrameId: number | null = null;
  animationStartTime: number | null = null;
  animationDuration = 800; // ms
  animationProgress = 0;

  constructor(props: BarChartCanvasProps) {
    super(props);
    this.canvasRef = createRef<HTMLCanvasElement | null>();
    this.containerRef = createRef<HTMLDivElement | null>();
    this.canvasWrapperRef = createRef<HTMLDivElement | null>();
  }

  componentDidMount() {
    this.setupCanvas();
    this.startAnimation();
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps: BarChartCanvasProps) {
    if (prevProps.data !== this.props.data) {
      this.startAnimation();
      this.setupCanvas();
    } else {
      this.drawChart(this.animationProgress);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  handleResize = () => {
    this.setupCanvas();
    this.drawChart(this.animationProgress);
  };

  setupCanvas() {
    const canvas = this.canvasRef.current;
    const container = this.containerRef.current;
    const wrapper = this.canvasWrapperRef.current;
    if (!canvas || !container || !wrapper) return;

    this.ctx = canvas.getContext('2d');

    const dpr = window.devicePixelRatio || 1;

    const minWidthPerLabel = 100;
    const labelCount = this.props.data.labels.length;
    const calculatedMinWidth = labelCount * minWidthPerLabel;

    wrapper.style.width = '100%';
    wrapper.style.minWidth = `${calculatedMinWidth}px`;

    container.style.minWidth = '100%';

    const width = wrapper.clientWidth;

    const style = window.getComputedStyle(container);
    let maxHeightCss = style.maxHeight;
    let maxHeightPx = 0;
    if (maxHeightCss && maxHeightCss !== 'none') {
      maxHeightPx = parseFloat(maxHeightCss);
    }

    const containerHeight = container.getBoundingClientRect().height || 300;
    const effectiveHeight =
      maxHeightPx > 0 ? Math.min(containerHeight, maxHeightPx) : containerHeight;

    canvas.width = width * dpr;
    canvas.height = effectiveHeight * dpr;

    canvas.style.width = `${width}px`;
    canvas.style.height = '';

    this.ctx?.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx?.scale(dpr, dpr);

    setTimeout(() => {
      if (container) {
        container.scrollLeft = container.scrollWidth;
      }
    }, 0);
  }

  startAnimation() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.animationStartTime = null;
    this.animationProgress = 0;
    this.animate();
  }

  animate = (timestamp?: number) => {
    if (!this.animationStartTime && timestamp) {
      this.animationStartTime = timestamp;
    }
    if (!timestamp || !this.animationStartTime) {
      this.animationFrameId = requestAnimationFrame(this.animate);
      return;
    }

    const elapsed = timestamp - this.animationStartTime;
    this.animationProgress = Math.min(elapsed / this.animationDuration, 1);

    this.drawChart(this.animationProgress);

    if (this.animationProgress < 1) {
      this.animationFrameId = requestAnimationFrame(this.animate);
    } else {
      this.animationFrameId = null;
    }
  };

  drawChart(progress: number = 1) {
    if (!this.ctx) return;
    const ctx = this.ctx;

    const wrapper = this.canvasWrapperRef.current;
    const container = this.containerRef.current;
    if (!container || !wrapper) return;

    const width = wrapper.clientWidth;

    const style = window.getComputedStyle(container);
    let maxHeightCss = style.maxHeight;
    let maxHeightPx = 0;
    if (maxHeightCss && maxHeightCss !== 'none') {
      maxHeightPx = parseFloat(maxHeightCss);
    }

    const containerHeight = container.getBoundingClientRect().height || 300;
    const effectiveHeight =
      maxHeightPx > 0 ? Math.min(containerHeight, maxHeightPx) : containerHeight;

    const { data, options, hoveredIndex } = this.props;

    ctx.clearRect(0, 0, width, effectiveHeight);

    const datasets = data.datasets || [];
    const labels = data.labels || [];

    if (labels.length === 0) return;

    const padding = 30;
    const chartHeight = effectiveHeight - padding * 2;
    const chartWidth = width - padding * 2;

    // Calculate max value from all datasets
    const maxValue = (() => {
      if (datasets.length === 0) return 1;
      const allValues = datasets.flatMap(dataset => dataset.data);
      return allValues.length === 0 ? 1 : Math.max(...allValues);
    })();

    const ySteps = 25;

    ctx.strokeStyle = '#D1D5DB';
    ctx.lineWidth = 1;
    ctx.font = '10px sans-serif';

    ctx.fillStyle = style.color || '#6B7280';
    ctx.textAlign = 'right';

    const displayedLabels = new Set<string>();
    for (let i = 0; i <= ySteps; i++) {
      const y = padding + (chartHeight / ySteps) * i;
      const valRaw = maxValue - (maxValue / ySteps) * i;
      const val = valRaw.toFixed(2);

      if (!displayedLabels.has(val)) {
        displayedLabels.add(val);
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();

        ctx.fillText(val, padding - 5, y + 13);
      }
    }

    ctx.fillStyle = style.color || '#4B5563';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';

    const barGroupWidth = chartWidth / labels.length;
    const barWidth =
      datasets.length > 0
        ? (barGroupWidth * 0.7) / datasets.length
        : barGroupWidth * 0.7;
    const barGap =
      datasets.length > 0
        ? (barGroupWidth * 0.3) / (datasets.length + 1)
        : 0;

    labels.forEach((label, labelIndex) => {
      const groupX = padding + labelIndex * barGroupWidth + barGroupWidth / 2;
      ctx.fillText(label, groupX, effectiveHeight - padding + 10);
    });

    labels.forEach((label, labelIndex) => {
      datasets.forEach((dataset, datasetIndex) => {
        const value = dataset.data[labelIndex];
        const barHeight = (value / maxValue) * chartHeight * progress;
        const x =
          padding +
          labelIndex * barGroupWidth +
          barGap * (datasetIndex + 1) +
          barWidth * datasetIndex;
        const y = padding + (chartHeight - barHeight);

        const isHovered = hoveredIndex === labelIndex;

        ctx.fillStyle = isHovered
          ? dataset.borderColor
          : dataset.backgroundColor;
        ctx.fillRect(x, y, barWidth, barHeight);
      });
    });

    if (options?.plugins?.legend) {
      const legendXStart = padding;
      const legendY = padding / 2;
      const boxSize = 15;
      const gap = 10;
      let legendX = legendXStart;

      datasets.forEach((dataset) => {
        ctx.fillStyle = dataset.backgroundColor;
        ctx.fillRect(legendX, legendY - boxSize + 3, boxSize, boxSize);

        ctx.fillStyle = style.color || '#374151';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(dataset.label, legendX + boxSize + gap, legendY);

        legendX += boxSize + gap + ctx.measureText(dataset.label).width + 20;
      });
    }

    if (hoveredIndex !== null && options?.plugins?.tooltip?.enabled) {
      let tooltipX = this.props.tooltipX;
      const tooltipY = this.props.tooltipY;
      const paddingTooltip = 6;

      const scrollLeft = container.scrollLeft;
      tooltipX -= scrollLeft;

      ctx.font = '12px sans-serif';

      const tooltipLines = datasets.map((dataset) => {
        const value = dataset.data[hoveredIndex];
        const label = labels[hoveredIndex];
        const datasetLabel = dataset.label;
        const callback = options?.plugins?.tooltip?.callbacks?.label;
        return callback
          ? callback(value, label, datasetLabel)
          : `${datasetLabel}: ${value}`;
      });

      const lineHeight = 16;
      const textWidths = tooltipLines.map((line) => ctx.measureText(line).width);
      const tooltipWidth = Math.max(...textWidths) + paddingTooltip * 2;
      const tooltipHeight = lineHeight * tooltipLines.length + paddingTooltip * 2;

      ctx.fillStyle = 'rgba(0,0,0,0.7)';
      ctx.roundRect(tooltipX, tooltipY - tooltipHeight, tooltipWidth, tooltipHeight, 5);
      ctx.fill();

      ctx.fillStyle = '#fff';
      ctx.textAlign = 'left';

      tooltipLines.forEach((line, i) => {
        ctx.fillText(
          line,
          tooltipX + paddingTooltip,
          tooltipY - tooltipHeight + paddingTooltip + lineHeight * (i + 0.75)
        );
      });
    }
  }

  handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = this.canvasRef.current;
    const container = this.containerRef.current;
    if (!canvas || !this.ctx || !container) return;

    const rect = canvas.getBoundingClientRect();

    const scrollLeft = container.scrollLeft;

    const mouseX = event.clientX - rect.left + scrollLeft;
    const mouseY = event.clientY - rect.top;

    const width = this.canvasWrapperRef.current?.clientWidth || 0;
    const height = this.containerRef.current?.clientHeight || 300;

    const padding = 30;
    const chartHeight = height - padding * 2;
    const chartWidth = width - padding * 2;

    const { data } = this.props;
    const labels = data.labels || [];
    const datasets = data.datasets || [];

    if (labels.length === 0 || datasets.length === 0) return;

    const barGroupWidth = chartWidth / labels.length;
    const barWidth = (barGroupWidth * 0.7) / datasets.length;
    const barGap = (barGroupWidth * 0.3) / (datasets.length + 1);

    let hoveredIndex: number | null = null;

    // Use the same maxValue calculation as drawChart for consistency
    const maxValue = (() => {
      if (datasets.length === 0) return 1;
      const allValues = datasets.flatMap(dataset => dataset.data);
      return allValues.length === 0 ? 1 : Math.max(...allValues);
    })();

    labels.forEach((label, labelIndex) => {
      datasets.forEach((dataset, datasetIndex) => {
        const value = dataset.data[labelIndex];
        const barHeight = (value / maxValue) * chartHeight * this.animationProgress;

        const x =
          padding +
          labelIndex * barGroupWidth +
          barGap * (datasetIndex + 1) +
          barWidth * datasetIndex;

        const y = padding + (chartHeight - barHeight);

        if (
          mouseX >= x &&
          mouseX <= x + barWidth &&
          mouseY >= y &&
          mouseY <= y + barHeight
        ) {
          hoveredIndex = labelIndex;
        }
      });
    });

    if (
      hoveredIndex !== this.props.hoveredIndex &&
      this.props.onHoverIndexChange
    ) {
      this.props.onHoverIndexChange(hoveredIndex, mouseX + 8, mouseY - 8);
    }
  };

  handleMouseLeave = () => {
    if (this.props.onHoverIndexChange) {
      this.props.onHoverIndexChange(null, 0, 0);
    }
  };

  render() {
    const { className } = this.props;
    return (
      <div
        className={`${className ?? ''} relative h-full overflow-x-auto overflow-y-hidden box-border`}
        ref={this.containerRef}
        style={{ minHeight: 300 }}
      >
        <div
          ref={this.canvasWrapperRef}
          className="w-full min-w-[50px] h-full relative box-border"
        >
          <canvas
            ref={this.canvasRef}
            onMouseMove={this.handleMouseMove}
            onMouseLeave={this.handleMouseLeave}
            role="img"
            aria-label="Bar chart"
            className="block w-full h-full box-border"
          />
        </div>
      </div>
    );
  }
}

// Extend CanvasRenderingContext2D with roundRect method (outside component)
declare global {
  interface CanvasRenderingContext2D {
    roundRect(x: number, y: number, w: number, h: number, r: number): void;
  }
}

CanvasRenderingContext2D.prototype.roundRect = function (
  x,
  y,
  w,
  h,
  r
) {
  this.beginPath();
  this.moveTo(x + r, y);
  this.lineTo(x + w - r, y);
  this.quadraticCurveTo(x + w, y, x + w, y + r);
  this.lineTo(x + w, y + h - r);
  this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  this.lineTo(x + r, y + h);
  this.quadraticCurveTo(x, y + h, x, y + h - r);
  this.lineTo(x, y + r);
  this.quadraticCurveTo(x, y, x + r, y);
  this.closePath();
};
