<template>
  <div class="pagination-wrapper">
    <div class="pagination" >
      <button @click="clickPage('first')">首页</button>
      <button @click="previous">上一页</button>
      <button v-if="this.btns.indexOf(1)===-1?true:false">...</button>
      <button
        v-for="num in btns"
        :class="{curPage:num===currentPage}"
        :key="num"
        @click="clickPage(num)"
      >{{num}}</button>
      <button>...</button>
      <button @click="next">下一页</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagination",
  data() {
    return {
      btns: [1, 2, 3, 4, 5],
      currentPage: 1
    };
  },
  computed: {},
  watch:{
    currentPage(){
            this.$emit("skip-to", this.currentPage);
    }
  },
  methods: {
    clickPage(val) {
      console.log(val);
            this.currentPage = val;

      if (val === this.btns[this.btns.length - 1]) {
        this.btns.shift(this.btns[0]);
        this.btns.push(this.btns[this.btns.length - 1] + 1);
      } else if (val === this.btns[0] && val > 1) {
        this.btns.pop(this.btns[this.btns.length - 1] - 1);
        this.btns.unshift(this.btns[0] - 1);
      }else if(val==='first'){
        this.btns=[1,2,3,4,5];
        this.currentPage=1;
      }
    },
    previous() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
      if (this.currentPage === this.btns[0]) {
        this.clickPage(this.currentPage);
      }
    },
    next() {
      this.currentPage += 1;
      if (this.currentPage === this.btns[this.btns.length - 1]) {
        this.clickPage(this.currentPage);
      }
    }
  }
};
</script>

<style scoped>
.pagination {
  padding: 3rem;
  width: 100%;
  text-align: center;
}

button {
  border: 1px solid #122625;
  background: transparent;
  padding: 0.8rem;
  border-radius: 6px;
  margin-right: 0.8rem;
  font-size: 0.8rem;
  cursor: pointer;
  color: #122625;
}

button:hover {
  background: #445b55;
  color: #fff;
  border: 1px solid #445b55;
}

.pagination button:focus {
  outline: none;
}

button:last-of-type {
  margin-right: 0;
}

button.curPage {
  border: 1px solid #122625;
  background: #122625;
  color: #fff;
}
</style>
