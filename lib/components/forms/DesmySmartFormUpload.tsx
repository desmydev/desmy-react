import React, { Component, createRef } from 'react';
import readXlsxFile from 'read-excel-file';
import ReadTables from './ReadTables';
import DesmyCommons from '../apis/DesmyCommons';
import { DataSetTableSettingsProps, DesmySmartFormUploadReadTable, DesmySmartFormUploadReadTableFilterColums } from '../apis/SharedProps';
// import DesmyCommons from '../apis/DesmyCommons';

interface DataItem {
  [key: string]: any;
}

interface Props {
  database: Array<{ id: string, readOnly: boolean }>;
  filter_column?: DesmySmartFormUploadReadTableFilterColums,
  [key: string]: any;
  settings: DataSetTableSettingsProps;
  reader:DesmySmartFormUploadReadTable
}

interface State {
  hasRequest: boolean;
  filedata: any[];
  data: {
    meta: {
      count: number;
      current_page: number;
      next_page: number | null;
      total: number;
      from: number;
      to: number;
      last_page: number;
      per_page: number;
    };
    links: {
      first: string | null;
      last: string | null;
    };
    next: string | null;
    previous: string | null;
    count: number;
    data: DataItem[];
  };
  input: { [key: string]: any };
}
type Row = any[]

class DesmySmartFormUpload extends Component<Props, State> {
  wizardActionRef: React.RefObject<any>;

  constructor(props: Props) {
    super(props);
    this.wizardActionRef = createRef();
    this.state = {
      hasRequest: false,
      filedata: [],
      data: {
        meta: {
          count: 0,
          current_page: 1,
          next_page: null,
          total: 0,
          from: 1,
          to: 0,
          last_page: 1,
          per_page: 100,
        },
        links: {
          first: null,
          last: null,
        },
        next: null,
        previous: null,
        count: 0,
        data: [],
      },
      input: {},
    };
  }

  handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { database } = this.props;
      const file = event.target.files?.[0];
  
      if (!file) return;
  
      readXlsxFile(file, { sheet: this.props.reader.sheet_name }).then((rows: Row[]) => {
        if (rows.length === 0) return;
        const headers = rows[0].map((header) =>
          `${header}`.toLowerCase().replace(/\s+/g, '_')
        );
        rows = rows.slice(1);
  
        const parentUnitIndex = headers.indexOf(this.props.filter_column?.parent ?? "");
        const uniqueFieldIndices = this.props.filter_column?.unique_fields
          ? this.props.filter_column.unique_fields.map((field) =>
              headers.indexOf(field)
            )
          : [];
  
        const parentData: { [key: string]: any } = {};
  
        if (parentUnitIndex !== -1 && uniqueFieldIndices.some((index) => index !== -1)) {
          rows.forEach((row) => {
            uniqueFieldIndices.forEach((uniqueFieldIndex) => {
              const uniqueFieldValue = DesmyCommons.toString(
                row[uniqueFieldIndex]
              ).toLowerCase();
              if (uniqueFieldValue) {
                parentData[uniqueFieldValue] = row;
              }
            });
          });
        }
  
        let chunkSize = 100;
        let startIndex = 0;
  
        const processChunk = async () => {
          const endIndex = Math.min(startIndex + chunkSize, rows.length);
          const currentChunk = rows.slice(startIndex, endIndex);
  
          const chunkData = currentChunk.map((row) => {
            const rowData: Record<string, any> = {};
            headers.forEach((header, index) => {
              const column = database.find((col) => col.id === header);
              if (column) {
                rowData[header] = DesmyCommons.toStringDefault(row[index], '');
              }
            });

            if (!DesmyCommons.isEmptyOrNull(rowData?.parent_unit)) {
              const parentCode = DesmyCommons.toStringDefault(
                row[parentUnitIndex],
                ''
              ).toLowerCase();
              const foundParent = parentData[parentCode];
  
              if (foundParent) {
                const parentObject: { [key: string]: any } = {};
                headers.forEach((header, index) => {
                  if (header !== this.props.filter_column?.parent) {
                    parentObject[header] = foundParent[index];
                  }
                });
                rowData[this.props.filter_column?.custom ?? ""] = JSON.stringify(
                  parentObject
                );
              }
            }
            if (uniqueFieldIndices.length > 0) {
              uniqueFieldIndices.forEach((uniqueFieldIndex) => {
                if (rowData[headers[uniqueFieldIndex]]) {
                  rowData.extra = `${rowData[headers[uniqueFieldIndex]]}`;
                }
              });
            }
            return rowData;
          });
  
          const newMeta = {
            ...this.state.data.meta,
            count: this.state.data.data.length + chunkData.length,
            total: this.state.data.data.length + chunkData.length,
            to: this.state.data.data.length + chunkData.length,
          };

          const dataset = {
            ...this.state.data,
            data: [...this.state.data.data, ...chunkData],
            meta: newMeta,
          };
          this.setState(
            {
              filedata: [...this.state.filedata, ...currentChunk],
              data: dataset,
            },
            () => {
              if (endIndex < rows.length) {
                startIndex = endIndex;
                setTimeout(processChunk, 0);
              }
            }
          );
        };
        processChunk();
      });
    } catch (e) {
      console.error(e);
    }
  };
  ;

  render() {
    const databaseIds = this.props.database.map((column) => column.id);
    this.props.settings.headers = databaseIds; this.props.settings.columns = databaseIds;

    return (
      <>
        <div className='flex flex-col w-full overflow-auto'>
          <div className='w-full font-poppinsRegular '>
            <div className='flex flex-col h-full w-full'>
              {this.state.data.data.length === 0 ? (
                <div className='w-full  my-16 space-y-4'>
                  <div className={`bg-gray-200 dark:bg-darkPrimary rounded-lg w-full max-w-lg  mx-auto shadow-sm h-60 cursor-pointer relative overflow-hidden group`}>
                    <input
                      type="file"
                      disabled={this.state.hasRequest}
                      className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer"
                      accept={`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel`}
                      onChange={this.handleFileUpload}
                    />
                    <div className='flex-col text-gray-500 dark:text-gray-400 flex h-full justify-center items-center'>
                      <div className='w-16 h-16 mb-2'>
                        <img
                          className={`object-center object-cover w-full h-full cursor-pointer m-auto`}
                          alt={`photo`}
                          src={this.props.reader?.ui?.icon  ?? `./excel.png`}
                        />
                      </div>
                      <div className='text-xs md:text-sm'>{this.props.reader?.ui?.label  ?? `[Drag and Drop or Click to Upload Excel]`}</div>
                    </div>
                  </div>
                  {
                    !(DesmyCommons.isEmptyOrNull(this.props.reader.template_url)) ? 
                      <div className={` w-full max-w-lg mx-auto`}>
                        <div className='flex w-full justify-end'>
                          <a href={`${this.props.reader.template_url}`} target='_blank' className='uppercase text-xs bg-green-700 text-white px-4 py-2.5 rounded-full cursor-pointer'>
                            Download Template
                          </a>
                        </div>
                      </div>
                    :null
                  }
                  
                </div>
              ) : (
                <div className='z-5'>
                  <ReadTables headers={databaseIds}  datalist={this.state.data} {...this.props} />
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { DesmySmartFormUpload };
