import { default as React, Component } from 'react';
type ModalData = {
    id: number;
    data: any;
};
type HomeState = {
    dataList: any[];
    modals: ModalData[];
    modalId: number;
    mounted: boolean;
};
type HomeProps = {
    className?: string;
};
declare class DesmyUploadManager extends Component<HomeProps, HomeState> {
    private modalContainerRef;
    private subscription;
    constructor(props: HomeProps);
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    addNewModal: (data: any) => void;
    closeModal: (modalId: number) => void;
    render(): React.ReactPortal | null;
}
export { DesmyUploadManager };
