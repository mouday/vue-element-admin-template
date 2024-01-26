import axios from 'axios'
import { getToken } from '../utils/auth-util.js'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 1000 * 60 * 10, // 分钟
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const token = getToken()

    if (token) {
      config.headers['X-Token'] = token
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  (res) => {
    const result = res.data

    // 添加ok参数
    if (result && result.code == 0) {
      result.ok = true
    } else {
      result.ok = false
    }

    return result
  },
  (err) => {
    console.log(err)
    return {
      code: -1,
      msg: '网络异常',
      data: null,
      ok: false,
    }
  }
)

export default instance
