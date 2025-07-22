import React, { Component, RefObject } from 'react';
import { createPortal } from 'react-dom';
import UploadModal from './UploadProgress';
import { DesmyRxServices } from '../apis/DesmyRxServices';
import { DesmyState } from '../apis/DesmyState';

type ModalData = {
  id: number;
  data: any;
};

type HomeState = {
  dataList: any[];
  modals: ModalData[];
  modalId: number;
  mounted: boolean;  // Add mounted flag to state
};

type HomeProps = {
  className?: string;
};

class DesmyUploadManager extends Component<HomeProps, HomeState> {
  private modalContainerRef: RefObject<HTMLDivElement | null> = React.createRef();
  private subscription: any;

  constructor(props: HomeProps) {
    super(props);
    this.state = {
      dataList: [],
      modals: [],
      modalId: 1,
      mounted: false,  // Initialize mounted as false
    };
    this.modalContainerRef = React.createRef();
  }

  async componentDidMount() {
    this.setState({ mounted: true }); // Mark mounted on client side

    this.subscription = DesmyRxServices.getSubscription().subscribe((data: any) => {
      if (data.type !== undefined && data.type === DesmyState.UPLOAD_MANAGER_REQUEST) {
        this.addNewModal(data.data);
      }
    });
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addNewModal = (data: any) => {
    const newModalId = this.state.modalId;
    this.setState(
      (prevState) => ({
        modals: [{ id: newModalId, data: data || [...prevState.dataList] }, ...prevState.modals],
        modalId: prevState.modalId + 1,
      }),
      () => {
        if (this.state.mounted && this.modalContainerRef.current) {
          this.modalContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    );
  };

  closeModal = (modalId: number) => {
    this.setState((prevState) => ({
      modals: prevState.modals.filter((modal) => modal.id !== modalId),
    }));
  };

  render() {
    const { modals, mounted } = this.state;
    const { className } = this.props;

    // Avoid rendering portal during SSR
    if (!mounted) {
      // Render fallback or nothing server-side
      return null;
    }

    // Now safe to use document and create portals on client side
    return createPortal(
      <div
        ref={this.modalContainerRef}
        className={`fixed right-2 bottom-6 z-[10000] w-full md:w-[500px] lg:w-[500px] max-h-[90vh] overflow-y-auto ${className ?? ''}`}
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f5f5f5' }}
      >
        {modals.map((modal) => (
          <div key={modal.id} className="w-full mb-4">
            <UploadModal data={modal.data} onClose={() => this.closeModal(modal.id)} />
          </div>
        ))}
      </div>,
      document.getElementById('uploadmanager-root')!
    );
  }
}

export { DesmyUploadManager };
