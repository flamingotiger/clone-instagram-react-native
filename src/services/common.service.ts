import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

export const endpoint = '';

/** Axios instance
 * 	initial axios setting
 */
const instance = axios.create({
  baseURL: endpoint,
  timeout: 1000,
});

/** Request interceptor */
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Config setting
    // config.headers['Content-Type'] = 'application/json; charset=utf-8';
    // config.headers.Authorization = 'Token Value';
    return config;
  },
  error => {
    return Promise.reject(error.request);
  },
);

/** Response interceptor */
instance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  error => {
    if (error.response?.status === 422) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.response);
  },
);

export default instance;
