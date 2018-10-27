const Home = () => import('@/pages/home')
const Classify = () => import('@/pages/classify')
const Cart = () => import('@/pages/cart')
const Mine = () => import('@/pages/mine')
const List = () => import('@/pages/List/index')
const Class = () => import('@/pages/List/Class')
const Brand = () => import('@/pages/List/Brand')
const Details = () => import('@/pages/Details')
const Login = () => import('@/pages/login')
const Sign = () => import('@/pages/sign')
const Exit = () => import('@/pages/exit')
const Search = () => import('@/pages/search')
const Homelist = () => import('@/pages/homelist')

const routes = [
  {
    path: '/',
    redirect: 'home'
  }, {
    path: '/home',
    name: 'home',
    icon: 'home',
    component: Home,
    tabbar: true,
    title: '首页'
  }, {
    path: '/classify',
    name: 'classify',
    icon: 'classify',
    component: Classify,
    redirect: '/classify/class',
    tabbar: true,
    title: '分类',
    children: [
      {
        path: 'class',
        component: Class
      },
      {
        path: 'brand',
        component: Brand
      }
    ]
  }, {
    path: '/classify/list/',
    name: 'list',
    component: List
  }, {
    path: '/classify/details/:id',
    name: 'details',
    component: Details,
    title: '分类'
  }, {
    path: '/cart',
    name: 'cart',
    icon: 'cart',
    component: Cart,
    tabbar: true,
    title: '购物车'
  }, {
    path: '/mine',
    name: 'mine',
    icon: 'mine',
    meta: {
      authRequired: true
    },
    component: Mine,
    tabbar: true,
    title: '我的'
  }, {
    path: 'history',
    srcollBehavior (to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash
        }
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    icon: 'login',
    component: Login,
    title: '登陆'
  },
  {
    path: '/sign',
    name: 'sign',
    icon: 'sign',
    component: Sign,
    title: '注册'
  },
  {
    path: '/exit',
    name: 'exit',
    icon: 'exit',
    component: Exit,
    title: '退出'
  },
  {
    path: '/search',
    name: 'search',
    icon: 'search',
    component: Search,
    title: '搜索'
  },
  {
    path: '/homelist',
    name: 'homelist',
    icon: 'homelist',
    component: Homelist,
    title: '首页商品'
  }
]

export default routes
