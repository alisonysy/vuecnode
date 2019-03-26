<template>
  <div id="userInfo-wrapper" :style="{height:setHeight}">
    <section class="ui-wrapper">
      <div class="uiBasics">
        <div class="ui-b-imgName">
          <img :src="user.avatar_url" :alt="user.loginname">
          <span>{{user.loginname}}</span>
        </div>
        <div class="ui-b-txt">
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-github"></use>
            </svg>
            {{user.githubUsername}}
          </span>
          <span>积分：{{user.score}}</span>
          <span>{{user.create_at | signup }}注册</span>
        </div>
        <div class="ui-b-ctr">
          <div class="ui-b-ctr-createTopics" @click="viewTopics = !viewTopics">
            最近创建的话题
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-arrowright"></use>
            </svg>
          </div>
          <div class="ui-b-ctr-replies" @click="viewReplies = !viewReplies">
            最近参与的话题
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-arrowright"></use>
            </svg>
          </div>
        </div>
      </div>
      <div class="ui-createTopics" v-if="viewTopics">
        <div class="ui-createTopics-heading">最近创建的话题</div>
        <div class="ui-createTopics-post">
          <ul class="ui-createTopics-post-ul">
            <li v-for="post in user.recent_topics" v-bind:key="post.id">
              <router-link :to="{name:'article-post',params:{articleId:post.id}}">{{post.title}}</router-link>
              <span>最后回复：{{post.last_reply_at | signup}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="ui-replies" v-if="viewReplies"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "userinfo",
  data() {
    return {
      user: {},
      viewTopics: false,
      viewReplies: false
    };
  },
  computed: {
    setHeight() {
      return (window.innerHeight * 0.75).toString() + "px";
    }
  },
  beforeCreate() {},
  beforeMount() {
    this.$axios
      .get(`https://cnodejs.org/api/v1/user/${this.$route.params.userId}`)
      .then(res => {
        this.user = res.data.data;
        console.log(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  filters: {
    signup(str) {
      if (!str) return "";
      var date = new Date(str);
      var time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
      if (time < 0) {
        return "";
      } else if (time / 1000 < 30) {
        return "刚刚";
      } else if (time / 1000 < 60) {
        return parseInt(time / 1000) + "秒前";
      } else if (time / 60000 < 60) {
        return parseInt(time / 60000) + "分钟前";
      } else if (time / 3600000 < 24) {
        return parseInt(time / 3600000) + "小时前";
      } else if (time / 86400000 < 31) {
        return parseInt(time / 86400000) + "天前";
      } else if (time / 2592000000 < 12) {
        return parseInt(time / 2592000000) + "月前";
      } else {
        return parseInt(time / 31536000000) + "年前";
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
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

#userInfo-wrapper {
  width: 100vw;
  margin: 0;
  overflow: auto;
}

.ui-wrapper {
  margin: 0 5%;
  height: 95%;
  display: flex;
  justify-content: flex-start;
}

.uiBasics {
  height: 100%;
  width: 20rem;
  background: #122625;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  flex-basis: 20rem;
}

.ui-b-imgName {
  text-align: center;
}

.ui-b-imgName span {
  color: #fff;
  display: block;
  margin-top: 4%;
}

.ui-b-imgName img {
  width: 4rem;
  height: 4rem;
  margin-top: 2rem;
}

.ui-b-txt {
  margin: 5%;
}

.ui-b-txt span {
  display: block;
  margin-top: 5%;
  color: #fff;
  font-size: 0.8rem;
}

.ui-b-txt span svg {
  fill: #fff;
}

.ui-b-ctr {
  margin-top: auto;
  width: 100%;
}

.ui-b-ctr .ui-b-ctr-createTopics,
.ui-b-ctr .ui-b-ctr-replies {
  padding: 3% 8%;
  color: #fff;
  font-size: 1rem;
  display: flow-root;
  position: relative;
  cursor: pointer;
}

.ui-b-ctr .ui-b-ctr-createTopics::before,
.ui-b-ctr .ui-b-ctr-replies::before {
  content: "";
  width: 95%;
  position: absolute;
  border-top: 1px solid #859d878f;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}

.ui-b-ctr .ui-b-ctr-createTopics:hover,
.ui-b-ctr .ui-b-ctr-replies:hover {
  background: #859d8756;
}

.ui-b-ctr svg {
  width: 2rem;
  height: 2rem;
  float: right;
  padding-bottom: 0.2rem;
}

.ui-createTopics {
  height: 100%;
  background: #122625af;
  box-shadow: inset 2px 0 6px -1px rgba(0, 0, 0, 0.5);
}

.ui-createTopics-heading {
  margin: 2rem auto;
  padding-left: 2rem;
  font-size: 1.5rem;
  color: #e6ddd8;
}

.ui-createTopics-post {
  height: 80%;
}

.ui-createTopics-post-ul {
  height: 100%;
  display: inline-flex;
  align-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
}

.ui-createTopics-post-ul li {
  flex: 0 0 28rem;
  padding: 0.8rem 0 0.8rem 2rem;
  display: inline-flex;
  justify-content: space-between;
}

.ui-createTopics-post-ul li span {
  text-align: end;
  text-align: right;
  font-size: 0.7rem;
}

.ui-createTopics-post-ul li a {
  color: #e6ddd8;
  font-size: 0.87rem;
  border-bottom: 1px solid #e6ddd8;
}

.ui-createTopics-post-ul li a:hover {
  outline-width: 0;
  border-bottom: 1px solid #859d87;
  background: -webkit-linear-gradient(#e6ddd8 5%, #d1c9bc 15%, #859d87);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.ui-replies {
  height: 100%;
  background: #1226256c;
  box-shadow: inset 2px 0 6px -1px rgba(0, 0, 0, 0.5);
}
</style>
