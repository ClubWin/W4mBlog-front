import Vue from 'vue'
import Router from 'vue-router'
import ClubWinW4m from "../components/ClubWinW4m";
import HomePage from '../components/pages/homePage'
import QaPage from '../components/pages/QaPage'
import CoursePage from '../components/pages/coursePage'
import ArticleDetailPage from '../components/comm/ArticleDetailPage'
import LoginRegistry from "../components/pages/loginRegistry";

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: '/ClubWinW4m' },
    { path:'/ClubWinW4m',
      component:ClubWinW4m,
      redirect:'/home',
      children:[
        { path: '/home',component: HomePage},
        { path: '/qa',component: QaPage},
        { path: '/course',component: CoursePage},
        { path: '/articleDetailPage',component: ArticleDetailPage},
      ]
    },
    { path: '/LoginRegistry', component: LoginRegistry}
  ]
})
