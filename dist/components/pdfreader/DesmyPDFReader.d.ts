type PDFFile = string | File | null;
type DesmyReaderProps = {
    src: PDFFile;
    className?: string;
};
declare function DesmyPDFReader({ src, className }: DesmyReaderProps): import("react/jsx-runtime").JSX.Element;
export { DesmyPDFReader };
