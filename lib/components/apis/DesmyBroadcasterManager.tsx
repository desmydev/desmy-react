// DesmyBroadcasterManager.ts
type BroadcastMessage = { type: string; [key: string]: any,data?:any };
type Listener = (message: BroadcastMessage) => void;

export class DesmyBroadcasterManager {
  private channel: BroadcastChannel;
  private listeners: Set<Listener>;

  constructor(channelName = 'desmy-broadcaster') {
    this.channel = new BroadcastChannel(channelName);
    this.listeners = new Set();

    this.channel.onmessage = (event: MessageEvent) => {
        console.log("Received message:", event.data);
      const message = event.data as BroadcastMessage;
      this.listeners.forEach((listener) => listener(message));
    };
  }

  send(message: BroadcastMessage) {
    this.channel.postMessage(message);
     this.listeners.forEach(listener => listener(message));
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  close() {
    this.channel.close();
    this.listeners.clear();
  }
}

// Export a singleton instance for app-wide use:
export const DesmyBroadcaster = new DesmyBroadcasterManager();
