import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../page/index.vue'
import Detail from '../page/detail.vue'
import Forecast from  '../page/detail/forecast.vue'
import Analysis from  '../page/detail/analysis.vue'
import Count from  '../page/detail/count.vue'
import Publish from  '../page/detail/publish.vue'
import OrderList from '../page/orderList.vue'
import DatePicker from '../page/datePicker.vue'
import User from '../page/user.vue'
import ccc from '../page/userchild.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
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
        { path: 'forecast',
          name: 'Forecast',
          component: Forecast
        },
        { path: 'analysis',
          name: 'Analysis',
          component: Analysis
        },
        { path: 'count',
          name: 'Count',
          component: Count
        },
        { path: 'publish',
          name: 'Publish',
          component: Publish
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
      component: User,
      children:[
        {
          path: 'ccc',
          name: 'ccc',
          component: ccc
        }
      ]
    },
  ]
})
