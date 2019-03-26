<template>
  <main id="article-post">
    <router-link to="/">
      <button class="backButton">返回首页</button>
    </router-link>
    <div class="header" :title="article.title">
      <span>{{article.title}}</span>
    </div>
    <div class="createdTime">本文创建于：{{article.create_at | formatDate}}</div>
    <div class="articleInfo">
      <div class="tabs">
        <span :class="{top:article.top}" :v-show="article.top">{{article.top | topProcessor}}</span>
        <span :class="{good:article.good}" :v-show="article.good">{{article.good | goodProcessor}}</span>
        <span :class="{tab:article.tab}" :v-show="article.tab">{{article.tab | tab-processor}}</span>
      </div>
      <div class="authorInfo">
        <router-link :to="{name:'userinfo',params:{userId:article.author.loginname}}">
          <img :src="article.author.avatar_url" :alt="article.author.loginname">
        </router-link>
        <router-link :to="{name:'userinfo',params:{userId:article.author.loginname}}">
          <span>{{article.author.loginname}}</span>
        </router-link>
      </div>
      <div class="articleData">
        <span>{{article.reply_count}}</span> /
        <span>{{article.visit_count}}</span>
        <span>最后回复：{{article.last_reply_at | formatDate}}</span>
      </div>
    </div>
    <div class="articleBody markdown-body" v-html="article.content"></div>
    <replies :reply-item="article.replies"></replies>
  </main>
</template>



<script>
import replies from "@/components/replies.vue";

export default {
  name: "article-post",
  data() {
    return {
      article: []
    };
  },
  components: {
    replies
  },
  methods: {
    getData() {
      this.$axios
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.articleId}`)
        .then(res => {
          this.article = res.data.data;
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.getData();
  },
  filters: {
    topProcessor(val) {
      if (val === true) {
        return "置顶";
      } else {
        return;
      }
    },
    goodProcessor(val) {
      if (val === true) {
        return "精华";
      }
      return;
    }
  }
};
</script>

<style>
@import url("../assets/github-markdown.css");
#article-post .markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 65%;
  margin: 0 5% 0 30%;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}

#article-post {
  width: 100%;
  margin: 5% auto;
  position: relative;
}

#article-post .backButton {
  position: absolute;
  left: 10%;
  top: 0rem;
  background: transparent;
  border-radius: 3px;
  padding: 0.5rem;
  font-family: "微软雅黑", tahoma, arial, sans-serif;
  font-size: 0.8rem;
  color: #122625;
  border: 1px solid #122625;
  cursor: pointer;
}

#article-post .backButton:hover {
  background: #445b55;
  border: 1px solid #445b55;
  color: #fff;
}

#article-post .header {
  position: relative;
  width: 75%;
  text-align: right;
  text-align: end;
  margin: auto;
  margin-top: 12%;
}

#article-post .header::before {
  position: absolute;
  content: attr(title);
  top: -300%;
  right: 0%;
  font-size: 400%;
  font-weight: bolder;
  color: #e6ddd8;
  z-index: -1;
  letter-spacing: 0.4rem;
}

#article-post .header span {
  font-size: 1.8rem;
  font-weight: bolder;
  background: #122625;
  color: #fff;
  padding: 0.5rem 0 0.5rem 5rem;
  line-height: 4rem;
}

#article-post .createdTime {
  margin: auto;
  padding-top: 3%;
  color: #445b55;
  width: 50%;
  text-align: right;
  text-align: end;
}

#article-post .articleBody {
  margin-top: 4%;
}

#article-post .articleInfo {
  width: 28%;
  background: #122625;
  float: left;
  padding: 2rem;
  color: #fff;
}

.tabs {
  color: #fff;
}

.top,
.good,
.tab {
  border-radius: 5px;
  padding: 0.1rem 0.3rem;
  margin: 0 0.3rem;
  font-size: 0.9rem;
  background: #859d87;
}

#article-post .authorInfo {
  margin: 1rem 0;
  display: flex;
  align-items: center;
  width: 100%;
}

#article-post .articleInfo .authorInfo img {
  width: 4rem;
  height: 4rem;
  margin: 0 2rem 0 1rem;
}

#article-post .authorInfo span {
  display: inline-block;
  color: #fff;
}

#article-post .articleData span:nth-of-type(2) {
  color: #e6ddd8;
  font-size: 0.7rem;
}

#article-post .articleData span:nth-of-type(3) {
  margin-top: 0.5rem;
  display: block;
  font-size: 0.9rem;
  color: #e6ddd8;
}
</style>
