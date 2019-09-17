<template>
  <div id="home-main">
    <navi naviTitle="投标详情"></navi>
    <div class="content-view">
      <router-link v-for="(item,index) in dataList" :key="index" :to="''">
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
  .content-view{
      position: relative;
      z-index: 99;
  }
}
</style>