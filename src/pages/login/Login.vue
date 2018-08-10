<template>
  <div class="content">

  </div>

</template>

<script>
  import { sendMsgCode,moblieLogin } from '@/http/httpUrl'
  import store from '@/store/index'
  const baseUrl='http://source.aboxstyle.com/static/imgs/'
  export default {
    name:'Login',
    data(){
      return {
        phone: '',
        mobileCode: '',
        source: '',
        inviteCode: '',
        getVerifBtnCanUse: true,
        getVerifText: '获取',
        agreement: true,
        wxReg: false,
        wxkey: '',
        wxHeadimgurl:'',
        loginBg: baseUrl + 'login_top_banner@2x.png'
      }
    },
    methods: {

    },
    created(){
      moblieLogin()
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common.less";

</style>
