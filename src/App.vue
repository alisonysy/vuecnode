<template>
  <div id="app">
    <navbar/>
    <post-list/>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
import postList from '@/views/postList.vue';

export default {
  name: 'home',
  components: {
    navbar,
    postList
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

  background: #e6ddd8;
}

@media screen and (min-width: 500px){
  *{
    font-size: 14px;
  }
  
}
</style>
