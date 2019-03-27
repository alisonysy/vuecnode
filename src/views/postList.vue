<template>
  <main id="postList" >
        <pagination @skip-to="pageBus"/>

    <ul>
      <li v-for="post in postItems" v-bind:key="post.id">
        <postItem :item="post"/>
      </li>
    </ul>
  </main>
</template>

<script>
import postItem from "@/components/postItem.vue";
import pagination from "@/components/pagination.vue";

export default {
  name: "postList",
  data() {
    return {
      postItems: [],
      skipToPage: 1
    };
  },
  components: {
    postItem,
    pagination
  },
  watch: {
    $route(to, from) {
      this.getData();
    }
  },
  methods: {
    getData() {
      this.$axios
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: this.skipToPage,
            limit: 20,
            tab: this.$route.params.tab
          }
        })
        .then(res => {
          this.postItems = res.data.data;
          console.log(res.data.data);
        })
        .catch(err => {
          console.error(err);
        });
    },
    pageBus(val) {
      this.skipToPage = val;
      this.getData();
    }
  },
  beforeMount() {
    this.getData();
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

ul,
li {
  list-style: none;
}

ul {
  margin-bottom: 5rem;
  padding: 0;
  width: 100%;
}

li {
  display: block;
  margin: 0 auto;
  width: 80%;
}

#postList {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 3rem;
}
</style>
