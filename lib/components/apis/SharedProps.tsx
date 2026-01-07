import { ReactNode } from "react";


export interface DataSetTableSettingsProps{
    url?: string;
    default_sorted_column?: string;
    pagination?: {
      per_page: number;
    };
    search?: boolean;
    filter?: {
      title: string;
      data: {
          name: string;
          data: string;
          defaults?: {
              [key: string]: string;
          };
      }[];
  };
    header?: {
      title?: string;
      class?: string;
      hint?: string;
      search?:boolean
    };
    server_request?:{
      enable?: boolean
    },
    deleteinfo: {
      id: string;
    };
    headers?: string[]; 
    columns?: string[];
    table_data?: any[];
}
export interface DesmyDataTableSettingsFilterProps {
  title?: string;
  url?:string
  data?: {
      name: string;
      data: string;
      defaults?: {
          [key: string]: string;
      };
  }[];
};
export interface ExtraAction {
  name?: string;
  url: string;
  icon?: React.ReactNode;
  className?: string;
  options?: {
    confirm?: boolean;
    redirect?: boolean;
    formats?: string[];
    successMessage?: string;
    confirmationMessage?: string;
  };
}
export interface DesmyDataTableSettingsProps{
    default_sorted_column: string;
    order?: 'asc' | 'desc'; 
    onURLClick?: (url :any)=>void,
    header: {
      title?: string;
      class?: string;
      hint?: string;
    };
    deleteinfo?: {
      name: string;
      id: string;
    };
    style?:{maxlines?:number}
    breadcrumb?: { name: string; url: string }[];
    request_url?: string;
    handleOnViewClick?: (user: any) => void;
    handleOnClickExtra?: (user: any, name: string) => void;
    image?: {
        placeholder?: string;
        rounded?: boolean;
    };
    read_more_limit?: number;
    extra_handle?: Array<{ name: string; icon: React.ReactNode }>;
    headers: string[];
    columns: string[];
    table_data?: { name: string; class: string }[];
    filter?: DesmyDataTableSettingsFilterProps,
    url?: string;
    handleEdit?: (user: any,type?:string) => void;
    extraActions?: ExtraAction[];

  };

export interface DesmyCustomDataTableProps {
  url: string;
  token?:string
  default_sorted_column: string;
  pagination?: {
    per_page: number;
  };
  search?: boolean;
  filter?: {
    title: string;
    data: {
        name: string;
        data: string;
        defaults?: {
            [key: string]: string;
        };
    }[];
  };
  header?: {
    title?: string;
    class?: string;
    hint?: string;
  };
  deleteinfo: {
    id: string;
  };
  headers: any[]; // Adjust these types as needed
  columns: any[];
  table_data: any[];
}
export interface DesmyDropdownItem {
  id: any | null;
  name: string | null;
  icon?: string | null;
  data?: any;
  hint?:any
}


export interface DesmySideBarItemData {
  url?: string;
  label: string;
  has_permission?: boolean;
  items?: DesmySideBarItemData[]; // Nested items
  onClick?:(data?:any)=>void
}

export interface DesmySideBarItemProps {
  location?: { pathname: string };
  exact?: boolean;
  className?: string;
  pattern?: string | string[]; // Accept string or array of strings
  name: string;
  items?: DesmySideBarItemData[];
  icon?: ReactNode;
  url?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  navigate?: (url?: string) => void;
}
export interface DesmyModalHandlerState{
  status: boolean;
  option_data: any;
};
export interface WizardProps{
  className?: string;
  defaultStep?: number;
  loading?: boolean;
  wizardHeader: (step: number) => ReactNode;
  wizardFooter: (step: number) => ReactNode;
  children: ReactNode[];
};

export interface DatePickerProps {
  defaultValue?: { startDate?: Date | string | null; endDate?: Date  |string | null} | null | undefined;
  minDate?: Date;
  maxDate?: Date;
  displayFormat?: string;
  label:string;
  disableWeekends?:boolean
  disabled?:boolean
  useRange?: boolean;
  disabledDates?: string[]; 
  className?:string,
  onSelected?: (dates: { startDate?: string; endDate?: string }) => void;
  withTime?: boolean;
}

export interface DesmySmartFormUploadReadTable{
  sheet_name : string,
  url?:string,
  complete_url?:string,
  title?:string,
  token?:string,
  template_url?:string,
  key_name?: string,
  ui:{
    label?:string,
    icon?:string
  }
  prerequest?: {
    url?: string;                
    token?: string;
    extrafields: DesmySmartFormUploadExtraField[];
  };
}
export interface DesmySmartFormUploadExtraField {
  name: string;
  label: string;
  type: "TEXT" | "DROPDOWN" | "FILE" | "DATE" | "DATETIME" | "DATE_RANGE" | "NUMBER" | "TEXTAREA";
  accept?: string;        // e.g. "image/*"
  placeholder?: string;   // optional file placeholder icon/image
  hint?: string;    
  required?: boolean;
  child?: DesmySmartFormUploadExtraField & {
    url: string; // dynamic URL with <parent_id>
  };
  // Dropdown support
  url?: string;         // endpoint to fetch dropdown
  token?: string;       // auth token
  data?: any[];         // static dropdown options (if any)
}

export interface DesmySmartFormUploadReadTableFilterColums {
  parent?: string;
  custom?: string;
  unique_fields?: string[];
  
};

export interface DesmyModalHandlerSettingsProps {
  title?: string;
  hint?: string;
  zIndex?: number;
  btnPosition?: string;
  btnNegative?: string;
  type?: string;
  loading?: boolean;
  forceLoading?: boolean;
  loadinghint?: string;
  showDateRange?: boolean;
  date?: {
    show: boolean;
    minDate: Date | null;
    title: string;
    value: {
      startDate?: Date | null; // Adjust type to accept null
      endDate?: Date | null; // Adjust type to accept null
    };
  };
  time?: {
    show: boolean;
    value: string;
    title: string;
  };
  showDateRangeTitle?: string;
  datalist?: {
    title?: string;
    url? : String;
    data?: any[]; // Define a more specific type based on the actual data structure
    default_value?: string;
    onchange?: string;
    is_multiple?: boolean;
    encrypted?: boolean;
  };
  inputFieldLabel?: string;
  handleOnClose?: boolean;
}
export interface DesmyFilterItem {
  id: string;
  name?: string;  
  label?: string; 
  value?: any;
}
