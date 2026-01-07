import { default as React } from 'react';
import { YouTubePlayerProps, YouTubePlayerStateData } from './types';
declare global {
    interface Window {
        YT: any;
        onYouTubeIframeAPIReady: () => void;
    }
}
declare class DesmyYouTubePlayer extends React.Component<YouTubePlayerProps, YouTubePlayerStateData> {
    private playerContainerId;
    private player;
    private timeInterval;
    private apiReady;
    private resizeListener;
    constructor(props: YouTubePlayerProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: YouTubePlayerProps): void;
    componentWillUnmount(): void;
    /** ✅ Public methods (can be used with ref) */
    play: () => any;
    pause: () => any;
    stop: () => any;
    seekTo: (seconds: number) => any;
    getCurrentTime: () => any;
    getDuration: () => any;
    private getVideoId;
    private loadYouTubeAPI;
    private createPlayer;
    private handleReady;
    private handleStateChange;
    private handleError;
    private startTimer;
    private stopTimer;
    /** ✅ Resize handler */
    private attachResizeListener;
    private detachResizeListener;
    private resizeToContainer;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyYouTubePlayer };
