import axios from 'axios'; 
import React, { Component, ChangeEvent,ReactNode, KeyboardEvent } from 'react';
import Commons from '../apis/DesmyCommons';
import { DesmyDropdown } from '../dropdown/DesmyDropdown';
import { DesmyState as CommonState } from '../apis/DesmyState'; // Assuming State is already exported as CommonState
import ReactDOM from 'react-dom';
import DatatableCard from './DatatableCard';
import DesmyAuth from '../apis/DesmyAuth';

interface Filter {
  title: string;
  is_multiple: boolean;
  encrypted: boolean;
  data: Array<any>;
}
interface DropdownItem {
  id: number;
  name: string | null;
  icon: string | null;
  data: any;
}
interface Settings {
  title: string;
  hint: string;
  btnPosition: string;
  btnNegative: string;
  type: string;
  loading: boolean;
  data_value?: DropdownItem;
  filter: Filter;
  dtablemodal: any;
  handleOnClose?: () => void;
}

interface Props {
  settings: Partial<Settings>;
  onClose: (data: any) => void;
}

interface State {
  data: { [key: string]: any };
  filter: { [key: string]: any };
  settings: Settings;
  isLoading: boolean; // Added isLoading to the state
}

class DatatableModalHandler extends React.Component<Props, State> {
  modalContainer: HTMLDivElement;

  constructor(props: Props) {
    super(props);
    this.state = {
      data: {},
      filter: {},
      settings: {
        title: "",
        hint: "",
        btnPosition: "",
        btnNegative: "",
        type: "ERROR",
        loading: false,
        filter: {
          title: "",
          is_multiple: false,
          encrypted: false,
          data: []
        },
        dtablemodal: null
      },
      isLoading: false // Initialized isLoading in the state
    };
    this.modalContainer = document.createElement('div');
    this.modalContainer.className = 'modal-container';
  }

  handleClose = (data: boolean) => {
    try {
      if (this.props.settings.loading && data) {
        this.setState({ isLoading: true });
      }
      const ddata = { ...this.state.data, status: data, filters: this.state.filter };
      this.props.onClose(ddata);
    } catch (e) {
      // Handle error
    }
  }

  componentDidMount() {
    const settings = { ...this.state.settings, ...this.props.settings };
    this.setState({ settings });
    document.body.appendChild(this.modalContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.modalContainer);
  }

  handleDataChange = (name: string, data: any) => {
    try {
      const data_value = this.state.filter.is_multiple ? (data.length > 0 ? data.map((object: any) => object.id) : []) : data;
      this.setState((prevState) => ({
        filter: {
          ...prevState.filter,
          [name]: data_value
        }
      }));
    } catch (e) {
      // Handle error
    }
  }

  render() {
    const { settings } = this.state;
    const modalComponent = (
      <div className={`fixed z-[3000] inset-0 overflow-y-auto`}>
        <div className="fixed justify-items-center px-2 backdrop-blur-sm top-0 right-0 left-0 z-40 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-black/25 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div className="inline-block align-bottom font-poppinsRegular bg-white dark:bg-darkBackground dark:text-white px-4 pt-5 pb-0 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full sm:p-6">
              <div className='flex flex-col lg:-ml-2 w-full'>
                <div className="relative sm:flex sm:items-start items-center">
                  <div className="flex w-full flex-col mt-5 text-center sm:mt-0 sm:ml-4 sm:text-left items-center">
                    {settings.title && !Commons.isEmptyOrNull(settings.title) &&
                      <div className={`flex w-full justify-center items-center text-start lg:justify-start text-md uppercase xl:text-base mt-1.5 ${settings.type === "ERROR" ? `text-red-600` : `text-gray-900 dark:text-white`} font-poppinsBold`}>
                        {settings.title}
                      </div>
                    }
                    {settings.hint && !Commons.isEmptyOrNull(settings.hint) &&
                      <div className={`flex w-full justify-center items-center text-start lg:justify-start text-sm mt-1.5 ${settings.type === "ERROR" ? `text-red-600` : `text-gray-900 dark:text-white`}`}>
                        {settings.hint}
                      </div>
                    }
                    <div className="flex flex-col w-full my-5">
                      {settings.filter && settings.filter.data.map((data, i) => (
                        <div key={`drpdke=${i}`} className='flex w-full relative'>
                          <DesmyDropdown data={data.data}
                            selectedData={this.state.settings.data_value}
                            defaultValue={data.defaults}
                            onClear={`None`}
                            handleChange={(response) => this.handleDataChange(data.name, response)}
                            is_multiple={settings.filter.is_multiple}
                            dropdownClass={`bg-white text-black`}
                            enableDecrypt={settings.filter.encrypted}
                            placeholder={`By ${Commons.convertUnderscoreToSpaceString(data.name)}`}
                            dropdownListClass={`flex w-full text-black hover:bg-gray-200`}
                            className={`flex w-full dark:text-white text-sm text-gray-900 border-b-0 border-gray-300 py-2.5 bg-transparent outline-none focus:outline-none`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  {this.props.settings.handleOnClose &&
                    <div className="absolute right-0 -top-2 cursor-pointer" onClick={this.props.settings.handleOnClose}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                      </svg>
                    </div>
                  }
                </div>
                <div className="mt-4 sm:flex sm:flex-row-reverse">
                  {settings.btnPosition &&
                    <span className="flex w-full rounded-md sm:ml-3 sm:w-auto">
                      <button type="button" onClick={() => this.handleClose(true)}
                        className="uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm">
                        {settings.btnPosition}
                      </button>
                    </span>
                  }
                  {settings.btnNegative &&
                    <span className="mt-3 flex w-full rounded-md sm:mt-0 sm:w-auto">
                      <button type="button" onClick={() => this.handleClose(false)}
                        className="uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-black dark:text-white focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm">
                        {settings.btnNegative}
                      </button>
                    </span>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return ReactDOM.createPortal(modalComponent, this.modalContainer);
  }
}

interface DataTableProps {
  settings: {
    default_sorted_column: string;
    header: {
      title: string;
      class: string;
      hint: string;
    };
    deleteinfo: {
      name: string;
      id: string;
    };
    
    request_url: string;
    handleOnViewClick: (user: any) => void;
    handleOnClickExtra: (user: any, name: string) => void;
    image?: {
        placeholder?: string;
        rounded?: boolean;
    };
    read_more_limit?: number;
    extra_handle?: Array<{ name: string; icon: React.ReactNode }>;
    headers: any[];
    columns: string[];
    table_data?: { name: string; class: string }[];
    filter?: {
      title: string;
      data: { name: string; data: string; defaults?: { [key: string]: string } }[];
    };
    url: string;
    handleEdit: (user: any) => void;
  };
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

  constructor(props: DataTableProps) {
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

    this.handleScroll = this.handleScroll.bind(this);
  }

  async componentDidMount() {
    if (this.props.onRef)
      this.props.onRef(this);

    let custom_settings = this.state.custom_settings;
    custom_settings['sorted_column'] = this.props.settings.default_sorted_column;
    this.setState({ custom_settings, settings: this.props.settings }, this.fetchEntities);
  }

  componentDidUpdate = async (_prevProps: DataTableProps, _prevState: DataTableState) => {
    try {
      
      const { settings } = this.props;
      if (settings.filter && !this.filterloaded && Array.isArray(settings.filter.data) && settings.filter.data.length > 0) {
        const newFilters = { ...settings.filter };
        this.setState({ filters: newFilters });
        this.filterloaded = true;
      }
    } catch (e) {
      console.error(e);
    }
  }
  

  handleScroll(event: React.UIEvent<HTMLDivElement>) {
    const div = event.target as HTMLDivElement;
    if (div.scrollTop + div.clientHeight >= (div.scrollHeight - 10)) {
      this.loadNextPage();
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
      var error = this.state.error;
      var input = this.state.input;
      input['is_searching'] = false;
      error["state"] = true;
      error["message"] = (Commons.isEmptyOrNull(message)) ? CommonState.ERROR_MESSAGE : message;
      error["type"] = CommonState.ERROR;
      error["color"] = "red";
      error["retry"] = retry
      this.setState({ isLoading: false, error, input });
    } catch (e) {
      console.error(e);
    }
  }

  async fetchEntities() {
    try {
      let formdata: string[] = [];
      let filtered_data = "";
      if (this.state.filters.search !== undefined && this.state.filters.search !== null) {
        if (Object.entries(this.state.filters.search).length > 0) {
          Object.entries(this.state.filters.search).map(([k, v]) => (
            !Commons.isEmptyOrNull(v.id) ? formdata.push(`${k}=${v.id}`) : null
          ));
          filtered_data = `&${formdata.join("&")}`;
        }
      }

      let entities = this.state.entities;
      let fetchUrl = `${this.props.settings.url}/?page=${this.state.custom_settings.current_page}&column=${this.state.custom_settings.sorted_column}&order=${this.state.custom_settings.order}&per_page=${this.state.entities.meta.per_page}&search=${this.search}${filtered_data}`;
      axios.get(fetchUrl, {
        headers: {
          "X-CSRFToken": `${DesmyAuth.getCookie('csrftoken')}`,
          "Authorization": `Token ${DesmyAuth.get(CommonState.ACCESS_TOKEN)}`
        }
      }).then(response => {
        let data = response.data;
        if (data.success) {
          entities.data.length = 0;
          if (this.hasClear) {
            this.handleClear();
          }
          this.dataCollection = this.dataCollection.concat(response.data.data.data);
          this.hasClear = false;
          entities.meta = response.data.data.meta;
          this.setState({ isLoading: false, entities }, this.initialChunck);
        } else {
          this.hasLoadLastData = true;
          this.handleError(data.message,false);
        }
      }).catch(_e => {
        this.handleError();
      });
    } catch (_e) {
      this.handleError();
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
    return this.state.settings.headers.map((column, index) => {
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

  handleClear = () => {
    let input = this.state.input
    let entities = this.state.entities

    var error = this.state.error
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
    let custom_settings = this.state.custom_settings;
    custom_settings['current_page'] = 1;
    this.handleClear();
    this.setState({ custom_settings }, this.fetchEntities);
  }

  handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    let input = this.state.input;
    if (event.key === 'Enter' || event.keyCode === 13) {
      if (!Commons.isEmptyOrNull(input.search) && input.search.length > 2) {
        input['is_searching'] = true;
        this.search = input.search;
        this.setState({ input }, this.clearFetchEntities);
      }
    }
  }

  searchFilter = async (filters: { search: { [key: string]: { id: string; name: string } }; data: { name: string; data: string; defaults?: { [key: string]: string } }[] }) => {
    let input = this.state.input;
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
  
  loadNextPage = () => {
    try {
      if (!this.isLoading) {
          let custom_settings = this.state.custom_settings;
          let next_page = this.state.entities.meta.next_page;
          if (!Commons.isEmptyOrNull(next_page) && this.current_page !== next_page) {
              custom_settings['current_page'] = next_page ?? 1; // Provide a default value if next_page is null
              this.current_page = next_page ?? 1; // Provide a default value if next_page is null
              this.setState({ isLoading: true, custom_settings }, () => { this.fetchEntities(); });
          }
      }
    } catch (e) {
        // Handle any errors here
    }
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
        this.handleSearhing();
      }
     })
    } catch (e) {
      console.error(e);
    }
  }
  
  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    try {
      if ((e.key === 'Enter') && !Commons.isEmptyOrNull(this.search)) {
        this.handleSearhing();
      }
    } catch (e) {
      console.error(e);
    }
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
  renderChunk(): void {
    try {
      const headers = this.state.settings.headers;
      const currentCondition = (this.currentIndex + this.chunkSize > this.dataCollection.length) ? this.dataCollection.length : this.currentIndex + this.chunkSize;
  
      for (let i = this.currentIndex; i < currentCondition; i++) {
        const user = this.dataCollection[i];
        let bg = (this.state.selected === i) ? ' bg-gray-300 dark:bg-darkPrimary' : (i % 2 === 0) ? " dark:bg-[#1c1c1c] bg-[#f3f4f6] " : ' bg-inherit';
  
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
                    handleEdit={() => this.props.settings.handleEdit(user)}
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
    } catch (e) {
      console.error(e);
    }
  }
  
  handleSearhing(){
    let custom_settings = this.state.custom_settings
    let input = this.state.input
    custom_settings['current_page'] = 1
    input['is_searching']=true
    this.hasClear=true
    this.setState({ custom_settings,input}, () => {this.fetchEntities()});
  }
  removeFilterByName = (data: string): void => {
    try {
      const filter = { ...this.state.filters };
      const newData = { ...this.state.filters.search };
      delete newData[data];
      filter.search = newData;
  
      const updatedFilters = this.state.filterhead.filter(filter => filter.name !== data);
  
      const updatedData = this.state.filters.data.map(item => {
        if (item.name === data) {
          const { defaults, ...statusWithoutDefaults } = item;
          return statusWithoutDefaults;
        }
        return item;
      });
  
      filter.data = updatedData;
      this.handleClear();
      this.setState({ filterhead: updatedFilters, filters: filter }, this.fetchEntities);
    } catch (e) {
      console.error(e);
    }
  }
  

  handleFiltered = (): void => {
    const { settings: datatableSettings } = this.props;
    const { filters } = this.state;

    const handleClose = (state: { status: boolean; filters: any }): void => {
      if (state.status) {
        const updatedFilters = { ...filters };
        const filterheaddata: { name: string; data: string }[] = [];
  
        updatedFilters.search = state.filters;
  
        Object.entries(state.filters).map(([key, value]: [string, any]) => {
          filterheaddata.push({ name: key, data: value.name });
        });
  
        updatedFilters.data = filters.data.map(entry => {
          const data_value = state.filters[entry.name];
          return {
            name: entry.name,
            data: entry.data,
            defaults: data_value !== undefined ? data_value : {}
          };
        });
  
        this.handleClear();
        this.setState({ filterhead: filterheaddata, filters: updatedFilters }, this.fetchEntities);
      }
      
      this.setState({ dtablemodal: null, hasRequest: false });
    };
  
    const datatableSettingsCopy = {
      ...datatableSettings,
      filter: {
        ...datatableSettings.filter,
        data: this.state.filters.data
      }
    };
  
    const modalSettings: any = {
      title: datatableSettingsCopy.filter?.title,
      type: CommonState.NOTICE,
      datalist: this.state.filters,
      btnPosition: 'Continue',
      btnNegative: 'Cancel'
    };
  
    const dtablemodal: React.ReactNode = <DatatableModalHandler settings={modalSettings} onClose={handleClose} />;
    this.setState({ dtablemodal });
  };
  handleRetry=()=>{
    try{
      this.handleClear()
      let custom_settings = this.state.custom_settings
      custom_settings['current_page'] = 1
      this.setState({isLoading:true,error:{},custom_settings},this.fetchEntities)
    }catch(e){
    }
    
  }
  handleHint=()=>{
    try{
      if(this.state.settings.header.hint){
          return this.state.settings.header.hint +" | Loaded "+this.state.entities.meta.total
      }else{
        return (!this.state.error.state) ? "Loaded "+this.state.entities.meta.total+" data":"";
      }
    }catch(e){
      return (!this.state.error.state) ? "Loaded 0 data":"";
    }
  }
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
  handleEdit=(user: any)=>{
    this.props.settings.handleEdit(user)
  }
  render() {
    const { isFocused, searchText } = this.state;
    const isExpanded = isFocused && searchText !== '';
    return (
      <>
        {this.state.dtablemodal}
        <div className={`flex flex-col w-full`}>
              <div className='flex flex-col w-full mb-5'>
                  <header className="flex w-full flex-col lg:flex-row justify-start lg:justify-between items-center space-x-6">
                    <div className="flex flex-col w-full ">
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
              <div className={`scrollable_table flex flex-col min-h-[200px] ${(this.renderedSettings.length > 10) ? `h-[80vh]`:`h-auto`} overflow-auto  scrollbar-width`} onScroll={this.handleScroll}>
                <div className='flex flex-col '>
                <div>
                  {
                    (this.state.filterhead.length > 0) ? <div className='flex w-full overflow-x-auto mb-2 space-x-4'>
                      {
                        this.state.filterhead.map((data,i)=>{
                          return (!Commons.isEmptyOrNull(data.data)) ? <div key={`flter=${i}`} className='flex flex-shrink-0 text-sm relative pl-4 pr-6 py-2 rounded-none border-[1px] border-gray-200 bg-gray-50'>
                              <div className='flex mr-2'>{Commons.capitalizeEachWord(Commons.convertUnderscoreToSpaceString(data.name))}:</div>
                              <div className='flex font-poppinsSemiBold'>{data.data}</div>
                              <svg viewBox="0 0 512 512" fill="currentColor" className='absolute right-1 top-2 bottom-1 cursor-pointer w-4 h-4 2xl:w-5 2xl:h-5' onClick={()=>this.removeFilterByName(data.name)}>
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144M368 144L144 368"/>
                              </svg>
                          </div>
                          :null
                        })
                      }

                    </div> : null
                  }
                </div>
                <table>
                  <thead className='w-full'>
                    <tr className="text-sm">{ this.tableHeads() }</tr>
                  </thead>
                  <tbody>
                      { (!this.state.error.state) ? this.renderedSettings : null}
                  </tbody> 
                </table>
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

export {DesmyDataTable};
