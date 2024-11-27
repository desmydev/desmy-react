import React, { Component } from 'react';
import classNames from 'classnames';

interface Tab {
  label: string;
  icon?: React.ReactNode;
}

interface TabLayoutProps {
  tabs: Tab[];
  children: React.ReactNode[];
}

interface TabLayoutState {
  activeTabIndex: number;
}

class DesmyTabLayout extends Component<TabLayoutProps, TabLayoutState> {
  constructor(props: TabLayoutProps) {
    super(props);
    this.state = {
      activeTabIndex: 0,
    };
  }

  setActiveTab = (index: number) => {
    this.setState({ activeTabIndex: index });
  };

  render() {
    const { tabs, children } = this.props;
    const { activeTabIndex } = this.state;

    return (
      <div className="w-full">
        <div className='flex flex-col w-full'>
        <div className="flex border-b border-gray-300">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => this.setActiveTab(index)}
              className={classNames(
                'py-2 px-4 cursor-pointer text-sm font-medium focus:outline-none transition-all flex items-center',
                {
                  'border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white': activeTabIndex === index,
                  'text-gray-600 hover:text-blue-500 dark:hover:text-white': activeTabIndex !== index,
                }
              )}
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              {tab.label}
            </div>
          ))}
        </div>

        <div className="mt-4">
          {children[activeTabIndex]}
        </div>
        </div>
       
      </div>
    );
  }
}

export {DesmyTabLayout};
