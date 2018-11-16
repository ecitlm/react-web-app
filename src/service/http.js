import axios from 'axios'
// qs模块,用于处理URL查询参数 Querystring
import qs from 'qs'
let instance = axios.create({
  timeout: 60 * 1000,
  // baseURL: process.env.VUE_APP_BASE_URL
})
console.log(instance)
// 一些拦截器配置，用户token鉴权，发送请求显示loading,请求回来loading消失之类的
instance.interceptors.request.use(config => {
  // 配置发送请求的信息
  config.headers.token = `1111`
  return config
}, error => {
  console.log('请求出错了...', error)
  return Promise.reject(error)
})
const httpRequest = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data)
    .then(res => {
      resolve(res.data)
    })
    .catch(err => {
      console.log(err)
      alert('网络请求异常')
      reject(err)
    })
  })
}

const httpQuery = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, qs.stringify(data))
    .then(res => {
      resolve(res.data)
    })
    .catch(err => {
      console.log(err)
      alert('网络请求异常!')
      reject(err)
    })
  })
}
export default {
  // 获取用户基本信息
  articleList (data = {}) {
    return httpQuery('https://gank.io/api/search/query/listview/category/前端/count/10/page/1', ...arguments)
  }
}
