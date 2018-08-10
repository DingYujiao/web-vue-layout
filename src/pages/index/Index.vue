<template>
  <div>
    <p @click="testDialog">测试弹窗</p>
    <p @click="close">close</p>
  </div>
</template>

<script>
  import testDialog from '@/components/testDialog'

  export default {
    data(){
      return {

      }
    },
    methods: {
      testDialog(){
        this.$dialog.show({
          content: '<h1>aa</h1>',
          component: testDialog,
          dialogClass:'testClass',
          title:'ceshi',
          type: "loading"
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

    }
  }
</script>

<style>

</style>
