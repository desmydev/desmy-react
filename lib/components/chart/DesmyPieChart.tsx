import React, { Component, createRef, RefObject } from 'react';

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

export class DesmyPieChart extends Component<PieChartProps, PieChartState> {
  static defaultProps = {
    width: 400,
    height: 400,
  };

  canvasRef: RefObject<HTMLCanvasElement | null>;
  ctx: CanvasRenderingContext2D | null = null;

  state: PieChartState = {
    hoveredIndex: null,
    tooltipX: 0,
    tooltipY: 0,
  };

  constructor(props: PieChartProps) {
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
    canvas.width = (this.props.width ?? 400) * dpr;
    canvas.height = (this.props.height ?? 400) * dpr;
    canvas.style.width = `${this.props.width}px`;
    canvas.style.height = `${this.props.height}px`;
    this.ctx.scale(dpr, dpr);
  }

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
    const ctx = this.ctx;
    const { data, options, width = 400, height = 400 } = this.props;
    const { hoveredIndex } = this.state;

    ctx.clearRect(0, 0, width, height);

    if (options?.plugins?.title?.display) {
      ctx.fillStyle = '#111827';
      ctx.font = '20px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(options.plugins.title.text, width / 2, 30);
    }

    const dataset = data.datasets[0];
    const labels = data.labels;
    const total = dataset.data.reduce((sum, val) => sum + val, 0);
    const centerX = width / 2;
    const centerY = height / 2 + 20;
    const radius = Math.min(width, height) / 3;

    let startAngle = -Math.PI / 2;

    dataset.data.forEach((value, index) => {
      const sliceAngle = (value / total) * 2 * Math.PI;
      const endAngle = startAngle + sliceAngle;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);

      let fillColor = Array.isArray(dataset.backgroundColor)
        ? dataset.backgroundColor[index]
        : dataset.backgroundColor;

      ctx.fillStyle = hoveredIndex === index ? this.shadeColor(fillColor, -20) : fillColor;

      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fill();

      ctx.lineWidth = dataset.borderWidth;
      ctx.strokeStyle = Array.isArray(dataset.borderColor)
        ? dataset.borderColor[index]
        : dataset.borderColor;
      ctx.stroke();

      startAngle = endAngle;
    });

    if (options?.plugins?.legend?.position === 'top') {
      const legendXStart = 20;
      let legendX = legendXStart;
      const legendY = 40;
      const boxSize = 15;
      const gap = 10;

      dataset.data.forEach((_, i) => {
        let fillColor = Array.isArray(dataset.backgroundColor)
          ? dataset.backgroundColor[i]
          : dataset.backgroundColor;

        ctx.fillStyle = fillColor;
        ctx.fillRect(legendX, legendY, boxSize, boxSize);

        ctx.fillStyle = '#374151';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(labels[i], legendX + boxSize + gap, legendY + boxSize - 3);

        legendX += boxSize + gap + ctx.measureText(labels[i]).width + 20;
      });
    }

    if (hoveredIndex !== null && options?.plugins?.tooltip?.enabled) {
      const value = dataset.data[hoveredIndex];
      const label = labels[hoveredIndex];
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

  shadeColor(color: string, percent: number): string {
    const f = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (!f) return color;
    let [r, g, b] = [parseInt(f[1]), parseInt(f[2]), parseInt(f[3])];

    r = Math.min(255, Math.max(0, Math.round(r + (r * percent) / 100)));
    g = Math.min(255, Math.max(0, Math.round(g + (g * percent) / 100)));
    b = Math.min(255, Math.max(0, Math.round(b + (b * percent) / 100)));

    return `rgb(${r},${g},${b})`;
  }

  handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!this.ctx) return;
    const canvas = this.canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const { data, width = 400, height = 400 } = this.props;
    const dataset = data.datasets[0];
    const total = dataset.data.reduce((sum, val) => sum + val, 0);

    const centerX = width / 2;
    const centerY = height / 2 + 20;
    const radius = Math.min(width, height) / 3;

    let startAngle = -Math.PI / 2;
    let hoveredIndex: number | null = null;

    for (let i = 0; i < dataset.data.length; i++) {
      const sliceAngle = (dataset.data[i] / total) * 2 * Math.PI;
      const endAngle = startAngle + sliceAngle;

      const dx = mouseX - centerX;
      const dy = mouseY - centerY;
      const distFromCenter = Math.sqrt(dx * dx + dy * dy);
      let angle = Math.atan2(dy, dx);
      if (angle < -Math.PI / 2) angle += 2 * Math.PI;

      if (distFromCenter <= radius && angle >= startAngle && angle <= endAngle) {
        hoveredIndex = i;
        break;
      }

      startAngle = endAngle;
    }

    if (hoveredIndex !== this.state.hoveredIndex) {
      this.setState({
        hoveredIndex,
        tooltipX: mouseX + 10,
        tooltipY: mouseY - 10,
      });
    }
  };

  handleMouseLeave = () => {
    this.setState({ hoveredIndex: null });
  };

  render() {
    const { width = 400, height = 400 } = this.props;

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
          aria-label="Pie chart"
          style={{ display: 'block' }}
        />
      </div>
    );
  }
}

