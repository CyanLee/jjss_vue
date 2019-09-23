import Vue from 'vue';
import {
    MessageBox
} from 'mint-ui';
import 'mint-ui/lib/message-box/style.css';

export default () => {
    Vue.prototype.$messageBox = MessageBox;
}