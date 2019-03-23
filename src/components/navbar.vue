<template>
  <nav :style="styleObj">
    <ul>
      <li>
        <a href>全部</a>
      </li>
      <li>
        <a href>精华</a>
      </li>
      <li>
        <a href>分享</a>
      </li>
      <li>
        <a href=""><img src="@/assets/cnodejs_light.svg" alt="cnode logo"></a>
      </li>
      <li>
        <a href>问答</a>
      </li>
      <li>
        <a href>招聘</a>
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
      <rect width="100%" height="2rem" fill="url(#irregularLine)" style="filter:url(#irregularLine-shadow)"></rect>
    </svg>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data:function(){
    return {
      styleObj:{
        padding:"0px",
        margin:"0px",
        boxSizing:"border-box",
        fontSize:"14px",
        fontFamily:"'微软雅黑',tahoma, arial, sans-serif"
      }
    }
  }
};
</script>

<style scoped>

ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}

a:hover{
  color:#fff;
}

nav {
  background: #445b55;
  position: relative;
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e6ddd8;
  margin:0;
}

li{
  margin:0.8rem 1.2rem;
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
</style>
