/**
 * 文件说明：
 * 详细描述
 * 创建者：ycl
 * 创建时间： 2019/5/5
 * 变更记录：
 */
import axios from 'axios';
import utils from '../../utils'


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  config.timeout = 10000;
  config.headers.Authorization = '1233'
  return config;
}, function (error) {
  return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}

export function get(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.get(utils.queryParams(url, data)).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}
