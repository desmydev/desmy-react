/// <reference types="vite/client" />

declare module '*.worker.js?url' {
  const src: string;
  export default src;
}
declare module 'pdfjs-dist/legacy/build/pdf.worker.js?url' {
  const src: string;
  export default src;
}