interface ToastContextType {
    open: (component: React.ReactNode, timeout?: number) => void;
    close: (id: number) => void;
}
declare const ToastContext: import('react').Context<ToastContextType | null>;
export declare const DesmyToast: () => ToastContextType;
export { ToastContext };
