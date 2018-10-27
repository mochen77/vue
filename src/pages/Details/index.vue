/* eslint-disable */
<template>
  <div>
      <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="img in todo.images" :key="img.url">
          <img :src='img.url' alt="图片">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="des">
      <!-- <img :src='item.img' alt=""> -->
      <span>￥{{todo.price}}</span>
      <p>{{todo.title}}</p>
        <div class="shop">
        <router-link to ="/cart">
           <div class="cart" @click="cart">
                 <i class="iconfont icon-gouwuche"></i>
             <span>  购物车</span>
             </div>
        </router-link>
        <div class="collect">
           <i class="iconfont icon-shoucang"></i>
           <span> 收藏</span>
          </div>
        <div class="add" @click= 'addCart({
          id: todo.id,
          price: todo.price,
          title: todo.title,
          img: todo.img
        })'>加入购物车</div>
        <div class="buy">立即购买</div>
      </div>
    </div>
    <div class="details">
      &nbsp;&nbsp; &nbsp;&nbsp;{{todo.content}}
      <!-- <img :src='m1' alt="图片">
      <img :src='m2' alt="图片"> -->
      <img src="../../../static/img/110.jpg" alt="">
    </div>
  </div>

</template>

<script>
import { mapState, mapMutations } from 'vuex'
import lunbo from '../img/11.jpg'
import img1 from '../img/14.jpg'
import img2 from '../img/15.jpg'
import img3 from '../img/16.jpg'

export default {
  name: 'cart',
  data () {
    return {
      todo: {},
      img: lunbo,
      m1: img1,
      m2: img2,
      m3: img3
    }
  },
  mounted () {
    //     console.log(this.$route.params)
    // console.log(this.$route.query)
    // console.log(location.search)
    // ajax请求
    let id = this.$route.params.id
    console.log(id)
    this.$http
      .get('http://rap2api.taobao.org/app/mock/25330/api/v2/detail/' + id)
      // 使用function 需要存储this
      .then(response => {
        console.log(response.data.data)
        this.todo = response.data.data || {}
      })
      .catch(response => {
        console.log(response)
      })
    // this.$store.dispatch('setAppParams', {
    //   isShowToolbar: false
    // })
    this.toggleTabbar(false)
  },
  computed: {
    ...mapState(['app'])
    // cart:start =>app.cart
  },
  methods: {
    ...mapMutations(['addCart', 'toggleTabbar']),
    add (e) {
      let list = [{ id: e }]
      console.log(list)
      window.localStorage.setItem('list', JSON.stringify(list))
    },
    cart () {
      console.log('sds')
    }
  },
  beforeDestroy () {
    this.toggleTabbar(true)
  }
}
</script>

<style lang="scss">
.des{
    margin: 0 15px;
    font-size: 16px;
    color: #333333;
    span{
      display: inline-block;
      line-height: 20px;
      font-size: 18px;
      margin: 10px 0;
    }
    p{
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 25px;
       line-height: 20px;
       border-bottom:1px solid  #e5e5e5
    }

}
.details {
  font-size: 12px;
  margin: 0 15px;
  line-height: 15px;
  color: #333333;
   line-height: 20px;
  img {
    width: 100%;
  }
}
.shop {
  display: flex;
  justify-content: center;
  height: 42px;
  position: fixed;
  bottom: 0;
  text-align: center;
  white-space: nowrap;
  width: 100%;
  .cart {
    flex: 1;
    width: 100%;
    height: 42px;
     background-color: white;
     display: flex;
     justify-content: space-between;
     flex-direction: column;
     i{
       font-size: 20px;
       line-height: normal;
         margin: 0;
         padding: 0;
     }
     span{
       font-size: 12px;
       margin: 0;
        padding: 0;
     }
  }
  .collect {
    width: 65px;
    height: 42px;
    background-color: white;
    font-size: 14px;
    text-align: center;
    line-height: 42px;
     display: flex;
     justify-content: space-between;
     flex-direction: column;
     i{
       font-size: 20px;
       line-height: normal;
         margin: 0;
         padding: 0;
     }
     span{
       font-size: 12px;
       margin: 0;
        padding: 0;
     }
  }
  .add {
    width: 100%;
    font-size: 16px;
    background-color: #ffa820;
    color: white;
    line-height: 42px;
     flex: 1;
  }
  .buy {
    line-height: 42px;
    width: 110px;
    font-size: 16px;
    color: white;
    background-color: #fb3c3c;
  }
}
.mint-swipe {
  height: 330px;
  img {
    height: 330px;
  }
}
image[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
