import React, { useState, ReactNode } from "react";
import {ToastContext} from "./DesmyToastService";

// Define the type for the toast item
interface Toast {
    id: number;
    component: ReactNode;
}

// Define the type for the context value
interface ToastContextType {
    open: (component: ReactNode, timeout?: number) => void;
    close: (id: number) => void;
}

// Define the type for the props
interface ToastProviderProps {
    children: ReactNode;
}

const DesmyToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const open = (component: ReactNode, timeout = 5000) => {
        const id = Date.now();
        setToasts((toasts) => [...toasts, { id, component }]);
        setTimeout(() => close(id), timeout);
    };

    const close = (id: number) => {
        setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ open, close } as ToastContextType}>
            {children}
            <div className="space-y-2 absolute bottom-4 right-4">
                {toasts.map(({ id, component }) => (
                    <div key={id} className="relative">
                        <button  onClick={() => close(id)} className="absolute top-2 right-2 p-1 rounded-lg bg-gray-200/20 text-gray-800/60">
                            <svg viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                <path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" />
                            </svg>
                        </button>
                        {component}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export {DesmyToastProvider};
