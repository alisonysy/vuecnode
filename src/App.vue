<template>
  <div id="app" v-cloak >
    <navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
import postList from '@/views/postList.vue';
import userinfo from '@/views/userInfo.vue';

export default {
  name: 'home',
  components: {
    navbar,
    postList,
    userinfo,
  },
  beforeMount(){
let device = window.innerWidth;
      if(device<700){
        alert('Sorry,移动端还在开发中，请移步PC端查看')
      }
  }
  
}

</script>


<style >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 10px;
}

#app{
  font-family: '微软雅黑',tahoma, arial, sans-serif;
}

@media screen and (min-width: 500px){
  *{
    font-size: 14px;
  }
  
}

@media screen and (max-width: 600px){
  #app{
    display: none;
  }
  #app::before{
    content:'Sorry,移动端还在开发中，请移步PC端查看'
  }
}
</style>
