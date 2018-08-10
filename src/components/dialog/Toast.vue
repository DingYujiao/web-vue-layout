<template>
  <div v-if="show" class="common-toast" :class="customClass">
    {{content}}
  </div>
</template>

<script>
  export default {
    name:'toast',
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
      timeOut: {
        type: Number,
        default: 2000
      }
    },
    methods: {
      showToast(){
        this.show = true;
        setTimeout(()=>{
          this.show = false;
        },this.timeOut)
      }
    },
    created(){
      this.showToast()
    }
  }
</script>

<style>
.common-toast {
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
