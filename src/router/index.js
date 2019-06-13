import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import routes from './routes'

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  // 守卫条件判断
  if (to.matched.some(route => route.meta.auth)) {
    const token = localStorage.getItem('token')
    // 判断令牌是否存在
    if (token) {
      Vue.axios.post('/user/token').then(res => {
        if (res.data.res_code === 200) {
          next()
        }
      })
    } else {
      next("/login")
    }
  } else {
    next()
  }
})

export default router