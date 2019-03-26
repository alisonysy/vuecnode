<template>
  <section id="replies-wrapper">
    <div id="replies">
      <svg class="icon" aria-hidden="true" @click="moveleft">
        <use xlink:href="#icon-arrowleft"></use>
      </svg>
      <div>
        <ul class="replyList" id="replyListId">
          <li v-for="reply in replyItem" v-bind:key="reply.id" @click="viewDetail">
            <div class="replyItems" :data-id="reply.id">
              <div class="pic">
                <router-link :to="{name:'userinfo',params:{userId:reply.author.loginname}}">
                  <img :src="reply.author.avatar_url" :alt="reply.author.loginname">
                </router-link>
                <router-link :to="{name:'userinfo',params:{userId:reply.author.loginname}}">
                  <span>{{reply.author.loginname}}</span>
                </router-link>
              </div>
              <div class="reply-content">
                <span>{{reply.create_at | formatDate}}</span>
                <span>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-thumbs-up"></use>
                  </svg>
                  {{reply.ups.length}}
                </span>
              </div>
              <div class="content markdown-body" v-html="reply.content"></div>
            </div>
          </li>
        </ul>
      </div>
      <svg class="icon" aria-hidden="true" @click="moveright">
        <use xlink:href="#icon-arrowright"></use>
      </svg>
    </div>
    <transition name="slide">
      <div class="replyDetail" v-if="detail">
        <div class="replyDetailBox">
          <div class="replyBasics clearfix">
            <router-link :to="{name:'userinfo',params:{userId:li.author.loginname}}">
              <img :src="li.author.avatar_url" :alt="li.author.loginname">
            </router-link>
            <router-link :to="{name:'userinfo',params:{userId:li.author.loginname}}">
              <span>{{li.author.loginname}}</span>
            </router-link>
            <span>{{li.create_at | formatDate}}</span>
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-thumbs-up"></use>
              </svg>
              {{li.ups.length}}
            </span>
          </div>
          <div class="fullContent markdown-body" v-html="li.content"></div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: "replies",
  data() {
    return {
      detail: false,
      li: {}
    };
  },
  props: ["reply-item"],
  methods: {
    moveleft() {
      document.getElementById("replyListId").scrollLeft -= 500;
    },
    moveright() {
      document.getElementById("replyListId").scrollLeft += 500;
    },
    viewDetail(e) {
      this.detail = false;
      let liTarget;
      let id;

      if (!e.path) {
        //for IE compatibility purpose
        function findParent(el) {
          return el.parentElement;
        }
        let el = e.target;
        if (!el.dataset.id) {
          while (!el.dataset.id) {
            el = findParent(el);
          }
          liTarget = el;
        } else {
          liTarget = e.target;
        }
        id = liTarget.dataset.id;
      } else {
        liTarget = e
          .composedPath()
          .reverse()
          .find(function(el) {
            return el.nodeName === "LI";
          });
        id = liTarget.querySelector(".replyItems").dataset.id;
      }
      let reply = this.replyItem.find(el => {
        return el.id === id;
      });
      this.li = reply;
      this.detail = true;
    }
  }
};
</script>

<style>
@import url("../assets/github-markdown.css");
#replies .replyList .content.markdown-body {
  color: #fff;
  margin: 0;
  padding: 0;
  min-width: 13rem;
}

#replies .replyList .content.markdown-body .markdown-text p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.8rem;
  text-overflow: ellipsis;
}

#replies .replyList .content.markdown-body .markdown-text p:first-of-type {
  -webkit-line-clamp: 4;
}

#replies .replyList .content.markdown-body .markdown-text p {
  -webkit-line-clamp: 1;
}

#replies .replyList .content.markdown-body .markdown-text ul,
#replies .replyList .content.markdown-body .markdown-text ol,
#replies .replyList .content.markdown-body .markdown-text li {
  margin: 0;
  padding: 0;
}

#replies .replyList .content.markdown-body .markdown-text li {
  width: 12rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.8rem;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
}

#replies
  .replyList
  .content.markdown-body
  .markdown-text
  :not(p):not(a):not(ul):not(ol):not(li) {
  display: none;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.clearfix {
  display: block;
  content: "";
  clear: both;
}

#replies ul,
#replies li {
  list-style: none;
  overflow-wrap: break-word;
}

#replies {
  width: 80%;
  margin: 0 0 3rem auto;
  display: flex;
  align-items: center;
}

#replies > div {
  overflow: hidden;
  width: calc(100% - 5rem);
}

#replies svg {
  width: 5rem;
  height: 3rem;
  fill: #859d87;
  cursor: pointer;
}

#replies .reply-content svg.icon {
  width: 1rem;
  margin-right: 0;
  height: 1rem;
  fill: #fff;
  cursor: initial;
}

#replies .replyList {
  width: 100%;
  display: flex;
  align-items: center;
  overflow: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
}

#replies .replyList::-webkit-scrollbar {
  display: none;
}

#replies li {
  width: 15rem;
  margin: 0 1rem;
  padding: 1rem;
  background: #122625;
  color: #fff;
  flex: 0 0 15rem;
}

#replies .replyItems {
  height: 19rem;
}

#replies li .replyItems {
  overflow: hidden;
}

#replies .pic {
  width: 100%;
  text-align: center;
}

#replies .pic img,
#replies-wrapper .replyBasics img {
  width: 4rem;
  height: 4rem;
}

#replies .pic a {
  text-decoration: none;
}

#replies .pic span {
  display: block;
  margin-top: 0.5rem;
  font-size: 1em;
  color: #fff;
}

#replies .reply-content {
  display: flex;
  margin: 0.8rem 0.2rem;
}

#replies .reply-content span {
  font-size: 0.7rem;
}

#replies .reply-content span:nth-of-type(1) {
  color: #d1c9bc;
  margin-right: auto;
}

/* reply details */
.replyDetail {
  width: 80%;
  margin: 0 0 3rem auto;
}

.replyDetailBox {
  width: calc(100%-5rem);
  background: #445b55;
}

.replyBasics {
  padding: 2rem;
  color: #fff;
}

.replyBasics img,
.replyBasics a > span:first-of-type {
  float: left;
  margin-right: 1rem;
  margin-left: 0;
  font-size: 1rem;
  color:#fff;
}

.replyBasics  span:nth-last-of-type(1),
.replyBasics span:nth-last-of-type(2) {
  float: right;
  margin-left: 2rem;
  font-size: 0.8rem;
}

.replyBasics svg {
  width: 1rem;
  margin-right: 0;
  height: 1rem;
  fill: #fff;
  cursor: initial;
}

.fullContent {
  border-left: 0.5rem solid #859d87;
}

#replies-wrapper .replyDetail .fullContent.markdown-body {
  margin: 5% 0 5% 5%;
  padding: 2rem;
  color: #fff;
}

#replies-wrapper .replyDetail .fullContent.markdown-body .markdown-text a {
  color: #859d87;
}

#replies-wrapper
  .replyDetail
  .fullContent.markdown-body
  .markdown-text
  a:hover {
  border-bottom: 1px solid #e6ddd8;
  background: -webkit-linear-gradient(#859d87 5%, #d1c9bc 15%, #e6ddd8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* reply detail transition */
.slide-enter-active {
  transition: all 3s ease;
}

.slide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter,
.slide-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
