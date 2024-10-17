import { Component } from 'react';
import { DesmyState } from '../apis/DesmyState';
import DesmyCommons from '../apis/DesmyCommons';

interface NetworkErrorProps {
  icon? : string,
  errormessage?: string;
  onRetry:()=> void,
  onCancel?: ()=>void
}

interface NetworkErrorState {}

class DesmyNetworkError extends Component<NetworkErrorProps, NetworkErrorState> {
  constructor(props: NetworkErrorProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="flex w-full flex-col h-96 justify-center space-y-5 items-center">
          {
            (this.props.icon) ? 
            <div className='flex h-24 mb-5'>
              <img
                className={`object-center object-contain rounded-lg  transition-transform duration-300 ease-in-out w-full h-full cursor-pointer m-auto`}
                alt={`photo`}
                src={`${this.props.icon}`}/>
            </div>
            :null
          }
          
          <div className="text-sm text-red-600 dark:text-white font-poppinsRegular">
            {!DesmyCommons.isEmptyOrNull(this.props.errormessage) ? this.props.errormessage : DesmyState.ERROR_MESSAGE}
          </div>
          <div className='flex w-full justify-center items-center space-x-4'>
            {
              (this.props.onRetry !=undefined) ? <div className='bg-primary text-white px-6 py-3 rounded-full text-xs uppercase cursor-pointer border hover:border-black hover:bg-white hover:text-black transition-all' onClick={this.props.onRetry}>Retry</div> :null
            }
            {
              (this.props.onCancel !=undefined) ?   <div className='bg-red-500 text-white px-6 py-3 border border-red-500 rounded-full text-xs uppercase cursor-pointer hover:bg-red-700 hover:border-red-700 transition-all' onClick={this.props.onCancel}>Cancel</div>:null
            }
          
          </div>
        </div>
      </>
    );
  }
}

export { DesmyNetworkError };
