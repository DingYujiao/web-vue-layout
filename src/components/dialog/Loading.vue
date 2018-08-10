<template>
  <div v-if="show" class="common-loading" :class="customClass">
    {{content}}
  </div>
</template>

<script>
  export default {
    name:'loading',
    data(){
      return {
        show: false
      }
    },
    props: {
      customClass: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      icon: {
        type: Boolean,
        default: false
      },
      iconType: {
        type: Number,
        default: 1
      }
    },
    methods: {
      showLoading(){
        this.show = true;
      },
      hideLoading(){
        this.show = false;
      }
    },
    created(){
      this.showLoading()
    }
  }
</script>

<style lang="less" scoped>
  .common-loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    max-width: 740rem/100;
    padding: 20rem/100;
    border-radius: 2px;
    background-color: rgba(0,0,0,.7);
    color: #fff;
  }
</style>
