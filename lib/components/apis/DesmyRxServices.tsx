import { Subject, Observable } from 'rxjs';

interface Message {
    data?: any;
    type?: string;
}

const subject = new Subject<Message>();

export const DesmyRxServices = {
    fileViewer: (data: any, type: string): void => subject.next({ data, type }),
    sendData: (data: any, type: string): void => subject.next({ data, type }),
    send: (type: string): void => subject.next({ type }),
    clearMessages: (): void => subject.next({}),
    getSubscription: (): Observable<Message> => subject.asObservable()
};
