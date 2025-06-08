import { OptionType } from "./types";

interface SelectedTagProps<T extends OptionType> {
  option: T;
  onRemove: (id: T["id"]) => void;
}

export default function SelectedTag<T extends OptionType>({
  option,
  onRemove,
}: SelectedTagProps<T>) {
  return (
    <div className="flex items-center bg-blue-200 cursor-pointer text-blue-800 dark:bg-white dark:text-black px-3 py-2.5 rounded-lg mr-1 mb-1 text-xs select-none">
      <span>{option.name}</span>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      onClick={() => onRemove(option.id)}
      className="size-4 ml-1 text-red-500 focus:outline-none"
    >
      <path
        fill="currentColor"
        d="M3.85 3.15a.5.5 0 0 0-.707.707l2.15 2.15l-2.15 2.15a.5.5 0 0 0 .707.707L6 6.714l2.15 2.15a.5.5 0 0 0 .707-.707l-2.15-2.15l2.15-2.15a.5.5 0 0 0-.707-.707L6 5.3z"
      ></path>
    </svg>
    </div>
  );
}
