import React, { Component } from 'react';
import Commons from '../apis/DesmyCommons';
import { State } from '../apis/Constants';

interface TextInputProps {
    defaultValue?: string;
    type?: string;
    className?:string;
    inputClassName? : string,
    emailExtension?: string;
    onChange: (value: string) => void;
    onRef?: (instance: DesmyTextInput | null) => void;
    autoFocus?: boolean;
    label: string;
}


interface TextInputState {
    input: {
        [key: string]: string;
    };
}

class DesmyTextInput extends Component<TextInputProps, TextInputState> {

    constructor(props: TextInputProps) {
        super(props);
        this.state = {
            input: {
                data: Commons.toStringDefault(this.props.defaultValue, "")
            }
        };
    }

    componentDidMount() {
        try{
            if (this.props.onRef)
                this.props.onRef(this);
        }catch(e){

        }
        
    }

    componentDidUpdate = async (prevProps: TextInputProps, prevState: TextInputState) => {
        try{
            const data = Commons.toStringDefault(this.props.defaultValue, "");
            const type = Commons.toStringDefault(this.props.type, State.TEXT);
            const { input } = this.state;
            
            if (type === State.EMAIL) {
                if(Commons.isEmptyOrNull(type) && Commons.isEmptyOrNull(input.data)){
                    if (data !== input.data) {
                        input['data'] = data;
                        this.setState({ input });
                    }
                }
            }else{
                if (data !== input.data) {
                    input['data'] = data;
                    this.setState({ input });
                }
            }
            
            if(prevProps.defaultValue !== prevState.input.data){
                return false
            }  
        }catch(e){

        }
        
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const input = this.state.input;
            const type = Commons.toStringDefault(this.props.type, State.TEXT);
            const inputValue = event.target.value;

            if (type === State.PHONE) {
                if (/^[0-9+]*$/.test(inputValue)) {
                    input[event.target.name] = inputValue;
                    this.setState({ input }, () => { this.props.onChange(inputValue); });
                }
            } else if (type === State.NUMBER) {
                if (/^[0-9]*$/.test(inputValue)) {
                    input[event.target.name] = inputValue;
                    this.setState({ input }, () => { this.props.onChange(inputValue); });
                }
            } else {
                input[event.target.name] = inputValue;
                this.setState({ input }, () => {
                    if (type === State.EMAIL) {
                        const email_extension = Commons.toStringDefault(this.props.emailExtension, "");
                        const email = inputValue;
                        if (Commons.validateEmail(email)) {
                            if (Commons.isEmptyOrNull(email_extension)) {
                                this.props.onChange(inputValue);
                                return;
                            } else if (email.endsWith(email_extension)) {
                                this.props.onChange(inputValue);
                                return;
                            }
                        }
                    } else {
                        this.props.onChange(inputValue);
                    }
                });
            }

        } catch (e) {
            // Handle error
        }
    }

    render() {
        return (
            <div className={`${(this.props.className !==undefined) ? this.props.className : `bg-white dark:bg-darkBackground`}`}>
                <div className="relative bg-inherit">
                    <input 
                        type="text" 
                        id="data" 
                        name="data" 
                        autoFocus={this.props.autoFocus ? this.props.autoFocus : false}
                        value={this.state.input.data}
                        onChange={this.handleChange}
                        className={`peer bg-transparent h-12 border border-black dark:border-white  dark:text-white placeholder-transparent text-xs 2xl:text-sm ring-0 px-2 w-full focus:outline-none focus:ring-0 dark:focus:border-white ${this.props.inputClassName}`} 
                        placeholder={`${this.props.label}`}/>
                    <label htmlFor="data" className="before:content[' '] after:content[' ']  pointer-events-none absolute cursor-text left-0 -top-3.5  text-[11px] dark:text-white bg-inherit mx-1 px-2 peer-placeholder-shown:text-sm  dark:peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-black dark:peer-focus:text-white peer-focus:text-[11px] transition-all">{this.props.label}</label>
                </div>
            </div>
        );
    }
}

export {DesmyTextInput};