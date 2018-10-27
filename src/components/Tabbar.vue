<template>
  <div class="tabbar">
    <router-link
    v-for="item in tabsRoutes"
    :key="item.path"
    :to="item.path">
    <i :class="`iconfont icon-${item.icon}`"></i>
    <span class="title">{{item.title}}</span>
    </router-link>
  </div>
</template>

<script>
import '@/lib/icon/home.scss'
import routes from '@/router/routes'
const tabsRoutes = routes.filter(route => route.tabbar)

export default {
  name: 'tabbar',
  data () {
    return {
      tabsRoutes
    }
  }
}
</script>

<style lang="scss">
  .tabbar {
    width:100%;
    display: flex;
    background: #fff;
    border-top: 1px solid #dedede;
    >a{
      flex:1;
      text-decoration: none;
      text-align: center;
      height:55px;
      display: flex;
      flex-direction: column;
      color: #777;
      .iconfont {
        font-size: 25px;
        line-height: 40px;
      }
      .title {
        font-size: 12px;
        line-height: 10px;
      }

      &.router-link-active {
        color: #fc3b3c;
      }
    }
  }
</style>
