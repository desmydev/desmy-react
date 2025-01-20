import React, { Component, ReactNode, ReactElement } from "react";

interface Tab {
  id: string;
  name: string;
  icon?: ReactNode;
}

interface DesmyVerticalStepperProps {
  tabs: Tab[];
  selected?: (tabId: string) => void;
  children: ReactNode;
}

interface DesmyVerticalStepperState {
  activeTab: string;
}

class DesmyVerticalStepper extends Component<DesmyVerticalStepperProps, DesmyVerticalStepperState> {
  constructor(props: DesmyVerticalStepperProps) {
    super(props);
    this.state = {
      activeTab: props.tabs[0]?.id || "",
    };
  }

  handleTabChange = (tabId: string) => {
    this.setState({ activeTab: tabId }, () => {
      if (this.props.selected) {
        this.props.selected(tabId);
      }
    });
  };

  render() {
    const { activeTab } = this.state;
    const { tabs, children } = this.props;

    const activeContent = React.Children.toArray(children).find(
      (child): child is ReactElement<{ "data-tab": string }> => 
        React.isValidElement(child) && child.props["data-tab"] === activeTab
    );

    return (
      <div className="flex space-x-5 dark:bg-darkDialogBackground font-poppinsRegular">
        <div className="lg:w-64 flex-shrink-0 dark:bg-darkBackground border-0 dark:border-darkPrimaryBorder">
          <ul className="mr-2 space-y-2">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`text-xs rounded flex items-center p-3 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-primary dark:bg-darkDialogBackground text-white"
                    : "hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black"
                }`}
                onClick={() => this.handleTabChange(tab.id)}
              >
                {tab.icon && <span className="lg:mr-2">{tab.icon}</span>}
                <span className="hidden lg:inline-block">{tab.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full bg-gray-100 dark:bg-inherit">
          <div className="rounded-lg p-3">
            {activeContent || <div>No content available for this tab.</div>}
          </div>
        </div>
      </div>
    );
  }
}

export  {DesmyVerticalStepper};
