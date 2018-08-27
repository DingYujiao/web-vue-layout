<template>
  <div class="err-dialog-class">
    <div class="dialog-header">

      <h3 v-if="title" class="dialog-title">{{title}}</h3>
    </div>
    <div class="dialog-main" v-html="content">

    </div>

    <div class="dialog-footer ">
      <div class="dialog-footer-btn" @click="cancel">取消</div>
      <div class="dialog-footer-btn" @click="toCustomer">联系客服</div>
      <div class="dialog-footer-btn" @click="reLogin">重新登录</div>
    </div>

  </div>

</template>
<script>
  import vue from 'vue'
  export default {
    name:'errDialog',
    props: {
      title: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      parentInstance: {
        type: Object,
        default:()=> {
          return {}
        }
      }
    },
    methods: {
      cancel(){
        this.$emit('hideDialog')
      },
      toCustomer(){
        this.$emit('hideDialog')
        let userId = localStorage.getItem('userId');
        window.location.href ='https://webchat.7moor.com/wapchat.html?accessId=3d1c0f90-9951-11e8-a32b-19135ae15371&fromUrl='+window.location +'&urlTitle=' + '&clientId='+(userId? userId : '')
      },
      reLogin(){

        this.$emit('hideDialog')
//        @Todo 这里未生效
        this.parentInstance.$router.push('/')

      }
    },
    created() {
      console.log(this.parentInstance)
    }
  }
</script>
<style lang="less" scoped>
  .err-dialog-class {
    .dialog-footer {
      flex-wrap: wrap;
    }
    .dialog-footer-btn:nth-of-type(3){
      flex-shrink: 0;
      width: 100%;
    }
  }
</style>
