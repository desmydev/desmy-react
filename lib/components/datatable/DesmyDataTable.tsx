import axios from 'axios'; 
import React, { Component, ChangeEvent,ReactNode, KeyboardEvent ,JSX} from 'react';
import Commons from '../apis/DesmyCommons';
import { DesmyDropdown } from '../dropdown/DesmyDropdown';
import { DesmyState as CommonState } from '../apis/DesmyState'; // Assuming State is already exported as CommonState
import ReactDOM from 'react-dom';
import Filters from './Filter';
import {DatatableCard} from './DatatableCard';
import DesmyAuth from '../apis/DesmyAuth';
import DesmyCommons from '../apis/DesmyCommons';
import { DesmyDataTableSettingsProps } from '../apis/SharedProps';

interface FilterItem {
  id: string;
  name: string;
  value: any;
  label: string;
}
export type DesmyDataTableRef = {
  handleRetry: () => void;
};

interface DataTableProps {
  settings: DesmyDataTableSettingsProps;
  content?: React.ReactNode; 
  className?:string,
  onRef?: (ref: DesmyDataTable | null) => void;
}

interface DataTableState {
  isFocused?: boolean;
  searchText?:string,
  dtablemodal: React.ReactNode | null;
  hasRequest: boolean;
  exceptionalColumns: string[];
  selected: number;
  isLoading: boolean;
  showFilter:boolean
  filterhead: FilterItem[];
  filters: {
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
      title?: string;
      class?: string;
      hint?: string;
    };

    breadcrumb?: { name: string; url: string }[];
    headers:any[];
    columns: string[];
    table_data?: { name: string; class: string }[];
  };
  error: {
    state?: boolean;
    message?: string;
    type?: string;
    color?: string;
    retry?: boolean
  };
  alerterror: {
    state: boolean;
    message: string;
    type: string;
    color: string;
  };
}

class DesmyDataTable extends Component<DataTableProps, DataTableState> {
  renderedSettings: any[] = [];
  dataCollection: any[]= [];
  chunkSize: number;
  currentIndex: number;
  hasClear: boolean;
  isLoading: boolean;
  hasLoadLastData: boolean;
  current_page: number;
  search: string;
  filterloaded: boolean;
  queryParam:string

  constructor(props: DataTableProps) {
    super(props);
    this.state = {
      exceptionalColumns: ["view", "edit", "delete"],
      selected: -1,
      isLoading: true,
      dtablemodal:null,
      hasRequest : false,
      showFilter:true,
      filterhead: [],
      filters: {
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
          hint: ""
        },
        headers:[],
        columns: [],
        table_data: []
      },
      error: {
        state: false,
        message: '',
        type: CommonState.ERROR,
        color: "",
        retry:true
      },
      alerterror: {
        state: false,
        message: '',
        type: CommonState.ERROR,
        color: ""
      }
    };
    this.renderedSettings = [];
    this.dataCollection = [];
    this.chunkSize = 50;
    this.currentIndex = 0;
    this.hasClear = false;
    this.isLoading = false;
    this.hasLoadLastData = false;
    this.current_page = 0;
    this.search = "";
    this.filterloaded = false;
    this.queryParam=""

    this.handleScroll = this.handleScroll.bind(this);
  }

  async componentDidMount() {
    try{
      if (this.props.onRef)
          this.props.onRef(this);
      const custom_settings = this.state.custom_settings;
      custom_settings['sorted_column'] = this.props.settings.default_sorted_column;
      this.setState({ custom_settings, settings: this.props.settings }, this.fetchEntities);
    }catch(_){
    }
    
  }
  handleScroll(event: React.UIEvent<HTMLDivElement>) {
    const div = event.target as HTMLDivElement;
    if (div.scrollTop + div.clientHeight >= (div.scrollHeight - 10)) {
      this.loadNextBatch();
    }
  }

  errors = (data: { state: boolean; message: string; type: string; color: string }) => {
    this.setState({ alerterror: data });
  }

  handleReset = () => {
    this.setState({ alerterror: { state: false, message: '', type: CommonState.ERROR, color: "" } });
  }

  handleError = (message = "",retry=true) => {
    try {
      const error = this.state.error;
      const input = this.state.input;
      input['is_searching'] = false;
      error["state"] = true;
      error["message"] = (Commons.isEmptyOrNull(message)) ? CommonState.ERROR_MESSAGE : message;
      error["type"] = CommonState.ERROR;
      error["color"] = "red";
      error["retry"] = retry
      this.setState({ isLoading: false, error, input });
    } catch (_) {
    }
  }
async fetchEntities() { // Default to an empty string if filtered_data is not passed
  try {
    const { current_page, sorted_column, order } = this.state.custom_settings;
    const { per_page } = this.state.entities.meta;

    const fetchUrl = `${this.props.settings.url}/?page=${current_page}&column=${sorted_column}&order=${order}&per_page=${per_page}&search=${this.search}${this.queryParam ? '&' + this.queryParam : ''}`;

    this.setState({ isLoading: true });

    axios.get(fetchUrl, {
      headers: {
        "X-CSRFToken": `${DesmyAuth.getCookie('csrftoken')}`,
        "Authorization": `Token ${DesmyAuth.get(CommonState.ACCESS_TOKEN)}`
      }
    }).then(response => {
      const data = response.data;
      if (data.success) {
        this.dataCollection = data.data.data;
        this.hasClear = false;
        this.setState({ isLoading: false, entities: data.data });
        this.initialChunck(); // Assume this is a method for initialization
      } else {
        this.hasLoadLastData = true;
        this.handleError(data.message, false);
      }
    }).catch(e => {
      this.handleError(e);
    });

  } catch (_e) {
    this.handleError();
  }
}

  columnHead(value: string): string {
    const header = value.split('_');
    if (header.length > 1 && this.state.exceptionalColumns.includes(Commons.toString(header.slice(-1)).toString().toLowerCase())) {
      return header.slice(0, -1).join(' ').toUpperCase();
    } else {
      return header.join(' ').toUpperCase();
    }
  }

  sortByColumn(column: string) {
    try {
      const custom_settings = this.state.custom_settings;
      const { extra_handle } = this.props.settings;
  
      const columnExistsInExtraHandle = extra_handle && extra_handle?.some((item: any) => item.name === column);


      const exceptionalColumns = this.state.exceptionalColumns.includes(column.toLowerCase());

      if (!columnExistsInExtraHandle && !exceptionalColumns) {
        const order = (column === this.state.custom_settings.sorted_column) ? (this.state.custom_settings.order === 'asc') ? 'desc' : 'asc' : 'asc';
    
        this.handleClear();
        custom_settings['current_page'] = 1;
        custom_settings['sorted_column'] = column;
        custom_settings['order'] = order as 'asc' | 'desc';
  
        this.setState({ isLoading: true, error: {}, custom_settings }, this.fetchEntities);
      }
    } catch (_) {
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
      return <th key={index} onClick={() => this.sortByColumn(column)}  className={`py-2 sticky ${(exceptionalColumns) ? `w-4`:(columnClass) ? columnClass.class:``}  top-0 border-b border-gray-200 text-xs 2xl:text-sm bg-gray-100 dark:border-gray-700 dark:bg-darkPrimary`}>
        <div className="flex dark:text-white sticky top-0 px-6 py-2 2xl:py-3 text-gray-600 font-poppinsSemiBold tracking-wider uppercase text-xs">
          <span>{this.columnHead(column)}</span>
          <span>{this.state.custom_settings.sorted_column === column && icon}</span>
        </div>
      </th>
    });
  }

  handleClear = () => {
    try{
        const {input,entities,error} = this.state
        error['state']=false
        input['is_searching'] = false
        entities['meta']['total']=0
        this.setState({input})
        this.dataCollection=[];
        this.renderedSettings = [];
        this.currentIndex = 0;
        this.current_page=0;
        this.forceUpdate();
        this.setState({entities,error})
    }catch(_){
    }
  }
  initialChunck(){
     this.loadNextBatch();
  }
  addHeaderAndColumn = (header: string, column: string): void => {
    this.setState((prevState) => {
      const newHeaders = [...prevState.settings.headers, header];
      const newColumns = [...prevState.settings.columns, column];
      return {
        settings: {
          ...prevState.settings,
          headers: newHeaders,
          columns: newColumns,
        },
      };
    });
  };
  removeHeaderAndColumn = (header: string): void => {
    this.setState((prevState) => {
      const headerIndex = prevState.settings.headers.indexOf(header);
      if (headerIndex === -1) {
        return null;
      }

      const newHeaders = prevState.settings.headers.filter((_, index) => index !== headerIndex);
      const newColumns = prevState.settings.columns.filter((_, index) => index !== headerIndex);

      return {
        ...prevState,
        settings: {
          ...prevState.settings,
          headers: newHeaders,
          columns: newColumns,
        },
      };
    });
  };
  clearFetchEntities = () => {
    const {custom_settings} = this.state;
    custom_settings['current_page'] = 1;
    this.handleClear();
    this.setState({ custom_settings }, this.fetchEntities);
  }

  handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    const {input} = this.state;
    if (event.key === 'Enter' || event.keyCode === 13) {
      if (!Commons.isEmptyOrNull(input.search) && input.search.length > 2) {
        input['is_searching'] = true;
        this.search = input.search;
        this.setState({ input }, this.clearFetchEntities);
      }
    }
  }

  searchFilter = async (filters: { search: { [key: string]: { id: string; name: string } }; data: { name: string; data: string; defaults?: { [key: string]: string } }[] }) => {
    const {input} = this.state;
    if (Object.entries(filters.search).length > 0) {
      input['is_searching'] = true;
      this.setState({ filters, input }, this.clearFetchEntities);
    }
  }

  handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState((prevState) => ({
      input: {
        ...prevState.input,
        search: value
      }
    }));
  }
  
  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
  };

  onChangeValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    try {
      this.search = event.target.value;
      
     this.setState({searchText:event.target.value},()=>{
      if (Commons.isEmptyOrNull(this.search) && !this.state.input.is_searching) {
        this.clearFetchEntities();
      }
     })
    } catch (_) {
    }
  }
  
  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    try {
      if ((e.key === 'Enter') && !Commons.isEmptyOrNull(this.search)) {
        this.clearFetchEntities();
      }
    } catch (_) {
    }
  }
  loadNextBatch = () => {
    try{
      if(!DesmyCommons.isEmptyOrNull(this.dataCollection)){
        this.renderChunk();
        this.forceUpdate();
        this.currentIndex += this.chunkSize;
      }
      
      this.isLoading = false;
    }catch(_){
    }
      
  };
  renderChunk(): void {
    try {
      const headers = this.props.settings.headers;
      const currentCondition = (this.currentIndex + this.chunkSize > this.dataCollection.length) ? this.dataCollection.length : this.currentIndex + this.chunkSize;
      for (let i = this.currentIndex; i < currentCondition; i++) {
        const user = this.dataCollection[i];
        const bg = (this.state.selected === i) ? ' bg-gray-300 dark:bg-darkPrimary' : (i % 2 === 0) ? " dark:bg-[#1c1c1c] bg-[#f3f4f6] " : ' bg-inherit';
  
        if (user !== undefined) {
          const row = (
            <tr key={i} className={`${bg} cursor-pointer text-gray-700  dark:text-white dark:hover:text-black hover:bg-gray-300 dark:hover:bg-white  transition duration-500 ease-in-out`}>
              {Object.keys(headers).map((key, j) => (
                <td className={`px-3 justify-content-center flex-wrap`} key={`trex${j}`}>
                  <DatatableCard
                    key={`dtaw${key}${this.search}`}
                    index={i}
                    handleOnSuccess={this.handleOnSuccess}
                    acces_key={parseInt(key, 10)}
                    error={this.errors}
                    handleEdit={() => this.props.settings.handleEdit?.(user,key)}
                    settings={this.props.settings}
                    exceptional_columns={this.state.exceptionalColumns}
                    user={user}
                    headers={headers}
                  />
                </td>
              ))}
            </tr>
          );
          this.renderedSettings.push(row);
        }
      }
    } catch (_) {
    }
  }
  
 
  removeFilterByName = (data: string): void => {
  try {
      const updatedFilters = this.state.filterhead.filter(filter => filter.label !== data);
      const filtered_data = updatedFilters
        .filter(filter => typeof filter === 'object' && 'id' in filter)
        .map(filter => {
          const { id, value, label } = filter as FilterItem;
          return `${encodeURIComponent(label)}=${encodeURIComponent(id || value || '')}`;
        })
        .join('&');

      this.handleClear();
      this.queryParam = filtered_data
      this.setState({ filterhead: updatedFilters }, () => {
        this.fetchEntities();
      });
    } catch (_) {
    }
  };
  
  handleRetry=()=>{
    try{
      this.clearFetchEntities()
    }catch(_){
    }
    
  }
  handleHint = () => {
    const { settings, error, entities } = this.state;
    const hint = settings.header.hint;
    const total = entities.meta.total;
  
    if (error.state) {
      return "";
    }
  
    return hint ? `${hint} | Loaded ${total}` : `Loaded ${total} data`;
  }
  
  handleOnSuccess=(index : number)=>{
    this.renderedSettings.splice(index, 1);
    this.dataCollection.splice(index, 1);
    const entities = this.state.entities
    entities['meta']['total']= this.renderedSettings.length
    if(this.renderedSettings.length==0){
      this.handleClear()
    }
    this.forceUpdate();
  }
  handleEdit=(user: any,type?:string)=>{
    this.props.settings.handleEdit?.(user,type)
  }
  handleBreadCrumbNavigations(e: React.MouseEvent, url: string) {
    e.preventDefault();
    this.props.settings.onURLClick?.(url)
  }
  renderBreadcrumb() {
    const { breadcrumb } = this.props.settings;
    if (!breadcrumb || breadcrumb.length === 0) {
      return null;
    }

    return (
      <nav className="flex text-sm mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {breadcrumb.map((item, index) => (
            <li key={index} className="inline-flex items-center">
              {index !== breadcrumb.length - 1 ? (
                <a href={item.url} onClick={(e)=>this.handleBreadCrumbNavigations(e,item.url)} className="text-gray-700 w-full line-clamp-1 dark:text-white/75 dark:hover:text-blue-500 hover:text-blue-600">
                  {item.name}
                </a>
              ) : (
                <span className="text-gray-500 dark:text-white/75" aria-current="page">{item.name}</span>
              )}
              {index !== breadcrumb.length - 1 && (
                <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  }
  handlePageChange = (pageNumber: number) => {
    const { custom_settings } = this.state;
    this.clearFetchEntities()
    custom_settings.current_page = pageNumber;
    this.setState({ custom_settings, isLoading: true }, this.fetchEntities);
  };

  renderPagination = () => {
    const { meta } = this.state.entities;
    const totalPages = meta.last_page;
    const currentPage = meta.current_page;
  
    if (totalPages <= 1) return null;
  
    const paginationButtons: JSX.Element[] = [];
    
    const addButton = (page: number) => {
      paginationButtons.push(
        <button
          key={page}
          onClick={() => this.handlePageChange(page)}
          className={`px-3 py-1 mx-1 border rounded ${
            currentPage === page
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      );
    };

    addButton(1);
    if (currentPage > 3) {
      paginationButtons.push(
        <span key="left-ellipsis" className="px-3 py-1 mx-1">...</span>
      );
    }

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      addButton(i);
    }

    if (currentPage < totalPages - 2) {
      paginationButtons.push(
        <span key="right-ellipsis" className="px-3 py-1 mx-1">...</span>
      );
    }
  
    if (totalPages > 1) {
      addButton(totalPages);
    }
  
    return (
      <div className="flex justify-center mt-4">
        {currentPage > 1 && (
          <button
            onClick={() => this.handlePageChange(currentPage - 1)}
            className="px-3 py-1 mx-1 border rounded bg-gray-200 hover:bg-gray-300"
          >
            Previous
          </button>
        )}
        {paginationButtons}
        {currentPage < totalPages && (
          <button
            onClick={() => this.handlePageChange(currentPage + 1)}
            className="px-3 py-1 mx-1 border rounded bg-gray-200 hover:bg-gray-300"
          >
            Next
          </button>
        )}
      </div>
    );
  };
  
  handleOnClose=()=>{
    this.setState({showFilter:false})
  }
  handleOnOpenFilter=()=>{
    this.setState({showFilter:true})
  }
  handleOnFiltered = (data: any) => {
    const filteredDataAndFilterHead = Object.entries(data)
      .map(([key, value]) => {
        if (value && typeof value === 'object' && 'id' in value) {
          const filterValue = value as FilterItem;
          const valueId = filterValue.id || filterValue.value || value;

          // Check if the key is related to date and set both start_date and end_date
          if (key.toLowerCase().includes('date') && filterValue.value?.startDate && filterValue.value?.endDate) {
            return {
              queryParam: `start_date=${encodeURIComponent(String(filterValue.value?.startDate))}&end_date=${encodeURIComponent(String(filterValue.value?.endDate))}`,
              filterItem: { ...filterValue, label: key }
            };
          }

          return {
            queryParam: `${encodeURIComponent(key)}=${encodeURIComponent(String(valueId))}`,
            filterItem: { ...filterValue, label: key }
          };
        }
        return null;
      })
      .filter((item) => item !== null);

    const filtered_data = filteredDataAndFilterHead.map(item => item.queryParam).join('&');
    const filterhead = filteredDataAndFilterHead.map(item => item.filterItem) as FilterItem[];

    this.handleClear();
    this.queryParam = filtered_data
    this.setState({ showFilter: false, filterhead }, () => {
      this.fetchEntities();
    });
}


  render() {
    const { isFocused, searchText,showFilter,filterhead } = this.state;
    const isExpanded = isFocused && searchText !== '';
    return (
      <>
        {this.state.dtablemodal}
        {showFilter && <Filters content={filterhead} filter={this.props.settings?.filter} onSuccess={this.handleOnFiltered} onClose={this.handleOnClose}/>}


        <div className={`flex flex-col w-full ${this.props.className}`}>
              <div className='flex flex-col w-full mb-5'>
                  <header className="flex w-full flex-col md:flex-row justify-start md:justify-between items-center space-x-6">
                    <div className="flex flex-col w-full  mx-10 md:mx-0 ">
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
                    <div className="flex w-max  flex-col lg:items-end justify-start lg:justify-end">
                      <div className="flex flex-col lg:items-end justify-start lg:justify-end ">
                        <div className="flex items-center w-full lg:max-w-md justify-start lg:justify-end mt-5 lg:mt-0">
                          <div className="flex w-full text-grey font-thin text-sm dark:text-white">
                                  <div className='w-full'>
                                    <div className='flex w-full relative'>
                                      <input 
                                       className={`rounded-full lg:rounded-full py-3 px-4 dark:focus:border-white dark:focus:ring-0 text-gray-700 text-xs 2xl:text-sm leading-tight border focus:outline-none focus:border-primary focus:ring-0 bg-inherit dark:text-white transition-all duration-300 ease-in-out
                                        ${isExpanded ? 'w-[300px]' : 'w-[200px]'}`}
                                        onFocus={this.handleFocus}
                                        onBlur={this.handleBlur}
                                      name="search" onChange={this.onChangeValue} onKeyDown={this.handleKeyDown} id="search" type="text" placeholder="Search"/>
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
                                  <div className='flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full dark:hover:text-black bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-800 dark:bg-darkDialogBackground  cursor-pointer' onClick={()=>this.handleRetry()}>
                                      <svg viewBox="0 0 512 512" fill="currentColor" className='w-4 h-4 2xl:w-5 2xl:h-5'>
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M320 146s24.36-12-64-12a160 160 0 10160 160"/>
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M256 58l80 80-80 80" />
                                      </svg>
                                    </div>
                                  
                                  {
                                    (this.props.settings.filter !== undefined && this.props.settings.filter !==null) ? 
                                    <div className='flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer' onClick={()=>this.handleOnOpenFilter()}>
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
                  </header>
                  {
                    (this.props.content != null) ? 
                      <div>{this.props.content}</div>
                    :null
                  }
                               
              </div>
              <div>
                
              </div>
              <div className={`scrollable_table flex flex-col min-h-[200px] ${(this.renderedSettings.length > 10) ? `h-[80vh]`:`h-auto`} overflow-auto  scrollbar-width`} onScroll={this.handleScroll}>
                <div className='flex flex-col '>
                <div>
                  {
                    (filterhead.length > 0) ? <div className='flex w-full overflow-x-auto mb-2 space-x-4'>
                      {
                       filterhead.map((data,i)=>{
                          return (!Commons.isEmptyOrNull(data.name)) ? <div key={`flter=${i}`} className='flex flex-shrink-0 text-xs relative pl-4 pr-6 py-2 rounded-lg border-[1px] cursor-pointer hover:bg-primary hover:text-white  border-gray-200 bg-gray-50'>
                              <div className='flex mr-2'>{Commons.capitalizeEachWord(Commons.convertUnderscoreToSpaceString(data.label))}:</div>
                              <div className='flex font-poppinsSemiBold'>{data.name}</div>
                              <svg viewBox="0 0 512 512" fill="currentColor" className='absolute right-1 top-2 bottom-1 cursor-pointer w-4 h-4 2xl:w-5 2xl:h-5' onClick={()=>this.removeFilterByName(data.label)}>
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144M368 144L144 368"/>
                              </svg>
                          </div>
                          :null
                        })
                      }

                    </div> : null
                  }
                </div>
                <div className='flex flex-col w-full pb-16'>
                    {this.renderBreadcrumb()}
                      <table>
                        <thead className='w-full'>
                          <tr className="text-sm">{ this.tableHeads() }</tr>
                        </thead>
                        <tbody>
                            { (!this.state.error.state) ? this.renderedSettings : null}
                        </tbody> 
                      </table>

                </div>
                
                {(!this.state.isLoading && (this.dataCollection.length > 0 && !this.state.error.state)) && this.renderPagination()}
                {
                (!this.state.isLoading && (!this.dataCollection.length || this.state.error.state)) ? 
                  <div className={`flex flex-col w-full h-96 justify-center ${(this.state.error.state) ? `text-red-500`:`dark:text-white`} space-y-5 items-center text-base`}>
                    {
                      (this.state.error.state) ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                      :(!Commons.isEmptyOrNull(this.search)) ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>

                      :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    
                    }
                      <div className='flex w-full text-sm justify-center text-center'>{(this.state.error.state) ? this.state.error.message:(!Commons.isEmptyOrNull(this.search)) ?<span className=' font-poppinsSemiBold'> Sorry we couldn't find anything!</span> :`No data available to show`}</div>
                      {this.state.error?.retry ?
                         (Commons.isEmptyOrNull(this.search)) ? <div onClick={()=>this.handleRetry()} className={`uppercase flex font-poppinsSemiBold ${(this.state.error.state) ? `bg-red-400 text-red-700`:``} px-6 py-2 cursor-pointer rounded-full my-4`}>{(this.state.error.state) ? `RETRY`:`REFRESH`}</div> : null
                      :null}
                  </div>
                :(this.state.isLoading) ? 
                  <div className='flex flex-col w-full mt-10 justify-center dark:text-white items-center space-y-4'>
                      <svg role="status" className="flex w-4 h-4 2xl:w-6 2xl:h-6 text-black dark:text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                      </svg>
                      <div className='text-xs 2xl:text-sm'>Loading.......</div>
                  </div>
                :null
              }
                </div>
                
              </div>
              
            </div>
      </>
    );
  }
}

export {DesmyDataTable}
