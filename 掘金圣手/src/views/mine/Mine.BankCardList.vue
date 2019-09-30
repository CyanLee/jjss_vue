<template>
  <div id="main-div">
    <navi naviTitle="银行卡"></navi>
    <div class="bank-cell" v-for="(item, index) in dataList" :key="index">
      <img class="bank-img" src alt />
      <span class="bank-name">{{item.title}}</span>
      <span class="bank-desc">{{item.desc}}</span>
      <span class="bank-num">{{item.cardnum}}</span>
    </div>
    <a href>添加银行卡</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        {
          icon: "",
          title: "招商银行",
          desc: "储蓄卡",
          cardnum: "**** **** **** 6678"
        },
        {
          icon: "",
          title: "招商银行",
          desc: "储蓄卡",
          cardnum: "**** **** **** 6678"
        },
        {
          icon: "",
          title: "招商银行",
          desc: "储蓄卡",
          cardnum: "**** **** **** 6678"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#main-div {
  padding: 1.28rem 0 1.28rem 0;
  .bank-cell {
    position: relative;
    margin-top: 0.39rem;
    margin-left: 0.6rem;
    margin-right: 0.6rem;
    border: 0.1rem solid #f3f3f3;
    height: 2.6rem;
    .bank-img {
      position: absolute;
      top: 0.4rem;
      left: 0.4rem;
      width: 1.04rem;
      height: 1.04rem;
      background: red;
    }
    .bank-name {
      position: absolute;
      top: 0.47rem;
      left: 1.84rem;
      font-size: 0.34rem;
      color: #32404e;
      font-weight: bold;
    }
    .bank-desc {
      position: absolute;
      top: 1.12rem;
      left: 1.84rem;
      font-size: 0.24rem;
      color: #c3c8cf;
    }
    .bank-num {
      position: absolute;
      top: 1.8rem;
      left: 0.4rem;
      font-size: 0.4rem;
      color: #32404e;
      font-weight: bolder;
    }
  }
  a {
    display: inline-block;
    width: 6.3rem;
    height: 1rem;
    margin-top: 0.8rem;
    font-size: 0.4rem;
    color: white;
    background: #19cd60;
    border-radius: 0.1rem;
    line-height: 1rem;
  }
}
</style>