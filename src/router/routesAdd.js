const Login = () => import('@/pages/login')
const Sign = () => import('@/pages/sign')
const Exit = () => import('@/pages/exit')
const Search = () => import('@/pages/search')
const Homelist = () => import('@/pages/homelist')

const routesAdd = [
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
    title: '注册'
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
    title: '搜索'
  }
]

export default routesAdd
