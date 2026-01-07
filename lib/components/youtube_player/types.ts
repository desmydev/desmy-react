/** ✅ YouTube Player State (Readable version of YT states) */
export type YouTubePlayerState =
  | "unstarted"
  | "ended"
  | "playing"
  | "paused"
  | "buffering"
  | "cued";

/** ✅ Options to control YouTube built-in UI behavior */
export interface YouTubePlayerOptions {
  controls?: boolean; // default true
  fs?: boolean; // fullscreen button (default true)
  disablekb?: boolean; // disable keyboard shortcuts
  playsinline?: boolean; // inline play (mobile)
  rel?: boolean; // show related videos after end
  modestbranding?: boolean; // reduce YouTube branding
  iv_load_policy?: 1 | 3; // annotations: 1=show, 3=hide
  cc_load_policy?: 0 | 1; // captions: 1=show
  color?: "red" | "white"; // progress bar color
}

/** ✅ Props for the YouTube player component */
export interface YouTubePlayerProps {
  /** Accept either a full YouTube URL OR a raw videoId */
  videoUrl?: string;
  videoId?: string;

  width?: number | string;
  height?: number | string;

  autoplay?: boolean;
  mute?: boolean;

  startSeconds?: number;
  endSeconds?: number;

  /** ✅ Wrapper div class */
  className?: string;

  /** ✅ NEW: Class for the div where YouTube mounts the iframe */
  playerClassName?: string;

  /** ✅ NEW: Make player auto fit the wrapper div */
  fitToContainer?: boolean;

  /** ✅ control YouTube UI features */
  playerOptions?: YouTubePlayerOptions;

  /** ✅ Callbacks */
  onStart?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onEnd?: () => void;

  onReady?: (player: any) => void;

  onStateChange?: (state: YouTubePlayerState) => void;
  onError?: (error: any) => void;

  onTimeUpdate?: (currentTime: number) => void;
  onDuration?: (duration: number) => void;
}

/** ✅ Internal component state */
export interface YouTubePlayerStateData {
  currentTime: number;
  duration: number;
  playerState: YouTubePlayerState;
  hasStarted: boolean;
}
