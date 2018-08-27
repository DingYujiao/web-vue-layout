import vue from 'vue'
import axios from 'axios'
import errDialog from '@/components/errDialog'
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

    console.log('response',response)

    const res = response.data

    if (res.code !== 20000) {

      return Promise.reject('error')
    } else {
      return response.data
    }

    return res;

  },
  error => {
    // console.log('err ' + error)// for debug
    console.log('err ' + error.response)// for debug

    let status = error.response.status;
    switch(status){
      case 415 :
        console.log('415')
            break
      default:
        console.log('其他错误')
    }
    if(status == 200) {
      let code = error.response.data.code;

      if(code == -1){
        vue.prototype.$router.push('/')
      }else if(code == -2){
        vue.prototype.$dialog.toast({
          content: error.response.data.data,
          dialogClass: '',
        })
      }else if(code == -3){
        vue.prototype.$dialog.userDefine({
          title: '微信出错了',
          content: '请刷新重试，若仍无法解决，请截图并联系客服',
          component:errDialog,
          withShadow: true,
          dialogClass: '',

        })
      }else {
        vue.prototype.$dialog.userDefine({
          title: '出错了',
          content: '请重新登录，若仍无法解决，请截图并联系客服',
          component:errDialog,
          withShadow: true,
          dialogClass: '',

        })
      }


    }else {
      vue.prototype.$dialog.userDefine({
        title: '出错了',
        content: '请重新登录，若仍无法解决，请截图并联系客服',
        component:errDialog,
        withShadow: true,
        dialogClass: '',

      })
    }



    return Promise.reject(error)
  }
)





export default service
// module.exports = service
