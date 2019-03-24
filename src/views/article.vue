<template>
  <main id="article-post"  >
    <div class="header">{{article.title}}</div>
    <div class="articleBody markdown-body" v-html="article.content"></div>
    
  </main>
</template>



<script>
export default {
  name:'article-post',
  data(){
    return {
      article:[],
      count:0
    }
  },
  methods:{
    
  },
  beforeMount(){
    this.$axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.articleId}`)
      .then((res)=>{
        this.article = res.data.data;
        console.log(res.data.data);
        
      }).catch((err)=>{
        console.log(err);
      })
  }
}
</script>

<style>
@import url('../assets/github-markdown.css');
.markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
    }
 
    @media (max-width: 767px) {
        .markdown-body {
            padding: 15px;
        }
    }

#article-post{
  width:100%;
  margin:5% auto;
}

.header{
  font-size: 2rem;
}


</style>
