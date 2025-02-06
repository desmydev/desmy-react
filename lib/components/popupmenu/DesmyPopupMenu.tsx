import React, { Component, createRef } from 'react';
import axios from 'axios'; 
import { DesmyState } from '../apis/DesmyState';
import DesmyAuth from '../apis/DesmyAuth';
import DesmyCommons from '../apis/DesmyCommons';

interface DropdownOption {
  id?: string;
  name: string;
  icon?: any;
  data?: any;
}

interface RequestProps {
  url?: string;
  isEnable?: boolean;
  showarrow?: boolean;
  serverRequest?: boolean;
  options?: DropdownOption[];
  onSelect: (data: any) => void;
}

interface DesmyPopupMenuProps {
  request: RequestProps;
  className?: string;
  dropdownId?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;  // New prop for inline styles
}

interface DesmyPopupMenuState {
  isOpen: boolean;
  isLoading: boolean;
  datalist: Array<{ name: string; icon?: any; id?: string; data?: any }>;
}

class DesmyPopupMenu extends Component<DesmyPopupMenuProps, DesmyPopupMenuState> {
  private dropdownRef = createRef<HTMLDivElement>();
  private buttonRef = createRef<HTMLDivElement>();

  constructor(props: DesmyPopupMenuProps) {
    super(props);
    this.state = {
      isOpen: false,
      isLoading: true,
      datalist: [],
    };
  }

  fetch = async () => {
    const { url, options } = this.props.request;
    if (!DesmyCommons.isEmptyOrNull(url)) {
      try {
        const response = await axios.get(DesmyCommons.toString(url), {
          headers: {
            "X-CSRFToken": `${DesmyAuth.getCookie('csrftoken')}`,
            "Authorization": `Token ${DesmyAuth.get(DesmyState.ACCESS_TOKEN)}`,
          },
        });
        const data = response.data;
        if (data.success) {
          this.setState({ datalist: data.data, isLoading: false });
        } else {
          this.handleAlert();
        }
      } catch (e) {
        this.handleAlert();
      }
    } else if (options) {
      this.setState({ datalist: options, isLoading: false });
    }
  }

  handleAlert = (_message?: string) => {
    this.setState({ isLoading: false });
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  handleClickOutside = (event: MouseEvent) => {
    const dropdown = this.dropdownRef.current;
    const button = this.buttonRef.current;

    if (
      dropdown && !dropdown.contains(event.target as Node) &&
      button && !button.contains(event.target as Node)
    ) {
      this.setState({ isOpen: false });
    }
  };

  componentDidMount() {
    this.fetch();
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleOnSelect = (data: { name: string }) => {
    this.setState({ isOpen: false }, () => {
      this.props.request.onSelect(data);
    });
  };

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="relative inline-block text-left">
        <div>
          <div onClick={this.toggleDropdown} ref={this.buttonRef} id="dropdownButton" className="cursor-pointer">
            {children}
          </div>
        </div>

        <div
          id="dropdownMenu"
          ref={this.dropdownRef}
          style={this.props.style}  
          className={`absolute top-1/2 z-50 right-0 transform translate-x-1/2 mt-2 w-max rounded-md shadow-lg bg-white border-[1px] border-gray-100 transition-all duration-200 ease-in-out ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'} ${this.props.className}`}
        >
          <div role="menu">
            {
              this.state.isLoading ? (
                <></>
              ) : this.state.datalist.length > 0 ? (
                this.state.datalist.map((option, index) => (
                  <div key={`option-${index}`}>
                    <div
                      onClick={() => this.handleOnSelect(option)}
                      className={`flex w-full space-x-3 items-center px-6 py-4 cursor-pointer text-sm hover:bg-gray-100 ${(option.id == DesmyState.DELETE) ? 'text-red-500' : 'text-gray-700'}`}
                    >
                      {option.icon ? option.icon : null}
                      <span>{option.name}</span>
                    </div>
                    {/* Add a divider after certain options or between items */}
                    {index !== this.state.datalist.length - 1 && (
                      <hr className="border-t border-gray-200" />
                    )}
                  </div>
                ))
              ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export { DesmyPopupMenu };
