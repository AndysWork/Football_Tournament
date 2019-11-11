import Vue from 'vue'
import Router from "vue-router";
import Home from './layouts/Home.vue';
import Tournament from './layouts/Tournament.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/tournament',
            name: 'tournament',
            component: Tournament
        }
    ]
})