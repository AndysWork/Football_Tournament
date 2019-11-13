import Vue from 'vue'
import Router from "vue-router";
import Home from './layouts/Home.vue';
import Tournament from './layouts/Tournament.vue';
import PointsTable from './components/PointsTable.vue';
import Teams from './components/Teams.vue';
import LiveScores from './components/LiveScores.vue';
import Fixtures from './components/Fixtures.vue';
import Rules from './components/Rules.vue';
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
            component: Tournament,
        },
        {
            path: '/tournament/pointstable',
            component: PointsTable
        },
        {
            path: '/tournament/teams',
            component: Teams
        },
        {
            path: '/tournament/livescores',
            component: LiveScores
        },
        {
            path: '/tournament/fixtures',
            component: Fixtures
        },
        {
            path: '/tournament/rules',
            component: Rules
        }
    ]
})