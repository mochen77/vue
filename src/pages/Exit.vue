<template>
  <div class="exitBody">
    <mt-header title="设 置" style="font-size:18px;">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click='backUp'></mt-button>
      </router-link>
    </mt-header>
    <mt-button size="large" class="btn" @click="onExit" type="danger">退出登录</mt-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'exit',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapMutations(['toggleTabbar']),
    backUp () {
      this.$router.history.go(-1)
    },
    onExit () {
      window.localStorage.removeItem('mochen')
      window.location.reload()
      window.location.hash = 'home'
    }
  },
  mounted () {
    this.toggleTabbar(false)
  },
  beforeDestroy () {
    this.toggleTabbar(true)
  }
}
</script>

<style lang="scss" scoped>

</style>
