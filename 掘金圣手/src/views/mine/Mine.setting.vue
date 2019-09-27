<template>
  <div id="main-div">
    <navi naviTitle="设置"></navi>
    <!-- 列表 -->
    <div
      class="list-div"
      v-for="(item, index) in dataList"
      :key="index"
      @click="pushClick(item.push)"
    >
      <span>{{item.title}}</span>
      <div>
        <img src="../../img/arrow.png" alt />
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-div">
      <router-link to>退出当前账号</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        {
          title: "支付密码",
          push: "mineSettingSel"
        },
        {
          title: "修改登录密码",
          push: "mineSettingSel"
        }
      ]
    };
  },
  methods: {
    pushClick(pushUrl) {
      this.$router.push(pushUrl);
    }
  }
};
</script>

<style lang="less" scoped>
#main-div {
  padding: 1.28rem 0 1.28rem 0;
  .list-div {
    height: 0.98rem;
    display: flex;
    justify-content: space-between;

    > span {
      margin-left: 0.4rem;
      font-size: 0.34rem;
      color: #333333;
      line-height: 0.98rem;
    }
    > div {
      // img居中的办法
      margin-right: 0.4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        width: 0.44rem;
        height: 0.44rem;
      }
    }
  }
  .bottom-div {
      margin-top: 4rem;
    a {
      display: inline-block;
      font-size: 0.4rem;
      color: white;
      border-radius: 0.1rem;
      width: 6.3rem;
      height: 1rem;
      background: #19cd60;
      line-height: 1rem;
    }
  }
}
</style>