import React, { Component, RefObject } from 'react';
import Commons from '../apis/DesmyCommons';
import { HexColorPicker } from "react-colorful";
import { DesmyState } from '../apis/DesmyState';
import { DesmyClickOutsideListener } from '../clickoutsidelistener/DesmyClickOutsideListener';

interface TextInputProps {
    defaultValue?: string;
    type?: string;
    readOnly?:boolean;
    hasRequest?: boolean;
    className?: string;
    inputClassName?: string;
    emailExtension?: string;
    onChange: (value: string) => void;
    onSearch: (value: string) => void;
    onRef?: (instance: DesmyTextInput | null) => void;
    autoFocus?: boolean;
    onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    disabled?: boolean;
    maxLength?: number;
    rows?: number;
    label: string;
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
    private popoverDropdownRef: RefObject<HTMLDivElement>;

    constructor(props: TextInputProps) {
        super(props);
        this.popoverDropdownRef = React.createRef();
        this.state = {
            dropdownPopoverShow: false,
            hasPressed: false,
            input: {
                data: Commons.toStringDefault(this.props.defaultValue, "")
            }
        };
    }

    componentDidMount() {
        if (this.props.onRef) {
            this.props.onRef(this);
        }
        this.handleDefaultRequest();
    }

    handleDefaultRequest = () => {
        const data = Commons.toStringDefault(this.props.defaultValue, "");
        if (!Commons.isEmptyOrNull(data) && Commons.isEmptyOrNull(this.state.input.data)) {
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
        const type = Commons.toStringDefault(this.props.type, DesmyState.TEXT);
        const isValid = this.validateInput(inputValue, type);

        if (isValid || inputValue === "") {
            const cursorPosition = event.target.selectionStart;
            this.setState((prevState) => ({
                input: {
                    ...prevState.input,
                    [event.target.name]: inputValue,
                },
                hasPressed: true,
            }), () => {
                this.props.onChange(inputValue);
                setTimeout(() => event.target.setSelectionRange(cursorPosition, cursorPosition), 0);
            });
        }
    };

    validateInput = (inputValue: string, type: string): boolean => {
        switch (type) {
            case DesmyState.PHONE:
                return /^[0-9+]*$/.test(inputValue);
            case DesmyState.NUMBER:
                return /^[0-9]*$/.test(inputValue);
            case DesmyState.AMOUNT:
                return /^\d*(\.\d{0,2})?$/.test(inputValue);
            case DesmyState.EMAIL:
                return Commons.validateEmail(inputValue) &&
                    (!this.props.emailExtension || inputValue.endsWith(this.props.emailExtension));
            default:
                return true;
        }
    };
    handleClick = (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (this.props.readOnly && this.props.onFocus) {
            const focusEvent = {
                ...event,
                type: 'focus',
                target: event.target as HTMLInputElement | HTMLTextAreaElement,
            } as unknown as React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>;
            this.props.onFocus(focusEvent);
        }
    };
    handleFocus = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (this.props.type === DesmyState.COLOR) {
            this.setState({ dropdownPopoverShow: true });
        } else {
            if (this.props.onFocus) {
                this.props.onFocus(event);
            }
        }
    };

    handleColorPicker = () => {
        this.setState({ dropdownPopoverShow: true });
    };

    closeDropdownPopover = (): void => {
        this.setState({ dropdownPopoverShow: false });
    };

    render() {
        return (
            <DesmyClickOutsideListener onClickOutside={this.closeDropdownPopover}>
                <div className={`${this.props.className || `bg-white dark:bg-darkBackground`}`}>
                    <div className={`relative bg-inherit ${this.props.type === DesmyState.SEARCH ? `flex w-full space-x-3` : ``}`}>
                        {this.props.type === DesmyState.TEXTAREA ? (
                            <textarea
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
                                type="text"
                                id="data"
                                name="data"
                                readOnly={this.props.readOnly}
                                maxLength={this.props.maxLength}
                                onFocus={this.handleFocus}
                                onClick={this.props.readOnly ? this.handleClick : undefined}
                                disabled={!!this.props.disabled}
                                autoFocus={!!this.props.autoFocus}
                                value={
                                    this.props.defaultValue !== this.state.input.data && this.props.type !== DesmyState.EMAIL
                                        ? this.props.defaultValue
                                        : Commons.isEmptyOrNull(this.state.input.data)
                                        ? this.props.defaultValue
                                        : this.state.input.data
                                }
                                onChange={this.handleChange}
                                className={`peer bg-transparent h-12 border border-black ${this.props.disabled ? `cursor-not-allowed` : ``} dark:border-white dark:text-white placeholder-transparent text-xs 2xl:text-sm ring-0 px-2 w-full focus:outline-none focus:ring-0 dark:focus:border-white ${this.props.inputClassName}`}
                                placeholder={this.props.label}
                            />
                        )}

                        <label
                            htmlFor="data"
                            className="before:content[' '] after:content[' '] pointer-events-none absolute cursor-text left-0 -top-3.5 text-[11px] dark:text-white bg-inherit backdrop-blur-xl mx-1 px-2 peer-placeholder-shown:text-sm dark:peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-black dark:peer-focus:text-white peer-focus:text-[11px] transition-all"
                        >
                            {this.props.label}
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
                                ) : (
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        onClick={() => this.props.onSearch(this.state.input.data)}
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
            </DesmyClickOutsideListener>
        );
    }
}

export { DesmyTextInput };
