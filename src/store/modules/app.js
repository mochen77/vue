
// initial state
const state = {
  // isShowToolbar: true,
  cart: JSON.parse(window.localStorage.getItem('cart')) || [],
  count: 100,
  isShowTabbar: true,
  userName: window.localStorage.getItem('username') || '吃雪糕吐泡泡'
}
// const getters = {
//   isShowToolbar: (state, getters) => {
//     return state.isShowToolbar
//   }
// }
// actions
const actions = {
  setAppParams ({ commit }, config) {
    // ll
    commit('setAppParams', config)
  }
}
// mutations
const mutations = {
  setAppParams (state, config) {
    Object.assign(state, config)
  },
  addCart (state, cartItem) {
    const aa = cartItem.id
    // console.log('JJJ', cartItem, state.cart)
    const isCart = state.cart.some(item => item.id === aa)
    // console.log(isCart)
    if (isCart) {
      state.cart = state.cart.map((item) => {
        const newItem = Object.assign({}, item)
        if (newItem.id === aa) {
          newItem.count += 1
        }
        return newItem
      })
    } else {
      state.cart.push({
        count: 1,
        ...cartItem
      })
    }
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
    console.log('jioojj', state.cart)
  },
  // addHomeListShop () {

  // },
  newAddCart (state, payload) {
    console.log(state, payload)
    state.cart = state.cart.map((item) => {
      const newItem = Object.assign({}, item)
      if (newItem.id === payload.id) {
        if (payload.type === 'addCount') {
          newItem.count += 1
          newItem.subtotal = newItem.price * newItem.count
        } else {
          newItem.count -= 1
          newItem.subtotal = newItem.price * newItem.count
        }
      }
      return newItem
    })
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  toggleTabbar (state, show = true) {
    state.isShowTabbar = show
  },
  gainUserName (state, name = '吃雪糕吐泡泡') {
    state.userName = name
  }
}

export default {
  // namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
