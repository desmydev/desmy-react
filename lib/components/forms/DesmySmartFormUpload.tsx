import React, { Component } from "react";
import readXlsxFile from "read-excel-file";
import ReadTables from "./ReadTables";
import DesmyCommons from "../apis/DesmyCommons";
import {
  DataSetTableSettingsProps,
  DesmySmartFormUploadReadTable,
  DesmySmartFormUploadReadTableFilterColums,
} from "../apis/SharedProps";

interface DataItem {
  [key: string]: any;
}

interface Props {
  database: Array<{ id: string; readOnly: boolean }>;
  filter_column?: DesmySmartFormUploadReadTableFilterColums;
  settings: DataSetTableSettingsProps;
  reader: DesmySmartFormUploadReadTable;
}

interface State {
  hasRequest: boolean;
  cancelRequested: boolean;
  progress: number;
  totalRows: number;
  fileLoaded: boolean;
  partiallyLoaded: boolean;
  rows: any[] | null;
  headers: string[];
  data: {
    meta: {
      total: number;
      current_page: number;
      last_page: number;
      per_page: number;
      from: number;
      to: number;
      next_page: number | null;
    };
    data: DataItem[];
  };
}

class DesmySmartFormUpload extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasRequest: false,
      cancelRequested: false,
      fileLoaded: false,
      partiallyLoaded: false,
      progress: 0,
      totalRows: 0,
      rows: null,
      headers: [],
      data: {
        meta: {
          total: 0,
          current_page: 1,
          last_page: 1,
          per_page: 100,
          from: 1,
          to: 0,
          next_page: null,
        },
        data: [],
      },
    };
  }

  /** Handles Excel file upload and initial parsing */
  handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    this.setState({
      hasRequest: true,
      cancelRequested: false,
      progress: 0,
      fileLoaded: false,
      partiallyLoaded: false,
      totalRows: 0,
    });

    try {
      const rows = await readXlsxFile(file, {
        sheet: this.props.reader?.sheet_name ?? undefined,
      });

      if (!rows || rows.length === 0) {
        this.setState({ hasRequest: false });
        return;
      }

      const headers = rows[0].map((h) =>
        `${h}`.toLowerCase().replace(/\s+/g, "_")
      );
      const dataRows = rows.slice(1);

      this.setState(
        {
          totalRows: dataRows.length,
          rows: dataRows,
          headers,
          fileLoaded: true,
        },
        () => this.processChunkedRows(true)
      );
    } catch (error) {
      console.error("Excel read error:", error);
      this.setState({ hasRequest: false, fileLoaded: false });
    }
  };

  /** Cancels the current upload */
  cancelUpload = () => {
    this.setState({
      cancelRequested: true,
      hasRequest: false,
      partiallyLoaded: false,
    });
  };

  /** Reset everything after cancellation or completion */
  resetAll = () => {
    this.setState({
      cancelRequested: false,
      hasRequest: false,
      fileLoaded: false,
      partiallyLoaded: false,
      progress: 0,
      totalRows: 0,
      rows: null,
      headers: [],
      data: {
        ...this.state.data,
        data: [],
        meta: { ...this.state.data.meta, total: 0, to: 0 },
      },
    });
  };

  /** Processes Excel rows in batches to prevent UI freezing */
  processChunkedRows = (initial = false) => {
    const { database } = this.props;
    const { rows, headers } = this.state;
    if (!rows) return;

    const CHUNK_SIZE = 200;
    const INITIAL_LIMIT = 2000;
    let index = 0;
    let maxIndex = initial ? Math.min(INITIAL_LIMIT, rows.length) : rows.length;

    const processChunk = () => {
      // Check for cancel
      if (this.state.cancelRequested) {
        this.resetAll();
        return;
      }

      const end = Math.min(index + CHUNK_SIZE, maxIndex);
      const chunk = rows.slice(index, end);

      const chunkData = chunk.map((row) => {
        const rowData: Record<string, any> = {};
        headers.forEach((header, i) => {
          if (database.some((c) => c.id === header)) {
            rowData[header] = DesmyCommons.toStringDefault(row[i], "");
          }
        });
        return rowData;
      });

      this.setState((prev) => {
        const newLength = prev.data.data.length + chunkData.length;
        return {
          data: {
            ...prev.data,
            data: [...prev.data.data, ...chunkData],
            meta: {
              ...prev.data.meta,
              total: newLength,
              to: newLength,
            },
          },
          progress: Math.min((end / rows.length) * 100, 100),
        };
      });

      index = end;
      if (end < maxIndex) {
        if ("requestIdleCallback" in window) {
          (window as any).requestIdleCallback(processChunk);
        } else {
          setTimeout(processChunk, 5);
        }
      } else {
        this.setState({
          hasRequest: false,
          partiallyLoaded: maxIndex < rows.length,
        });
      }
    };

    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(processChunk);
    } else {
      setTimeout(processChunk, 0);
    }
  };

  /** Load remaining unprocessed rows */
  handleLoadRemaining = () => {
    this.setState(
      { hasRequest: true, partiallyLoaded: false },
      () => this.processChunkedRows(false)
    );
  };

  render() {
    const { settings, reader, database } = this.props;
    const {
      data,
      progress,
      fileLoaded,
      partiallyLoaded,
      hasRequest,
      totalRows,
    } = this.state;

    // Map database columns dynamically
    const dbIds = database.map((c) => c.id);
    settings.headers = dbIds;
    settings.columns = dbIds;

    return (
      <div className="flex flex-col w-full overflow-auto font-poppinsRegular">
        {/* Step 1: Upload UI / Spinner */}
        {!fileLoaded && !hasRequest ? (
          <div className="w-full my-16 space-y-4">
            <div className="bg-gray-200 dark:bg-darkPrimary rounded-lg w-full max-w-lg mx-auto shadow-sm h-60 cursor-pointer relative overflow-hidden group">
              <input
                type="file"
                disabled={hasRequest}
                className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer"
                accept=".xls,.xlsx"
                onChange={this.handleFileUpload}
              />
              <div className="flex-col text-gray-500 dark:text-gray-400 flex h-full justify-center items-center">
                <div className="w-16 h-16 mb-2">
                  <img
                    src={reader?.ui?.icon ?? "./excel.png"}
                    alt="excel"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-xs md:text-sm">
                  {reader?.ui?.label ?? `[Click to Upload Excel]`}
                </div>
              </div>
            </div>
            {reader.template_url && (
              <div className="w-full max-w-lg mx-auto flex justify-end">
                <a
                  href={reader.template_url}
                  target="_blank"
                  className="uppercase text-xs bg-green-700 text-white px-4 py-2.5 rounded-full"
                >
                  Download Template
                </a>
              </div>
            )}
          </div>
        ) : hasRequest && (
          <div className="flex flex-col items-center w-full mb-6 space-y-3 mt-10">
            {/* Spinner */}
            <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>

            {/* Progress Bar */}
            <div className="flex flex-col w-full bg-gray-300 rounded-full h-2 dark:bg-gray-700 overflow-hidden max-w-lg">
              <div
                className="bg-green-600 h-2 transition-all ease-in-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="text-xs text-gray-700 dark:text-white">
              Reading file... {Math.round(progress)}%
            </span>

            {totalRows > 0 && (
              <span className="text-[11px] text-gray-500 dark:text-gray-400">
                {data.data.length}/{totalRows} rows processed
              </span>
            )}

            {/* Cancel Button (visible after 10% progress) */}
            {progress >= 10 && (
              <button
                onClick={this.cancelUpload}
                className="mt-2 px-4 py-1.5 bg-red-600 text-white rounded-full text-xs hover:bg-red-700 transition"
              >
                Cancel Upload
              </button>
            )}
          </div>
        )}

        {/* Step 2: Table Display */}
        {fileLoaded && (
          <>
            <ReadTables headers={dbIds} datalist={data} {...this.props} />

            {/* Step 3: Load Remaining Button */}
            {partiallyLoaded && !hasRequest && (
              <div className="flex justify-center my-6">
                <button
                  onClick={this.handleLoadRemaining}
                  className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all text-sm"
                >
                  Load Remaining Data
                </button>
              </div>
            )}
          </>
        )}
      </div>
    );
  }
}

export { DesmySmartFormUpload };
