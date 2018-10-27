<template>
    <div class="cart">
      <div class="cang_ku">
          <mt-checklist :style="{fontSize: '12px'}"
          v-model="value"
          :options="['国庆嗨购']">
        </mt-checklist></div>
      <div class="title"><i>满减</i><span>已满199-40元</span> <a href="">再逛逛</a></div>
      <div  class="map"><img :src="url" alt="图片">
        <span>{{title}} </span>
        <i>￥{{price}} </i>
        <!-- <p>{{subtotal}}</p> -->
        <div class="count">
          <mt-button type="default"
          @click="changeCount({type:'reduceCount',id})"
          >-</mt-button>
          <mt-button type="default">{{count}}</mt-button>
          <mt-button type="default"
          @click="changeCount({type: 'addCount',id})"
          >+</mt-button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      value: [],
      options: 1,
      fontSize: 12
    }
  },
  name: 'cart',
  props: {
    id: Number,
    title: String,
    url: String,
    count: Number,
    changeCount: Function,
    price: Number
  }
}
</script>

<style lang="scss" scoped>
body{
  background-color: #f5f5f5;
}
.cart {
  height: 190px;
  font-size: 12px;
  border-bottom: 1px solid #f5f5f5;
  .cang_ku {
    height: 42px;
    border-bottom: 1px solid #f5f5f5;
    background-color: #ffffff;
    line-height: 42px;
  }
  .title {
    height: 43px;
    line-height: 42px;
    background-color: #ffffff;
    i{
      font-style:normal;
      margin : 0 10px
    }
  }
  .mint-checkbox-label{
      font-size: 12px !important;
  }
  .map {
    height: 95px;
    background-color: #ffffff;
    img {
      width: 90px;
      height: 90px;
      float: left;
      border: 1px solid #f5f5f5;
    }
    span {
      float: left;
    }
    i {
      float: left;
      width: 70%;
      color: red;
      font-style: normal;
      font-size: 16px;
    }
  }
  .imput {
    height: 20px;
  }
  .count {
    float: right;
    display: inline-block;
    background-color: #ffffff;
  }
  img {
    width: 80px;
  }
}
</style>
