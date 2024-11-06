import { Observable } from 'rxjs';

interface Message {
    data?: any;
    type?: string;
}
export declare const DesmyRxServices: {
    fileViewer: (data: any, type: string) => void;
    sendData: (data: any, type: string) => void;
    send: (type: string) => void;
    clearMessages: () => void;
    getSubscription: () => Observable<Message>;
};
export {};
