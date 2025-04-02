import React,{ Component, CSSProperties } from 'react';
import { DesmyState as CommonState } from '../apis/DesmyState';
import { DesmyPopupMenu } from '../popupmenu/DesmyPopupMenu';
import DesmyCommons from '../apis/DesmyCommons';

interface HomeProps {
  children?: React.ReactNode;
  isLoading?: boolean;
  name?: string;
  image?: string;
  caption?: string;
  key?:any,
  data?: {
    name: string;
    level: number;
  };
  onOpen?:()=>void
  is_open?: boolean;
  optionList?: MenuItem[];
  onAction?: (action: any) => void;
  className?: string;
  style?: CSSProperties; 
  edit_permission?: boolean; 
  delete_permission?: boolean;
}

interface HomeState {
  content: any;
}

interface MenuItem {
  id?: string;
  name: string;
  icon?: any;
  data?: any;
}

class DesmyListCard extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      content: null,
    };
  }

  render() {
    const defaultMenuItems: MenuItem[] = [
      {
        id: CommonState.OPEN,
        name: 'Open',
        icon: (
          <svg fill="none" viewBox="0 0 15 15"  className="w-4 h-4">
            <path fill="currentColor" fillRule="evenodd" d="M3 2a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V8.5a.5.5 0 00-1 0V12H3V3h3.5a.5.5 0 000-1H3zm9.854.146a.5.5 0 01.146.351V5.5a.5.5 0 01-1 0V3.707L6.854 8.854a.5.5 0 11-.708-.708L11.293 3H9.5a.5.5 0 010-1h3a.499.499 0 01.354.146z" clipRule="evenodd" />
          </svg>
        ),
      },
      {
        id: CommonState.EDIT,
        name: 'Edit',
        icon: (
          <svg viewBox="0 0 1024 1024" fill="currentColor" className="w-4 h-4">
            <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" />
          </svg>
        ),
      },
      {
        id: CommonState.DELETE,
        name: 'Delete',
        icon: (
          <svg viewBox="0 0 1024 1024" fill="currentColor" className="w-4 h-4">
            <path d="M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
          </svg>
        ),
      },
    ];

    // Filter the default menu items based on the permissions
    const filteredMenuItems = defaultMenuItems.filter(item => {
      if (item.id === CommonState.EDIT && !this.props.edit_permission) {
        return false;
      }
      if (item.id === CommonState.DELETE && !this.props.delete_permission) {
        return false;
      }
      if (item.id === CommonState.OPEN && !this.props.is_open) {
        return false;
      }
      return true;
    });

    const menuItems: MenuItem[] = this.props.optionList && this.props.optionList.length > 0 
      ? this.props.optionList 
      : filteredMenuItems;

    return (
      <>
        {this.props.isLoading ? (
          <div className="flex w-full h-24 animate-pulse">
            <div className="flex flex-col w-full h-full bg-gray-300 dark:bg-darkPrimary"></div>
          </div>
        ) : (
          <DesmyPopupMenu
            className="cursor-pointer w-56 -mt-6"
            dropdownId={this.props.key}
            onOpen={this.props.onOpen}
            request={{
              options: menuItems,
              serverRequest: false,
              isEnable: true,
              onSelect: (data: any) => {
                this.props.onAction?.(data);
              },
            }}
          >
            <div
              className={`flex flex-col w-full rounded-lg cursor-pointer  group min-h-24 ${this.props.className ?? `border border-l-4 px-4 py-4 hover:bg-primary dark:hover:bg-white dark:text-black hover:text-white dark:hover:text-black uppercase hover:border-l-white dark:hover:border-l-white border-l-primary dark:border-l-darkDialogBackground bg-white dark:bg-darkPrimary dark:border-darkDialogBackground border-gray-200 `}`}
              style={this.props.style} // Use the passed style prop here
            >
              <div className="w-full">
                <div className="flex flex-col w-full">
                  {this.props.name ? (
                    <>
                      {!DesmyCommons.isEmptyOrNull(this.props.image) ? (
                        <div className="flex h-24 mb-2">
                          <img
                            className="object-center object-cover rounded-lg transition-transform duration-300 ease-in-out w-full h-full cursor-pointer m-auto"
                            alt="photo"
                            src={this.props.image}
                          />
                        </div>
                      ) : null}
                      <div className="text-sm line-clamp-1 text-center dark:text-white dark:group-hover:text-black">
                        {this.props.name}
                      </div>
                      {!DesmyCommons.isEmptyOrNull(this.props.caption) ? (
                        <div className="w-full text-xs line-clamp-1 lowercase justify-center lg:text-center text-gray-600 dark:text-white group-hover:text-white dark:group-hover:text-black lg:line-clamp-2">
                          ({this.props.caption})
                        </div>
                      ) : null}
                    </>
                  ) : (
                    this.props.children
                  )}
                </div>
              </div>
            </div>
          </DesmyPopupMenu>
        )}
      </>
    );
  }
}

export { DesmyListCard };
