import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class DesmyAxiosService {
  private axiosInstance: AxiosInstance | null = null;
  private readonly baseURL: string;

  constructor(baseURL: string = '/api') {
    this.baseURL = baseURL;
  }

  private async loadAxios(): Promise<AxiosInstance> {
    if (!this.axiosInstance) {
      this.axiosInstance = axios.create({
        baseURL: this.baseURL,
        timeout: 100000,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    return this.axiosInstance;
  }

  async get<T>(url: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    const axiosInstance = await this.loadAxios();
    return axiosInstance.get<T>(url, config);
  }

  async post<T>(url: string, data: string | object | FormData, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    const axiosInstance = await this.loadAxios();
    return axiosInstance.post<T>(url, data, config);
  }

  async put<T>(url: string, data: string | object | FormData, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    const axiosInstance = await this.loadAxios();
    return axiosInstance.put<T>(url, data, config);
  }

  async delete<T>(url: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    const axiosInstance = await this.loadAxios();
    return axiosInstance.delete<T>(url, config);
  }
}

export {DesmyAxiosService}
