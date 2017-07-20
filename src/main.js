import Vue from 'vue'
import './style/theme/index.css'
import ElementUI from 'element-ui'
import App from './App.vue'
import VueRouter from 'vue-router'
import rooter from  './rooter'
import localUtil from  './utils/localUtil'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.prototype.$localUtil = localUtil;
const vueApp= new Vue({
    el: '#app',
    router: rooter,
    render: h => h(App)
});
export  default vueApp;
