import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Detail from '@/pages/detail'
import Home from '@/pages/home'
import Person from '@/pages/person'
import Order from '@/pages/order'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/index',
      name: 'Index',
      component: Index
    },{
      path: '/detail',
      name: 'Detail',
      component: Detail
    },{
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/order',
      name: 'Order',
      component: Order
    },{
      path: '/person',
      name: 'Person',
      component: Person
    }
  ]
})
