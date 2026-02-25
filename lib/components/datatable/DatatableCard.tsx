import React, { Component, JSX } from "react";
import axios from "axios";
import Commons from "../apis/DesmyCommons";
import Auth from "../apis/DesmyAuth";
import { DesmyModalHandler } from "../dialog/DesmyAlertDialog";
import { DesmyState as ModalState } from "../apis/DesmyState";
import DesmyAuth from "../apis/DesmyAuth";
import { DesmyToast } from "../toasify/DesmyToast";

interface Settings {
  deleteinfo?: { id: string; name: string };
  request_url?: string;
  image?: { placeholder?: string; rounded?: boolean };
  handleOnViewClick?: (user: any) => void;
  handleOnClickExtra?: (user: any, name: string) => void;
  handleEdit?: (user: any) => void;
  extra_handle?: Array<{ name: string; icon: React.ReactNode }>;
  style?: { maxlines?: number };
  read_more_limit?: number;
}

interface Props {
  children?: React.ReactNode;
  user: any;
  index: number;
  handleOnSuccess: (index: number) => void;
  acces_key: number;
  settings: Settings;
  headers: any[];
  exceptional_columns: string[];
  handleEdit: (user: any) => void;
  error: (error: any) => void;

  /** ✅ multi select mode */
  multiSelectEnabled?: boolean;
}

interface State {
  stateList: string[];
  imageExtensions: string[];
  imgColumnTypes: string[];
  title?: any;
  contentlist: any[];
  header: string;
  request: { delete: boolean };
  error: { state: boolean; message: string; type: string; color: string };
  isLoading: boolean;
  modal?: JSX.Element;
  viewAll: boolean;
}

class DatatableCard extends Component<Props, State> {
  private header: string;
  private status: string;

  constructor(props: Props) {
    super(props);
    this.state = {
      stateList: [
        ModalState.APPROVED,
        ModalState.PAID,
        ModalState.PASS,
        ModalState.DOWNLOADED,
        ModalState.COMPLETED,
        ModalState.PASSED,
        ModalState.ACTIVE,
        ModalState.ALLOCATED,
        ModalState.ENROLLED,
        ModalState.SUBMITTED,
        ModalState.CONFIRMED,
        ModalState.PUBLISHED,
        ModalState.CREATED,
        ModalState.ACCREDITED,
        ModalState.RUNNING,
        ModalState.ADMITTED,
        ModalState.QUALIFIED,
        ModalState.IN_PROGRESS,
        ModalState.ACCEPTED,
        ModalState.SENT,
      ],
      imageExtensions: ["jpg", "jpeg", "png", "svg"],
      imgColumnTypes: ["picture", "photo"],
      title: "",
      contentlist: [],
      header: "",
      request: { delete: false },
      error: { state: false, message: "", type: ModalState.ERROR, color: "" },
      isLoading: false,
      viewAll: false,
    };

    this.header = "";
    this.status = "";
  }

  /** ✅ Stop bubbling always */
  stopEvent = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDelete = (e?: React.MouseEvent) => {
    if (e) this.stopEvent(e);

    const settings = {
      title: "Confirmation!",
      btnPosition: "delete",
      btnNegative: "cancel",
      type: ModalState.NOTICE,
    };

    const handleClose = (state: { status: boolean }) => {
      if (this.state.request.delete) return;

      if (state.status) {
        this.handleDeleteRequest();
        this.props.error({});
      }

      this.setState((prevState) => ({
        request: { ...prevState.request, delete: state.status },
        modal: undefined,
      }));
    };

    const deleteInfoName =
      typeof this.props.user[this.props.settings.deleteinfo?.name ?? ""] ===
      "object"
        ? this.props.user[this.props.settings.deleteinfo?.name ?? ""]?.name
        : this.props.user[this.props.settings.deleteinfo?.name ?? ""];

    const modal = (
      <DesmyModalHandler settings={settings} onClose={handleClose}>
        <div className="w-full py-2 text-sm">
          Are you sure you want to delete
          <span className="text-red-500 ml-1 font-poppinsBold">
            {deleteInfoName}?
          </span>
        </div>
      </DesmyModalHandler>
    );

    this.setState({ modal });
  };

  handleError = (message: string = "") => {
    try {
      this.setState({
        request: { ...this.state.request, delete: false },
        error: {
          state: true,
          message: Commons.isEmptyOrNull(message) ? "Error Message" : message,
          type: "Error",
          color: "red",
        },
      });
      this.props.error(this.state.error);
      DesmyToast.error(message);
    } catch (e) {}
  };

  handleDeleteRequest = () => {
    try {
      const { settings, user, index } = this.props;
      const { deleteinfo } = settings;
      const userId = user[deleteinfo?.id ?? ""];

      axios
        .delete(`${settings.request_url}/${userId}/delete/`, {
          headers: {
            "X-CSRFToken": Auth.getCookie("csrftoken"),
            Authorization: `Token ${DesmyAuth.get(ModalState.ACCESS_TOKEN)}`,
          },
        })
        .then((json) => {
          if (json.data.success) {
            this.props.handleOnSuccess(index);
          } else {
            this.handleError(json.data.message);
          }
        })
        .catch(() => {
          this.handleError();
        });
    } catch {
      this.handleError();
    }
  };

  handleEdit = (e?: React.MouseEvent) => {
    if (e) this.stopEvent(e);

    if (!this.state.request.delete) {
      this.props.handleEdit(this.props.user);
    }
  };

  handleView = (e?: React.MouseEvent) => {
    if (e) this.stopEvent(e);
    this.props.settings.handleOnViewClick?.(this.props.user);
  };

  async componentDidMount() {
    const user = this.props.user;
    const key = this.props.acces_key;
    const headers = this.props.headers;

    const data = user[headers[key]];

    this.header = Commons.toString(headers[key]).toLowerCase();
    this.status = user["status"] ?? user["process_state"];

    this.setState({
      title: !Array.isArray(data)
        ? data?.name ?? Commons.toString(data)
        : "",
      contentlist: Array.isArray(data) ? data : [],
    });
  }

  toggleView = (e?: React.MouseEvent) => {
    if (e) this.stopEvent(e);
    this.setState((prevState) => ({
      viewAll: !prevState.viewAll,
    }));
  };

  extra_handle = () => {
    if (this.props.settings.extra_handle) {
      return this.props.settings.extra_handle.find((o) => o.name === this.header);
    }
    return false;
  };

  render() {
    const editBtn = (
      <span className="text-blue-800 dark:text-blue-300 cursor-pointer flex-col">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </span>
    );

    const deleteBtn = (
      <span className="text-red-800 dark:text-red-300 cursor-pointer">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </span>
    );

    const viewBtn = (
      <span className="cursor-pointer ">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </span>
    );

    const imageurl =
      Commons.isEmptyOrNull(this.state.title) && this.props.settings.image !== undefined
        ? this.props.settings.image.placeholder
        : this.state.title;

    const { viewAll, contentlist } = this.state;
    const itemsToShow = viewAll ? contentlist : contentlist.slice(0, 1);
    const listClass = viewAll ? "collapsible-content expanded" : "collapsible-content";

    /** ✅ Special rendering for multi select checkbox cell */
    if (this.props.multiSelectEnabled && this.props.children) {
      return (
        <div className="flex w-full justify-center items-center py-2">
          {this.props.children}
        </div>
      );
    }

    return (
      <>
        {this.state.modal}
        <div className="w-full group">
        {(this.props.exceptional_columns.includes(this.header) || this.extra_handle()) && (
          <div className="flex w-full justify-center items-center">
            {this.header === "edit" ? (
              <span onClick={(e) => this.handleEdit(e)}>{editBtn}</span>
            ) : this.header === "view" ? (
              <span onClick={(e) => this.handleView(e)}>{viewBtn}</span>
            ) : this.extra_handle() ? (
              <span
                onClick={(e) => {
                  this.stopEvent(e);
                  this.props.settings.handleOnClickExtra?.(
                    this.props.user,
                    this.props.settings.extra_handle?.find((o) => o.name === this.header)?.name || ""
                  );
                }}
              >
                {this.props.settings.extra_handle?.find((o) => o.name === this.header)?.icon}
              </span>
            ) : this.header === "delete" && this.state.request.delete ? (
              <svg role="status" className="flex w-4 h-4 text-black dark:text-white animate-spin"
                viewBox="0 0 100 101" fill="none">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <span onClick={(e) => this.handleDelete(e)}>{deleteBtn}</span>
            )}
          </div>
        )}

        {!this.props.exceptional_columns.includes(this.header) &&
          !this.extra_handle() &&
          ["status", "process_state", "notification_state","id_card_status"].includes(this.header.toLowerCase()) && (
            <div className="flex w-full justify-center items-center">
              {!Commons.isEmptyOrNull(this.state.title) && (
                <div
                  className={`min-w-16 max-w-42 text-[8px] px-1 line-clamp-1 rounded-full border ${
                    this.state.stateList.includes(this.state.title)
                      ? `bg-green-200 text-green-700 border-green-500 hover:bg-green-500 hover:text-white`
                      : `bg-red-200 text-red-700 border-red-500 hover:bg-red-500 hover:text-white`
                  } py-1 justify-center text-center items-center`}
                >
                  {String(this.state.title).toLowerCase()}
                </div>
              )}
            </div>
          )}

        {!this.props.exceptional_columns.includes(this.header) &&
          !this.extra_handle() &&
          (this.state.imgColumnTypes.includes(this.header?.toLowerCase() || "") ||
            this.state.imageExtensions.includes(this.state.title?.toLowerCase().split(".").pop() || "")) && (
            <div className={`w-8 ml-3 py-3`}>
              <img
                onClick={(e) => this.stopEvent(e)}
                title="View photo"
                className={`object-center object-cover w-6 h-6 2xl:w-8 2xl:h-8 ${
                  !(this.props.settings.image == null || this.props.settings.image.rounded == false)
                    ? "rounded-full"
                    : ""
                } cursor-pointer mx-auto`}
                alt={`photo`}
                src={imageurl}
              />
            </div>
          )}

        {!this.props.exceptional_columns.includes(this.header) &&
          !this.extra_handle() &&
          !["status", "process_state", "notification_state","id_card_status"].includes(this.header.toLowerCase()) &&
          !(this.state.imgColumnTypes.includes(this.header?.toLowerCase() || "") ||
            this.state.imageExtensions.includes(this.state.title?.toLowerCase().split(".").pop() || "")) && (
            <div className={`w-full text-xs 2xl:text-sm px-4 py-2 flex items-center`}>
              {this.state.contentlist.length > 0 ? (
                <ul className={`flex flex-col w-full ${listClass}`}>
                  {itemsToShow.map((item, index) => (
                    <li
                      key={index}
                      onClick={(e) => this.toggleView(e)}
                      className={`w-full ${itemsToShow.length > 1 ? `line-clamp-1` : ``}`}
                      title={`${item.name}`}
                    >
                      <div className="flex">
                        <div className="mr-3">{item.name}</div>
                        {index === 0 && contentlist.length > 1 && (
                          <div onClick={(e) => this.toggleView(e)}>
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 cursor-pointer">
                              <path d="M12 18.17L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83z" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div
                  title={String(this.state.title)}
                  className={`min-w-24 line-clamp-${this.props.settings?.style?.maxlines}`}
                >
                  {this.state.title}
                </div>
              )}
            </div>
          )}
        </div>
      </>
    );
  }
}

export { DatatableCard };
