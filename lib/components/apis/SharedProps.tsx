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

export interface DesmyDataTableSettingsProps{
    default_sorted_column: string;
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
    filter?: {
      title: string;
      data: { name: string; data: string; defaults?: { [key: string]: string } }[];
    };
    url?: string;
    handleEdit?: (user: any,type?:string) => void;
  };


export interface DesmyDropdownItem {
  id: any | null;
  name: string | null;
  icon?: string | null;
  data?: any;
}
