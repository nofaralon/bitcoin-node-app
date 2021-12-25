import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../pages/home-page.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: homePage
    },
    // {
    //     path: '/stay',
    //     component: explorePage
    // },
    // {
    //     path: '/stay/edit/:stayId?',
    //     component: stayEdit
    // },
    // {
    //     path: '/stay/:stayId',
    //     component: stayDetails
    // },
    // {
    //     path: '*',
    //     redirect: '/stay'
    // }
]


export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})