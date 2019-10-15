import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        { path: '/goods', component: goods },
        { path: '/ratings', component: ratings },
        { path: '/seller', component: seller }
    ]
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
