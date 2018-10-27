<template>
  <div class="searchBody">
    <mt-search
      v-model="search"
      cancel-text="取消"
      placeholder="搜索"
      style="opacity: 0.8"
      >
    </mt-search>
    <div class="back" @click="onBack">
      back
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'search',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapMutations(['toggleTabbar', 'gainUserName']),
    onBack () {
      this.$router.history.go(-1)
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
  .searchBody {
    background: #fff url(../lib/img/searchBackground.jpg) no-repeat;
    background-size: 300% 100%;
    position: relative;
    .back {
      width: 50px;
      height: 50px;
      text-align: center;
      color: #eee;
      line-height: 50px;
      border-radius: 50%;
      position: absolute;
      background: rgba(0, 0, 0, 0.3);
      top: 75%;
      right: 12%;
    }
  }
</style>
