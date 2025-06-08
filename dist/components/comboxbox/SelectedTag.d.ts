import { OptionType } from './types';
interface SelectedTagProps<T extends OptionType> {
    option: T;
    onRemove: (id: T["id"]) => void;
}
export default function SelectedTag<T extends OptionType>({ option, onRemove, }: SelectedTagProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
