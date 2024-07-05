import axios from 'axios';
import React, { Component,ChangeEvent } from 'react';
import Commons from '../apis/DesmyCommons';
import { DesmyState } from '../apis/DesmyState';
import DesmyAuth from '../apis/DesmyAuth';

interface DataSetTableProps {
  children?: React.ReactNode;
  onRef?: (ref: DesmyDataSetTable) => void;
  settings: any; // replace 'any' with the actual type of settings if known
  data?: any; // replace 'any' with the actual type of data if known
  handleOnLoaded: (renderedSettings: any[], status: string) => void;
  className?: string;
}

interface DataSetTableState {
  exceptionalColumns: string[];
  selected: number;
  isLoading: boolean;
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
    order: 'asc' | 'desc';
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
    };
    headers: string[];
    columns: string[];
    table_data: any[];
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

class DesmyDataSetTable extends Component<DataSetTableProps, DataSetTableState> {
  renderedSettings: any[];
  dataCollection: any[];
  chunkSize: number;
  currentIndex: number;
  hasClear: boolean;
  isLoading: boolean;
  hasLoadLastData: boolean;
  current_page: number;
  search: string;

  constructor(props: DataSetTableProps) {
    super(props);
    this.state = {
      exceptionalColumns: ["view", "edit", "delete"],
      selected: -1,
      isLoading: true,
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
          total: 0,
        },
      },
      custom_settings: {
        sorted_column: "",
        order: 'asc',
        first_page: 1,
        current_page: 1,
        offset: 4,
      },
      settings: {
        default_sorted_column: "",
        header: {
          title: "",
          class: "",
          hint: "",
        },
        headers: [],
        columns: [],
        table_data: []
      },
      error: {
        state: false,
        message: '',
        type: DesmyState.ERROR,
        color: ""
      },
      alerterror: {
        state: false,
        message: '',
        type: DesmyState.ERROR,
        color: ""
      },
    }
    this.renderedSettings = []
    this.dataCollection = [];
    this.chunkSize = 6;
    this.currentIndex = 0;
    this.hasClear = false;
    this.isLoading = false;
    this.hasLoadLastData = false;
    this.current_page = 0;
    this.search = "";

    this.handleScroll = this.handleScroll.bind(this);
  }

  async componentDidMount() {
    if (this.props.onRef)
      this.props.onRef(this)
    let custom_settings = this.state.custom_settings
    custom_settings['sorted_column'] = this.props.settings.default_sorted_column
    this.chunkSize = this.props.settings.pagination.per_page
    this.setState({ custom_settings, settings: this.props.settings }, () => { this.handleFetchEntities() })
  }

  handleScroll(event: React.UIEvent<HTMLDivElement>) {
    const div = event.currentTarget;

    if (div.scrollTop + div.clientHeight >= (div.scrollHeight - 10)) {
      this.loadNextPage()
    }
  }

  errors = (data: any) => {
    this.setState({ alerterror: data })
  }

  handleReset = () => {
    this.setState({ alerterror: {} as any })
  }

  handleError = (message = "") => {
    try {
      var error = this.state.error
      error["state"] = true
      error["message"] = (Commons.isEmptyOrNull(message)) ? DesmyState.ERROR_MESSAGE : message
      error["type"] = DesmyState.ERROR
      error["color"] = "red"
      this.setState({ isLoading: false, error })
    } catch (e) {
      // handle error
    }
  }

  async fetchEntities() {
    try {
      let entities = this.state.entities
      if (!this.props.settings.server_request.enable) {
        var dataset = this.props.data
        entities.data.length = 0
        if (this.hasClear) {
          this.handleClear()
        }
        this.dataCollection = this.dataCollection.concat(dataset.data)
        this.hasClear = false
        entities['meta'] = dataset.meta
        this.setState({ isLoading: false, entities }, this.initialChunck)
        return
      }
      let fetchUrl = `${this.props.settings.url}/?page=${this.state.custom_settings.current_page}&column=${this.state.custom_settings.sorted_column}&order=${this.state.custom_settings.order}&per_page=${this.state.entities.meta.per_page}&search=${this.search}`;
      axios.get(fetchUrl, {
        headers: {
          "X-CSRFToken": `${DesmyAuth.getCookie('csrftoken')}`,
          "Authorization": `Token ${DesmyAuth.get(DesmyState.ACCESS_TOKEN)}`
        }
      }).then(response => {
        let data = response.data;
        if (data.status === "ok") {

          entities.data.length = 0
          if (this.hasClear) {
            this.handleClear()
          }
          this.dataCollection = this.dataCollection.concat(response.data.data)
          this.hasClear = false
          entities['meta'] = response.data.data.meta
          this.setState({ isLoading: false, entities }, this.initialChunck)
        } else {
          this.hasLoadLastData = true
          this.handleError()
        }
      }).catch((_e)=>{

      })
    } catch (e) {
      this.handleError()
    }
  }

  columnHead(value: string) {
    let header = value.split('_')
    if (header.length > 1 && this.state.exceptionalColumns.includes(Commons.toString(header.slice(-1)).toString().toLowerCase()))
      return header.slice(0, -1).join(' ').toUpperCase()
    else {
      return header.join(' ').toUpperCase()
    }
  }

  sortByColumn(column: string) {
    try {
        var custom_settings = this.state.custom_settings;
        // Initialize order with a default value
        var order: "asc" | "desc" = "asc";

        // Toggle order if the column is already sorted
        if (column === this.state.custom_settings.sorted_column) {
            order = this.state.custom_settings.order === 'asc' ? 'desc' : 'asc';
        }

        this.handleClear();
        custom_settings['current_page'] = 1;
        custom_settings['sorted_column'] = column;
        custom_settings['order'] = order;

        this.setState({ isLoading: true, error: {} as any, custom_settings }, this.fetchEntities);
    } catch (e) {
        // handle error
    }
}

  tableHeads = () => {
    let icon;

    if (this.state.custom_settings.order === 'asc') {
      icon = <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /> </svg>;
    } else {
      icon = <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>;
    }
    return this.props.settings.headers.map((column: string, i: number) => {
      let exceptionalColumns = this.state.exceptionalColumns.includes(column.toLowerCase())
      let columnClass = (this.state.settings.table_data !== undefined) ? this.state.settings.table_data.find(item => item.name === column.toLowerCase()) : null;
      return <th key={`th${i}`} className={` sticky z-10 ${(exceptionalColumns) ? `w-4` : (columnClass) ? columnClass.class : ``}  top-0 border-b border-gray-200 bg-transparent  text-xs 2xl:text-sm`} onClick={() => this.sortByColumn(column)}>
        <span className="flex sticky top-0 px-6 py-2 2xl:py-4 bg-inherit  font-poppinsSemiBold tracking-wider uppercase text-xs">
          {this.columnHead(column)}
          {(column.toLowerCase() === this.state.custom_settings.sorted_column) ? icon : ""}
        </span>
      </th>
    });
  }

  handleFetchEntities=()=>{
    this.props.handleOnLoaded(this.renderedSettings,DesmyState.LOADING) 
    this.fetchEntities() 
  }
  handleRetry=()=>{
    try{
      this.handleClear()
      let custom_settings = this.state.custom_settings
      custom_settings['current_page'] = 1

      this.setState({isLoading:true,error:{},custom_settings},this.handleFetchEntities)
    }catch(e){
      
    }
    
  }
  handleClear=()=>{
    let input = this.state.input
    let entities = this.state.entities
    input['is_searching'] = false
    entities['meta']['total']=0
    this.setState({input})
    this.dataCollection=[];
    this.renderedSettings = [];
    this.currentIndex = 0;
    this.current_page=0;
    this.forceUpdate();
    this.setState({entities})
  }
  initialChunck(){
    this.loadNextBatch();
  }
  loadNextBatch = () => {
    try{
      this.renderChunk();
      this.forceUpdate();
      this.currentIndex += this.chunkSize;
      this.isLoading = false;
    }catch(e){
    }
      
  };
  renderChunk() {
    try{
      let currentCondition = (this.currentIndex + this.chunkSize > this.dataCollection.length) ? this.dataCollection.length: this.currentIndex + this.chunkSize
      for (let i = this.currentIndex; i < currentCondition; i++) {
        const data = this.dataCollection[i];
        if (!this.renderedSettings.some(item => item[`${this.props.settings.deleteinfo.id}`] === data[`${this.props.settings.deleteinfo.id}`] )) {
            this.renderedSettings.push(data)
        }
      }
      this.props.handleOnLoaded(this.renderedSettings,DesmyState.LOADED)  
    }catch(e){
      
    }
  }
  loadNextPage = () => {
    try {
      if (!this.isLoading) {
        let custom_settings = this.state.custom_settings;
        let next_page = this.state.entities.meta.next_page;
        if (next_page !== null && next_page !== this.current_page) {
          custom_settings['current_page'] = next_page;
          this.current_page = next_page;
          this.setState({ isLoading: true, custom_settings }, () => {
            this.props.handleOnLoaded(this.renderedSettings, DesmyState.LOADING);
            this.handleFetchEntities();
          });
        }
      }
    } catch (e) {
      // Handle error
    }
  };

  handleFilterInput(event: React.ChangeEvent<HTMLInputElement>) {
    try {
      let input = this.state.input
      input['search'] = event.target.value
      input['is_searching'] = true
      this.setState({ input, isLoading: false }, this.onSearch)
    } catch (e) {
      this.handleError()
    }
  }

  onSearch() {
    try {
      if (this.state.input.is_searching) {
        let input = this.state.input
        this.search = input.search
        this.handleClear()
        let custom_settings = this.state.custom_settings
        custom_settings['current_page'] = 1
        this.setState({ input, custom_settings }, this.fetchEntities)
      }
    } catch (e) {
      this.handleError()
    }
  }

  handleRenderStatus = (status: string) => {
    this.props.handleOnLoaded(this.renderedSettings, status)
  }

  handleOnLoaded = () => {
    this.handleRenderStatus(DesmyState.LOADED)
  }

  handleOnLoading = () => {
    this.handleRenderStatus(DesmyState.LOADING)
  }
  handleHint=()=>{
    try{
      if(this.state.settings.header.hint){
          return this.state.settings.header.hint
      }else{
        return (!this.state.error.state) ? "Loaded "+this.state.entities.meta.total+" data":"";
      }
    }catch(e){
    
      return (!this.state.error.state) ? "Loaded 0 data":"";
    }
  }
  onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    try {
      this.search = event.target.value;
      if (Commons.isEmptyOrNull(this.search) && !this.state.input.is_searching) {
        this.handleSearching();
      }
    } catch (e) {
      // Handle error
    }
  };
  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    try {
      if ((e.key === 'Enter') && !Commons.isEmptyOrNull(this.search)) {
        this.handleSearching();
      }
    } catch (error) {
      // Handle error
    }
  };
  handleSearching(){
    let custom_settings = this.state.custom_settings
    let input = this.state.input
    custom_settings['current_page'] = 1
    input['is_searching']=true
    this.hasClear=true
    this.setState({ custom_settings,input}, () => {this.handleFetchEntities()});
  }
  handleFiltered=()=>{

  }
  render() {
    return (
        <>
        <div className={`flex flex-col font-poppinsRegular w-full`}>
          <div className='flex flex-col w-full mb-5'>
              <header className="flex w-full flex-col lg:flex-row justify-start lg:justify-between items-center">
                <div className="flex w-full flex-col 2xl:w-auto">
                  {
                    (this.state.settings.header !== undefined) ?
                     (!Commons.isEmptyOrNull(this.state.settings.header.title)) ?
                     <div className="flex w-full flex-col">
                      <h3 className={`${(this.state.settings.header !==undefined) ? !(Commons.isEmptyOrNull(this.state.settings.header.class)) ? this.state.settings.header.class: ` text-grey-darkest uppercase text-3xl 2xl:text-5xl dark:text-white font-poppinsBlack`:``}`}>
                        {this.state.settings.header.title}
                      </h3>
                      <div className="text-grey font-thin text-xs 2xl:text-sm ">
                        {this.handleHint()}
                      </div>        
                    </div>
                     :null
                    : null
                  }
                </div>

                <div className="flex w-full lg:max-w-2xl flex-col lg:items-end justify-start lg:justify-end">
                  <div className="flex flex-col lg:items-end justify-start lg:justify-end ">
                    <div className="flex items-center w-full lg:max-w-md justify-start lg:justify-end mt-5 lg:mt-0">
                      <div className="flex w-full text-grey font-thin text-sm dark:text-white">
                              <div className='w-full'>
                                <div className='flex w-full relative'>
                                  <input className="rounded lg:rounded-full w-full py-3 px-4 dark:focus:border-white dark:focus:ring-0 text-gray-700 text-xs 2xl:text-sm leading-tight border focus:outline-none focus:border-transparent focus:ring-0  bg-inherit dark:text-white" name="search" onChange={this.onChangeValue} onKeyDown={this.handleKeyDown} id="search" type="text" placeholder="Search"/>
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
                              <div className='flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full dark:hover:text-black bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-800 bg-inherit  cursor-pointer' onClick={()=>this.handleRetry()}>
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
               
              </header>
              
          </div>
          <div>
            
          </div>
          <div className={`scrollable_table flex w-full flex-col h-[calc(100vh-160px)] overflow-auto ${this.props.className}`} onScroll={this.handleScroll}>
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
    )
  }
}

export {DesmyDataSetTable};
