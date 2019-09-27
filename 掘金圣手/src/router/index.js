import Vue from 'vue';
import VueRouter from 'vue-router';

// import Registered from '../views/login/Registered.vue'
// import SubmitSucc from '../views/login/SubmitSucc.vue'

export default () => {
    // 注册登录
    const Registered = () => import('../views/login/Registered.vue');
    const SubmitSucc = () => import('../views/login/SubmitSucc.vue');
    //首页 
    const Home = () => import('../views/home/Home.vue');
    const HomeDetails = () => import('../views/home/Home.details.vue');
    const HomePay = () => import('../views/home/Home.pay.vue');
    const HomePayPassword = () => import('../views/home/Home.pay.password.vue');
    const HomeSetPayPassword = () => import('../views/home/Home.pay.setpassword.vue');
    // 我的
    const Mine = () => import('../views/mine/Mine.vue');
    const MineSetting = () => import('../views/mine/Mine.setting.vue');
    const MineSettingSel = () => import('../views/mine/Mine.setting.sel.vue');
    const MineWallet = () => import('../views/mine/Mine.wallet.vue');

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
        {
            name: 'homeSetPayPassword',
            path: '/homeSetPayPassword',
            component: HomeSetPayPassword,
        },
        {
            name: 'mineSetting',
            path: '/mineSetting',
            component: MineSetting,
        },
        {
            name: 'mineSettingSel',
            path: '/mineSettingSel',
            component: MineSettingSel,
        },
        {
            name: 'mineWallet',
            path: '/mineWallet',
            component: MineWallet,
        }
    ]);
    Vue.use(VueRouter);
    return router;
};