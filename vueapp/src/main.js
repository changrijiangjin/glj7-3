import Vue from 'vue'
import App from './App'
import router from './router'

// 使用懒加载组件
import VueLazyload from 'vue-lazyload';

// 配置啦懒加载的参数
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // 请求地址出错 会 加载 这里的图片
  error: require('../static/images/mo.png'),
  // 正在请求时加载的图片
  loading: require('../static/images/loading.gif'),
  // 正在请求时加载的图片
  attempt: 1
});

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
