import React, { Component, ReactNode } from 'react';
import DesmyCommons from '../apis/DesmyCommons';

// Define the types for your component props
interface ChildItem {
  url: string;
  label: string;
  has_permission?:boolean
}

interface DesmySideBarItemProps {
  location: { pathname: string };
  exact?: boolean;
  className?:string,
  pattern?: string | string[]; // Accept string or array of strings
  name: string;
  items?: ChildItem[];
  icon?: ReactNode;
  url: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  navigate: (url: string) => void;
}

// Define the types for your component state
interface DesmySideBarItemState {
  openMenus: Record<string, boolean>;
  is_active: boolean | null;
}

class DesmySideBarItem extends Component<DesmySideBarItemProps, DesmySideBarItemState> {
  constructor(props: DesmySideBarItemProps) {
    super(props);
    this.state = {
      openMenus: {},
      is_active: null,
    };
  }

  componentDidMount() {
    this.toggleMenuRequest();
  }

  componentDidUpdate(prevProps: DesmySideBarItemProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.toggleMenuRequest();
    }
  }

  toggleMenuRequest = () => {
    const { location, exact, pattern } = this.props;
    const path = location.pathname || '';
    
    const patterns = Array.isArray(pattern) ? pattern : (pattern ? [pattern] : []);
  
    const exactPathMatch = exact 
      ? patterns.some(p => p && (path === p || (p.endsWith('/') && path === p.slice(0, -1)))) 
      : false;
  
    const pathMatch = patterns.map(p => (p ? path.match(p) : null)).filter(Boolean); // Filter out null matches
  
    const isActive = exact ? exactPathMatch : pathMatch.length > 0;
  
    this.setState({ is_active: isActive }, () => {
      this.toggleMenuExpand(this.props.name, isActive);
    });
  };

  handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!DesmyCommons.isEmptyOrNull(this.props.items)) {
      this.toggleMenu(this.props.name);
    } else {
      this.props.onClick(e);
    }
  };

  handleOnChildClick = (e: React.MouseEvent<HTMLAnchorElement>, data: ChildItem) => {
    e.preventDefault();
    this.props.navigate(data.url);
  };

  toggleMenuExpand = (menu: string, state: boolean) => {
    this.setState({ openMenus: { [menu]: state } });
  };

  toggleMenu = (menu: string | null) => {
    this.setState((prevState) => ({
      openMenus: {
        ...prevState.openMenus,
        [menu || '']: !prevState.openMenus[menu || ''],
      },
    }));
  };

  render() {
    const isOpen = this.state.openMenus[this.props.name];

    return (
      <div className='flex flex-col w-full'>
        <a
          onClick={this.handleOnClick}
          className={`flex space-x-3 text-xs font-poppinsRegular ${this.props.className ?? `text-black dark:text-white hover:bg-primary/75 dark:hover:bg-white dark:hover:text-black hover:text-white`}  py-2 px-4 items-center rounded transition duration-200 hover:bg-gradient-to-r  ${this.state.is_active ? 'dark:text-white bg-gray-200 dark:bg-darkBackground font-poppinsSemiBold' : 'dark:text-white'}`}
          href={this.props.url}
        >
          <div className='w-6 h-6 flex-shrink-0'>{this.props.icon}</div>
          <div className='flex w-full justify-between'>
            <div>{this.props.name}</div>
            {this.props.items && (
              <svg
                className={`ml-2 h-4 w-4 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
              </svg>
            )}
          </div>
        </a>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} flex flex-col ml-10 text-xs font-poppinsRegular`}>
        {this.props.items?.map((data, index) => (
            data.has_permission && ( 
              <a
                key={`fte${index}`}
                onClick={(e) => this.handleOnChildClick(e, data)}
                href={data.url}
                className="flex py-2 px-2.5 mb-2"
              >
                <span>{data.label}</span>
              </a>
            )
          ))}
        </div>
      </div>
    );
  }
}

export { DesmySideBarItem };
