import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/pages/homePage'
import QaPage from '../components/pages/QaPage'
import CoursePage from '../components/pages/coursePage'
import ArticleDetailPage from '../components/comm/ArticleDetailPage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/home',
      component:HomePage
    },
    { path: '/', redirect: '/home' },
    { path: '/qa',component: QaPage},
    { path: '/course',component: CoursePage},
    { path: '/articleDetailPage',component: ArticleDetailPage}
  ]
})
