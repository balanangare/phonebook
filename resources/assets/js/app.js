
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

/*Welcome Main Page*/

let Main = require('./components/Main.vue');

/*Phonebook App*/
let Myheader = require('./components/Phonebook/Myheader.vue');
let Home = require('./components/Phonebook/Home.vue');
let About = require('./components/Phonebook/About.vue');





const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/main', component: Main }
]

const router = new VueRouter({
    // mode:'history',
    routes // short for `routes: routes`
})




const app = new Vue({
    el: '#app',
    router,
    components:{Myheader,Main}
});
