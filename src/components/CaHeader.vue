<template>
    <div class="ca-headre">
        <div class="ca-header-back" @click="onBack"> <span v-if="isBackShow"></span>  <i class="iconfont icon-fanhui1"></i></div>
        <div class="ca-header-title"><slot ></slot></div>
        <div class="ca-header-right"><slot name="extra"></slot></div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'caHeader',
    props: {
      isBackShow:Boolean
    },
    methods: {
      onBack() {
        //路由进行返回
        this.$router.history.go(-1)
        // console.log(this.$router)
      }
    }
}
</script>

<style lang="scss" scoped>
  .ca-headre{
    height: 40px;
    border-bottom: 1px solid #F7F7F7;
    display: flex;
    justify-content: space-between;
    line-height: 18px;
    padding: 0 15px;
    color: #333333;
    i{
      line-height: 45px;
      font-size: 24px
    }
    &-title{
      flex: 1;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
    .ca-header-right{
       height: 40px;
       line-height: 40px;
      text-align: center;
    }
  }

</style>
