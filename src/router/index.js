import Vue from "vue";
import VueRouter from "vue-router";
import Main from '../views/index'
import Recommendation from "../views/Recommendation";
import Order from '../views/Order'

Vue.use(VueRouter)
const routes = [
    {path: '/', component: Main},
    {path: '/recommendation', component: Recommendation},
    {path: '/order', component: Order},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router