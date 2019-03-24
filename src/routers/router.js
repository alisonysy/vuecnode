import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/views/postList.vue'
import ArticlePost from '@/views/article.vue'

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
      name:'article-post',
      component:ArticlePost
    }
  ]
})
