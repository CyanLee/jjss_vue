<template>
  <div id="tabbar-view">
    <router-link
      v-for="(item,index) in dataList"
      :key="index"
      :class="item.class"
      :to="item.routerData"
    >
      <img src="../../img/home-tabbar-nor.png" alt />
      <p v-html="item.title"></p>
    </router-link>
  </div>
</template>

<script>
import TabbarData from "../../data/TabbarData";
export default {
  data() {
    return {
      dataList: TabbarData
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
#tabbar-view {
  border-top: 0.01rem solid #f8f8f8;
  z-index: 9999;
  width: 100%;
  height: 0.98rem;
  background: #ffffff;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: space-around;
  a {
    width: 0.98rem;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img {
      width: 0.46rem;
      height: 0.46rem;
    }

    p {
      font-size: 0.23rem;
      height: 0.23rem;
    }
  }

  .router-link-exact-active {
    color: red;
  }
}
</style>