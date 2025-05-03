import { default as React, Component } from 'react';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
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
declare class DesmyPDFReader extends Component<DesmyPDFReaderProps, State> {
    canvasRef: React.RefObject<HTMLCanvasElement | null>;
    state: State;
    componentDidMount(): void;
    componentDidUpdate(prevProps: DesmyPDFReaderProps, prevState: State): void;
    setupWorker: () => void;
    loadDocument: (src: PDFFile) => Promise<void>;
    renderPage: (pageNumber: number) => Promise<void>;
    goToPrevPage: () => void;
    goToNextPage: () => void;
    zoomIn: () => void;
    zoomOut: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyPDFReader };
