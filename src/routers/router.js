import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/views/postList.vue'
import Article from '@/views/article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
     component:PostList
    },
    {
      path:'/:articleId',
      name:'article',
      component:Article
    }
  ]
})
