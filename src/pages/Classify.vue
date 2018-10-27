/* eslint-disable */
<template>
  <div>
    <div class="nav">
      <router-link to = "/classify/class">分类</router-link>
      <router-link class = 'two' to = "/classify/brand">品牌</router-link>
    </div>
     <!-- <a href = "#/classify/list/123456?abc=abc789">商品列表</a> -->
      <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
import routes from '@/router/index'
console.log(routes)
export default {
  name: 'classify',
  mounted () {
    this.$store.dispatch('setAppParams', {
      isShowToolbar: true
    })
  }
}
</script>

<style lang="scss" scoped>
body {
  background-color: #f7f7f7;
}
.nav {
  height: 36px;
  width: 100%;
  font-size: 16px;
  border-bottom: 1px solid #f1f1f1;
  color: #333333;
  position: fixed;
  top: 0px;
  background-color: white;
  display: flex;
  justify-content: center;
  a:nth-of-type(1) {
    line-height: 35px;
    display: inline-block;
    margin: 0 50px;
  }
  a:nth-child(2) {
    line-height: 35px;
    display: inline-block;
  }
  .router-link-exact-active {
    color: red;
    border-bottom: 2px solid red;
  }
  .main{
    height: 100%;
  }
}
</style>
