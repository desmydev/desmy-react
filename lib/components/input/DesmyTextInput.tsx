import React, { Component, RefObject,forwardRef  } from 'react';
import Commons from '../apis/DesmyCommons';
import { HexColorPicker } from "react-colorful";
import { DesmyState } from '../apis/DesmyState';
import DesmyCommons from '../apis/DesmyCommons';

interface TextInputProps {
    defaultValue?: string;
    type?: string;
    readOnly?: boolean;
    hasRequest?: boolean;
    className?: string;
    inputClassName?: string;
    emailExtensions?: string[];
    onChange: (value: string) => void;
    onSearch?: (value: string) => void;
    onRef?: (instance: HTMLInputElement | null) => void;
    autoFocus?: boolean;
    onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    disabled?: boolean;
    maxLength?: number;
    rows?: number;
    label: string;
    theme?: string;
    prefix?: string;
    postfix?: string;
}

interface TextInputState {
    dropdownPopoverShow: boolean;
    hasPressed: boolean;
    input: {
        [key: string]: string;
    };
}

class DesmyTextInput extends Component<TextInputProps, TextInputState> {
    enteredInput: string = "";
    hasDefault: boolean =false
    private popoverDropdownRef: RefObject<HTMLDivElement  | null> = React.createRef();
    private inputRef: RefObject<HTMLInputElement | null> = React.createRef();

    constructor(props: TextInputProps) {
        super(props);
        this.state = {
            dropdownPopoverShow: false,
            hasPressed: false,
            input: {
                data: Commons.getDefaultValue(this.props.defaultValue)
            }
        };
    }

    componentDidMount() {
        if (this.props.onRef) {
            this.props.onRef(this.inputRef.current);
        }
        this.handleDefaultRequest();
    }
    componentDidUpdate(prevProps: TextInputProps) {
        if (prevProps.defaultValue !== this.props.defaultValue) {
            // Reset input.data before calling handleDefaultRequest
            this.setState(
                { input: { data: "" } },  // Clear input first
                () => this.handleDefaultRequest() // Call after state update
            );
        }
    }
    
    handleDefaultRequest = () => {
        const data = Commons.getDefaultValue(this.props.defaultValue);
        if (!Commons.isEmptyOrNull(data) && Commons.isEmptyOrNull(this.state.input.data) && !this.hasDefault) {
            this.hasDefault = true;
            this.setState((prevState) => ({
                input: {
                    ...prevState.input,
                    data,
                },
            }));
        }
    };

    handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = event.target.value;
        this.setState((prevState) => ({
            input: {
                ...prevState.input,
                [event.target.name]: inputValue,
            },
        }), () => this.props.onChange(inputValue));
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const { prefix, postfix, type } = this.props;
    
        // Remove prefix and postfix from the input value if they exist
        let formattedInputValue = inputValue;
    
        if (prefix && formattedInputValue.startsWith(prefix)) {
            formattedInputValue = formattedInputValue.slice(prefix.length);
        }
    
        if (postfix && formattedInputValue.endsWith(postfix)) {
            formattedInputValue = formattedInputValue.slice(0, -postfix.length);
        }
    
        // Validate the formatted input value
        const isValid = this.validateInput(formattedInputValue, String(type));
    
        if (type === DesmyState.PHONE_NUMBER || type === DesmyState.NUMBER || type === DesmyState.AMOUNT || type === DesmyState.DECIMAL) {
            if (isValid) {
                this.setState((prevState) => ({
                    input: {
                        ...prevState.input,
                        [event.target.name]: formattedInputValue,
                    },
                }), () => {
                    this.props.onChange(formattedInputValue);
                });
            }
        } else {
            this.setState((prevState) => ({
                input: {
                    ...prevState.input,
                    [event.target.name]: formattedInputValue,
                },
            }), () => {
                if (isValid) {
                    this.props.onChange(formattedInputValue);
                }
            });
        }
    };
    

    validateInput = (inputValue: string, type: string): boolean => {
        switch (type) {
            case DesmyState.PHONE_NUMBER: {
                // Validate phone numbers (digits and "+" allowed)
                return /^[0-9+]*$/.test(inputValue);
            }

            case DesmyState.NUMBER: {
                // Validate only numeric input
                return /^[0-9]*$/.test(inputValue);
            }

            case DesmyState.AMOUNT || DesmyState.DECIMAL: {
                // Validate amounts (digits with optional decimal up to 2 places)
                return /^\d*(\.\d{0,2})?$/.test(inputValue);
            }

            case DesmyState.EMAIL: {
                // Validate email format
                const isValidEmail = Commons.validateEmail(inputValue);

                // If emailExtensions is defined, ensure it ends with a valid extension
                if (this.props.emailExtensions && this.props.emailExtensions.length > 0) {
                    // Check if inputValue ends with any valid extension
                    const validExtensions = this.props.emailExtensions.map(ext => ext.trim());
                    return isValidEmail && validExtensions.some(ext => inputValue.endsWith(ext));
                }

                // If emailExtensions is undefined or empty, return true if valid email
                return isValidEmail;
            }

            default: {
                // Default case always returns true
                return true;
            }
        }
    };

    handleClick = (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (this.props.readOnly && this.props.onFocus) {
            const focusEvent = {
                ...event,
                type: 'focus',
                target: event.target as HTMLInputElement | HTMLTextAreaElement,
            } as unknown as React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>;
            return this.props.onFocus(focusEvent);
        }
    };
    
    handleFocus = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (this.props.readOnly) {
            return; 
        }
    
        if (this.props.type === DesmyState.COLOR) {
            this.setState({ dropdownPopoverShow: true });
        } else if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    };


    handleColorPicker = () => {
        this.setState({ dropdownPopoverShow: true });
    };

    closeDropdownPopover = (): void => {
        this.setState({ dropdownPopoverShow: false });
    };

    render() {
        const {defaultValue,prefix, postfix } = this.props
        
        return (
                <div
                    className={`${this.props.className || 'bg-white dark:bg-darkBackground'} transition-colors duration-300`}
                >
                    <div className={`relative bg-inherit ${this.props.type === DesmyState.SEARCH ? 'flex w-full space-x-3' : ''}`}>
                        
                    <div className={`flex items-center ${((!DesmyCommons.isEmptyOrNull(prefix) || !DesmyCommons.isEmptyOrNull(postfix) ) ? `border border-black dark:border-white`:``)} bg-inherit`}>
                            {prefix && (
                                <span className="px-1 text-sm text-gray-600 dark:text-gray-300 mr-2">{prefix}</span>
                            )}
                            {this.props.type === DesmyState.TEXTAREA ? (
                                <textarea
                                    id={`data-${Commons.generateKey()}`} 
                                    rows={this.props.rows}
                                    disabled={!!this.props.disabled}
                                    autoFocus={!!this.props.autoFocus}
                                    onFocus={this.handleFocus}
                                    onClick={this.props.readOnly ? this.handleClick : undefined}
                                    placeholder={this.props.label}
                                    readOnly={this.props.readOnly}
                                    maxLength={this.props.maxLength}
                                    defaultValue={this.props.defaultValue !== this.state.input.data ? this.props.defaultValue : this.state.input.data}
                                    onChange={this.handleTextAreaChange}
                                    className={`peer bg-transparent border border-black text-xs/7 dark:border-white dark:text-white placeholder-transparent 2xl:text-sm/7 ring-0 px-2 w-full focus:outline-none focus:ring-0 dark:focus:border-white ${this.props.inputClassName}`}
                                />
                            ) : (
                                <input
                                    type={`${this.props.type === DesmyState.PASSWORD ? 'password' : 'text'}`}
                                    id={`data-${Commons.generateKey()}`} 
                                    name="data"
                                    autoComplete="data"
                                    ref={this.inputRef}
                                    readOnly={this.props.readOnly}
                                    maxLength={this.props.maxLength}
                                    onFocus={this.handleFocus}
                                    onClick={this.props.readOnly ? this.handleClick : undefined}
                                    disabled={!!this.props.disabled}
                                    autoFocus={!!this.props.autoFocus}
                                    value={this.state.input.data || defaultValue}//{Commons.isEmptyOrNull(this.state.input.data) ? this.props.defaultValue ?? '' : this.state.input.data}
                                    onChange={this.handleChange}
                                    className={`peer bg-transparent h-12 ${!(!DesmyCommons.isEmptyOrNull(prefix) || !DesmyCommons.isEmptyOrNull(prefix) ) ? `border border-black  px-2`:``}  ${this.props.disabled ? 'cursor-not-allowed' : ''} dark:border-white dark:text-white placeholder-transparent text-xs 2xl:text-sm ring-0 w-full focus:outline-none focus:ring-0 dark:focus:border-white ${this.props.inputClassName}`}
                                    placeholder={this.props.label}
                                />
                            )}

                            <label htmlFor="data" className={`before:content[' '] after:content[' '] pointer-events-none absolute cursor-text left-0 text-[11px] dark:text-white bg-inherit mx-1 px-2 peer-placeholder-shown:text-sm dark:peer-placeholder-shown:text-white 
                                 ${!(!DesmyCommons.isEmptyOrNull(prefix) || !DesmyCommons.isEmptyOrNull(prefix) ) ? ` peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-black  -top-3.5  peer-focus:text-[11px]`:`-top-3.5 text-[11px]`} dark:peer-focus:text-white transition-all`}>
                                <div className='w-full line-clamp-1'>{this.props.label}</div>
                            </label>

                            {this.props.type === DesmyState.COLOR && (
                                <div
                                    onClick={this.handleColorPicker}
                                    className="absolute top-0 bottom-0 right-2 rounded-2xl cursor-pointer w-12 my-auto h-8"
                                    style={{ background: `${this.state.input.data}` }}
                                ></div>
                            )}

                            {this.props.type === DesmyState.SEARCH && (
                                <div className="bg-primary text-white p-3 rounded-xl cursor-pointer">
                                    {this.props.hasRequest ? (
                                        <svg
                                            role="status"
                                            className="inline w-5 h-5 text-white animate-spin"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="#E5E7EB"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    ) : (this.props?.onSearch != undefined && 
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            onClick={() => this.props.onSearch?.(this.state.input.data)}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            className="w-5"
                                        >
                                            <path d="M19 11 A8 8 0 0 1 11 19 A8 8 0 0 1 3 11 A8 8 0 0 1 19 11 z" />
                                            <path d="M21 21l-4.35-4.35" />
                                        </svg>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {this.props.type === DesmyState.COLOR && this.state.dropdownPopoverShow && (
                        <div
                            ref={this.popoverDropdownRef}
                            className="absolute border-none z-[800] w-auto float-left py-2 bg-inherit list-none text-left rounded shadow-lg mt-1"
                        >
                            <HexColorPicker
                                color={this.state.input.data}
                                onChange={(data) => {
                                    this.setState((prevState) => ({
                                        input: {
                                            ...prevState.input,
                                            data,
                                        },
                                    }), () => this.props.onChange(data));
                                }}
                            />
                        </div>
                    )}
                </div>
        );
    }
}

export { DesmyTextInput };
// export { DesmyTextInput };
