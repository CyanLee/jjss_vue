<template>
  <div id="main-div">
    <navi naviTitle="充值"></navi>
    <!-- 头部 -->
    <div class="header-div">
      <span class="title-span">输入金额(元)</span>
      <input class="money-input" type="text" placeholder="请输入充值金额" />
      <span class="tip-span">当前账户余额：1000.00</span>
    </div>
    <!-- 支付方式 -->
    <p class="pay-type">支付方式</p>
    <!-- 列表 -->
    <div class="pay-list" v-for="(item, index) in dataList" :key="index">
      <img class="pay-type-icon" :src="item.icon" alt />
      <span class="pay-type-title">{{item.title}}</span>
      <img class="pay-type-choose" :src="item.choose" alt />
    </div>
    <!-- 按钮 -->
    <a class="action-a" href>确认充值</a>
  </div>
</template>

<script>
export default {
    data() {
        return {
            dataList:[
                {
                    icon:require('../../img/airpay-icon.png'),
                    title:'支付宝支付',
                    choose:require('../../img/choose-img.png'),
                },
                {
                    icon:require('../../img/airpay-icon.png'),
                    title:'微信支付',
                    choose:require('../../img/choose-img.png'),
                }
            ]
        }
    },
};
</script>

<style lang="less" scoped>
#main-div {
  padding: 1.28rem 0 1.28rem 0;
  .header-div {
    width: 6.3rem;
    height: 2.84rem;
    margin: 0 auto;
    margin-top: 0.64rem;
    position: relative;
    border: 0.01rem solid #f3f3fe;
    .title-span {
      position: absolute;
      top: 0.4rem;
      left: 0.4rem;
      font-size: 0.3rem;
      color: #32404e;
      font-weight: bold;
    }
    .money-input {
      width: 5.5rem;
      //   height: 1.05rem;
      position: absolute;
      font-size: 0.3rem;
      color: #c3c8cf;
      top: 1.16rem;
      left: 0.4rem;
      margin-right: 0.8rem;
      border-bottom: 0.01rem solid #d6d8d7;
      padding-bottom: 0.2rem;
    }
    .tip-span {
      position: absolute;
      top: 2.05rem;
      left: 0.4rem;
      font-size: 0.24rem;
      color: #fd7a4e;
    }
  }
  .pay-type {
    font-size: 0.34rem;
    color: #32404e;
    font-weight: bold;
    text-align: left;
    margin-left: 0.4rem;
    margin-top: 0.73rem;
  }
  .pay-list {
    //   position: relative;
    display: flex;
    // justify-content: space-between;
    align-content: flex-start;
    height: 1.12rem;
    align-items: center;
    .pay-type-icon {
      //   position: absolute;
      width: 0.44rem;
      height: 0.44rem;
      margin-left: 0.4rem;
    }
    .pay-type-title {
      font-size: 0.3rem;
      color: #32404e;
      margin-left: 0.39rem;
      width: 5.89rem;
      text-align: left;
    }
    .pay-type-choose {
      width: 0.44rem;
      height: 0.44rem;
      margin-right: 0.4rem;
    }
  }
  .action-a {
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