<template>
  <div class="homeListBody">
    <mt-header title="商品详情" style="background:#fff;color:#333">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="homelistlogo">
      <img src="../lib/img/homelistlogo.jpg" alt="">
    </div>
    <div class="homeShop">
      <div class="listShop" v-for="item in commodity" :key='item.id'>
        <div class="listImg">
          <img :src="item.img" alt="">
        </div>
        <div class="listTitle">
          <span>{{item.title}}</span>
          <p><span>￥<span>{{item.parice}}</span></span><i class="iconfont icon-homecart" @click='addHomeListShop($event)' :id='item.id'></i></p>
        </div>
      </div>
    </div>
    <div class="back" @click="onBack">
      back
    </div>
    <div class="homeCart" click="openHomeCart">
      <i class="iconfont icon-homelistcart"></i>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { gitHomeList } from '../servicesmochen'
export default {
  name: 'homelist',
  data () {
    return {
      search: '',
      commodity: {},
      addHomeCartShop: []
    }
  },
  methods: {
    ...mapMutations(['toggleTabbar', 'gainUserName']),
    onBack () {
      this.$router.history.go(-1)
    },
    addHomeListShop (e) {
      // console.log(e.target)
      const shopId = parseInt(e.target.id)
      const isInCart = this.addHomeCartShop.some(item => item.id === shopId)
      console.log(isInCart)
      if (isInCart) {
        this.addHomeCartShop = this.addHomeCartShop.map((item) => {
          const newItem = Object.assign({}, item)
          if (newItem.id === shopId) {
            newItem.count += 1
          }
          return newItem
        })
      } else {
        const addshop = this.commodity.filter((data) => {
          return data.id === shopId
        })
        this.addHomeCartShop.push({
          count: 1,
          ...addshop[0]
        })
      }
      console.log(this.addHomeCartShop)
    //   const addshop = this.commodity.filter((data) => {
    //     return data.id === shopId
    //   })
    //   this.addHomeCartShop.forEach(function (arr, index) {
    //     if (arr.id === shopId) {
    //       arr.count += 1
    //     } else {
    //       this.addHomeCartShop.push(addshop[0])
    //     }
    //   })
    //   console.log(this.addHomeCartShop)
    }
  },
  mounted () {
    this.toggleTabbar(false)
    gitHomeList()
      .then((resp) => {
        // console.log(resp[0].id == '1')
        this.commodity = resp
      })
  },
  beforeDestroy () {
    this.toggleTabbar(true)
  }
}
</script>

<style lang="scss" scoped>
  .homeListBody {
    min-height: 100%;
    background: #fff url(../lib/img/searchBackground.jpg) repeat;
    background-size: 300% 100%;
    position: relative;
    .homelistlogo {
      img {
        width: 100%;
      }
    }
    .homeShop {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      .listShop {
        width: 30%;
        display: flex;
        flex-direction: column;
        background: rgba($color: #fff, $alpha: 0.4);
        margin-bottom: 7px;
        .listImg {
          width:100%;
          img {
            width: 100%;
          }
        }
        .listTitle {
          display: flex;
          flex-direction: column;
          margin: 0 2px;
          >span {
            color: #333;
            font-size: 13px;
            margin: 3px 0;
          }
          p {
            color: #666;
            font-size: 12px;
            margin-bottom: 2px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              color: rgb(228, 34, 34);
              span{
                font-size: 15px;
                font-weight: 700;
              }
            }
            i {
              // border:1px solid #999;
              // border-radius: 50px;
              margin-right: 4px;
              font-size: 20px;
            }
          }
        }
      }
    }
    .back {
      width: 50px;
      height: 50px;
      text-align: center;
      color: #eee;
      line-height: 50px;
      border-radius: 50%;
      position: fixed;
      background: rgba(0, 0, 0, 0.3);
      top: 75%;
      right: 10%;
    }
    .homeCart {
      width: 50px;
      height: 50px;
      text-align: center;
      color: #eee;
      line-height: 50px;
      border-radius: 50%;
      position: fixed;
      background: rgba(0, 0, 0, 0.3);
      top: 75%;
      left: 10%;
      i {
        font-size: 25px;
      }
    }
  }
</style>
