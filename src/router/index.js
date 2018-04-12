import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../page/index.vue'
import Detail from '../page/detail.vue'
import Sc2 from '../page/detail/sc2.vue'
import D3 from '../page/detail/d3.vue'
import Wow from '../page/detail/wow.vue'
import Hs from '../page/detail/hs.vue'
import OrderList from '../page/orderList.vue'
import DatePicker from '../page/datePicker.vue'
import User from '../page/user.vue'
import scss from '../page/scss.vue'

Vue.use(Router)

export default new Router({
  // mode:'history',
  base:'/vue-store-practice/',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: OrderList
    },
    {
      path: '/detail',
      name: 'Detail',
      redirect:'detail/count',
      component: Detail,
      children:[
        { path: 'sc2',
          name: 'Sc2',
          component: Sc2
        },
        { path: 'd3',
          name: 'D3',
          component: D3
        },
        { path: 'wow',
          name: 'Wow',
          component: Wow
        },
        { path: 'hs',
          name: 'HS',
          component: Hs
        }
      ]
    },
    {
      path: '/datePicker',
      name: 'datePicker',
      component: DatePicker
    },
    {
      path: '/user/:id',
      name: 'User',
      component:User,
      props:true,
      children:[
        {
          path: 'scss',
          name: 'scss',
          component: scss
        }
      ]
    },
  ]
})
