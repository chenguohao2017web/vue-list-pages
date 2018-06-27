import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)
import Detail from '../components/Detail'
import Flow from '../components/Flow'
import Money from '../components/Money'
import Data from '../components/Data'
export default new VueRouter({
  routes:[{
    path: '/',
    redirect: '/detail'
  },{
    path: '/detail',
    component: Detail
  },{
    path: '/flow',
    component: Flow
  },{
    path: '/money',
    component: Money
  },{
    path: '/data',
    component: Data
  }]
})