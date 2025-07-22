import { ReactNode, Component } from 'react';
interface ToastMessage {
    id: number;
    message: string;
    type: 'success' | 'error' | 'info';
}
interface ToastContextType {
    addToast: (message: string, type: 'success' | 'error' | 'info') => void;
    removeToast: (id: number) => void;
}
interface DesmyToastProviderProps {
    children: ReactNode;
}
interface DesmyToastProviderState {
    toasts: ToastMessage[];
    mounted: boolean;
}
export declare class DesmyToastProvider extends Component<DesmyToastProviderProps, DesmyToastProviderState> {
    state: DesmyToastProviderState;
    private toastId;
    addToast: (message: string, type: "success" | "error" | "info") => void;
    removeToast: (id: number) => void;
    componentDidMount(): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export declare const useToast: () => ToastContextType;
export {};
