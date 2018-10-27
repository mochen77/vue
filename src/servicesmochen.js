import axios from 'axios'
import { Indicator, MessageBox } from 'mint-ui'

const isDev = process.env.NODE_ENV === 'development'
const ajax = axios.create({
  baseURL: isDev ? 'http://rap2api.taobao.org/app/mock/86604' : '你真实的地址'
})

ajax.interceptors.request.use((config) => {
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  return config
})
// ajax.interceptors.response.use((resp) => {
//   let ret = null;
//   if (resp.data.code === 200) {
//     ret = resp.data.data;
//   } else {
//     ret = resp.data.errMessage;
//   }
//   return ret;
// });

ajax.interceptors.response.use((resp) => {
  let ret = null
  if (resp.status === 200) {
    ret = Promise.resolve(resp.data.data)
  } else {
    const errMessage = resp.data.msg || '未知错误, 请稍后重试！'
    MessageBox({
      title: '哎呀！出错了！',
      message: errMessage,
      confirmButtonText: '好的，晓得了！'
    })
  }
  Indicator.close()
  return ret
})

export default ajax

export const gitHomeList = () => {
  // const now = new Date().getTime()
  return ajax.get('/homelist')
}
