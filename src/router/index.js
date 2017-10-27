import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Detail from '@/pages/detail'
import Home from '@/pages/home'
import Person from '@/pages/person'
import Order from '@/pages/order'
import Login from '@/pages/login'

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
      component: Home,
      beforeEnter: (to, from, next) => {
        if(!this.a.app.$store.state.user){
          next({path:'/login',query:{url:to.path}})
        }else{
          next();
        }

      }
    },{
      path: '/order',
      name: 'Order',
      component: Order
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/person',
      name: 'Person',
      component: Person,
      beforeEnter: (to, from, next) => {
        console.log(to)
        //return false;
      }
    }
  ]
})
