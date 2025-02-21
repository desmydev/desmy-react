import { Component } from 'react';
import axios from 'axios'; 
import { DesmyState } from '../apis/DesmyState';
import DesmyCommons from '../apis/DesmyCommons';
import { DesmyRxServices } from '../apis/DesmyRxServices';
import DesmyAuth from '../apis/DesmyAuth';

interface Props {
  data?: Record<string, any>;
  url?: string;
  background?:string,
  headers?: string[];
  isLoading?: boolean;
}

interface State {
  hasRequest: boolean;
  response: string;
  data: Record<string, any>;
}

class DesmyTableCard extends Component<Props, State> {
  subscription: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasRequest: false,
      response: "",
      data: props.data || {}, // Initialize state with props or an empty object
    };
  }

  componentDidMount() {
    this.subscription = DesmyRxServices.getSubscription().subscribe((data: any) => {
      if (data?.type === DesmyState.DATASETTABLE_REQUEST) {
        this.handleRequest();
      }
    });
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  handleRequest = async () => {
    const { data } = this.state;
    const { url } = this.props;

    if (!url) {
      this.handleAlert(DesmyState.ERROR);
      return;
    }

    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      this.setState({ hasRequest: true, response: "" });

      const response = await axios.post(url, formData, {
        headers: {
          "X-CSRFToken": DesmyAuth.getCookie('csrftoken'),
          "Authorization": `Token ${DesmyAuth.get(DesmyState.ACCESS_TOKEN)}`,
        },
      });

      this.handleAlert(response.data.success ? DesmyState.SUCCESS : DesmyState.ERROR);
    } catch (error) {
      this.handleAlert(DesmyState.ERROR);
    }
  };

  handleAlert = (res: string = DesmyState.ERROR) => {
    this.setState({ hasRequest: false, response: res });
  };

  renderTableData = () => {
    const { data } = this.state;
    const { headers = [] } = this.props;

    return headers.map((field, index) => {
      const value = DesmyCommons.toStringDefault(data[field], "");
      return (
        <td key={index} className={`px-6 py-3 `}>
          {DesmyCommons.toString(field).toLowerCase() !== "action" ? (
            <div className='w-full line-clamp-1' title={value}>{value}</div>
          ) : (
            <span className="flex w-full justify-center text-xs">
              {this.state.hasRequest ? (
                <svg
                  role="status"
                  className="inline z-0 mr-3 w-5 h-5 dark:text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              ) : !DesmyCommons.isEmptyOrNull(this.state.response) ? (
                this.state.response === DesmyState.ERROR ? (
                  <svg
                    viewBox="0 0 30 30"
                    fill="currentColor"
                    className="w-8 h-8 text-red-600 cursor-pointer"
                    onClick={this.handleRequest}
                  >
                    <path d="..." />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-green-600"
                  >
                    <path d="..." />
                  </svg>
                )
              ) : null}
            </span>
          )}
        </td>
      );
    });
  };

  render() {
    const { isLoading } = this.props;
    return (
      <>
        {isLoading ? (
          <tr>
            <td>Loading...</td>
          </tr>
        ) : (
          <tr className={`text-sm cursor-pointer hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:text-black ${this.props.background} transition-all ease-in-out duration-150`}>
            {this.renderTableData()}
          </tr>
        )}
      </>
    );
  }
}

export { DesmyTableCard };
