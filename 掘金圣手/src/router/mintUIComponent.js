import Vue from 'vue';
import {
    MessageBox
} from 'mint-ui';
import 'mint-ui/lib/message-box/style.css';

import {
    Navbar,
    TabItem
} from 'mint-ui';
import 'mint-ui/lib/navbar/style.css';
import 'mint-ui/lib/tab-item/style.css';

export default () => {
    Vue.prototype.$messageBox = MessageBox;
    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);
}