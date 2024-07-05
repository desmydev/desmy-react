import { Component } from 'react';
import { DesmyState } from '../apis/DesmyState';
import DesmyCommons from '../apis/DesmyCommons';

interface NetworkErrorProps {
  errormessage?: string;
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
        <div className="flex w-full flex-col h-96 justify-center items-center">
          <div className="text-sm text-red-600 dark:text-white font-poppinsRegular">
            {!DesmyCommons.isEmptyOrNull(this.props.errormessage) ? this.props.errormessage : DesmyState.ERROR_MESSAGE}
          </div>
        </div>
      </>
    );
  }
}

export { DesmyNetworkError };
