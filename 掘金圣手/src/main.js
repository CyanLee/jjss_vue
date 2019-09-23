import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import './utils/rem'

// 导入视图的路由器
import RouterComponent from './router/index';
const router = RouterComponent();

// 导入公共视图的路由设置(包含控制器的子组件)
import CommonComponent from './router/commonRouter';
CommonComponent();

// 导入mint-ui的组件配置
import MintUIComponent from './router/mintUIComponent'; 
MintUIComponent();

// 导入公共的样式
import './less/common.less';

Vue.config.productionTip = false

Vue.use(VueRouter);
// Vue.use(vueScrollBehavior, { router: router })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App>',
  router,
})
