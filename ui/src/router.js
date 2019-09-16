import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Home from './views/home/Main'
import Answer from './views/answer/Index'
import Column from './views/column/Index'
import Lecture from './views/lecture/Index'
import More from './views/more/Index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },{
    path: '/home',
    component: Home,
    name:'home'
  },
  {
    path: '/answer',
    component: Answer,
    name:'answer'
  },
  {
    path: '/column',
    component: Column,
    name:'column'
  },
  {
    path: '/lecture',
    component: Lecture,
    name:'lecture'
  },
  {
    path: '/more',
    component: More,
    name:'more'
  }
]
})