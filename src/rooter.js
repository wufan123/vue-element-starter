import VueRouter from 'vue-router'
import login from './views/login.vue'


const routes = [
    { path: '/', redirect: '/login'},
    { path: '/login', component: login },
];

const router = new VueRouter({
    routes
});


export default router