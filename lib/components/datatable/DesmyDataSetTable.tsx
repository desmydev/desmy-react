import axios from 'axios'; 
import React, { Component,ReactNode} from 'react';
import Commons from '../apis/DesmyCommons';
import DesmyAuth from '../apis/DesmyAuth';
import { DesmyState as CommonState } from '../apis/DesmyState';
import {DesmyAlert as Alert} from '../apis/DesmyAlert';


// Define the TypeScript interfaces for the component props and state
interface DesmyDataSetTableProps {
    onRef?: (instance: DesmyDataSetTable) => void;
    className?: string; // Optional, as it might not always be provided
    children?: React.ReactNode; 
    settings: {
      url: string;
      default_sorted_column: string;
      pagination: {
        per_page: number;
      };
      search?: boolean;
      filter?: boolean;
      header: {
        title: string;
        class: string;
        hint: string;
      };
      deleteinfo: {
        id: string;
      };
      headers: any[]; // Adjust these types as needed
      columns: any[];
      table_data: any[];
    };
    handleOnLoaded: (data: any[], state: CommonState) => void;
  }
  
interface DesmyCustomState {
  dtablemodal: React.ReactNode | null;
  hasRequest: boolean;
  exceptionalColumns: string[];
  selected: number;
  isLoading: boolean;
  filterhead: { name: string; data: string }[];
  filters: {
    search?: { [key: string]: { id: string; name: string } };
    data: { name: string; data: string; defaults?: { [key: string]: string } }[];
  };
  input: {
    search: string;
    is_searching: boolean;
  };
  entities: {
    data: any[];
    meta: {
      current_page: number;
      next_page: number | null;
      from: number;
      last_page: number;
      per_page: number;
      to: number;
      total: number;
    };
  };
  custom_settings: {
    sorted_column: string;
    order: "asc" | "desc"; // Specify that order can only be "asc" or "desc"
    first_page: number;
    current_page: number;
    offset: number;
  };
  settings: {
    default_sorted_column: string;
    header: {
      title: string;
      class: string;
      hint: string;
      search?:boolean
    };
    headers:any[];
    columns: string[];
    table_data?: { name: string; class: string }[];
  };
  error: {
    state?: boolean;
    message?: string;
    type?: string;
    color?: string;
  };
  alerterror: {
    state: boolean;
    message: string;
    type: string;
    color: string;
  };
}

class DesmyDataSetTable extends Component<DesmyDataSetTableProps, DesmyCustomState> {
  private renderedSettings: any[] = [];
  private dataCollection: any[] = [];
  private chunkSize: number = 6;
  private currentIndex: number = 0;
  private hasClear: boolean = false;
  private isLoading: boolean = false;
  private current_page: number = 0;
  private search: string = '';

  constructor(props: DesmyDataSetTableProps) {
    super(props);
    this.state = {
      exceptionalColumns: ["view", "edit", "delete"],
      selected: -1,
      isLoading: true,
      dtablemodal:null,
      hasRequest : false,
      filterhead: [],
      filters: {
        search: {},
        data: []
      },
      input: {
        search: "",
        is_searching: false
      },
      entities: {
        data: [],
        meta: {
          current_page: 1,
          next_page: null,
          from: 1,
          last_page: 1,
          per_page: 500,
          to: 1,
          total: 0
        }
      },
      custom_settings: {
        sorted_column: "",
        order: 'asc',
        first_page: 1,
        current_page: 1,
        offset: 4
      },
      settings: {
        default_sorted_column: "",
        header: {
          title: "",
          class: "",
          hint: "",
          search:true
        },
        headers:[],
        columns: [],
        table_data: []
      },
      error: {
        state: false,
        message: '',
        type: CommonState.ERROR,
        color: ""
      },
      alerterror: {
        state: false,
        message: '',
        type: CommonState.ERROR,
        color: ""
      }
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  async componentDidMount() {
    if (this.props.onRef) {
      this.props.onRef(this);
    }
    const { default_sorted_column } = this.props.settings;
    const custom_settings = { ...this.state.custom_settings, sorted_column: default_sorted_column };
    this.chunkSize = this.props.settings.pagination.per_page;
    this.setState({ custom_settings, settings: this.props.settings }, () => { this.handleFetchEntities(); });
  }

  handleScroll(event: React.UIEvent<HTMLDivElement>) {
    const div = event.currentTarget;

    if (div.scrollTop + div.clientHeight >= (div.scrollHeight - 10)) {
        this.loadNextPage();
    }
  }

  errors = (data: { state: boolean; message: string; type: string; color: string }) => {
    this.setState({ alerterror: data });
  }

  handleReset = () => {
    this.setState({ alerterror: { state: false, message: '', type: CommonState.ERROR, color: '' } });
  }

  handleError = (message: string = "") => {
    try {
      const error = { ...this.state.error, state: true, message: Commons.isEmptyOrNull(message) ? CommonState.ERROR_MESSAGE : message, type: CommonState.ERROR, color: "red" };
      this.setState({ isLoading: false, error }, () => {
        this.props.handleOnLoaded(this.renderedSettings, CommonState.ERROR);
      });
    } catch (e) {
      // Handle the error
    }
  }

  async fetchEntities() {
    try {
      const entities = { ...this.state.entities };
      const fetchUrl = `${this.props.settings.url}/?page=${this.state.custom_settings.current_page}&column=${this.state.custom_settings.sorted_column}&order=${this.state.custom_settings.order}&per_page=${this.state.entities.meta.per_page}&search=${this.search}`;
      const response = await axios.get(fetchUrl, {
        headers: {
          "X-CSRFToken": `${DesmyAuth.getCookie('csrftoken')}`,
          "Authorization": `Token ${DesmyAuth.get(CommonState.ACCESS_TOKEN)}`
        }
      });
      const data = response.data;
      if (data.success) {
        entities.data = [];
        if (this.hasClear) {
          this.handleClear();
        }
        this.dataCollection = this.dataCollection.concat(data.data.data);
        this.hasClear = false;
        entities.meta = data.data.meta;
        this.setState({ isLoading: false, entities }, this.initialChunck);
      } else {
        this.handleError();
      }
    } catch (e) {
      this.handleError();
    }
  }

  handleFetchEntities = () => {
    this.props.handleOnLoaded(this.renderedSettings, CommonState.LOADING);
    this.fetchEntities();
  }
  handleFiltered=()=>{
    
  }
  handleRetry = () => {
    try {
      this.handleClear();
      const custom_settings = { ...this.state.custom_settings, current_page: 1 };
      this.setState({ isLoading: true, error: { state: false, message: '', type: CommonState.ERROR, color: '' }, custom_settings }, this.handleFetchEntities);
    } catch (e) {
      // Handle the error
    }
  }

  handleClear = () => {
    const input = { ...this.state.input, is_searching: false };
    const entities = { ...this.state.entities, meta: { ...this.state.entities.meta, total: 0 } }
    this.setState({ input });
    this.dataCollection = [];
    this.renderedSettings = [];
    this.currentIndex = 0;
    this.current_page = 0;
    this.forceUpdate();
    this.setState({ entities });
  }

  initialChunck() {
    this.loadNextBatch();
  }

  loadNextPage = () => {
    try {
        if (!this.isLoading) {
            const custom_settings = { ...this.state.custom_settings };
            const next_page = this.state.entities.meta.next_page;

            if (next_page !== null && !Commons.isEmptyOrNull(next_page) && this.current_page !== next_page) {
                custom_settings.current_page = next_page as number;
                this.current_page = next_page as number;
                this.setState({ isLoading: true, custom_settings }, () => {
                    this.props.handleOnLoaded(this.renderedSettings, CommonState.LOADING);
                    this.handleFetchEntities();
                });
            }
        }
    } catch (e) {
        // Handle the error
    }
};


handleOnSuccess=(index : number)=>{
    this.renderedSettings.splice(index, 1);
    this.dataCollection.splice(index, 1);
    let entities = this.state.entities
    entities['meta']['total']= this.renderedSettings.length
    if(this.renderedSettings.length==0){
      this.handleClear()
    }
    this.forceUpdate();
  }
  loadNextBatch = () => {
    try {
      this.renderChunk();
      this.forceUpdate();
      this.currentIndex += this.chunkSize;
      this.isLoading = false;
    } catch (e) {
      // Handle the error
    }
  };

  renderChunk() {
    try {
      const currentCondition = (this.currentIndex + this.chunkSize > this.dataCollection.length) ? this.dataCollection.length : this.currentIndex + this.chunkSize;
      for (let i = this.currentIndex; i < currentCondition; i++) {
        const data = this.dataCollection[i];
        if (!this.renderedSettings.some(item => item[this.props.settings.deleteinfo.id] === data[this.props.settings.deleteinfo.id])) {
          this.renderedSettings.push(data);
        }
      }
      this.props.handleOnLoaded(this.renderedSettings, CommonState.LOADED);
    } catch (e) {
      // Handle the error
    }
  }
  onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      this.search = event.target.value;
      if (Commons.isEmptyOrNull(this.search) && !this.state.input.is_searching) {
        this.handleSearching();
      }
    } catch (e) {
      // Handle the error
    }
  }

  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    try {
      // Use 'e.key' instead of 'e.keyCode'
      if (e.key === 'Enter' && !Commons.isEmptyOrNull(this.search)) {
        this.handleSearching(); // Use the correct method name
      }
    } catch (e) {
      console.error('Error in handleKeyDown:', e);
    }
  }
  handleSearching = () => {
    try {
      const { custom_settings, input } = this.state;
      // Reset to first page and start searching
      custom_settings.current_page = 1;
      input.is_searching = true;
      this.hasClear = true;
  
      // Update state and trigger fetching entities
      this.setState({ custom_settings, input }, () => {
        this.handleFetchEntities();
      });
    } catch (e) {
      // Handle the error appropriately
      console.error('Error in handleSearching:', e);
    }
  }
  columnHead(value: string): string {
    let header = value.split('_');
    if (header.length > 1 && this.state.exceptionalColumns.includes(Commons.toString(header.slice(-1)).toString().toLowerCase())) {
      return header.slice(0, -1).join(' ').toUpperCase();
    } else {
      return header.join(' ').toUpperCase();
    }
  }

  sortByColumn(column: string) {
    try {
      var custom_settings = this.state.custom_settings;
      var order = (column === this.state.custom_settings.sorted_column) ? (this.state.custom_settings.order === 'asc') ? 'desc' : 'asc' : 'asc';
      this.handleClear();
      custom_settings['current_page'] = 1;
      custom_settings['sorted_column'] = column;
      custom_settings['order'] =  order as 'asc' | 'desc';

      
      this.setState({ isLoading: true, error: {}, custom_settings }, this.fetchEntities);
    } catch (e) {
      console.error(e);
    }
  }

  tableHeads = (): ReactNode[]  => {
    let icon;
    if (this.state.custom_settings.order === 'asc') {
      icon = <svg className="w-3 h-3 2xl:w-4 2xl:h-4 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
    } else {
      icon = <svg className="w-3 h-3 2xl:w-4 2xl:h-4 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
    }
    return this.props.settings.headers.map((column, index) => {
      const exceptionalColumns = this.state.exceptionalColumns.includes(column.toLowerCase());
      const columnClass = this.state.settings.table_data?.find((item) => item.name === column.toLowerCase() );
      return <th key={index} onClick={() => this.sortByColumn(this.props.settings.columns[index])}  className={`py-2 sticky ${(exceptionalColumns) ? `w-4`:(columnClass) ? columnClass.class:``}  top-0 border-b border-gray-200 text-xs 2xl:text-sm bg-gray-100 dark:border-gray-700 dark:bg-darkPrimary`}>
        <div className="flex dark:text-white sticky top-0 px-6 py-2 2xl:py-3 text-gray-600 font-poppinsSemiBold tracking-wider uppercase text-xs">
          <span>{this.columnHead(column)}</span>
          <span>{this.state.custom_settings.sorted_column === this.props.settings.columns[index] && icon}</span>
        </div>
      </th>
    });
  }
  handleHint = () => {
    try {
      if (this.state.settings.header.hint) {
        return this.state.settings.header.hint;
      } else {
        return (!this.state.error.state) ? `Loaded ${this.state.entities.meta.total} data` : "";
      }
    } catch (e) {
      return (!this.state.error.state) ? "Loaded 0 data" : "";
    }
  }

  render() {
    return (
        <>
        <div className={`flex flex-col`}>
          <div className='flex flex-col w-full mb-5'>
              <header className="flex w-full flex-col lg:flex-row justify-start lg:justify-between items-center">
                <div className="flex w-full flex-col 2xl:w-auto">
                  {
                    (this.state.settings.header !== undefined) ?
                      <div className="flex w-full flex-col">
                        <h3 className={`${(this.state.settings.header !==undefined) ? !(Commons.isEmptyOrNull(this.state.settings.header.class)) ? this.state.settings.header.class: ` text-grey-darkest uppercase text-3xl 2xl:text-5xl dark:text-white font-poppinsBlack`:``}`}>
                          {this.state.settings.header.title}
                        </h3>
                        <div className="text-grey font-thin text-xs 2xl:text-sm dark:text-white">
                          {this.handleHint()}
                        </div>        
                      </div>
                    : null
                  }
                </div>

                {
                  (this.state.settings.header?.search == undefined || this.state.settings.header?.search) ? 
                  <div className="flex w-full lg:max-w-2xl flex-col lg:items-end justify-start lg:justify-end">
                  <div className="flex flex-col lg:items-end justify-start lg:justify-end ">
                    <div className="flex items-center w-full lg:max-w-md justify-start lg:justify-end mt-5 lg:mt-0">
                      <div className="flex w-full text-grey font-thin text-sm dark:text-white">
                              <div className='w-full'>
                                <div className='flex w-full relative'>
                                  <input className="rounded lg:rounded-full w-full py-3 px-4 text-gray-700 text-xs 2xl:text-sm leading-tight border focus:outline-none focus:border-transparent focus:ring-1 dark:focus:ring-gray-800 dark:bg-gray-700 dark:text-white" name="search" onChange={this.onChangeValue} onKeyDown={this.handleKeyDown} id="search" type="text" placeholder="Search"/>
                                  {
                                    (this.state.input.is_searching && !Commons.isEmptyOrNull(this.search)) ? 
                                      <svg role="status" className="inline absolute top-2.5 bottom-0 right-2 w-4 h-4 2xl:w-6 2xl:h-6 text-primary dark:text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                      </svg>
                                    :null
                                  }
                                </div>
                              </div>
                              <div className='flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer' onClick={()=>this.handleRetry()}>
                                <svg viewBox="0 0 512 512" fill="currentColor" className='w-4 h-4 2xl:w-5 2xl:h-5'>
                                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M320 146s24.36-12-64-12a160 160 0 10160 160"/>
                                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M256 58l80 80-80 80" />
                                </svg>
                              </div>
                              {
                                (this.props.settings.filter !== undefined && this.props.settings.filter !==null) ? 
                                <div className='flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer' onClick={()=>this.handleFiltered()}>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                                  </svg>

                                </div>
                                :null
                              }
                              
                            </div>    
                      </div>
                  </div>
                </div>
                  :null
                }
               
              </header>
              {(this.state.alerterror.state) ? 
                  <Alert error={this.state.alerterror} handleCloseAlert={this.handleReset}/>
              : null}
          </div>
          <div>
            
          </div>
          <div className={`scrollable_table flex flex-col h-[calc(100vh-290px)] overflow-auto  scrollbar-width ${this.props.className}`} onScroll={this.handleScroll}>
              <div className='flex flex-col w-full'>
                <div className='flex w-full'>
                <table className='w-full'>
                  <thead className=' w-full '>
                    <tr className="text-left text-sm w-full bg-white dark:bg-darkPrimary">{ this.tableHeads() }</tr>
                  </thead>
                  <tbody className='w-full'>
                      {this.props.children}
                  </tbody> 
                </table>
                    
                </div>
            </div>
            
          </div>
          
        </div>
  </>
    );
  }
}

export {DesmyDataSetTable};
