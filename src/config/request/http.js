import axios from 'axios';
import { Message } from 'element-ui';
import { baseURL } from './config';

// create axios instance
const request = axios.create({
  baseURL,
  timeout: 1000 * 30,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
})

// request interceptor
request.interceptors.request.use(
  config => {
    if (Object.prototype.toString.call(config.data) === '[object FormData]') {
      config.headers["Content-Type"] = "multipart/form-data;charset=utf-8"
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    const {
      data: {
        code,
        message,
        data
      }
    } = response;
    if (code == 200) {
      return data;
    } else {
      Message({
        message,
        type: 'error',
        duration: 3.5 * 1000
      });
      return Promise.reject(message || 'error');
    }
  },
  error => {
    const {
      message
    } = error;
    Message({
      message,
      type: 'error',
      duration: 3.5 * 1000
    });
    return Promise.reject(error);
  }
)

export default request;
