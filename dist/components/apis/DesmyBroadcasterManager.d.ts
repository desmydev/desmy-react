type BroadcastMessage = {
    type: string;
    [key: string]: any;
    data?: any;
};
type Listener = (message: BroadcastMessage) => void;
export declare class DesmyBroadcasterManager {
    private channel;
    private listeners;
    constructor(channelName?: string);
    send(message: BroadcastMessage): void;
    subscribe(listener: Listener): () => void;
    close(): void;
}
export declare const DesmyBroadcaster: DesmyBroadcasterManager;
export {};
