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
          <div class="ui-b-ctr-createTopics">
            最近创建的话题
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-arrowright"></use>
            </svg>
          </div>
          <div class="ui-b-ctr-replies">
            最近参与的话题
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-arrowright"></use>
            </svg>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "userinfo",
  data() {
    return {
      user: {}
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
  border: 1px solid hotpink;
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
    cursor:pointer;
}

.ui-b-ctr .ui-b-ctr-createTopics::before,
.ui-b-ctr .ui-b-ctr-replies::before{
  content:'';
  width:95%;
  position: absolute;
    border-top: 1px solid #859d878f;
    left:50%;
    top:0;
    transform: translateX(-50%);
}

.ui-b-ctr .ui-b-ctr-createTopics:hover,
.ui-b-ctr .ui-b-ctr-replies:hover{
  background:#859d8756;

}

.ui-b-ctr svg {
  width: 2rem;
  height: 2rem;
  float: right;
  padding-bottom: 0.2rem;
}
</style>
