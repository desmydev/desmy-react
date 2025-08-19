// utils.ts (shared helpers)

export const DEFAULT_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#a855f7'];

export function formatLabel(label: string): string {
  return label;
}

// scales with zoom/pan
export interface ScaleState {
  zoom: number;
  panX: number;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
