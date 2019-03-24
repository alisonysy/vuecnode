<template>
  <main id="postList">
    <ul>
      <li v-for="post in postItems" v-bind:key="post.id">
        <postItem :item="post"/>
      </li>
    </ul>
  </main>
</template>

<script>
import postItem from "@/components/postItem.vue";

export default {
  name: "postList",
  data() {
    return {
      postItems: []
    };
  },
  components: {
    postItem
  },
  methods: {
    getData() {
      this.$axios
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: 1,
            limit: 20
          }
        })
        .then(res => {
          this.postItems = res.data.data;
          console.log(res.data.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  beforeMount() {
    this.getData();
  }
};
</script>

<style scoped>
a{text-decoration: none;color:inherit;}

ul,
li {
  list-style: none;

}

ul {
  margin: 0;
  padding: 0;
    width: 100%;
}

li {
  display:block;
  margin: 0 auto;
  width:80%;
}

#postList {
  display: flex;
  justify-content: center;
  padding-top: 3rem;
}
</style>
