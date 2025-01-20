import { Component } from 'react';

interface DesmyNoDataFoundProps {
  message?: string;
  action_label?:string,
  onAction?:()=>void;
}

class DesmyNoDataFound extends Component<DesmyNoDataFoundProps> {
  render() {
    return (
      <>
        <div className="flex flex-col w-full bg-gray-200/50 dark:bg-darkDialogBackground dark:border-darkPrimaryBorder border-[1px] justify-center items-center border-gray-200 rounded-2xl min-h-96">
          <div className="text-base justify-center items-center space-y-4 text-center dark:text-white">
            <div className="flex w-full justify-center text-center">
              <svg
                width="1em"
                height="1em"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="w-8 h-8 flex-shrink-0"
              >
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4m0 4h.01" />
              </svg>
            </div>
            <div>{this.props.message ?? `No data available`}</div>
            {
              (this.props.action_label  && (
                  <div className='flex w-full justify-center items-center'>
                    <div className='flex mx-auto'>
                        <div onClick={this.props.onAction} className='text-xs bg-gray-500 hover:bg-black hover:text-white dark:bg-darkPrimaryBorder dark:hover:bg-white dark:hover:text-black  text-white px-6 py-3 rounded-full cursor-pointer'>{this.props.action_label}</div>
                    </div>
                  </div>
              ))
            }
            
          </div>
        </div>
      </>
    );
  }
}

export {DesmyNoDataFound};
