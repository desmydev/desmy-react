import React, { Component } from 'react';
import Filters from '../utilities/Filter';
import Commons from '../apis/DesmyCommons';

interface FilterItem {
  id: string;
  name: string;
  value: any;
  label: string;
}

interface FilterPanelProps {
  filterhead: FilterItem[];
  showFilter: boolean;
  onRemoveFilter: (label: string) => void;
  onFiltered: (filters: { [key: string]: any }) => void;
  onClose: () => void;
  filter: { url: string };
}

export class FilterPanel extends Component<FilterPanelProps> {
  render() {
    const { filterhead, showFilter, onRemoveFilter, onFiltered, onClose, filter } = this.props;

    return (
      <div>
        
        {showFilter && (
          <Filters
            content={filterhead}
            filter={filter}
            onSuccess={onFiltered}
            onClose={onClose}
          />
        )}

        {filterhead.length > 0 && (
          <div className="flex w-full overflow-x-auto mb-2 space-x-4">
            {filterhead.map((data, i) =>
              data.name ? (
                <div
                  key={`filter-${i}`}
                  className="flex flex-shrink-0 text-xs relative pl-4 pr-6 py-2 rounded-lg border cursor-pointer hover:bg-primary hover:text-white border-gray-200 bg-gray-50 dark:text-black dark:hover:bg-white dark:border-white dark:hover:text-black"
                >
                  <div className="flex mr-2">
                    {Commons.capitalizeEachWord(Commons.convertUnderscoreToSpaceString(data.label))}:
                  </div>
                  <div className="flex font-poppinsSemiBold">{data.name}</div>
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-1 top-2 cursor-pointer size-4"
                    onClick={() => onRemoveFilter(data.label)}
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={32}
                      d="M368 368L144 144M368 144L144 368"
                    />
                  </svg>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
    );
  }
}
