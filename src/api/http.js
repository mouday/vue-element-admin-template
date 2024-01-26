import { Message } from 'element-ui'
import dataApi from './dataApi.js'
import instance from './instance.js'

// 包装请求方法的容器
const Http = {}

for (const [key, url] of Object.entries(dataApi)) {
  // async 作用，避免进入回调地狱
  Http[key] = async function (data) {
    data = data || {}
    // 公共参数
    const res = await instance.post(url, data)

    if (!res.ok) {
      Message.error(res.msg)
    }

    return res
  }
}

export default Http
