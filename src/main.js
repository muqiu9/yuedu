import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router/index'

import './assets/css/reset.css'

axios.defaults.baseURL = "https://yd.kassing.cn/api"
Vue.prototype.axios = axios
Vue.axios = axios

Vue.config.productionTip = false

// 添加请求拦截
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    // 在发出请求前，给所有请求的头部都添加token
    config.headers.common['Authorization'] = "Bearer " + token
  }
  return config
})

// 添加响应拦截
axios.interceptors.response.use(res => {
  // 判断res.data.res_code 是否是401 如果是则跳转到登录，如果不是则正常返回
  if (res.data.res_code === 401) {
    router.push('/login')
  }
  return res
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
