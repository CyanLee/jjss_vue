import Vue from 'vue';
import VueRouter from 'vue-router';

// import Registered from '../views/login/Registered.vue'
// import SubmitSucc from '../views/login/SubmitSucc.vue'

export default () => {
    const Registered = () => import('../views/login/Registered.vue');
    const SubmitSucc = () => import('../views/login/SubmitSucc.vue');
    const Home = () => import('../views/home/Home.vue');
    const HomeDetails = () => import('../views/home/Home.details.vue');
    const Mine = () => import('../views/mine/Mine.vue');
    const HomePay = () => import('../views/home/Home.pay.vue');
    const HomePayPassword = () => import('../views/home/Home.pay.password.vue');
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
        {
            name: 'homeDetails',
            path: '/homeDetails',
            component: HomeDetails,
        },
        {
            name: 'homePay',
            path: '/homePay',
            component: HomePay,
        },
        {
            name: 'homePayPassword',
            path: '/homePayPassword',
            component: HomePayPassword,
        },
    ]);
    Vue.use(VueRouter);
    return router;
};