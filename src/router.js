import Vue from "vue";
import Router from "vue-router";
import Inicio from "@/views/Inicio"

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
        path: '/',
        name: 'Inicio',
        component: Inicio
    }]
})