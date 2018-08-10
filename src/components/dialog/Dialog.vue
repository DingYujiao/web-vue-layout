<template >
  <transition mode="out-in" appear>
    <div v-if="dialogShow" class="dialog-wrapper" :class=" withShadow ? 'dialog-shadow' +  dialogClass : dialogClass"  @click="shadowHandle">
      <!--<div v-if="withShadow" class="dialog-shadow"></div>-->
      <toast v-if="isToast" class="toast-wrapper" :content="content"></toast>
      <loading v-if="isLoading" class="loading-wrapper" :content="content"></loading>
      <div v-else-if="isConfirm || isAlert || isComment"  class="dialog-content">
        <div v-if="isConfirm || isAlert"  class="dialog-main-content">
          <div class="dialog-header">
            <div v-if="withClose" class="dialog-close-btn" @click="hideDialog">×</div>
            <h3 v-if="title" class="dialog-title">{{title}}</h3>
          </div>
          <div class="dialog-main" v-html="content">

          </div>
          <div class="dialog-footer">
            <div v-if="isConfirm" class="dialog-footer-btn" @click="cancelHandle">取消</div>
            <div class="dialog-footer-btn" @click.user="confirmHandle">确定</div>
          </div>
        </div>
        <div  v-if="isComment"  :is="component" @hideDialog="hideDialog"></div>
      </div>

      <div v-else>{{content}}</div>


    </div>
  </transition>

</template>

<script>

  import Toast from '@/components/dialog/Toast'
  import Loading from '@/components/dialog/Loading'

  export default {
    name:'qqqqqqqqqqqqqqqq',
    data(){
      return {
        dialogShow: false,
        isToast: false,
        isLoading: false,
        isAlert: false,
        isConfirm: false,
        isComment: false
      }
    },
    components:{'toast':Toast,'loading':Loading},
    props: {
      content: {
        type: String,
        default: ""
      },
      component: {
        type: Object,
        default: ()=>{
          return {}
        }
      },
      title: {
        type: String,
        default: ""
      },
      dialogClass: {
        type: String,
        default: ""
      },
      withClose: {//是否具有右侧关闭按钮
        type: Boolean,
        default: false
      },
      withShadow: {
        type: Boolean,
        default: true
      },
      type: {//弹窗类型
        type: String,
        default: "confirm"
      },
      ghost: {//点击穿透
        type: Boolean,
        default: false
      },
      confirmHandle: {//确认按钮的处理函数
        type: Function,
        default:()=>{


          return ''
        }
      },
      cancelHandle: {//确认按钮的处理函数
        type: Function,
        default:()=>{


          return ''
        }
      },
    },

    methods: {
      show(){
        switch (this.type){
          case "confirm":
            this.confirm()
            break
          case "loading":
            this.loading()
            break
          case "alert":
            this.alert()
            break
          case "toast":
            this.toast()
            break
          case "userDefine":
            this.userDefine()
            break
          default :
            this.confirm()
        }

      },
      hide(){
        this.hideDialog()
      },

      showDialog(){

        this.dialogShow = true;
      },
      hideDialog(e){
        this.dialogShow = false;

      },
      shadowHandle(){
        if(this.ghost){
          this.hideDialog()
        }

      },

      toast(){
        this.isToast = true;
        this.withShadow = false;
        this.showDialog()
        setTimeout(()=>{
          this.hideDialog()
        },2000)
      },
      confirm(){
        console.log(this.withShadow ,'withShadow')
        this.isConfirm = true;
        this.showDialog()
      },
      alert(){
        this.isAlert = true;
        this.showDialog()
      },
      loading(){
        this.withShadow = false;
        this.isLoading = true;
        this.showDialog()
      },
      userDefine(){
        this.isComment = true;
        this.showDialog()
      }
    },
    created(){
//      let _this = this;
//      console.log(this.component)
//      let test = Object.assign({},this.component)
//      this.propCom = test
//      console.log(this.loading())
    }
  }
</script>

<style lang="less" scoped>
  html,body {
    width: 100%;
    height: 100%;
  }
  .dialog-wrapper {
    font-size: 34rem/100;
  }
  .fixed-position{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-shadow {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
  }

  .dialog-content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%,-50%);
    background-color: #f8f8f8;
    border-radius: 2px;
    text-align: center;
  }
  .dialog-title {
    padding: 34rem/100 34rem/100 15rem/100;
    font-size: 32rem/100;
    font-weight: normal;
  }
  .dialog-main {
    padding: 15rem/100 34rem/100 34rem/100;
    font-size: 24rem/100;
  }


  .dialog-footer {
    display: flex;
    padding: 0 34rem/100 34rem/100;
    .dialog-footer-btn {
      flex: 1;
      margin-right: 28rem/100;
      height: 88rem/100;
      line-height: 88rem/100;
      background-color: #fff;
      border-radius: 44rem/100;
      text-align: center;
      color: #323232;
      font-size: 24rem/100;
      &:last-of-type{
        margin-right: 0;
        background-color: #323232;
        color: #fff;
      }
    }
  }

</style>
