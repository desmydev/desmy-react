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
  leftPadding?: number; // left padding for main canvas (to avoid overlap with Y-axis)
  
  yAxisCtx?: CanvasRenderingContext2D;
  yAxisWidth?: number;
}

export function renderChart(opt: RenderOptions) {
  const {
    ctx,
    width,
    height,
    labels,
    rawData = [],
    datasets,
    groupData,
    chartType,
    mode,
    theme,
    scale,
    colors,
    onDrill,
    animationProgress = 1,
    leftPadding = 0,
    yAxisCtx,
    yAxisWidth = 60,
  } = opt;

  ctx.clearRect(0, 0, width, height);

  const bg = theme === 'dark' ? '#1f2937' : '#ffffff';
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  const pad = 60;
  const labelCount = labels.length > 1 ? labels.length - 1 : 1;
  const w = width - pad * 2 - leftPadding;
  const h = height - pad * 2;

  // Get highest value from groupData countsByGroup or datasets or rawData safely
  let maxValRaw = 0;

  if (groupData && groupData.groups?.length) {
    for (const group of groupData.groups) {
      const arr = groupData.countsByGroup[group];
      if (arr && arr.length) {
        const groupMax = Math.max(...arr, 0);
        if (groupMax > maxValRaw) maxValRaw = groupMax;
      }
    }
  } else if (datasets && datasets.length) {
    maxValRaw = Math.max(...datasets.flatMap(ds => ds.data ?? []), 0);
  } else if (rawData && rawData.length) {
    maxValRaw = Math.max(...rawData, 0);
  } else {
    maxValRaw = 1;
  }

  if (maxValRaw <= 0 || isNaN(maxValRaw)) maxValRaw = 1;

  const maxGridLines = 10;
  const rawStepSize = maxValRaw / maxGridLines || 1;

  function niceStep(step: number): number {
    const pow10 = Math.pow(10, Math.floor(Math.log10(step)));
    const f = step / pow10;
    if (f <= 1) return 1 * pow10;
    if (f <= 2) return 2 * pow10;
    if (f <= 5) return 5 * pow10;
    return 10 * pow10;
  }

  const stepSize = niceStep(rawStepSize);
  const maxVal = stepSize * maxGridLines;

  const stepX = (w * scale.zoom) / labelCount;
  const offsetX = leftPadding + pad + scale.panX;

  const axisColor = theme === 'dark' ? '#4b5563' : '#d1d5db';
  const textColor = theme === 'dark' ? '#f3f4f6' : '#1f2937';

  // Draw Y-axis on separate canvas if context provided
  if (yAxisCtx) {
    yAxisCtx.clearRect(0, 0, yAxisWidth, height);
    yAxisCtx.fillStyle = bg;
    yAxisCtx.fillRect(0, 0, yAxisWidth, height);

    yAxisCtx.strokeStyle = axisColor;
    yAxisCtx.fillStyle = textColor;
    yAxisCtx.font = '16px sans-serif';
    yAxisCtx.textAlign = 'right';
    yAxisCtx.textBaseline = 'middle';

    for (let i = 0; i <= maxGridLines; i++) {
      const y = pad + (h * i) / maxGridLines;
      const val = maxVal - stepSize * i;
      yAxisCtx.beginPath();
      yAxisCtx.moveTo(yAxisWidth, y);
      yAxisCtx.lineTo(0, y);
      // yAxisCtx.stroke(); // optional
      yAxisCtx.fillText(val.toFixed(1), yAxisWidth - 8, y);
    }
  }

  // Draw horizontal grid lines inside main canvas
  ctx.strokeStyle = axisColor;
  ctx.fillStyle = textColor;
  ctx.textAlign = 'center';
  ctx.font = '12px sans-serif';

  for (let i = 0; i <= maxGridLines; i++) {
    const y = pad + (h * i) / maxGridLines;
    ctx.beginPath();
    ctx.moveTo(leftPadding + pad, y);
    ctx.lineTo(width - pad, y);
    ctx.stroke();
  }

  // Bottom axis line
  ctx.beginPath();
  ctx.moveTo(leftPadding + pad, pad + h);
  ctx.lineTo(width - pad, pad + h);
  ctx.stroke();

  function drawLineWithMarkers(data: number[], color: string) {
    if (!data || data.length === 0) return;

    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.1)';
    ctx.shadowBlur = 6;
    ctx.beginPath();
    data.forEach((v, i) => {
      const clampedVal = Math.min(v, maxVal);
      const x = offsetX + stepX * i;
      const y = pad + (1 - (clampedVal / maxVal) * animationProgress) * h;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();

    data.forEach((v, i) => {
      const clampedVal = Math.min(v, maxVal);
      const x = offsetX + stepX * i;
      const y = pad + (1 - (clampedVal / maxVal) * animationProgress) * h;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    if (chartType === 'area') {
      ctx.beginPath();
      data.forEach((v, i) => {
        const clampedVal = Math.min(v, maxVal);
        const x = offsetX + stepX * i;
        const y = pad + (1 - (clampedVal / maxVal) * animationProgress) * h;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.lineTo(offsetX + stepX * (data.length - 1), pad + h);
      ctx.lineTo(offsetX, pad + h);
      ctx.closePath();
      ctx.fillStyle = color + '33';
      ctx.fill();
    }
  }

  function drawBarChart(data: number[], color: string, groupIndex: number = 0, groupCount: number = 1) {
    if (!data || data.length === 0) return;

    const barGroupWidth = stepX;
    const barWidth = (barGroupWidth / groupCount) * 0.8; // 80% of divided group width
    const barGap = (barGroupWidth / groupCount) * 0.2; // 20% gap between bars

    ctx.save();
    ctx.fillStyle = color;

    data.forEach((v, i) => {
      const clampedVal = Math.min(v, maxVal);
      const x = offsetX + stepX * i + (barGroupWidth / groupCount) * groupIndex + barGap / 2;
      const barHeight = (clampedVal / maxVal) * h * animationProgress;
      const y = pad + h - barHeight;

      ctx.fillRect(x, y, barWidth, barHeight);
    });

    ctx.restore();
  }

  if (mode === 'grouped' && groupData && groupData.groups?.length > 0) {
    if (chartType === 'bar') {
      groupData.groups.forEach((group, di) => {
        const data = groupData.countsByGroup[group] ?? [];
        if (!data || data.length === 0) return;
        const color = colors[di] || '#3b82f6';
        drawBarChart(data, color, di, groupData.groups.length);
      });
    } else {
      groupData.groups.forEach((group, di) => {
        const data = groupData.countsByGroup[group] ?? [];
        if (!data || data.length === 0) return;
        const color = colors[di] || '#3b82f6';
        drawLineWithMarkers(data, color);
      });
    }
  } else if (datasets && datasets.length > 0) {
    if (chartType === 'bar') {
      datasets.forEach((ds, di) => {
        if (!ds.data || ds.data.length === 0) return;
        const color = colors[di] || '#3b82f6';
        drawBarChart(ds.data, color, di, datasets.length);
      });
    } else {
      datasets.forEach((ds, di) => {
        if (!ds.data || ds.data.length === 0) return;
        const color = colors[di] || '#3b82f6';
        drawLineWithMarkers(ds.data, color);
      });
    }
  } else if (rawData && rawData.length > 0) {
    if (chartType === 'bar') {
      drawBarChart(rawData, colors[0] || '#3b82f6', 0, 1);
    } else {
      drawLineWithMarkers(rawData, colors[0] || '#3b82f6');
    }
  }

  if (labels && labels.length > 0) {
    labels.forEach((lbl, i) => {
      const x = leftPadding + pad + (w / labelCount) * i;
      ctx.fillStyle = textColor;
      ctx.fillText(lbl, x, pad + h + 20);
    });
  }
}
