import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/views/postList.vue'
import ArticlePost from '@/views/article.vue'
import Userinfo from '@/views/userInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
     component:PostList
    },
    {
      path:'/tab=:tab',
      name:'category',
      component:PostList
    },
    {
      path:'/article/:articleId',
      name:'article-post',
      component:ArticlePost
    },
    {
      path:'/user/:userId',
      name:'userinfo',
      component:Userinfo
    }
  ]
})
