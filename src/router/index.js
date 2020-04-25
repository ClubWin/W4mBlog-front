import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ClubWinW4m from "../components/ClubWinW4m";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ClubWinW4m',
      component: ClubWinW4m
    }
  ]
})
