import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import User from "../components/User";
import Particulars from "../components/Particulars";
import Guestbook from "../components/Guestbook";


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home', component: Home},
    {path: '/user', component: User},
    {path: '/particulars', component: Particulars},
    {path: '/guestbook', component: Guestbook},
    {path: '/', component: Home},
    {path: '/*', component: Home},
  ]
})
