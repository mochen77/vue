<template>
  <div>
    <ca-header :isBackShow = 'isBackShow'>
      <h4></h4>
      <div slot="extra">分享</div>
    </ca-header>
    <div class="list">
      <router-link :to ="'/classify/details/'+item.id"
      v-for='item in todos'
      :key="item.id"
      >
      <!-- 需要动态绑定 -->
        <img :src="item.img" alt="">
        <div class="title">
          <i>{{item.title}}</i>
        </div>
        <p>￥{{item.price}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import CaHeader from '@/components/CaHeader'

import { getList } from '@/services'

import { mapMutations } from 'vuex'

export default {
  name: 'list',
  data () {
    return {
      todos: [],
      isBackShow:false
    }
    console.log(props)
  },
  components: {
    CaHeader
  },
  mounted () {
    //     console.log(this.$route.params)
    // console.log(this.$route.query)
    // console.log(location.search)
    // ajax请求
    // this.$http
    //   .get("http://rap2api.taobao.org/app/mock/25330/api/v3/details")
    //   // 使用function 需要存储this
    getList()
      .then(response => {
        console.log(response)
        this.todos = response
      })
      .catch(response => {
        console.log(response)
      })
    this.$store.dispatch('setAppParams', {
      isShowToolbar: false
    })
    this.toggleTabbar(false)
  },
  methods: {
    ...mapMutations(['toggleTabbar']),
  },
  beforeDestroy () {
    this.toggleTabbar(true)
  }
}
</script>

<style lang="scss" scoped>
  .ca-headre{
    height: 18px;
    border-bottom: 1px solid #666;
    display: flex;
    line-height: 18px;
    &-title{
      flex: 1
    }
  }
  .list{
    display: flex;
    // 自动换行
    flex-wrap: wrap;
    // 两边对其
    justify-content: space-between;
    background-color: #F7F7F7;
    >a{
      display: inline-block;
      width: 49%;
      height: 278px;
      background-color: white;
      margin-bottom: 5px;
      color: #333;
      img{
        width: 158px;
        height: 158px;
        border-color: #F7F7F7;
      }
      i{
        font-size: 12px;
        font-style: normal;
      }
      .title{
        height: 40px;
      }
      p{
        height: 30px;
        margin-top: 20px;
        font-weight: 600;
         font-weight: normal;
      }
    }
  }
</style>
