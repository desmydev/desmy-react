import  React,{ Component,JSX } from 'react';
import axios from 'axios';
import Commons from '../apis/DesmyCommons';
import Auth from '../apis/DesmyAuth';
import { DesmyModalHandler } from '../dialog/DesmyAlertDialog';
import { DesmyState as ModalState } from '../apis/DesmyState';
import DesmyAuth from '../apis/DesmyAuth';
import { DesmyToast } from '../toasify/DesmyToast';

interface Settings {
  deleteinfo?: { id: string; name: string };
  request_url?: string;
  image?: { placeholder?: string; rounded?: boolean };
  handleOnViewClick?: (user: any) => void;
  handleOnClickExtra?: (user: any, name: string) => void;
  handleEdit?: (user: any) => void;
  extra_handle?: Array<{ name: string; icon: React.ReactNode }>;
  read_more_limit?: number;
}

interface Props {
  children?: React.ReactNode;
  user: any;
  index: number;
  handleOnSuccess: (index: number) => void;
  acces_key: number;
  settings: Settings;
  headers: any[];
  exceptional_columns: string[];
  handleEdit: (user: any) => void;
  error: (error: any) => void;
}

interface State {
  stateList: string[];
  imageExtensions: string[];
  imgColumnTypes: string[];
  title?: any;
  contentlist:any[],
  header: string;
  request: { delete: boolean };
  error: { state: boolean; message: string; type: string; color: string };
  isLoading: boolean;
  modal?: JSX.Element;
  viewAll: boolean; 
}

class DatatableCard extends Component<Props, State> {
  private header: string;
  private status: string;

  constructor(props: Props) {
    super(props);
    this.state = {
      stateList: [ModalState.APPROVED, ModalState.ACTIVE,ModalState.SUBMITTED,ModalState.CONFIRMED,ModalState.PUBLISHED,ModalState.CREATED,ModalState.ACCREDITED, ModalState.RUNNING,ModalState.ADMITTED,ModalState.QUALIFIED, ModalState.IN_PROGRESS,ModalState.ACCEPTED],
      imageExtensions: ['jpg', 'jpeg', 'png', 'svg'],
      imgColumnTypes: ['picture', 'photo'],
      title: '',
      contentlist:[],
      header: '',
      request: { delete: false },
      error: { state: false, message: '', type: ModalState.ERROR, color: '' },
      isLoading: false,
      viewAll: false, 
    };
    this.header = '';
    this.status = '';
  }
  handleDelete = () => {
    const settings = {
      title: 'Confirmation!',
      btnPosition: 'delete',
      btnNegative: 'cancel',
      type: ModalState.NOTICE,
    };
  
    const handleClose = (state: { status: boolean }) => {
      if (this.state.request.delete) {
        return;
      }
  
      if (state.status) {
        this.handleDeleteRequest();
        this.props.error({});
      }
  
      this.setState(prevState => ({
        request: { ...prevState.request, delete: state.status },
        modal: undefined,
      }));
    };
  
    const deleteInfoName = typeof this.props.user[this.props.settings.deleteinfo?.name ?? ""] === 'object'
      ? this.props.user[this.props.settings.deleteinfo?.name ?? ""]?.name
      : this.props.user[this.props.settings.deleteinfo?.name ?? ""];
  
    const modal = (
      <DesmyModalHandler settings={settings} onClose={handleClose}>
        <div className="w-full py-2 text-sm">
          Are you sure you want to delete
          <span className="text-red-500 ml-1 font-poppinsBold">
            {deleteInfoName}?
          </span>
        </div>
      </DesmyModalHandler>
    );
  
    this.setState({ modal });
  };
  

  handleError = (message: string = "") => {
    try {
      this.setState({
        request: { ...this.state.request, delete: false },
        error: {
          state: true,
          message: Commons.isEmptyOrNull(message) ? 'Error Message' : message,
          type: 'Error',
          color: 'red'
        }
      });
      this.props.error(this.state.error);
      DesmyToast.error(message)
    } catch (e) {}
  };
  
  handleDeleteRequest = () => {
    try {
      const { settings, user, index, handleOnSuccess } = this.props;
      const { deleteinfo } = settings;
      const userId = user[deleteinfo?.id ?? ""];
      axios
        .delete(`${settings.request_url}/${userId}/delete/`, {
          headers: {
            'X-CSRFToken': Auth.getCookie('csrftoken'),
            Authorization: `Token ${DesmyAuth.get(ModalState.ACCESS_TOKEN)}`,
          },
        })
        .then((json) => {
          if (json.data.success) {
            this.props.handleOnSuccess(index);
          } else {
            this.handleError(json.data.message);
          }
        })
        .catch(() => {
          this.handleError();
        });
    } catch {
      this.handleError();
    }
  };
  

  handleEdit = () => {
    if (!this.state.request.delete) {
      this.props.handleEdit(this.props.user);
    }
  };

  onImageClick = (_data: string) => {

  };

  async componentDidMount() {
    let user = this.props.user;
    let key = this.props.acces_key;
    let headers = this.props.headers;
    let data = user[headers[key]];
    this.header = Commons.toString(headers[key]).toLowerCase();
    this.status = user['status'] ?? user['process_state'];
    this.setState({ title: !Array.isArray(data) ? data?.name ?? Commons.toString(data) : "",contentlist:Array.isArray(data) ? data:[] });   
  }
  toggleView = () => {
    this.setState(prevState => ({
      viewAll: !prevState.viewAll
    }));
  };
  extra_handle = () => {
    if (this.props.settings.extra_handle) {
      return this.props.settings.extra_handle.find((o) => o.name === this.header);
    }
    return false;
  };

  render() {
    const editBtn = <span className="text-blue-800 dark:text-blue-300 cursor-pointer flex-col" ><svg   className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></span>
    const deleteBtn = <span className="text-red-800 dark:text-red-300 cursor-pointer" ><svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></span>
    const viewBtn = <span className="text-black dark:text-white cursor-pointer " ><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></span>
    // const resetBtn = <span className="text-black dark:text-white cursor-pointer " ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-600"><path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" /></svg></span>
    // const _roleBtn = <span className="text-black dark:text-white cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg></span>
    // const infoBtn = <span className="text-black dark:text-white cursor-pointer "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" /></svg></span>
    const imageurl = (Commons.isEmptyOrNull(this.state.title) && this.props.settings.image !== undefined) ? this.props.settings.image.placeholder: this.state.title
    const { viewAll, contentlist } = this.state;
    const itemsToShow = viewAll ? contentlist : contentlist.slice(0, 1);
    const listClass = viewAll ? 'collapsible-content expanded' : 'collapsible-content';
    return(
        <>
        {this.state.modal}
{
    (this.props.exceptional_columns.includes(this.header) || this.extra_handle()) ?
        <div className="flex w-full justify-center items-center">
            {(this.header === "edit") ? 
                <span onClick={() => this.handleEdit()}>{editBtn}</span> : 
            (this.header === "view") ? 
                <span className="dark:text-black" onClick={() => this.props.settings.handleOnViewClick?.(this.props.user)}>{viewBtn}</span> : 

            this.extra_handle() ?
            <span onClick={() => this.props.settings.handleOnClickExtra?.(
              this.props.user,
              this.props.settings.extra_handle?.find(o => o.name === this.header)?.name || ''
            )}>
              {this.props.settings.extra_handle?.find(o => o.name === this.header)?.icon}
            </span> 
            :(this.header === "delete") && this.state.request.delete ?
                <svg role="status" className="flex w-4 h-4 text-black dark:text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg> 
             : <span onClick={() => this.handleDelete()}>{deleteBtn}</span> 
            }
        </div> 
        :
        (["status", "process_state"].includes(this.header.toLowerCase())) ? 
            <div className={`w-16 text-[8px] px-1 line-clamp-1 rounded-full border ${(this.state.stateList.includes(this.state.title)) ? `bg-green-200 text-green-700 border-green-500 hover:bg-green-500 hover:text-white` : `bg-red-200 text-red-700 border-red-500 hover:bg-red-500 hover:text-white`} py-1 justify-center text-center items-center`}>
                {String(this.state.title).toLowerCase()}
            </div> :
       (this.state.imgColumnTypes.includes(this.header?.toLowerCase() || '') || this.state.imageExtensions.includes((this.state.title?.toLowerCase().split('.').pop() || ''))) ?
            <div className={`w-8 ml-3`}>
                <img onClick={() => this.onImageClick(this.state.title)} title="View photo" className={`object-center object-cover w-6 h-6 2xl:w-8 2xl:h-8 ${(!(this.props.settings.image == null || this.props.settings.image.rounded == false)) ? 'rounded-full' : ''} cursor-pointer mx-auto`} alt={`photo`} src={imageurl} />
            </div> :
            <span className="text-xs 2xl:text-sm px-4 py-2 flex items-center">
                {this.state.contentlist.length > 0 ? (
                     <ul className={`flex flex-col w-full ${listClass}`}>
                      {itemsToShow.map((item, index) => (
                        <li key={index} onClick={this.toggleView} className={`w-full ${(itemsToShow.length > 1) ? `line-clamp-1`:``}`} title={`${item.name}`}>
                          <div className='flex'>
                              <div className='mr-3'>{item.name}</div>
                              {index==0 && contentlist.length > 1 && (
                                <div onClick={this.toggleView}>
                                  <svg viewBox="0 0 24 24" fill="currentColor" className='w-5 h-5 cursor-pointer'>
                                    <path d="M12 18.17L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83z" />
                                  </svg>
                                </div>
                              )}
                              
                          </div>
                        </li>
                      ))}
                      {/* {contentlist.length > 2 && (
                        <div className='flex w-full '>
                          <div className="mt-2 text-xs font-bold cursor-pointer text-blue-500 hover:text-blue-700 focus:outline-none" onClick={this.toggleView}>
                          {viewAll ? 'Collapse' : <span>Expand <span>+{contentlist.length - 1}</span></span>}
                        </div>
                        </div>
                      )} */}
                    </ul>
                ) : (
                  this.state.title
                )}
                
            </span>
}

        </>
    )
  }
}

export {DatatableCard};