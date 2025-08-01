import React, { createContext, ReactNode, Component } from 'react';
import Toast from './Toast'; 
import { createPortal } from 'react-dom';
import { DesmyToast } from './DesmyToast';

interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface ToastContextType {
  addToast: (message: string, type: 'success' | 'error' | 'info') => void;
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface DesmyToastProviderProps {
  children: ReactNode;
}

interface DesmyToastProviderState {
  toasts: ToastMessage[];
  mounted: boolean; // track if mounted on client
}

export class DesmyToastProvider extends Component<DesmyToastProviderProps, DesmyToastProviderState> {
  state: DesmyToastProviderState = {
    toasts: [],
    mounted: false,
  };

  private toastId = 0;

  addToast = (message: string, type: 'success' | 'error' | 'info') => {
    const id = this.toastId++;
    this.setState(prevState => ({
      toasts: [...prevState.toasts, { id, message, type }],
    }));
  };

  removeToast = (id: number) => {
    const toast = this.state.mounted ? document.getElementById(`toast-${id}`) : null;
    if (toast) {
      toast.classList.remove('animate-toast-slide-in');
      toast.classList.add('animate-toast-slide-out');
      setTimeout(() => {
        this.setState(prevState => ({
          toasts: prevState.toasts.filter(toast => toast.id !== id),
        }));
      }, 500); 
    } else {
      // fallback: just remove immediately if no document (SSR)
      this.setState(prevState => ({
        toasts: prevState.toasts.filter(toast => toast.id !== id),
      }));
    }
  };

  componentDidMount() {
    this.setState({ mounted: true }, () => {
      DesmyToast.initialize(this);
    });
  }

  render() {
    const { mounted, toasts } = this.state;

    return (
      <ToastContext.Provider value={{ addToast: this.addToast, removeToast: this.removeToast }}>
        {this.props.children}
        {mounted && typeof document !== 'undefined' && createPortal(
          <div className="fixed top-4 right-4 z-[9999999] space-y-4">
            {toasts.map(toast => (
              <Toast
                key={toast.id}
                message={toast.message}
                type={toast.type}
                onClose={() => this.removeToast(toast.id)}
                id={`toast-${toast.id}`}
              />
            ))}
          </div>,
          document.getElementById('toast-root')!
        )}
      </ToastContext.Provider>
    );
  }
}

export const useToast = (): ToastContextType => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a DesmyToastProvider');
  }
  return context;
};
