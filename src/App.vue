<template>
  <div class="wrapper">
    <div class="main">
      <router-view/>
    </div>
    <tabbar v-show='app.isShowTabbar'></tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Tabbar from '@/components/Tabbar'

import '@/lib/css/normalize.css'

export default {
  name: 'App',
  components: {
    Tabbar
  },
  // data () {
  //   return {}
  // },
  // computed: {
  //   ...mapGetters([
  //     'isShowToolbar'
  //   ])
  // }
  computed: {
    ...mapState(['app'])
  }
}
</script>

<style lang="scss">
  .wrapper {
    height: 100vh;
    background: white;
    display: flex;
    flex-direction: column;
    >.main {
      flex: 1;
      overflow-x: hidden;
      color: #111;
    }
  }
</style>
