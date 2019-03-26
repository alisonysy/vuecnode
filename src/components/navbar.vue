<template>
  <nav>
    <ul>
      <li :class="{active:$route.params.tab===undefined}">
        <router-link to="/">全部</router-link>
      </li>
      <li :class="{active:$route.params.tab==='good'}">
        <router-link :to="{name:'category',params:{tab:'good'}}" >精华</router-link>
      </li>
      <li  :class="{active:$route.params.tab==='share'}">
        <router-link :to="{name:'category',params:{tab:'share'}}">分享</router-link>
      </li>
      <li>
        <router-link to="/">
          <img src="@/assets/cnodejs_light.svg" alt="cnode logo">
        </router-link>
      </li>
      <li  :class="{active:this.$route.params.tab==='ask'}">
        <router-link :to="{name:'category',params:{tab:'ask'}}">问答</router-link>
      </li>
      <li  :class="{active:$route.params.tab==='job'}">
        <router-link :to="{name:'category',params:{tab:'job'}}">招聘</router-link>
      </li>
    </ul>
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="irregularLine" x="0" y="0" width="100%" height="100%">
          <polygon points="1380,0 1000,20 845,12 630,19 467,12 288,8 105,17 0,5 0,0" fill="#445b55"></polygon>
        </pattern>
        <filter id="irregularLine-shadow">
          <feDropShadow dx="2" dy="2" stdDeviation="3"></feDropShadow>
        </filter>
      </defs>
      <rect
        width="100%"
        height="2rem"
        fill="url(#irregularLine)"
        style="filter:url(#irregularLine-shadow)"
      ></rect>
    </svg>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data: function() {
    return {
      
    };
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 10px;
}

ul,
li {
  list-style: none;
}
li a {
  text-decoration: none;
  color: inherit;
}

li a:hover {
  color: #fff;
}

.active{
  color:#fff;
  position: relative;
}

.active::before{
  content:'';
  width:2.5rem;
  border:1px solid #fff;
  display: inline-block;
  position:absolute;
  bottom:-5px;
  left:50%;
  transform: translateX(-50%);
}

nav {
  background: #445b55;
  position: relative;
  width:100%;
}

ul {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #e6ddd8;
  margin: 0;
}

li {
  margin:0.8rem 0.3rem;
  vertical-align: text-bottom;
}


img {
  width: 120px;
  height: 28px;
}

svg {
  width: 100%;
  height: 2rem;
  position: absolute;
}

pattern {
  width: 100%;
  height: 100%;
}


@media screen and (min-width: 500px){
  *{
    font-size: 14px;
  }
  li{
  margin: 0.8rem 1.2rem; 
  }
}
</style>
