<template>
  <div id="postItem">
    <div class="circles">
      <svg viewBox="-5 -5 11 11" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5%" cy="-40%" r="20%" fill="#e6ddd8" ></circle>
        <circle cx="5%" cy="50%" r="20%" fill="#e6ddd8" ></circle>
      </svg>
    </div>
    <div class="info-wrapper">
      <div class="tags">
        <span :class="{top:item.top}" :v-show="item.top">{{item.top | topProcessor}}</span>
        <span :class="{good:item.good}" :v-show="item.good">{{item.good | goodProcessor}}</span>
        <span :class="{tab:item.tab}" :v-show="item.tab">{{item.tab | tab-processor}}</span>
      </div>
      <div class="postInfo">
        <div class="data-wrapper">
          <span>{{item.reply_count}}</span> /
          <span>{{item.visit_count}}</span>
        </div>
        <div class="title">
          <router-link :to="{name:'article',params:{articleId:item.id}}">
            <div>{{item.title}}</div>
          </router-link>
        </div>
        <div class="creator">
          <a href>{{item.author.loginname}}</a>
          <a href=""><img :src="item.author.avatar_url" :alt="item.author.loginname"></a>
        </div>
      </div>
      <div class="reply-wrapper">
        <span class="text">最后回复：</span>
        {{item.last_reply_at | formatDate}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "postItem",
  props: ["item"],
  data: function() {
    return {
      postItem: this.item
    };
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

<style scoped>
a{text-decoration: none;color:inherit;}

#postItem {
  width: 100%;
  height: 6rem;
  background: #fff;
  border-bottom: 1px solid #e6ddd8;
  font-size: 0.8rem;
}

#postItem:hover{
  transform: scale(1.02);
  box-shadow: 1px 2px 3px 2px rgba(0,0,0,0.2)
}

.circles {
  float: left;
  width: 7%;
  height: 100%;
}

svg {
  height: 100%;
  width: 100%;
}

.info-wrapper {
  width: 91%;
  float: right;
  height: 100%;
}

.tags {
  color: #fff;
  margin-top: 0.8rem;
}

.top, .good, .tab{
  border-radius: 5px;
  padding: 0.1rem 0.3rem;
  margin: 0 0.3rem;
  font-size: 0.7rem;
}

.top {
  background: #122625;
}

.good {
  background: #445b55;

}

.tab {
  background: #859d87;
}

.data-wrapper{
  margin-top: 0.5rem;
  display:inline-block;
  color:#d1c9bc;
  width:8%;
}

.data-wrapper > span:first-of-type{
  font-size: 1rem;
  font-weight: bolder;
  color:#445b55;
}

.data-wrapper > span:last-of-type{
  color:#859d87
}

.title{
  display:inline-block;
  width:73%;
  padding-left: 0.6rem;
}

.title div:hover{
  color: #859d87;
  text-decoration-line: underline;
}

.title div{
  display: -webkit-box;
  -webkit-line-clamp:1;
  -webkit-box-orient: vertical;
  overflow:hidden;
  width:100%;
    font-size: 1.1rem;
  color:#122625;
}

.creator{
  float:right;
  margin-right: 1rem;
  display: flex;
    align-items: center;
}

.creator > a{
  margin-right: 1rem;
  color:#d1c9bc;
}

.creator > a:hover{
  color:#445b55;
}

img{
  width:3.5rem;
  height: 3.5rem;

}

.reply-wrapper{
  margin-top: 0.5rem;
  color:#445b55;
}

.text{
  color:#859d87;
}

@media screen and (min-width: 500px) {
  *{font-size: 0.8rem; }
  .circles {
    width: 3%;
  }
  .info-wrapper {
    width: 96%;
  }
}
</style>
