import { Component } from 'react';
import axios, { CancelTokenSource } from 'axios';
import DesmyAuth from '../apis/DesmyAuth';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

type ErrorStrategy = 'skip' | 'override';

interface UploadManagerProps {
  data: {
    datalist: Record<string, any>[];
    url: string;
    complete_url?: string | null;
    token: string;
    key_name?: string;
    title?: string;
    error_strategy?: ErrorStrategy;
  };
  onClose: () => void;
}

interface UploadManagerState {
  currentIndex: number;
  progress: number;
  uploading: boolean;
  error: boolean;
  errorMessage: string;
  cancelTokenSource: CancelTokenSource | null;
  errorData: Record<string, any>[];
  completed: boolean;

  exporting: boolean;
  exportingType: '' | 'excel' | 'csv';
  exportProgress: number;
  cancelExportFlag: boolean;

  showCheckmark: boolean;
}

export default class UploadManager extends Component<UploadManagerProps, UploadManagerState> {
  private retryCounts = new Map<number, number>();
  private networkRetryCounts = new Map<number, number>();

  constructor(props: UploadManagerProps) {
    super(props);
    this.state = {
      currentIndex: 0,
      progress: 0,
      uploading: false,
      error: false,
      errorMessage: '',
      cancelTokenSource: null,
      errorData: [],
      completed: false,

      exporting: false,
      exportingType: '',
      exportProgress: 0,
      cancelExportFlag: false,

      showCheckmark: false,
    };
  }

  componentDidMount() {
    this.startUpload();
  }

  componentWillUnmount() {
    this.state.cancelTokenSource?.cancel('Unmounting component');
  }

  /** ------------------------- UPLOAD FLOW ------------------------- **/

  startUpload = () => {
    this.setState({ uploading: true, error: false, errorMessage: '', completed: false, showCheckmark: false }, this.uploadNext);
  };

  uploadNext = async () => {
    const { data } = this.props;
    const dataList = data?.datalist;
    const { currentIndex } = this.state;

    if (currentIndex >= dataList.length) {
      if (!this.props.data?.complete_url) {
        this.finishUpload();
      } else {
        this.completeUpload();
      }
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(dataList[currentIndex]).forEach(([key, value]) => formData.append(key, value as any));

      const cancelTokenSource = axios.CancelToken.source();
      this.setState({ cancelTokenSource });

      axios
        .post(data?.url, formData, {
          headers: {
            'X-CSRFToken': `${DesmyAuth.getCookie('csrftoken')}`,
            Authorization: `Token ${data?.token}`,
          },
          cancelToken: cancelTokenSource.token,
        })
        .then((response) => {
          if (response.data.success) {
            const newIndex = currentIndex + 1;
            const newProgress = (newIndex / dataList.length) * 100;
            this.retryCounts.delete(currentIndex);
            this.networkRetryCounts.delete(currentIndex);
            this.setState({ currentIndex: newIndex, progress: newProgress, error: false }, this.uploadNext);
          } else {
            this.handleUploadError(response.data.message || 'Upload failed', dataList[currentIndex], false);
          }
        })
        .catch((err) => {
          if (!axios.isCancel(err)) {
            const isNetworkError = !err.response;
            const errorMessage = isNetworkError
              ? 'Network error — retrying...'
              : err?.response?.data?.message || 'Upload failed';
            this.handleUploadError(errorMessage, dataList[currentIndex], isNetworkError);
          }
        });
    } catch (err) {
      this.handleUploadError((err as Error).message, this.props.data?.datalist[currentIndex], true);
    }
  };

  private finishUpload = () => {
    this.setState({ uploading: false, completed: true, progress: 100 }, () => {
      setTimeout(() => this.setState({ showCheckmark: true }), 500);
    });
  };

  handleUploadError = (errorMessage: string, failedItem: Record<string, any>, isNetworkError: boolean) => {
    const { currentIndex } = this.state;
    const strategy = this.props.data?.error_strategy ?? 'skip';

    const retryCount = this.retryCounts.get(currentIndex) ?? 0;
    const networkRetryCount = this.networkRetryCounts.get(currentIndex) ?? 0;

    this.setState((prev) => ({
      errorData: [...prev.errorData, { ...failedItem, error: errorMessage }],
      error: true,
      errorMessage,
    }));

    if (isNetworkError && networkRetryCount < 2) {
      this.networkRetryCounts.set(currentIndex, networkRetryCount + 1);
      this.setState({ errorMessage: `Network error — retrying (${networkRetryCount + 1}/2)...` });
      setTimeout(() => this.uploadNext(), 2000);
      return;
    }

    if (!isNetworkError && strategy === 'override' && retryCount < 1) {
      this.retryCounts.set(currentIndex, retryCount + 1);
      this.setState({ errorMessage: 'Retrying failed upload (1/1)...' });
      setTimeout(() => this.uploadNext(), 1500);
      return;
    }

    const newIndex = currentIndex + 1;
    const newProgress = (newIndex / this.props.data.datalist.length) * 100;
    this.setState({ currentIndex: newIndex, progress: newProgress, error: false }, this.uploadNext);
  };

  completeUpload = async () => {
    const { data } = this.props;
    try {
      const res = await axios.post(`${data?.complete_url}`, null, {
        headers: {
          'X-CSRFToken': `${DesmyAuth.getCookie('csrftoken')}`,
          Authorization: `Token ${data?.token}`,
        },
      });
      if (res.data.success) {
        this.finishUpload();
      } else {
        this.setState({ error: true, errorMessage: res.data.message || 'Completion failed' });
      }
    } catch {
      this.setState({ error: true, errorMessage: 'Completion request failed' });
    }
  };

  resumeUpload = () => this.setState({ error: false, uploading: true, errorMessage: '' }, this.uploadNext);
  cancelUpload = () => {
    this.state.cancelTokenSource?.cancel('User cancelled upload');
    this.setState({ uploading: false }, this.props.onClose);
  };
  skipUpload = () => {
    const { currentIndex } = this.state;
    const newIndex = currentIndex + 1;
    const newProgress = (newIndex / this.props.data?.datalist.length) * 100;
    this.setState({ currentIndex: newIndex, progress: newProgress, error: false, errorMessage: '' }, this.uploadNext);
  };

  /** ------------------------- INLINE PROGRESS BAR COLOR ------------------------- **/

  private getProgressBarBackground = (): string => {
    const { error, completed, currentIndex } = this.state;
    const total = this.props.data?.datalist?.length;

    if (error) return '#ef4444';
    if (completed) return 'linear-gradient(to right, #22c55e, #15803d)';
    if (currentIndex < total) return 'linear-gradient(to right, #3b82f6, #1e40af)';
    return '#93c5fd';
  };

  /** ------------------------- EXPORT FLOW ------------------------- **/

  private chunkProcess = async (items: any[], chunkSize: number, callback: (chunk: any[]) => void) => {
    for (let i = 0; i < items.length; i += chunkSize) {
      if (this.state.cancelExportFlag) break;
      const chunk = items.slice(i, i + chunkSize);
      callback(chunk);
      await new Promise<void>((resolve) =>
        (window as any).requestIdleCallback ? requestIdleCallback(() => resolve()) : setTimeout(resolve, 0)
      );
      const progress = Math.round(((i + chunk.length) / items.length) * 100);
      this.setState({ exportProgress: progress });
    }
  };

  private handleExportExcel = async () => {
    const { errorData } = this.state;
    if (errorData.length === 0) return;
    this.setState({ exporting: true, exportingType: 'excel', exportProgress: 0, cancelExportFlag: false });
    const workbook = XLSX.utils.book_new();
    const worksheetData: any[] = [];
    await this.chunkProcess(errorData, 500, (chunk) => worksheetData.push(...chunk));
    if (this.state.cancelExportFlag) {
      this.setState({ exporting: false, exportingType: '', exportProgress: 0, cancelExportFlag: false });
      return;
    }
    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Upload Errors');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, `upload_errors_${new Date().toISOString()}.xlsx`);
    this.setState({ exporting: false, exportingType: '', exportProgress: 100 });
  };

  private handleExportCSV = async () => {
    const { errorData } = this.state;
    if (errorData.length === 0) return;
    this.setState({ exporting: true, exportingType: 'csv', exportProgress: 0, cancelExportFlag: false });
    const keys = Object.keys(errorData[0] || {});
    const csvRows: string[] = [];
    csvRows.push(keys.join(','));
    await this.chunkProcess(errorData, 1000, (chunk) => {
      for (const row of chunk) {
        const values = keys.map((k) => `"${String(row[k] ?? '').replace(/"/g, '""')}"`);
        csvRows.push(values.join(','));
      }
    });
    if (this.state.cancelExportFlag) {
      this.setState({ exporting: false, exportingType: '', exportProgress: 0, cancelExportFlag: false });
      return;
    }
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `upload_errors_${new Date().toISOString()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    this.setState({ exporting: false, exportingType: '', exportProgress: 100 });
  };

  private cancelExport = () => this.setState({ cancelExportFlag: true });

  /** ------------------------- RENDER ------------------------- **/

  render() {
    const { uploading, progress, error, errorMessage, currentIndex, completed, errorData, exporting, exportingType, exportProgress, showCheckmark } = this.state;
    const { data } = this.props;
    const totalDatalist = data?.datalist?.length ?? 0;

    return (
      <div className="my-5">
        <div className="bg-white dark:bg-darkDialogBackground dark:text-white relative border border-gray-200 shadow-md rounded-lg p-6 w-full max-w-md">
          {/* Close */}
          <svg onClick={this.cancelUpload} viewBox="0 0 512 512" fill="currentColor" className="absolute top-2 right-5 text-red-500 cursor-pointer w-5 h-5">
            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
          </svg>

          <h2 className="text-lg font-semibold mb-4">
            {completed
              ? 'Upload Completed'
              : currentIndex < totalDatalist
              ? data?.title ?? 'Upload Progress'
              : 'Finalizing Uploads'}
          </h2>

          {/* 🧮 Upload Counter */}
          {totalDatalist > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: completed ? 600 : 400, color: completed ? '#16a34a' : error ? '#ef4444' : '#374151' }}>
                {completed
                  ? `All ${totalDatalist} uploads completed`
                  : `Uploading ${Math.min(currentIndex + 1, totalDatalist)} / ${totalDatalist}`}
              </span>
              {!completed && (
                <span style={{ fontWeight: 500, color: error ? '#ef4444' : '#4b5563' }}>
                  {Math.round(progress)}%
                </span>
              )}
            </div>
          )}

          {/* Progress bar */}
          <div style={{ background: error ? '#fecaca' : '#e5e7eb', height: '8px', borderRadius: '9999px', marginBottom: '1rem' }}>
            <div
              style={{
                background: this.getProgressBarBackground(),
                height: '8px',
                width: `${progress}%`,
                borderRadius: '9999px',
                transition: 'width 0.2s ease-in-out',
              }}
            />
          </div>

          {showCheckmark && (
            <div className="flex items-center gap-2 text-green-600 text-sm mb-3 transition ease-out animate-scale-in">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0l-3.636-3.636a1 1 0 111.414-1.414l2.929 2.929 6.657-6.657a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>All uploads completed successfully</span>
            </div>
          )}

          {error && <div className="text-xs mb-4 text-red-500">{errorMessage}</div>}

          {completed && errorData.length > 0 && (
            <div className="mt-4 space-y-3 text-sm">
              <div className="text-green-600 font-semibold">✅ Upload Completed</div>
              <div className="flex gap-2 flex-wrap">
                <button onClick={this.handleExportExcel} disabled={exporting} className="text-xs bg-yellow-300 text-yellow-800 px-4 py-2 rounded-full hover:bg-yellow-600 hover:text-white">
                  {exporting && exportingType === 'excel' ? `Exporting Excel… ${exportProgress}%` : 'Download Error Log (Excel)'}
                </button>
                <button onClick={this.handleExportCSV} disabled={exporting} className="text-xs bg-blue-300 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white">
                  {exporting && exportingType === 'csv' ? `Exporting CSV… ${exportProgress}%` : 'Download Error Log (CSV)'}
                </button>
                {exporting && (
                  <button onClick={this.cancelExport} className="text-xs bg-red-300 text-red-800 px-4 py-2 rounded-full hover:bg-red-600 hover:text-white">
                    Cancel Export
                  </button>
                )}
              </div>
              {exporting && <div className="text-xs text-gray-500 mt-1">⚡ Generating file in background… {exportProgress}%</div>}
            </div>
          )}
        </div>
      </div>
    );
  }
}
