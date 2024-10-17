import { createContext, useContext } from "react";

// Define the type for the ToastContext
interface ToastContextType {
    open: (component: React.ReactNode, timeout?: number) => void;
    close: (id: number) => void;
}

// Create the context with the defined type or null as the default value
const ToastContext = createContext<ToastContextType | null>(null);

export const DesmyToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("DesmyToast must be used within a ToastProvider");
    }
    return context;
};

export  {ToastContext};
