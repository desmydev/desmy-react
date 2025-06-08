import { default as React } from 'react';
interface ComboBoxInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: () => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
declare const DesmyComboBoxInput: React.ForwardRefExoticComponent<ComboBoxInputProps & React.RefAttributes<HTMLInputElement>>;
export default DesmyComboBoxInput;
