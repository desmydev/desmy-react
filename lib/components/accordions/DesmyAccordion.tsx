// Accordion.tsx
import { Component, ReactNode } from 'react';

interface AccordionProps {
  children: ReactNode;
  accordionHeader: (isOpen: boolean) => ReactNode;
  className?: string;
}

interface AccordionState {
  isOpen: boolean;
}

class DesmyAccordion extends Component<AccordionProps, AccordionState> {
  constructor(props: AccordionProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleAccordion = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    const { children, accordionHeader, className } = this.props;
    return (
      <div className="flex flex-col w-full font-poppinsRegular">
        <div className={`rounded transition-all duration-300 ${isOpen ? 'mb-4' : ''}`}>
          <div
            className={`relative ${className}`}
            onClick={this.toggleAccordion}
          >
            <div className='w-full'>
              {accordionHeader(isOpen)}
            </div>
            <div className='absolute top-0 justify-center right-0 h-full items-center'>
              <div className='flex h-full w-full mr-3 items-center justify-center'>
                <svg
                  className={`h-6 w-6 m-auto transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                </svg>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="submenu-enter submenu-enter-active">
              {children}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export {DesmyAccordion};
