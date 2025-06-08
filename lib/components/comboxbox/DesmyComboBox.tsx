import React, { Component, createRef } from "react";
import { OptionType } from "./types";
import DesmyComboBoxInput from "./ComboBoxInput";
import DesmyComboBoxList from "./ComboBoxList";
import DesmySelectedTag from "./SelectedTag";
import axios from "axios";
import { DropdownPositionWrapper } from "../apis/DropdownPositionWrapper";
import { DesmyState } from "../apis/DesmyState";

interface DesmyComboBoxProps<T extends OptionType> {
  request: {
    url: string;
    token?: string;
  };
  defaultValue?: string | T | T[] | null;
  value?: T[];
  placeholder:string
  containerClassName?:string
  onClear?: () => void;
  type?: DesmyState.COMBOBOX | DesmyState.NORMAL;
  onChange?: (options: T[]) => void;
  debounceTime?: number;
  is_multiple?: boolean;
}

interface DesmyComboBoxState<T extends OptionType> {
  options: T[];
  filteredOptions: T[];
  loading: boolean;
  page: number;
  totalPages: number;
  searchTerm: string;
  showDropdown: boolean;
  selectedOptions: T[];
  highlightedIndex: number;
}

export class DesmyComboBox<T extends OptionType> extends Component<
  DesmyComboBoxProps<T>,
  DesmyComboBoxState<T>
> {
  containerRef = createRef<HTMLDivElement>();
  inputRef = createRef<HTMLInputElement>();
  debounceTimer: number | null = null;
  ignoreNextClickOutside = false;

  constructor(props: DesmyComboBoxProps<T>) {
    super(props);

    const normalizeDefault = (input?: string | T | T[] | null): T[] => {
      if (!input) return [];
      if (typeof input === "string") {
        return [{ id: input, name: input } as T];
      }
      if (Array.isArray(input)) return input;
      return [input];
    };

    const initialSelected = normalizeDefault(props.defaultValue);

    this.state = {
      options: [...initialSelected],
      filteredOptions: [...initialSelected],
      loading: false,
      page: 1,
      totalPages: 1,
      searchTerm: "",
      showDropdown: false,
      selectedOptions: props.value ? props.value : initialSelected,
      highlightedIndex: -1,
    };
  }

  componentDidMount() {
    this.fetchOptions(1, this.state.searchTerm);
    document.addEventListener("click", this.handleClickOutside);
  }

  componentDidUpdate(prevProps: DesmyComboBoxProps<T>) {
    if (this.props.value !== prevProps.value && this.props.value) {
      this.setState({ selectedOptions: this.props.value });
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
    if (this.debounceTimer) window.clearTimeout(this.debounceTimer);
  }

  handleClickOutside = (event: MouseEvent) => {
    if (this.ignoreNextClickOutside) return;

    const container = this.containerRef.current;

    if (container && !container.contains(event.target as Node)) {
      this.setState({ showDropdown: false, highlightedIndex: -1 });
    }
  };

  openDropdown = () => {
    this.setState({ showDropdown: true });
  };

  fetchOptions = async (page: number, searchTerm: string) => {
    const { request } = this.props;
    if (!request || !request.url) return;

    this.setState({ loading: true });

    try {
      const headers = request.token ? { Authorization: `${request.token}` } : {};
      const response = await axios.get(request.url, {
        headers,
        params: { query: searchTerm, page },
      });

      const responseData = response.data;

      if (responseData.success) {
        const meta = responseData.data.meta;
        const optionsFromApi: T[] = responseData.data.data;

        this.setState((prev) => {
          const existingIds = new Set(prev.options.map((o) => o.id));
          const newOptions = optionsFromApi.filter((o) => !existingIds.has(o.id));
          const mergedOptions = [...prev.options, ...newOptions];

          const filteredOptions = mergedOptions
            .filter((opt) => !prev.selectedOptions.some((sel) => sel.id === opt.id))
            .filter((opt) => opt.name.toLowerCase().includes(searchTerm.toLowerCase()));

          return {
            options: mergedOptions,
            filteredOptions,
            page: meta.current_page,
            totalPages: meta.last_page,
            loading: false,
          };
        });
      } else {
        this.setState({ loading: false });
      }
    } catch {
      this.setState({ loading: false });
    }
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;

    if (this.debounceTimer) window.clearTimeout(this.debounceTimer);

    this.debounceTimer = window.setTimeout(() => {
      this.setState(
        {
          searchTerm,
          options: [],
          filteredOptions: [],
          page: 1,
          totalPages: 1,
          loading: false,
          showDropdown: true,
          highlightedIndex: -1,
        },
        () => {
          this.fetchOptions(1, searchTerm);
        }
      );
    }, this.props.debounceTime ?? 300);

    this.setState({ searchTerm, showDropdown: true });
  };

  handleOptionClick = (option: T, event?: React.MouseEvent) => {
    if (event) event.stopPropagation();
    this.ignoreNextClickOutside = true;

    this.setState(
      (prev) => {
        if (prev.selectedOptions.find((o) => o.id === option.id)) return null;

        const newSelected = [...prev.selectedOptions, option];
        if (this.props.onChange) this.props.onChange(newSelected);

        const newFilteredOptions = prev.filteredOptions.filter((o) => o.id !== option.id);
        const newOptions = prev.options.filter((o) => o.id !== option.id);

        return {
          selectedOptions: newSelected,
          searchTerm: "",
          filteredOptions: newFilteredOptions,
          options: newOptions,
          highlightedIndex: -1,
          showDropdown: this.props.is_multiple ? true : false,
        };
      },
      () => {
        this.focusInput();
        if (this.state.page < this.state.totalPages && !this.state.loading) {
          this.fetchOptions(this.state.page + 1, this.state.searchTerm);
        }
        setTimeout(() => {
          this.ignoreNextClickOutside = false;
        }, 0);
      }
    );
  };

  focusInput() {
    this.inputRef.current?.focus();
  }

  handleRemoveTag = (id: T["id"]) => {
  this.setState(
    (prev) => {
      const isLastItem = prev.selectedOptions.length === 1;
      const newSelected = isLastItem ? [] : prev.selectedOptions.filter((o) => o.id !== id);
      if (this.props.onChange) this.props.onChange(newSelected);
      if (isLastItem && this.props.onClear) this.props.onClear();

      let newFilteredOptions = prev.filteredOptions;
      if (!isLastItem) {
        const optionToAddBack = prev.options.find((o) => o.id === id);
        if (optionToAddBack && !prev.filteredOptions.some((opt) => opt.id === id)) {
          newFilteredOptions = [...prev.filteredOptions, optionToAddBack];
        }
        newFilteredOptions = newFilteredOptions.filter((opt) =>
          opt.name.toLowerCase().includes(prev.searchTerm.toLowerCase())
        );
      }
      return {
        selectedOptions: newSelected,
        filteredOptions: newFilteredOptions,
      };
    });
};


  handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const { loading, page, totalPages, searchTerm } = this.state;

    if (scrollHeight - scrollTop - clientHeight < 10 && !loading && page < totalPages) {
      this.fetchOptions(page + 1, searchTerm);
    }
  };

  handleOptionHover = (index: number) => {
    this.setState({ highlightedIndex: index });
  };

  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { highlightedIndex, filteredOptions, showDropdown, searchTerm, selectedOptions } = this.state;

    if (!showDropdown) {
      if (e.key === "ArrowDown") {
        this.openDropdown();
        this.setState({ highlightedIndex: 0 });
        e.preventDefault();
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        this.setState((prev) => {
          const nextIndex =
            prev.highlightedIndex < prev.filteredOptions.length - 1 ? prev.highlightedIndex + 1 : 0;
          return { highlightedIndex: nextIndex };
        });
        break;

      case "ArrowUp":
        e.preventDefault();
        this.setState((prev) => {
          const prevIndex =
            prev.highlightedIndex > 0 ? prev.highlightedIndex - 1 : prev.filteredOptions.length - 1;
          return { highlightedIndex: prevIndex };
        });
        break;

      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
          this.handleOptionClick(filteredOptions[highlightedIndex]);
        }
        break;

      case "Backspace":
        if (!searchTerm && selectedOptions.length > 0) {
          this.handleRemoveTag(selectedOptions[selectedOptions.length - 1].id);
        }
        break;

      case "Escape":
        e.preventDefault();
        this.setState({ showDropdown: false, highlightedIndex: -1 });
        break;

      default:
        break;
    }
  };

  renderDropdown() {
    const { filteredOptions, loading, showDropdown, highlightedIndex } = this.state;
    if (!showDropdown) return null;

    return (
      <DropdownPositionWrapper targetRef={this.inputRef} visible={showDropdown} maxHeight={350} onScroll={this.handleScroll} >
        <DesmyComboBoxList
          options={filteredOptions}
          loading={loading}
          selectedOptions={this.props.value ?? this.state.selectedOptions}
          highlightedIndex={highlightedIndex}
          onOptionClick={this.handleOptionClick}
          onOptionHover={this.handleOptionHover}
          onScroll={this.handleScroll}
          style={{ width: "100%", maxHeight: "100%", overflowY: "auto" }}
        />
      </DropdownPositionWrapper>
    );
  }
handleClearAll = () => {
  this.setState(
    { selectedOptions: [] },
    () => {
      if (this.props.onChange) this.props.onChange([]);
      if (this.props.onClear) this.props.onClear();
    }
  );
};
  render() {
  const { searchTerm, selectedOptions } = this.state;
  const { placeholder, containerClassName, type = DesmyState.COMBOBOX } = this.props;
  const controlledSelectedOptions = this.props.value ?? selectedOptions;
  const controlledSearchTerm = searchTerm;

  return (
    <div
      className={`relative w-full font-normal text-sm ${
        containerClassName || "bg-white dark:bg-darkBackground dark:text-white"
      }`}
      ref={this.containerRef}
    >
      <div
        className={`flex ${
          controlledSelectedOptions.length === 0 ? `` : `flex-wrap ${type === DesmyState.NORMAL ? ``:`pt-5`}`
        } items-center border font-poppinsRegular border-gray-300 dark:border-white bg-inherit rounded-none px-2 py-1 min-h-12 cursor-text  transition-all`}
      >
        {type === DesmyState.NORMAL ? (
          <div className="w-full py-2 flex items-start justify-between ">
            <div className="w-full">
              {controlledSelectedOptions.map((opt) => opt.name).join(", ")}
            </div>
            {controlledSelectedOptions.length > 0 && (
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 12 12" onClick={this.handleClearAll} className="size-4 ml-1 text-red-500 focus:outline-none cursor-pointer">
                <path fill="currentColor" d="M3.85 3.15a.5.5 0 0 0-.707.707l2.15 2.15l-2.15 2.15a.5.5 0 0 0 .707.707L6 6.714l2.15 2.15a.5.5 0 0 0 .707-.707l-2.15-2.15l2.15-2.15a.5.5 0 0 0-.707-.707L6 5.3z" ></path>
              </svg>
            )}
          </div>
        ) : (
          controlledSelectedOptions.map((opt) => (
            <DesmySelectedTag key={opt.id} option={opt} onRemove={this.handleRemoveTag} />
          ))
        )}
        <div className={`${controlledSelectedOptions.length === 0 ? `py-0` : `py-2`} w-full bg-inherit`}>
          <DesmyComboBoxInput
            ref={this.inputRef}
            hasData={controlledSelectedOptions.length !== 0}
            onClick={() => this.focusInput()}
            value={controlledSearchTerm}
            placeholder={placeholder}
            onChange={this.handleInputChange}
            onFocus={this.openDropdown}
            onKeyDown={this.handleKeyDown}
          />
        </div>
      </div>

      {this.renderDropdown()}
    </div>
  );
}

}
