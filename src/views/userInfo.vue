<template>
  <div id="userInfo-wrapper">
    {{this.$route.params}}
  </div>
</template>

<script>
export default {
  name:'userinfo',
  data(){
    return {
      user:{}
    }
  },
  beforeMount(){
    this.$axios
      .get(`https://cnodejs.org/api/v1/user/${this.$route.params.userId}`)
      .then(res => {
        this.user = res.data.data;
        console.log(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
</script>

<style scoped>
#userInfo-wrapper{
  width:100%;
  margin: 5% auto;
}
</style>
