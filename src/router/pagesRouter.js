const Cart = () => import('@/pages/Cart')
const Details = () => import('@/pages/Details')

const shop = [
  {
    path: '/classify/details/',
    name: 'details',
    component: Details
  }, {
    path: '/cart',
    name: 'cart',
    icon: 'cart',
    component: Cart,
    title: '购物车'
  }, {
    icon: 'cart',
    title: '收藏'
  }, {
    icon: 'cart',
    title: '加入购物车'
  }, {
    path: '/mine',
    name: 'mine',
    icon: 'mine',
    title: '立即购买'
  }
]

export default shop 