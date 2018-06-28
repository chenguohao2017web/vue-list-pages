import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HomeIntro from '../components/HomeIntro'
import HomeActicle from '../components/HomeActicle'
import HomeActivity from '../components/HomeActivity'

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/intro'
        },
        {
            path: '/activity',
            name: 'HomeActivity',
            component: HomeActivity
        },
        {
            path: '/intro',
            name: 'HomeIntro',
            component: HomeIntro
        },
        {
            path: '/acticle',
            name: 'HomeActicle',
            component: HomeActicle
        }
    ]
})