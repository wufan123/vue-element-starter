import Vue from 'vue'
import './style/theme/index.css'
import './style/common.css'
import ElementUI from 'element-ui'
import App from './App.vue'
import VueRouter from 'vue-router'
import rooter from  './rooter'

Vue.use(ElementUI);
Vue.use(VueRouter);
new Vue({
    el: '#app',
    router: rooter,
    render: h => h(App)
});
