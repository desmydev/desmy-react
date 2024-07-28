import { Component } from 'react';
import axios from 'axios'; 
import { DesmyState } from '../apis/DesmyState';
import DesmyCommons from '../apis/DesmyCommons';
import {DesmyRxServices} from '../apis/DesmyRxServices';
import DesmyAuth from '../apis/DesmyAuth';

interface Props {
  data: Record<string, any>;
  url: string;
  headers: string[];
  isLoading: boolean;
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
      data: {}
    };
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  async componentDidMount() {
    this.setState({ data: this.props.data });
    this.subscription = DesmyRxServices.getSubscription().subscribe((data: any) => {
      if (data.type === DesmyState.DATASETTABLE_REQUEST) {
        this.handleRequest();
      }
    });
  }

  handleRequest = async () => {
    try {
      const formData = new FormData();
      const { data } = this.state;
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
      this.setState({ hasRequest: true, response: "" });

      axios.post(this.props.url, formData, {
        headers: {
          "X-CSRFToken": `${DesmyAuth.getCookie('csrftoken')}`,
          "Authorization": `Token ${DesmyAuth.get(DesmyState.ACCESS_TOKEN)}`
        }
      }).then(
        (json) => {
          if (json.data.success) {
            this.handleAlert(DesmyState.SUCCESS);
          } else {
            this.handleAlert(DesmyState.ERROR);
          }
        }
      ).catch((_error) => {
        this.handleAlert();
      });
    } catch (e) {
      this.handleAlert();
    }
  }

  handleAlert = (res: string = DesmyState.ERROR) => {
    this.setState({ hasRequest: false, response: res });
  }
  renderTableData = () => {
    const { data } = this.state;
    return this.props.headers.map((field, index) => {
      const value = DesmyCommons.toStringDefault(data[field],""); // Use field.id to access the value from data
      return (
        (DesmyCommons.toString(field).toLowerCase() !=="action") ? <td key={index} className='px-6 py-3'>
          {value}
        </td>
        :<td key={index}>
        <span className='flex w-full justify-center text-xs'>
          {
            (this.state.hasRequest) ?
              <span className=''>
                <svg role="status" className="inline z-0 mr-3 w-5 h-5 dark:text-white dark:group-hover:text-black animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg>
              </span>
              : (!DesmyCommons.isEmptyOrNull(this.state.response)) ?
                (this.state.response === DesmyState.ERROR) ? <>
                  <svg viewBox="0 0 30 30" fill="currentColor" className='w-8 h-8 text-red-600 cursor-pointer' onClick={this.handleRequest}>
                    <path d="M9.77 15.53c0 .94.24 1.82.71 2.62s1.11 1.44 1.91 1.9c.8.47 1.67.7 2.61.7.96 0 1.83-.23 2.63-.69.8-.46 1.43-1.09 1.89-1.89.46-.8.69-1.68.69-2.63 0-.24-.08-.44-.24-.61a.764.764 0 00-.59-.25c-.23 0-.43.08-.6.25-.17.17-.25.37-.25.61 0 .98-.35 1.82-1.04 2.51-.69.69-1.53 1.04-2.51 1.04-.97 0-1.79-.35-2.47-1.04-.68-.69-1.02-1.53-1.02-2.51 0-.85.26-1.62.79-2.31s1.14-1.06 1.84-1.1l-.38.37c-.16.18-.24.37-.24.58 0 .22.08.42.24.6.36.35.77.35 1.21 0l1.84-1.82c.16-.12.24-.33.24-.62 0-.26-.08-.45-.24-.57L14.97 8.8c-.18-.16-.37-.24-.57-.24-.25 0-.46.08-.63.25-.17.17-.25.37-.25.6 0 .24.08.45.24.61l.38.36c-1.25.22-2.29.82-3.12 1.8s-1.25 2.09-1.25 3.35z" />
                  </svg>
                </>
                  : <>
                    <svg viewBox="0 0 24 24" fill="currentColor" className='w-5 h-5 text-green-600'>
                      <path d="M2.394 13.742l4.743 3.62 7.616-8.704-1.506-1.316-6.384 7.296-3.257-2.486zm19.359-5.084l-1.506-1.316-6.369 7.279-.753-.602-1.25 1.562 2.247 1.798z" />
                    </svg>
                  </>
                : null
          }

        </span>
      </td>
      );
    });
  }
  render() {
    return (
      <>
        {
          (this.props.isLoading) ?
            <tr>
              <td></td>
            </tr>
            : <tr className='text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black group'>
              {this.renderTableData()}
              
            </tr>
        }

      </>
    );
  }

}

export {DesmyTableCard};
