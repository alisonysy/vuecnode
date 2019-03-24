<template>
  <section id="replies">
    <svg class="icon" aria-hidden="true" @click="moveleft">
    <use xlink:href="#icon-arrowleft"></use>
</svg>
    <div>
      <ul class="replyList">
        <li v-for="reply in replyItem" v-bind:key="reply.id">
          <div class="replyItems">
            <div class="pic">
              <img :src="reply.author.avatar_url" :alt="reply.author.loginname">
              <span>{{reply.author.loginname}}</span>
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
  </section>
</template>

<script>
export default {
  name: "replies",
  props: ["reply-item"],
  methods:{
    moveleft(){

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
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.8rem;
  text-overflow: ellipsis;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
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
  width:calc(100% - 5rem);
}

#replies svg {
  width: 5rem;
  height: 3rem;
  fill:#859d87;
  cursor:pointer;
}

#replies .reply-content svg.icon {
  width: 1rem;
  margin-right: 0;
  height:1rem;
  fill:#fff;
  cursor:initial;
}

#replies .replyList {
  width: 100%;
  display: flex;
  align-items: center;
  overflow: auto;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
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

#replies .pic {
  width: 100%;
  text-align: center;
}

#replies img {
  width: 4rem;
  height: 4rem;
}

#replies .pic span {
  display: block;
  margin-top: 0.5rem;
  font-size: 1em;
}

#replies .reply-content{
  display: flex;
  margin:0.8rem 0.2rem;
}

#replies .reply-content span {
  font-size: 0.7rem;
}

#replies .reply-content span:nth-of-type(1) {
  color:#d1c9bc;
  margin-right: auto;
}
</style>
