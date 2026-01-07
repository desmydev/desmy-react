import React, { Component } from "react";
import readXlsxFile from "read-excel-file";
import ReadTables from "./ReadTables";
import DesmyCommons from "../apis/DesmyCommons";

import {
  DataSetTableSettingsProps,
  DesmySmartFormUploadReadTable,
  DesmySmartFormUploadReadTableFilterColums,
  DesmySmartFormUploadExtraField,
} from "../apis/SharedProps";

import { DesmyState } from "../apis/DesmyState";

import { DesmyDatePicker } from "../datepicker/DesmyDatePicker";
import { DesmyTextInput } from "../input/DesmyTextInput";
import { DesmyDropdown } from "../dropdown/DesmyDropdown";
import { DesmyFilePicker } from "../filepicker/DesmyFilePicker";
import { DesmyButton } from "../button/DesmyButton";

interface DataItem {
  [key: string]: any;
}

interface Props {
  database: Array<{ id: string; readOnly: boolean }>;
  filter_column?: DesmySmartFormUploadReadTableFilterColums;
  settings: DataSetTableSettingsProps;
  reader: DesmySmartFormUploadReadTable;
  onClose?: () => void;
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

  showForm: boolean;
  prerequestPayload: Record<string, any>;
}

class DesmySmartFormUpload extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasRequest: false,
      cancelRequested: false,
      progress: 0,
      totalRows: 0,
      fileLoaded: false,
      partiallyLoaded: false,
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
      showForm: !!props.reader?.prerequest,
      prerequestPayload: {},
    };
  }

  /** Store prerequest values */
  updatePrerequestField = (key: string, value: any) => {
    this.setState((prev) => ({
      prerequestPayload: { ...prev.prerequestPayload, [key]: value },
    }));
  };

  /** Validate required fields */
  validatePrerequest = (): boolean => {
    const { reader } = this.props;
    const { prerequestPayload } = this.state;

    if (!reader.prerequest) return true;

    const missing = reader.prerequest.extrafields.filter(
      (f) =>
        f.required &&
        (prerequestPayload[f.name] === undefined ||
          prerequestPayload[f.name] === null ||
          prerequestPayload[f.name] === "")
    );

    if (missing.length > 0) {
      alert("Please fill required fields: " + missing.map((m) => m.label).join(", "));
      return false;
    }

    return true;
  };

  /** Continue from prerequest form */
  handlePrerequestContinue = () => {
    if (!this.validatePrerequest()) return;
    this.setState({ showForm: false });
  };

  /** Upload Excel file */
  handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    this.setState({
      hasRequest: true,
      progress: 0,
      fileLoaded: false,
      partiallyLoaded: false,
      totalRows: 0,
    });

    try {
      const rows = (await readXlsxFile(file, {
        sheet: this.props.reader.sheet_name,
      })) as any[][];

      if (!rows || rows.length === 0) {
        this.setState({ hasRequest: false });
        return;
      }

      const headers = rows[0].map((h) =>
        String(h).toLowerCase().replace(/\s+/g, "_")
      );

      this.setState(
        {
          headers,
          rows: rows.slice(1),
          totalRows: rows.length - 1,
          fileLoaded: true,
        },
        () => this.processChunkedRows(true)
      );
    } catch (err) {
      console.error("Read error:", err);
      this.setState({ hasRequest: false });
    }
  };

  /** Process rows gradually */
  processChunkedRows = (initial = false) => {
    const { database } = this.props;
    const { rows, headers } = this.state;
    if (!rows) return;

    const CHUNK = 200;
    const LIMIT = initial ? 2000 : rows.length;

    let idx = 0;

    const next = () => {
      if (this.state.cancelRequested) return this.resetAll();

      const end = Math.min(idx + CHUNK, LIMIT);
      const slice = rows.slice(idx, end);

      const mapped = slice.map((r) => {
        const obj: any = {};
        headers.forEach((h, i) => {
          if (database.some((d) => d.id === h)) {
            obj[h] = DesmyCommons.toStringDefault(r[i], "");
          }
        });
        return obj;
      });

      this.setState((prev) => {
        const total = prev.data.data.length + mapped.length;
        return {
          data: {
            ...prev.data,
            data: [...prev.data.data, ...mapped],
            meta: { ...prev.data.meta, total, to: total },
          },
          progress: (end / rows.length) * 100,
        };
      });

      idx = end;

      if (end < LIMIT) return setTimeout(next, 5);

      this.setState({
        hasRequest: false,
        partiallyLoaded: LIMIT < rows.length,
      });
    };

    next();
  };

  resetAll = () => {
    this.setState({
      hasRequest: false,
      cancelRequested: false,
      fileLoaded: false,
      partiallyLoaded: false,
      progress: 0,
      rows: null,
      headers: [],
      data: { ...this.state.data, data: [], meta: { ...this.state.data.meta, total: 0 } },
      showForm: !!this.props.reader.prerequest,
      prerequestPayload: {},
    });
  };

  /** Render prerequest extra fields */
  renderExtraField = (f: DesmySmartFormUploadExtraField) => {
    const value = this.state.prerequestPayload[f.name];

    switch (f.type) {
      /** TEXT */
      case "TEXT":
        return (
          <DesmyTextInput
            label={f.label}
            defaultValue={value}
            onChange={(val: string) => this.updatePrerequestField(f.name, val)}
          />
        );

      /** TEXTAREA */
      case "TEXTAREA":
        return (
          <DesmyTextInput
            label={f.label}
            type={DesmyState.TEXTAREA}
            defaultValue={value}
            onChange={(val: string) => this.updatePrerequestField(f.name, val)}
          />
        );

      /** DATE */
      case "DATE":
        return (
          <DesmyDatePicker
            label={f.label}
            defaultValue={value}
            useRange={false}
            onSelected={(val: any) => this.updatePrerequestField(f.name, val)}
          />
        );

      /** DATE RANGE */
      case "DATE_RANGE":
        return (
          <DesmyDatePicker
            label={f.label}
            defaultValue={value}
            useRange
            onSelected={(val: any) => this.updatePrerequestField(f.name, val)}
          />
        );

      /** DATETIME */
      case "DATETIME":
        return (
          <DesmyDatePicker
            label={f.label}
            defaultValue={value}
            useRange={false}
            onSelected={(val: any) => this.updatePrerequestField(f.name, val)}
          />
        );

      /** 🔥 PARENT + CHILD DROPDOWN */
      case "DROPDOWN":
        return this.renderDropdownWithChild(f);

      /** FILE UPLOAD */
      case "FILE":
        return (
          <DesmyFilePicker
            className="w-full"
            image={{
              url: "",
              title: f.label,
              accept: f.accept ?? "image/*,.pdf",
              type: f.type,
              placeholder: f.placeholder,
              hint: f.hint ?? "Upload a file...",
              onSelected: (file: File) => {
                this.updatePrerequestField(f.name, file);
              },
            }}
          />
        );

      default:
        return null;
    }
  };

  /** -----------------------------------------
   * 🔥 CHILD DROPDOWN SUPPORT (clean + safe)
   * ----------------------------------------*/
  renderDropdownWithChild = (f: DesmySmartFormUploadExtraField) => {
    const parentValue = this.state.prerequestPayload[f.name];
    const child = f.child;

    return (
      <>
        {/* Parent Dropdown */}
        <DesmyDropdown
          placeholder={f.label}
          defaultValue={parentValue}
          data={f.data}
          request={
            f.url
              ? { url: f.url, token: f.token }
              : undefined
          }
          handleChange={(item: any) => {
            const selected = Array.isArray(item) ? item[0] : item;
            const parentId = selected?.id;

            this.updatePrerequestField(f.name, parentId);

            // If no child field, stop here
            if (!child) return;

            const childField = child;

            // Build dynamic child URL
            const childUrl = childField.url.replace("<parent_id>", parentId);

            // Clear child selection
            this.updatePrerequestField(childField.name, null);

            // Fetch child dropdown data
            fetch(childUrl, {
              headers: {
                Authorization: `Bearer ${childField.token ?? ""}`,
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((result) => {
                const list = result?.data ?? result;
                this.setState((prev) => ({
                  prerequestPayload: {
                    ...prev.prerequestPayload,
                    [childField.name + "_list"]: list,
                  },
                }));
              })
              .catch((err) =>
                console.error("Failed to load child dropdown:", err)
              );
          }}
        />

        {/* Child Dropdown */}
        {child && (
          <div className="mt-4">
            <DesmyDropdown
              placeholder={child.label}
              defaultValue={this.state.prerequestPayload[child.name]}
              data={this.state.prerequestPayload[child.name + "_list"]}
              handleChange={(item: any) => {
                const selected = Array.isArray(item) ? item[0] : item;
                this.updatePrerequestField(child.name, selected?.id ?? selected);
              }}
            />
          </div>
        )}
      </>
    );
  };

  /** Cancel Upload */
  cancelUpload = () => {
    this.setState({
      cancelRequested: true,
      hasRequest: false,
      partiallyLoaded: false,
    });
  };

  /** Load remaining rows */
  handleLoadRemaining = () => {
    this.setState(
      { hasRequest: true, partiallyLoaded: false },
      () => this.processChunkedRows(false)
    );
  };

  render() {
    const { settings, reader, database,onClose } = this.props;
    const { showForm, fileLoaded, hasRequest, partiallyLoaded, totalRows, progress, data } =
      this.state;

    const dbIds = database.map((d) => d.id);
    settings.headers = dbIds;
    settings.columns = dbIds;

    return (
      <div className="relative w-full font-poppinsRegular">

        {/* STEP 1 — PREREQUEST FORM */}
        {showForm && reader.prerequest && (
          <div className="max-w-lg mx-auto mt-10">
            <div className="flex flex-col h-full w-full space-y-7">

              {reader.prerequest.extrafields.map((f, i) => (
                <div key={i}>{this.renderExtraField(f)}</div>
              ))}

              <div className="flex justify-end mt-5">
                <DesmyButton
                  onClick={this.handlePrerequestContinue}
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline-block lg:mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  }
                  hasRequest={this.state.hasRequest}
                  label="Continue"
                  label_request="Please wait..."
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2 — UPLOAD EXCEL */}
        {!showForm && !fileLoaded && !hasRequest && (
          <div className="w-full my-16 space-y-4">
            <div className="bg-gray-200 dark:bg-darkPrimary rounded-lg w-full max-w-lg mx-auto shadow-sm h-60 cursor-pointer relative overflow-hidden group">
              <input
                type="file"
                disabled={hasRequest}
                className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer"
                accept=".xls,.xlsx"
                onChange={this.handleFileUpload}
              />

              <div className="flex flex-col text-gray-500 dark:text-gray-400 justify-center items-center h-full">
                <img
                  src={reader?.ui?.icon ?? "./excel.png"}
                  className="w-16 h-16 mb-2"
                  alt="excel"
                />
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
        )}

        {/* STEP 2B — PROGRESS */}
        {hasRequest && (
          <div className="flex flex-col items-center w-full mb-6 space-y-3 mt-10">
            <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>

            <div className="w-full max-w-lg bg-gray-300 rounded-full h-2 overflow-hidden">
              <div className="bg-green-600 h-2 transition-all" style={{ width: `${progress}%` }} />
            </div>

            <span className="text-xs text-gray-700 dark:text-white">
              Reading file... {Math.round(progress)}%
            </span>

            {totalRows > 0 && (
              <span className="text-xs text-gray-500">
                {data.data.length}/{totalRows} rows processed
              </span>
            )}

            {progress >= 10 && (
              <button
                onClick={this.cancelUpload}
                className="px-4 py-1.5 bg-red-600 text-white rounded-full text-xs"
              >
                Cancel Upload
              </button>
            )}
          </div>
        )}

        {/* STEP 3 — PREVIEW TABLE */}
        {fileLoaded && !hasRequest && (
          <ReadTables
            headers={dbIds}
            datalist={data}
            reader={reader}
            settings={settings}
            prerequestPayload={this.state.prerequestPayload}
            onClose={onClose}
          />
        )}

        {/* LOAD REMAINING */}
        {fileLoaded && partiallyLoaded && !hasRequest && (
          <div className="flex justify-center my-6">
            <button
              onClick={this.handleLoadRemaining}
              className="px-6 py-3 bg-blue-600 text-white rounded-full text-sm"
            >
              Load Remaining Data
            </button>
          </div>
        )}
      </div>
    );
  }
}

export { DesmySmartFormUpload };
