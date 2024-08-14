import React, { Component } from 'react';
import Commons from '../apis/DesmyCommons';
import { DesmyState } from '../apis/DesmyState';

interface TextInputProps {
    defaultValue?: string;
    type?: string;
    className?:string;
    inputClassName? : string,
    emailExtension?: string;
    onChange: (value: string) => void;
    onRef?: (instance: DesmyTextInput | null) => void;
    autoFocus?: boolean;
    disabled?: boolean;
    rows? : number;
    label: string;
}


interface TextInputState {
    hasPressed:Boolean,
    input: {
        [key: string]: string;
    };
}

class DesmyTextInput extends Component<TextInputProps, TextInputState> {
    enteredInput : string=""
    constructor(props: TextInputProps) {
        super(props);
        this.state = {
            hasPressed:false,
            input: {
                data: Commons.toStringDefault(this.props.defaultValue, "")
            }
        };
    }

    componentDidMount() {
        try{
            if (this.props.onRef)
                this.props.onRef(this);
            this.handleDefaultRequest()
        }catch(e){

        }
        
    }

    handleDefaultRequest=()=>{
        try{
            if(this.props.defaultValue != undefined){
                const data = Commons.toStringDefault(this.props.defaultValue, "");
                const { input } = this.state;
                if(!Commons.isEmptyOrNull(data) && Commons.isEmptyOrNull(this.state.input.data)){
                    input['data'] = data;
                    this.setState({input})
                }
            }
            
        }catch(e){

        }
    }
    componentDidUpdate = async (_prevProps: TextInputProps, _prevState: TextInputState) => {
        try{
            if(!this.state.hasPressed){
                this.handleDefaultRequest()
            }
        }catch(e){

        }
        
    }

    handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        try{
            const input = this.state.input;
            const inputValue = event.target.value;
            input[event.target.name] = inputValue;
            this.props.onChange(inputValue);
        }catch(e){

        }
        
    }
    
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const input = this.state.input;
            const type = Commons.toStringDefault(this.props.type, DesmyState.TEXT);
            const inputValue = event.target.value;
            if(Commons.isEmptyOrNull(inputValue)){
                input[event.target.name] = inputValue;
                this.setState({input,hasPressed:true},()=> this.props.onChange(inputValue))
            }
            if (type === DesmyState.PHONE) {
                if (/^[0-9+]*$/.test(inputValue)) {
                    input[event.target.name] = inputValue;
                    this.setState({ input ,hasPressed:true}, () => { this.props.onChange(inputValue); });
                }
            } else if (type === DesmyState.NUMBER) {
                if (/^[0-9]*$/.test(inputValue)) {
                    input[event.target.name] = inputValue;
                    this.setState({ input ,hasPressed:true}, () => { this.props.onChange(inputValue); });
                }
            } else {
                input[event.target.name] = inputValue;
                this.setState({ input ,hasPressed:true}, () => {
                    if (type === DesmyState.EMAIL) {
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
                    {
                        (this.props.type==DesmyState.TEXTAREA) ? 
                        <textarea rows={this.props.rows}
                            disabled={this.props.disabled ? this.props.disabled : false}
                            autoFocus={this.props.autoFocus ? this.props.autoFocus : false}
                            placeholder={`${this.props.label}`}
                            defaultValue={this.state.input.data}
                            onChange={this.handleTextAreaChange}
                            className={`peer bg-transparent border border-black text-xs/7 dark:border-white  dark:text-white placeholder-transparent 2xl:text-sm/7 ring-0 px-2 w-full focus:outline-none focus:ring-0 dark:focus:border-white ${this.props.inputClassName}`} 
                        />
                        :<input 
                        type="text" 
                        id="data" 
                        name="data" 
                        disabled={this.props.disabled ? this.props.disabled : false}
                        autoFocus={this.props.autoFocus ? this.props.autoFocus : false}
                        value={this.state.input.data}
                        onChange={this.handleChange}
                        className={`peer bg-transparent h-12 border border-black ${(this.props.disabled) ? `cursor-not-allowed`:``} dark:border-white  dark:text-white placeholder-transparent text-xs 2xl:text-sm ring-0 px-2 w-full focus:outline-none focus:ring-0 dark:focus:border-white ${this.props.inputClassName}`} 
                        placeholder={`${this.props.label}`}/>
                    }
                    
                    <label htmlFor="data" className="before:content[' '] after:content[' ']  pointer-events-none absolute cursor-text left-0 -top-3.5  text-[11px] dark:text-white bg-inherit mx-1 px-2 peer-placeholder-shown:text-sm  dark:peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-black dark:peer-focus:text-white peer-focus:text-[11px] transition-all">{this.props.label}</label>
                </div>
            </div>
        );
    }
}

export {DesmyTextInput};