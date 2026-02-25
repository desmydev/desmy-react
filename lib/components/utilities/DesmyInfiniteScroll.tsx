export interface InfiniteScrollMeta {
  has_next?: boolean;
  has_prev?: boolean;
  next_cursor?: string | null;
  prev_cursor?: string | null;
  cursor_expires_at?: number | null; // unix timestamp (seconds)
}

interface AnchorSnapshot {
  scrollTop: number;
  scrollHeight: number;
}

export type ScrollDirection = "forward" | "backward";

export class DesmyInfiniteScroll {
  private observer?: IntersectionObserver;

  /** Prevent duplicate cursor fetch */
  private loadedCursors = new Set<string>();

  /** Lock while a fetch is in progress */
  private isObserving = false;

  /* ------------------- META HELPERS ------------------- */

  hasMore(meta: InfiniteScrollMeta): boolean {
    return meta.has_next === true;
  }

  hasPrev(meta: InfiniteScrollMeta): boolean {
    return meta.has_prev === true;
  }

  /* ------------------- CURSOR SAFETY ------------------- */

  private isCursorExpired(meta: InfiniteScrollMeta): boolean {
    if (!meta.cursor_expires_at) return false;
    return Date.now() / 1000 > meta.cursor_expires_at;
  }

  private getCursor(
    meta: InfiniteScrollMeta,
    direction: ScrollDirection
  ): string | null {
    if (this.isCursorExpired(meta)) return null;

    return direction === "forward"
      ? meta.next_cursor ?? null
      : meta.prev_cursor ?? null;
  }

  /* ------------------- DUPLICATE PROTECTION ------------------- */

  /**
   * Default direction is "forward" for backward compatibility
   */
  shouldFetch(
    meta: InfiniteScrollMeta,
    direction: ScrollDirection = "forward"
  ): boolean {
    const cursor = this.getCursor(meta, direction);
    if (!cursor) return false;

    const key = `${direction}:${cursor}`;
    if (this.loadedCursors.has(key)) return false;

    this.loadedCursors.add(key);
    return true;
  }

  /* ------------------- OBSERVER ------------------- */

  observe(
    sentinel: HTMLElement,
    onTrigger: () => void,
    options: IntersectionObserverInit
  ) {
    this.disconnect();
    this.isObserving = false;

    this.observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry?.isIntersecting) return;

      if (this.isObserving) return;

      this.isObserving = true;
      onTrigger();
    }, options);

    this.observer.observe(sentinel);
  }

  disconnect() {
    this.observer?.disconnect();
    this.observer = undefined;
    this.isObserving = false;
  }

  /* ------------------- OBSERVER UNLOCK ------------------- */

  resetObservation() {
    this.isObserving = false;
  }

  /* ------------------- RESET STATE ------------------- */

  reset() {
    this.loadedCursors.clear();
    this.isObserving = false;
  }

  /* ------------------- SCROLL ANCHORING ------------------- */

  captureAnchor(container: HTMLElement): AnchorSnapshot {
    return {
      scrollTop: container.scrollTop,
      scrollHeight: container.scrollHeight,
    };
  }

  restoreAnchor(container: HTMLElement, snapshot: AnchorSnapshot) {
    const heightDiff = container.scrollHeight - snapshot.scrollHeight;
    container.scrollTop = snapshot.scrollTop + heightDiff;
  }
}
