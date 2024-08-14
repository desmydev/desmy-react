import { Component } from 'react';

interface AlertProps {
    error: {
        type: string;
        message: string;
    };
    handleCloseAlert?: () => void;
    onRetry?: () => void; // Changed to onRetry
}

interface AlertState {
    showForms: boolean;
}

class DesmyAlert extends Component<AlertProps, AlertState> {

    constructor(props: AlertProps) {
        super(props);
        this.state = {
            showForms: false
        };
    }

    handleToggle = () => {
        this.setState({ showForms: !this.state.showForms });
    }

    handleRetry = () => {
        if (this.props.onRetry) { // Changed to onRetry
            this.props.onRetry();
        }
    }

    render() {
        const { error, handleCloseAlert, onRetry } = this.props; // Changed to onRetry
        const isError = error.type.toLowerCase() === "error";

        return (
            <>
                <div
                    className={`flex w-full flex-col text-sm flex-wrap ${isError ? 'bg-red-200 text-red-600' : 'bg-green-200 text-green-600'} border-[1px] ${isError ? 'border-red-400' : 'border-green-400'} px-4 py-3 rounded relative mb-4`}
                    role="alert"
                >
                    <div className="font-poppinsBold mr-4">{error.type}!</div>
                    <div className="sm:inline flex w-full flex-wrap ">{error.message}</div>
                    <span className="absolute top-0 bottom-0 right-0 px-2 py-3">
                        <svg
                            onClick={handleCloseAlert}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className={`fill-current h-5 w-5 cursor-pointer ${isError ? 'text-red-500' : 'text-green-500'}`}
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                    {onRetry && ( // Changed to onRetry
                        <div className='flex w-full justify-end items-center'>
                            <div
                                className="bg-red-400 text-red-700 border-[1px] cursor-pointer hover:bg-red-500 hover:text-white transition-all border-red-500 px-2 py-2 rounded font-poppinsBold"
                                onClick={this.handleRetry}
                            >
                                Retry
                            </div>
                        </div>
                    )}
                </div>
            </>
        );
    }
}

export {DesmyAlert};
