<template>
  <div>
    <p @click="testDialog">测试弹窗</p>
    <p @click="close">close</p>
  </div>
</template>

<script>
  import errDialog from '@/components/errDialog'

  export default {
    data(){
      return {

      }
    },
    methods: {
      testDialog(){
        let _this = this;
        this.$dialog.show({
          parentInstance: _this,
          content: '<h1>aa</h1>',
          component: errDialog,
          dialogClass:'testClass',
          title:'ceshi',
          type: "userDefine"
        });
//        this.$dialog.loading({
//          content: '<h1>qqqqq</h1>',
//        })
//        this.$dialog.toast({
//          content: '<h1>qqqqqqqqqqqqqqqqqq</h1>',
//        })
//        this.$dialog.userDefine({
//
//          component: testDialog
//        })

      },
      close(){

        this.$dialog.$show.hide()
      }
    },
    created(){
//      console.log('ss')
//      this.$router.push('/error')
//      console.log('')
    }
  }
</script>

<style>

</style>
