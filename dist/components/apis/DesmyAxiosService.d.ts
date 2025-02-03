import { AxiosRequestConfig, AxiosResponse } from 'axios';
declare class DesmyAxiosService {
    private axiosInstance;
    private readonly baseURL;
    constructor(baseURL?: string);
    private loadAxios;
    get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    post<T>(url: string, data: string | object | FormData, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    put<T>(url: string, data: string | object | FormData, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}
export { DesmyAxiosService };
