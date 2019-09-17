import Vue from 'vue';
import VueRouter from 'vue-router';

// import Registered from '../views/login/Registered.vue'
// import SubmitSucc from '../views/login/SubmitSucc.vue'

export default () => {
    const Registered = () => import('../views/login/Registered.vue');
    const SubmitSucc = () => import('../views/login/SubmitSucc.vue');
    const Home = () => import('../views/home/Home.vue');
    const Mine = () => import('../views/mine/Mine.vue');
    const router = new VueRouter();
    router.addRoutes([
        {
            path: '/',
            redirect: {
                name: 'registered',
            }
        },
        {
            name: 'registered',
            path: '/registered',
            component: Registered,
        },
        {
            name: 'submitSucc',
            path: '/submitSucc',
            component: SubmitSucc,
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
        },
        {
            name: 'mine',
            path: '/mine',
            component: Mine,
        },
    ]);
    Vue.use(VueRouter);
    return router;
};