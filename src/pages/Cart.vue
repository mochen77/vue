<template>
  <div>
    <div v-if="app.cart.length  > 0 " >
    <CartItem
     v-for="item in app.cart"
     :id = "item.id"
     :key = "item.url"
     :title ="item.title"
     :price = "item.price"
     :count = "item.count"
     :url = "item.img"
     :changeCount="newAddCart"
     :subtotal = item.subtotal
    >
    </CartItem>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import CartItem from '@/components/CartItem'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'cart',
  components: {
    CartItem
  },
  mounted () {
    this.$store.dispatch('setAppParams', {
      isShowToolbar: true
    })
    //可取到state的值
    console.log('aaa', this.$store.state)
  },
  methods: {
    ...mapMutations(['newAddCart']),
    created () {
      //   var a = sessionStorage.getItem('id')
      //   var obj = window.essionStorage.getItem('id')
      //   console.log(a, obj)
    },
    changeCount (type, id) {
      console.log(type, id)
    },
  },
  computed: {
    ...mapState(['app'])
    // const cart = start.app.cart
  }
}
</script>
<style lang="scss" scoped>
html,
body {
  background-color: #f5f5f5;
}
</style>
