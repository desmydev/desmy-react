import React, { Component, createRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import workerSrc from './pdfWorker';
import 'pdfjs-dist/legacy/web/pdf_viewer.css';

type PDFFile = string | File | null;

type DesmyPDFReaderProps = {
  src: PDFFile;
  className?: string;
};

type State = {
  pdf: pdfjsLib.PDFDocumentProxy | null;
  currentPage: number;
  totalPages: number;
  scale: number;
  isLoading: boolean;
};

class DesmyPDFReader extends Component<DesmyPDFReaderProps, State> {
  canvasRef = createRef<HTMLCanvasElement>();

  state: State = {
    pdf: null,
    currentPage: 1,
    totalPages: 0,
    scale: 1.5,
    isLoading: false,
  };

  componentDidMount() {
    this.setupWorker();
    this.loadDocument(this.props.src);
  }

  componentDidUpdate(prevProps: DesmyPDFReaderProps, prevState: State) {
    if (prevProps.src !== this.props.src) {
      this.loadDocument(this.props.src);
    } else if (
      prevState.currentPage !== this.state.currentPage ||
      prevState.scale !== this.state.scale
    ) {
      this.renderPage(this.state.currentPage);
    }
  }

  setupWorker = () => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;
  };

  loadDocument = async (src: PDFFile) => {
    if (!src) return;

    this.setState({ isLoading: true });

    try {
      let data: Uint8Array;
      
      if (typeof src === 'string') {
        const response = await fetch(src);

        if (!response.ok) {
          throw new Error(`Failed to fetch PDF: ${response.status} ${response.statusText}`);
        }

        const buffer = await response.arrayBuffer();
        data = new Uint8Array(buffer);
      } else if (src instanceof File) {
        const buffer = await src.arrayBuffer();
        data = new Uint8Array(buffer);
      } else {
        return;
      }

      const loadingTask = pdfjsLib.getDocument({ data });
      const pdf = await loadingTask.promise;

      this.setState({ pdf, totalPages: pdf.numPages, currentPage: 1 }, () => {
        this.renderPage(1);
      });
    } catch (error) {
      console.error('Error loading PDF:', error);
      alert('Failed to load PDF. Please ensure it is a valid file or URL.');
      this.setState({ isLoading: false });
    }
  };

  renderPage = async (pageNumber: number) => {
    const { pdf, scale } = this.state;
    if (!pdf) return;

    this.setState({ isLoading: true });

    try {
      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale });

      const canvas = this.canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({ canvasContext: context!, viewport }).promise;
    } catch (error) {
      console.error('Error rendering page:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  goToPrevPage = () => {
    this.setState((prevState) => ({
      currentPage: Math.max(prevState.currentPage - 1, 1),
    }));
  };

  goToNextPage = () => {
    this.setState((prevState) => ({
      currentPage: Math.min(prevState.currentPage + 1, prevState.totalPages),
    }));
  };

  zoomIn = () => {
    this.setState((prevState) => ({
      scale: Math.min(prevState.scale + 0.25, 3),
    }));
  };

  zoomOut = () => {
    this.setState((prevState) => ({
      scale: Math.max(prevState.scale - 0.25, 0.5),
    }));
  };

  render() {
    const { className } = this.props;
    const { currentPage, totalPages, scale, isLoading } = this.state;

    return (
      <div className={className} style={{ position: 'relative' }}>
        {isLoading && (
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              background: 'rgba(255,255,255,0.9)',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: 500
            }}
          >
            Loading...
          </div>
        )}

        <canvas ref={this.canvasRef} style={{ width: '100%', opacity: isLoading ? 0.4 : 1 }} />
      </div>
    );
  }
}

export { DesmyPDFReader };
