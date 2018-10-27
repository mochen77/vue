import axios from 'axios'
import { Toast } from 'mint-ui'

const ajax = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/'
})
let toast = null
// 请求拦截器（请求之前的操作）
ajax.interceptors.request.use((config) => {
  toast = Toast({
    message: '正在加载，请稍后……',
    duration: -1
  })
  return config
})
// 拦截器
// ajax.interceptors.request.use((resp) => {
//   let ret = null
//   if (resp.data.code === 200) {
//     ret = resp.data.data
//   } else {
//     ret
//   }
//   return ret
// })
// axios 拦截器
ajax.interceptors.response.use((resp) => {
  let ret = null
  if (resp.data.code === 200) {
    ret = Promise.resolve(resp.data.data)
    console.log(resp.data.data)
  } else {
    console.log(resp.data)
    ret = Promise.reject(resp.errMsg)
  }
  toast.close()
  return ret
})

export default ajax

export const getList = () => ajax.get('25330/api/v3/list')
