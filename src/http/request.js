import vue from 'vue'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 创建axios实例
const service = axios.create({
  baseURL: "//test.aboxstyle.com:10087/yihe", // api的base_url
  timeout: 15000, // 请求超时时间

});
// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */

    console.log('errqqqqqqqq')
    return response.data;

  },
  error => {
    console.log('err ' + error)// for debug
    vue.prototype.$dialog.confirm({
      title:'出错了',
      content: '出错了,请稍后重试',
      withShadow: true,
      confirmHandle:()=> {
        vue.prototype.$dialog.$confirm.hide()
      },
      cancelHandle:()=> {
        vue.prototype.$dialog.$confirm.hide()
      },
    })
    return Promise.reject(error)
  }
)





export default service
// module.exports = service
