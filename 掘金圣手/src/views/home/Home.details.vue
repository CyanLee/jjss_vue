<template>
  <div id="main-view">
    <navi naviTitle="投标详情"></navi>
    <!-- 第一部分的内容 -->
    <div class="first-content">
      <p class="first-content-title">{{model.title}}</p>
      <div class="first-content-bottom">
        <div class="first-conten-cell">
          <span class="first-value">{{model.money}}</span>
          <span class="first-key">投标金额</span>
        </div>
        <div class="first-conten-cell">
          <span class="first-value">{{model.days}}</span>
          <span class="first-key">投资期限</span>
        </div>
        <div class="first-conten-cell">
          <span class="first-value">{{model.rank}}</span>
          <span class="first-key">年化收益率</span>
        </div>
      </div>
      <div class="first-content-line"></div>
    </div>
    <!-- 第二部分的内容 -->
    <div class="second-conten">
      <p class="second-conten-title">产品介绍</p>
      <p class="second-conten-desc">{{model.desc}}</p>
      <div class="first-content-line"></div>
    </div>
    <!-- 第三部分的内容 -->
    <div class="three-conten">
      <p class="three-conten-title">产品概述</p>
      <div class="three-conten-img">123</div>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-view">
        <router-link :to="'homePay'">立即投标</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        title: "这是个标题大标题萨达",
        money: "2000",
        days: "15天",
        rank: "12%",
        desc:
          "收益计算：投标本金*12%/365*15 （例如20000*12%/350*15=98.63元）  结算时间：满标放款开始计息满标放款开始计息，在第15个自然日周期结束后，系统采取T+1的方式自动将总收益和投标本金一起返还到您的个人账号中"
      }
    };
  }
};
</script>

<style lang="less" scoped>
#main-view {
  .first-content-line {
    background: #f8f8f8;
    width: 100%;
    height: 0.08rem;
  }

  padding: 1.28rem 0 1.28rem 0;
  .first-content {
    height: 2.52rem;
    // display: flex;
    // justify-content: space-between;
    // flex-direction: column;
    .first-content-title {
      margin-top: 0.48rem;
      margin-left: 0.4rem;
      text-align: left;
      font-size: 0.34rem;
      color: #32404e;
      font-weight: bolder;
    }
    .first-content-bottom {
      width: 100%;
      height: 1.72rem;
      display: flex;
      //   flex-direction: column;
      justify-content: space-between;
      .first-conten-cell {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100% / 3;
        .first-value {
          font-size: 0.34rem;
          color: #fd7a4e;
          font-weight: bold;
        }
        .first-key {
          font-size: 0.3rem;
          color: #b3b6ba;
          font-weight: bold;
        }
      }
    }
  }
  .second-conten {
    .second-conten-title {
      text-align: left;
      margin-left: 0.39rem;
      font-size: 0.34rem;
      font-weight: bolder;
      color: #32404e;
    }
    .second-conten-desc {
      text-align: left;
      margin-top: 0.36rem;
      margin-left: 0.39rem;
      font-size: 0.3rem;
      color: #32404e;
      line-height: 0.5rem;
    }
  }
  .three-conten {
    .three-conten-title {
      text-align: left;
      margin-left: 0.39rem;
      font-size: 0.34rem;
      font-weight: bolder;
      color: #32404e;
      margin-top: 0.47rem;
    }
    .three-conten-img {
        margin-top: 0.39rem;
        background: paleturquoise;
        margin-left: 0.4rem;
        margin-right: 0.4rem;
        height: 5.43rem;
    }
  }
  .bottom-view{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1.64rem;
      background: white;
      a{
          display: inline-block;
          width: 6.3rem;
          height: 1.0rem;
          background: #19CD60;
          line-height: 1.0rem;
          font-size: 0.4rem;
          font-weight: bold;
          color: white;
          border-radius: 0.1rem;
      }
  }
}
</style>