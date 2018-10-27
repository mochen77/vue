import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
// import routesAdd from './routesAdd'

Vue.use(Router)

// const rootRoutes = [...routes]

// console.log(rootRoutes)

const router = new Router({
  routes
})

const isLogin = window.localStorage.getItem('mochen') === 'JHIUIUHSKLJSDOISDSDJOSJDLSKDI'

router.beforeEach((to, from, next) => {
  // 防止错误URL路由
  // if (to.matched.length === 0) {
  //   from.name ? next({ name: from.name }) : next('/')
  //   return false
  // } else {
  //   next()
  // }
  if (to.path === '/login') {
    next()
    return false
  }
  // 如果没有登陆，就跳转到登陆页面
  if (to.meta.authRequired === true && !isLogin) {
    next('/login')
    return false
  } else {
    next()
  }
})

export default router
