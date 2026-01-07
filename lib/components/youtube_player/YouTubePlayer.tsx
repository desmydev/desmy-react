import React from "react";
import {
  YouTubePlayerProps,
  YouTubePlayerState,
  YouTubePlayerStateData,
} from "./types";
import { extractYouTubeVideoId } from "./utils";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

class DesmyYouTubePlayer extends React.Component<
  YouTubePlayerProps,
  YouTubePlayerStateData
> {
  private playerContainerId: string;
  private player: any = null;
  private timeInterval: any = null;
  private apiReady: boolean = false;

  private resizeListener: (() => void) | null = null;

  constructor(props: YouTubePlayerProps) {
    super(props);

    this.state = {
      currentTime: 0,
      duration: 0,
      playerState: "unstarted",
      hasStarted: false,
    };

    this.playerContainerId = `yt-player-${Math.random()
      .toString(36)
      .substring(2, 12)}`;
  }

  componentDidMount() {
    this.loadYouTubeAPI()
      .then(() => {
        this.apiReady = true;
        this.createPlayer();
      })
      .catch((err) => {
        console.error("Failed to load YouTube API", err);
      });
  }

  componentDidUpdate(prevProps: YouTubePlayerProps) {
    const prevId = this.getVideoId(prevProps);
    const currentId = this.getVideoId(this.props);

    // ✅ Handle video changes
    if (prevId !== currentId && this.player && currentId) {
      this.stopTimer();
      this.setState({ currentTime: 0, duration: 0, hasStarted: false });

      this.player.loadVideoById({
        videoId: currentId,
        startSeconds: this.props.startSeconds || 0,
        endSeconds: this.props.endSeconds,
      });
    }

    // ✅ Handle fitToContainer toggle
    if (prevProps.fitToContainer !== this.props.fitToContainer) {
      if (this.props.fitToContainer) {
        this.attachResizeListener();
        this.resizeToContainer();
      } else {
        this.detachResizeListener();
      }
    }
  }

  componentWillUnmount() {
    this.stopTimer();
    this.detachResizeListener();

    if (this.player && this.player.destroy) {
      this.player.destroy();
    }
  }

  /** ✅ Public methods (can be used with ref) */
  public play = () => this.player?.playVideo?.();
  public pause = () => this.player?.pauseVideo?.();
  public stop = () => this.player?.stopVideo?.();
  public seekTo = (seconds: number) => this.player?.seekTo?.(seconds, true);
  public getCurrentTime = () => this.player?.getCurrentTime?.() || 0;
  public getDuration = () => this.player?.getDuration?.() || 0;

  private getVideoId(props: YouTubePlayerProps): string | null {
    if (props.videoId) return props.videoId;
    if (props.videoUrl) return extractYouTubeVideoId(props.videoUrl);
    return null;
  }

  private loadYouTubeAPI(): Promise<void> {
    return new Promise((resolve) => {
      if (window.YT && window.YT.Player) {
        resolve();
        return;
      }

      const existingScript = document.getElementById("youtube-iframe-api");
      if (existingScript) {
        const checkReady = setInterval(() => {
          if (window.YT && window.YT.Player) {
            clearInterval(checkReady);
            resolve();
          }
        }, 100);
        return;
      }

      const tag = document.createElement("script");
      tag.id = "youtube-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);

      window.onYouTubeIframeAPIReady = () => resolve();
    });
  }

  private createPlayer() {
    if (!this.apiReady) return;

    const videoId = this.getVideoId(this.props);

    if (!videoId) {
      console.warn("DesmyYouTubePlayer: No valid videoId or videoUrl provided.");
      return;
    }

    const {
      width = "100%",
      height = 360,
      autoplay = false,
      mute = false,
      startSeconds = 0,
      endSeconds,
      playerOptions,
      fitToContainer,
    } = this.props;

    const options = {
      controls: playerOptions?.controls ?? true,
      fs: playerOptions?.fs ?? true,
      disablekb: playerOptions?.disablekb ?? false,
      playsinline: playerOptions?.playsinline ?? true,
      rel: playerOptions?.rel ?? false,
      modestbranding: playerOptions?.modestbranding ?? true,
      iv_load_policy: playerOptions?.iv_load_policy ?? 3,
      cc_load_policy: playerOptions?.cc_load_policy ?? 0,
      color: playerOptions?.color ?? "red",
    };

    // ✅ If fitToContainer is true, allow wrapper to control size
    const finalWidth = fitToContainer ? "100%" : width;
    const finalHeight = fitToContainer ? "100%" : height;

    this.player = new window.YT.Player(this.playerContainerId, {
      width: finalWidth,
      height: finalHeight,
      videoId,
      playerVars: {
        autoplay: autoplay ? 1 : 0,
        start: startSeconds,
        end: endSeconds,
        controls: options.controls ? 1 : 0,
        fs: options.fs ? 1 : 0,
        disablekb: options.disablekb ? 1 : 0,
        playsinline: options.playsinline ? 1 : 0,
        rel: options.rel ? 1 : 0,
        modestbranding: options.modestbranding ? 1 : 0,
        iv_load_policy: options.iv_load_policy,
        cc_load_policy: options.cc_load_policy,
        color: options.color,
      },
      events: {
        onReady: (e: any) => {
          this.handleReady(e);

          // ✅ If fit enabled, attach resize logic
          if (fitToContainer) {
            this.attachResizeListener();
            this.resizeToContainer();
          }
        },
        onStateChange: this.handleStateChange,
        onError: this.handleError,
      },
    });

    if (mute) {
      setTimeout(() => this.player?.mute?.(), 700);
    }
  }

  private handleReady = (event: any) => {
    const duration = event.target.getDuration?.() || 0;

    this.setState({ duration });

    this.props.onReady?.(event.target);
    this.props.onDuration?.(duration);
  };

  private handleStateChange = (event: any) => {
    const ytState = event.data;

    let state: YouTubePlayerState = "unstarted";

    switch (ytState) {
      case window.YT.PlayerState.ENDED:
        state = "ended";
        break;
      case window.YT.PlayerState.PLAYING:
        state = "playing";
        break;
      case window.YT.PlayerState.PAUSED:
        state = "paused";
        break;
      case window.YT.PlayerState.BUFFERING:
        state = "buffering";
        break;
      case window.YT.PlayerState.CUED:
        state = "cued";
        break;
      default:
        state = "unstarted";
        break;
    }

    // ✅ First-time start
    if (state === "playing" && !this.state.hasStarted) {
      this.setState({ hasStarted: true });
      this.props.onStart?.();
    }

    if (state === "playing") {
      this.props.onPlay?.();
      this.startTimer();
    }

    if (state === "paused") {
      this.props.onPause?.();
      this.stopTimer();
    }

    if (state === "ended") {
      this.props.onEnd?.();
      this.stopTimer();
    }

    this.setState({ playerState: state });
    this.props.onStateChange?.(state);
  };

  private handleError = (error: any) => {
    this.props.onError?.(error);
  };

  private startTimer() {
    if (this.timeInterval) return;

    this.timeInterval = setInterval(() => {
      const currentTime = this.player?.getCurrentTime?.() || 0;
      const duration = this.player?.getDuration?.() || this.state.duration;

      this.setState({ currentTime, duration });
      this.props.onTimeUpdate?.(currentTime);
    }, 300);
  }

  private stopTimer() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
      this.timeInterval = null;
    }
  }

  /** ✅ Resize handler */
  private attachResizeListener() {
    if (this.resizeListener) return;

    this.resizeListener = () => this.resizeToContainer();
    window.addEventListener("resize", this.resizeListener);
  }

  private detachResizeListener() {
    if (!this.resizeListener) return;

    window.removeEventListener("resize", this.resizeListener);
    this.resizeListener = null;
  }

  private resizeToContainer() {
    if (!this.player || !this.props.fitToContainer) return;

    const el = document.getElementById(this.playerContainerId);
    if (!el) return;

    const parent = el.parentElement;
    if (!parent) return;

    const width = parent.clientWidth;
    const height = parent.clientHeight;

    if (width > 0 && height > 0) {
      this.player.setSize(width, height);
    }
  }

  render() {
    const { className, playerClassName, fitToContainer } = this.props;

    return (
      <div
        className={className}
        style={
          fitToContainer
            ? { width: "100%", height: "100%", position: "relative" }
            : undefined
        }
      >
        <div
          id={this.playerContainerId}
          className={playerClassName}
          style={fitToContainer ? { width: "100%", height: "100%" } : undefined}
        />
      </div>
    );
  }
}

export { DesmyYouTubePlayer };
