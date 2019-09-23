<template>
  <div id="home-main">
    <navi naviTitle="首页"></navi>
    <div class="content-view" v-for="(item,index) in dataList" :key="index">
      <router-link :to="''" @click.native="homeCellClick">
        <home-cell></home-cell>
      </router-link>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  },
  methods: {
    homeCellClick() {
      this.$messageBox
        .alert("为了您的资金 账户安全，请设置支付密码")
        .then(action => {
          this.$router.push("homeDetails");
        });
    }
  }
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}
#home-main {
  padding: 1.28rem 0 1.28rem 0;
  position: relative;
  .content-view {
    position: relative;
    z-index: 99;
  }
}
</style>