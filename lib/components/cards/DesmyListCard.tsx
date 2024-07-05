import { Component } from 'react';
import { DesmyState as CommonState } from '../apis/DesmyState';
import { DesmyPopupMenu } from '../popupmenu/DesmyPopupMenu';
import DesmyCommons from '../apis/DesmyCommons';

interface HomeProps {
  isLoading: boolean;
  name:string,
  image?:string,
  caption? :string,
  data: {
    name: string;
    level: number;
  };
  onAction: (action: any) => void;
  className?: string;
}

interface HomeState {
  content: any;
}
interface MenuItem {
    id:string,
    name: string;
  }
class DesmyListCard extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      content: null,
    };
  }

  render() {
    const menuItems: MenuItem[] = [
        { id:CommonState.EDIT, name: 'Edit' },
        { id :CommonState.DELETE,name: 'Delete' },
      ];
    return (
      <>
        {this.props.isLoading ? (
          <div className="flex w-full h-24 animate-pulse">
            <div className="flex flex-col w-full h-full bg-gray-300 dark:bg-darkPrimary"></div>
          </div>
        ) : (
          <DesmyPopupMenu
            className="cursor-pointer"
            request={{
              list: menuItems,
              serverRequest: false,
              isEnable: true,
              onSelect: (data: any) => {
                this.props.onAction(data);
              },
            }}
          >
            <div className={`flex flex-col w-full border border-l-4 rounded-lg group hover:bg-primary hover:dark:bg-white dark:text-black hover:text-white cursor-pointer uppercase hover:border-l-white dark:hover:border-l-white  border-l-primary dark:border-l-darkDialogBackground bg-white dark:bg-darkPrimary justify-center items-center h-24 dark:border-darkDialogBackground border-gray-200 group`}>
                <div className='px-4 py-4'>
                    <div className='flex flex-col w-full'>
                        {
                            (!DesmyCommons.isEmptyOrNull(this.props.image)) ? 
                            <div className='flex h-24 mb-2'>
                              <img
                                    className={`object-center object-cover rounded-lg  transition-transform duration-300 ease-in-out w-full h-full cursor-pointer m-auto`}
                                    alt={`photo`}
                                    src={`${this.props.image}`}/>
                            </div>
                            :null
                        }
                        <div className='text-sm line-clamp-2 text-center dark:text-white dark:group-hover:text-black'>{this.props.name}</div>
                        {
                            (!DesmyCommons.isEmptyOrNull(this.props.caption)) ?
                                <div className='w-full text-xs line-clamp-1 lowercase justify-center lg:text-center text-gray-600 dark:text-white group-hover:text-white dark:group-hover:text-black lg:line-clamp-2'>({this.props.caption})</div>
                            :null
                        }
                        
                    </div>
                </div>
            </div>
          </DesmyPopupMenu>
        )}
      </>
    );
  }
}

export {DesmyListCard};
