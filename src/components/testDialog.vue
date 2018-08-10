<template>
  <div class="user-defined-class">
    <div class="dialog-footer ">
      <div class="dialog-footer-btn" @click="cancel">取消</div>
      <div class="dialog-footer-btn" @click="cancel">确定</div>
    </div>

  </div>

</template>
<script>
  export default {
    name:'testDialog',
    methods: {
      cancel(){
        this.$emit('hideDialog',{ss:'ssa'})
      }
    }
  }
</script>
<style>

</style>
