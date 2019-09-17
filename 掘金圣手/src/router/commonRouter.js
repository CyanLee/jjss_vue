import Vue from 'vue';
import HomeCell from '../views/home/Home.cell.vue';
import Navi from '../views/common/Navi.vue';
import Tabbar from '../views/common/Tabbar.vue';

export default() => {
    Vue.component('home-cell',HomeCell);
    Vue.component('navi',Navi);
    Vue.component('tabbar',Tabbar);
};