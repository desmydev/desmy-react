import { Component } from 'react';
import DesmyCommons from '../apis/DesmyCommons';

interface EmptyProps {
  image? : string,
  message: string;
}

class DesmyEmpty extends Component<EmptyProps> {
  constructor(props: EmptyProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className='flex flex-col w-full items-center justify-center dark:text-white space-y-5'>
            <div className='flex w-full flex-col h-96 justify-center items-center'>
             {
                 (!DesmyCommons.isEmptyOrNull(this.props.image)) ?
                 <div className='w-24'>
                    <img className={`object-center object-cover w-full h-full cursor-pointer m-auto`} alt={`photo`} src={`${this.props.image}`} />
                 </div>
                 :null
             }
            <div className='text-sm dark:text-white font-poppinsRegular'>{this.props.message}</div>
            </div>
        </div>
      </>
    );
  }
}

export  {DesmyEmpty};
