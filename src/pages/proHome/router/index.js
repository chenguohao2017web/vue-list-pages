import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)
import Detail from '../components/Detail'
import Flow from '../components/Flow'
import Succ from '../components/Succ'
import Apply from '../components/apply'

import Around from '../components/Around'
import Repair from '../components/Repair'
import Mating from '../components/Mating'
import HomeType from '../components/HomeType'
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
    path:'/succ',
    component:Succ
  }, {
    path:'/apply',
    component:Apply
  },{
    path:'/around',
    component:Around
  },{
    path:'/homeType',
    component:HomeType
  },{
    path:'/repair',
    component:Repair
  },{
    path:'/mating',
    component:Mating
  }]
})