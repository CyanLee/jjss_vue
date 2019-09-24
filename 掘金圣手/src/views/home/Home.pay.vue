<template>
  <div id="main-view">
    <navi naviTitle="投标详情"></navi>
    <!-- 头部 -->
    <div class="header-view">
      <div>
        <p class="header-money">{{model.money}}</p>
        <p class="header-desc">投标金额(元)</p>
      </div>
    </div>
    <div class="first-content-line"></div>
    <!-- 列表 -->
    <div class="section-view">
      <p>支付方式</p>
    </div>
    <div>
      <div class="pay-list-content" v-for="(item,index) in model.list" :key="index">
        <img class="pay-list-content-first-img" src="../../img/pay-type.png" alt />
        <span>余额支付&nbsp;（0.00元可用）</span>
        <img class="pay-list-content-last-img" src="../../img/choose-sel.png" alt />
      </div>
    </div>
    <!-- 按钮 -->
    <div class="bottom-view">
        <router-link :to="'homePayPassword'">立即投标</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model:{
        money:"1111",
        list:["1","2","3"]
      }
    }
  },
};
</script>

<style lang="less" scoped>
#main-view {
  padding: 1.28rem 0 1.28rem 0;

  .first-content-line {
    background: #f8f8f8;
    width: 100%;
    height: 0.08rem;
  }

  .header-view {
    height: 2.42rem;
    text-align: center;
    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-top: 0.4rem;
      margin-left: 1.55rem;
      border-style: solid;
      border-width: 0.01rem;
      border-color: #d6d8d7;
      width: 4.4rem;
      height: 1.62rem;
      .header-money {
        font-size: 0.4rem;
        color: #fd7a4e;
        font-weight: bold;
      }
      .header-desc {
        font-size: 0.3rem;
        color: #b3b6ba;
        font-weight: bold;
      }
    }
  }
  .section-view {
    height: 0.98rem;
    p {
      font-size: 0.34rem;
      font-weight: bold;
      color: #32404e;
      line-height: 0.98rem;
      text-align: left;
      margin-left: 0.39rem;
    }
  }
  .pay-list-content {
    display: flex;
    justify-content: flex-start;
    height: 1rem;
    // flex-basis:auto;
    img{
      
      width: 0.44rem;
      height: 0.44rem;
      // flex-grow:1;
      // flex-shrink:1;
    }
    span{
      margin-left: 0.39rem;
      font-size: 0.3rem;
      color: #32404E;
      // flex-grow:0.3;
      // flex-shrink:5;
    }

    .pay-list-content-first-img {
         margin-left: 0.5rem;
    }

    .pay-list-content-last-img {
        margin-left: 2.25rem;
    }
  }
  .bottom-view{
    margin-top: 2.22rem;
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