import { default as React } from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    label: string;
    displayFormat?: string;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
