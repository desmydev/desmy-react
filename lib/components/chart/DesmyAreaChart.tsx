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
    title?: { display: boolean; text: string };
    tooltip?: {
      enabled?: boolean;
      callbacks?: {
        label?: (value: number, label: string, datasetLabel: string) => string;
      };
    };
  };
}

interface AreaChartProps {
  data: ChartData;
  options?: ChartOptions;
  width?: number;
  height?: number;
}

interface AreaChartState {
  hoveredIndex: number | null;
  tooltipX: number;
  tooltipY: number;
}

export class DesmyAreaChart extends Component<AreaChartProps, AreaChartState> {
  static defaultProps = {
    width: 600,
    height: 400,
  };

  canvasRef: RefObject<HTMLCanvasElement | null>;
  ctx: CanvasRenderingContext2D | null = null;

  state: AreaChartState = {
    hoveredIndex: null,
    tooltipX: 0,
    tooltipY: 0,
  };

  constructor(props: AreaChartProps) {
    super(props);
    this.canvasRef = createRef<HTMLCanvasElement>();
  }

  componentDidMount() {
    this.setupCanvas();
    this.drawChart();
  }

  componentDidUpdate() {
    this.drawChart();
  }

  setupCanvas() {
    const canvas = this.canvasRef.current;
    if (!canvas) return;
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = (this.props.width ?? 600) * dpr;
    canvas.height = (this.props.height ?? 400) * dpr;
    canvas.style.width = `${this.props.width}px`;
    canvas.style.height = `${this.props.height}px`;
    this.ctx.scale(dpr, dpr);
  }

  // Helper method: draw rounded rect (for tooltip background)
  drawRoundedRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number
  ) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  drawChart() {
    if (!this.ctx) return;
    const { data, options, width = 600, height = 400 } = this.props;
    const { hoveredIndex } = this.state;

    const ctx = this.ctx;

    ctx.clearRect(0, 0, width, height);

    // Draw title if enabled
    if (options?.plugins?.title?.display) {
      ctx.fillStyle = '#111827';
      ctx.font = '20px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(options.plugins.title.text, width / 2, 30);
    }

    const padding = 50;
    const chartHeight = height - padding * 2;
    const chartWidth = width - padding * 2;

    const dataset = data.datasets[0];
    const labels = data.labels;
    const maxValue = Math.max(...dataset.data);

    // Draw axes lines
    ctx.strokeStyle = '#9CA3AF'; // Tailwind gray-400
    ctx.lineWidth = 1;

    // Y axis line
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.stroke();

    // X axis line
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Draw Y axis grid lines and labels
    const ySteps = 5;
    ctx.strokeStyle = '#D1D5DB'; // Tailwind gray-300
    ctx.lineWidth = 1;
    ctx.font = '10px sans-serif';
    ctx.fillStyle = '#6B7280'; // Tailwind gray-500
    ctx.textAlign = 'right';

    for (let i = 0; i <= ySteps; i++) {
      const y = padding + (chartHeight / ySteps) * i;
      const val = Math.round(maxValue - (maxValue / ySteps) * i);
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();

      ctx.fillText(val.toString(), padding - 5, y + 3);
    }

    // Draw area chart path
    ctx.beginPath();
    const stepX = chartWidth / (dataset.data.length - 1);

    dataset.data.forEach((value, i) => {
      const x = padding + stepX * i;
      const y = padding + chartHeight - (value / maxValue) * chartHeight;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });

    // Draw line path
    ctx.strokeStyle = dataset.borderColor;
    ctx.lineWidth = dataset.borderWidth;
    ctx.stroke();

    // Fill area below line
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.closePath();

    const gradient = ctx.createLinearGradient(0, padding, 0, padding + chartHeight);
    gradient.addColorStop(0, dataset.backgroundColor);
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw points
    dataset.data.forEach((value, i) => {
      const x = padding + stepX * i;
      const y = padding + chartHeight - (value / maxValue) * chartHeight;

      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = this.state.hoveredIndex === i ? dataset.borderColor : dataset.backgroundColor;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // Draw X labels
    ctx.fillStyle = '#374151'; // Tailwind gray-700
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';

    labels.forEach((label, i) => {
      const x = padding + stepX * i;
      ctx.fillText(label, x, height - padding + 20);
    });

    // Draw tooltip if hovered
    if (hoveredIndex !== null && options?.plugins?.tooltip?.enabled) {
      const i = hoveredIndex;
      const value = dataset.data[i];
      const label = labels[i];
      const datasetLabel = dataset.label;

      const callback = options.plugins.tooltip.callbacks?.label;
      const tooltipText = callback ? callback(value, label, datasetLabel) : `${datasetLabel}: ${value}`;

      const tooltipX = this.state.tooltipX;
      const tooltipY = this.state.tooltipY;

      const paddingTooltip = 6;
      ctx.font = '12px sans-serif';
      const textWidth = ctx.measureText(tooltipText).width;
      const tooltipHeight = 20;
      const tooltipWidth = textWidth + paddingTooltip * 2;

      ctx.fillStyle = 'rgba(0,0,0,0.7)';
      this.drawRoundedRect(ctx, tooltipX, tooltipY - tooltipHeight, tooltipWidth, tooltipHeight, 5);
      ctx.fill();

      ctx.fillStyle = '#fff';
      ctx.textAlign = 'left';
      ctx.fillText(tooltipText, tooltipX + paddingTooltip, tooltipY - 6);
    }
  }

  handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!this.ctx) return;
    const canvas = this.canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const { data, width = 600, height = 400 } = this.props;
    const padding = 50;
    const chartHeight = height - padding * 2;
    const chartWidth = width - padding * 2;

    const dataset = data.datasets[0];
    const maxValue = Math.max(...dataset.data);
    const stepX = chartWidth / (dataset.data.length - 1);

    let hoveredIndex: number | null = null;

    // Check if mouse near any point (circle radius 5 + 5px margin)
    dataset.data.forEach((value, i) => {
      const x = padding + stepX * i;
      const y = padding + chartHeight - (value / maxValue) * chartHeight;

      const dx = mouseX - x;
      const dy = mouseY - y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 10) {
        hoveredIndex = i;
      }
    });

    if (hoveredIndex !== this.state.hoveredIndex) {
      this.setState({ hoveredIndex, tooltipX: mouseX + 10, tooltipY: mouseY - 10 });
    }
  };

  handleMouseLeave = () => {
    this.setState({ hoveredIndex: null });
  };

  render() {
    const { width = 600, height = 400 } = this.props;

    return (
      <div className="mx-auto max-w-full overflow-x-auto">
        <canvas
          ref={this.canvasRef}
          width={width}
          height={height}
          onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleMouseLeave}
          className="border rounded-md"
          role="img"
          aria-label="Area chart"
          style={{ display: 'block' }}
        />
      </div>
    );
  }
}

