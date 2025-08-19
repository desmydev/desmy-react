import React, { Component, createRef } from 'react';
import { DatatableCard } from './DatatableCard';

interface TableBodyProps {
  dataCollection: any[];
  headers: string[];
  exceptionalColumns: string[];
  selected: number;
  handleOnSuccess: (index: number) => void;
  settings: any;
  isLoading?: boolean;
  handleEdit: (user: any, type?: string) => void;
  rowHeight: number;
  onRowClick?: (user: any, index: number) => void;
}

interface TableBodyState {
  visibleCount: number;
}

export class TableBody extends Component<TableBodyProps, TableBodyState> {
  tableBodyRef = createRef<HTMLTableSectionElement>();
  observer: IntersectionObserver | null = null;
  sentinelRef = createRef<HTMLTableRowElement>();

  constructor(props: TableBodyProps) {
    super(props);
    this.state = {
      visibleCount: 20,
    };
  }

  componentDidMount() {
    this.setupObserver();
  }

  componentDidUpdate(prevProps: TableBodyProps, prevState: TableBodyState) {
    const dataChanged = prevProps.dataCollection !== this.props.dataCollection;
    const countChanged = prevState.visibleCount !== this.state.visibleCount;

    if (dataChanged) {
      this.setState({ visibleCount: 20 }, () => {
        this.setupObserver();
      });
    } else if (countChanged) {
      this.setupObserver();
    }
  }

  componentWillUnmount() {
    this.observer?.disconnect();
  }

  setupObserver() {
    this.observer?.disconnect();

    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          this.loadMore();
        }
      },
      {
        root: null,
        rootMargin: '200px',
        threshold: 0.1,
      }
    );

    if (this.sentinelRef.current) {
      // console.log('Observing sentinel:', this.sentinelRef.current);
      this.observer.observe(this.sentinelRef.current);
    }
  }

  loadMore = () => {
    this.setState((prevState) => {
      const nextCount = prevState.visibleCount + 20;
      const maxCount = this.props.dataCollection.length;

      if (nextCount >= maxCount) {
        this.observer?.disconnect(); // Stop observing if all rows are loaded
      }

      return {
        visibleCount: Math.min(nextCount, maxCount),
      };
    });
  };

  render() {
    const {
      dataCollection,
      headers,
      exceptionalColumns,
      selected,
      handleOnSuccess,
      settings,
      handleEdit,
      isLoading,
    } = this.props;
    const { visibleCount } = this.state;

    const visibleData = dataCollection.slice(0, visibleCount);

    return (
      <tbody ref={this.tableBodyRef}>
        {visibleData.map((user, actualIndex) => {
          const isSelected = selected === actualIndex;
          const isEvenRow = actualIndex % 2 === 0;

          const bgClass = isSelected
            ? 'bg-gray-300 dark:bg-darkPrimary'
            : isEvenRow
            ? 'dark:bg-[#1c1c1c] bg-[#f3f4f6]'
            : 'bg-inherit';

          const onRowClickHandler = (e: React.MouseEvent<HTMLTableRowElement>) => {
            let target = e.target as HTMLElement | null;

            while (target && target.tagName !== 'TD' && target !== e.currentTarget) {
              target = target.parentElement;
            }

            if (target?.tagName === 'TD') {
              const cellIndex = Array.from(target.parentElement!.children).indexOf(target);
              const colName = headers[cellIndex];
              if (!exceptionalColumns.includes(colName.toLowerCase())) {
                this.props.settings.handleOnViewClick?.(user);
              }
            }
          };

          return (
            <tr
              key={actualIndex}
              className={`${bgClass} cursor-pointer dark:text-white dark:hover:text-black hover:bg-gray-300 dark:hover:bg-white transition duration-500 ease-in-out`}
              onClick={onRowClickHandler}
            >
              {headers.map((_, j) => (
                <td
                  className={`${
                    headers.includes('image') || headers.includes('picture') ? 'p-3' : 'px-3'
                  } justify-content-center flex-wrap`}
                  key={`trex${j}`}
                >
                  <DatatableCard
                    key={`dtaw${actualIndex}`}
                    index={actualIndex}
                    handleOnSuccess={handleOnSuccess}
                    acces_key={j}
                    error={() => {}}
                    handleEdit={() => handleEdit(user)}
                    settings={settings}
                    exceptional_columns={exceptionalColumns}
                    user={user}
                    headers={headers}
                  />
                </td>
              ))}
            </tr>
          );
        })}

        {/* Sentinel row for infinite scroll */}
        {!isLoading && visibleCount < dataCollection.length && (
          <tr ref={this.sentinelRef}>
            <td colSpan={headers.length} className="text-center py-4 dark:text-white">
              Loading more...
            </td>
          </tr>
        )}
      </tbody>
    );
  }
}
