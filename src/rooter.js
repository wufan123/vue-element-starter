import VueRouter from 'vue-router'
import login from './views/login.vue'
import main from './views/main.vue'


const routes = [
    { path: '/', redirect: '/login'},
    { path: '/login', component: login },
    { name:'Main',path: '/main', component: main }
];

const router = new VueRouter({
    routes
});


export default router