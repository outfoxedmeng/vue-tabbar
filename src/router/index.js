import Vue from 'vue'
import VurRouter from 'vue-router'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: () => import('../views/home/Home')
        },
        {
            path: '/cart',
            component: () => import('../views/cart/Cart')
        },
        {
            path: '/profile',
            component: () => import('../views/profile/Profile')
        },
        {
            path: '/category',
            component: () => import('../views/category/Category')
        }
    ]
})

export default router