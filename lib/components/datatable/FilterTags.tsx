// FilterTags.tsx
import React from 'react';
import Commons from '../apis/DesmyCommons';

export interface FilterItem {
  id: string;
  name?: string;  
  label?: string; 
  value?: any;
}

interface FilterTagsProps {
  filters: FilterItem[];
  onRemove: (label: string) => void;
}

export const FilterTags: React.FC<FilterTagsProps> = ({ filters, onRemove }) => {
  if (!filters || filters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {filters.map((filter) => {
        const labelText = filter.label
          ? Commons.capitalizeEachWord(Commons.convertUnderscoreToSpaceString(filter.label))
          : "";

        const nameText = filter.name
          ? Commons.capitalizeEachWord(Commons.convertUnderscoreToSpaceString(filter.name))
          : "";

        return (
          <div
            key={filter.label ?? filter.id} // fallback to id if label is missing
            className="flex flex-shrink-0 text-xs relative pl-4 pr-6 py-2 rounded-lg border-[1px] cursor-pointer hover:bg-primary dark:hover:bg-white dark:hover:text-black hover:text-white border-gray-200 bg-gray-50"
          >
            <span className="mr-2 font-semibold">
              {labelText && `${labelText}:`}
            </span>
            <span>{nameText}</span>
            {filter.label && (
              <button
                className="ml-2 text-red-500 font-bold cursor-pointer"
                onClick={() => onRemove(filter.label!)}
              >
                ×
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};
