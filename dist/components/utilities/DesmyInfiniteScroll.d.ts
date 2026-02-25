export interface InfiniteScrollMeta {
    has_next?: boolean;
    has_prev?: boolean;
    next_cursor?: string | null;
    prev_cursor?: string | null;
    cursor_expires_at?: number | null;
}
interface AnchorSnapshot {
    scrollTop: number;
    scrollHeight: number;
}
export type ScrollDirection = "forward" | "backward";
export declare class DesmyInfiniteScroll {
    private observer?;
    /** Prevent duplicate cursor fetch */
    private loadedCursors;
    /** Lock while a fetch is in progress */
    private isObserving;
    hasMore(meta: InfiniteScrollMeta): boolean;
    hasPrev(meta: InfiniteScrollMeta): boolean;
    private isCursorExpired;
    private getCursor;
    /**
     * Default direction is "forward" for backward compatibility
     */
    shouldFetch(meta: InfiniteScrollMeta, direction?: ScrollDirection): boolean;
    observe(sentinel: HTMLElement, onTrigger: () => void, options: IntersectionObserverInit): void;
    disconnect(): void;
    resetObservation(): void;
    reset(): void;
    captureAnchor(container: HTMLElement): AnchorSnapshot;
    restoreAnchor(container: HTMLElement, snapshot: AnchorSnapshot): void;
}
export {};
