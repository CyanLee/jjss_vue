<template>
  <div id="main-div">
    <navi naviTitle="我的钱包"></navi>
    <!-- 3个数据 -->
    <div class="header-data-statistics">
      <div>
        <p>6688.00</p>
        <p>账户余额(元)</p>
      </div>
      <div>
        <p>6688.00</p>
        <p>账户余额(元)</p>
      </div>
      <div>
        <p>6688.00</p>
        <p>账户余额(元)</p>
      </div>
    </div>
    <!-- 按钮 -->
    <div class="action-div">
      <router-link to="mineTopup">充值</router-link>
      <router-link to="mineAddBankCardNull">提现</router-link>
    </div>
    <!-- 分割线 -->
    <div class="first-content-line"></div>
    <!-- 选择器 -->
    <div class="choose-div">
      <div>
        <p>资金流水</p>
        <div></div>
      </div>
      <div>
        <p>资金流水</p>
        <div></div>
      </div>
      <div>
        <p>资金流水</p>
        <div></div>
      </div>
    </div>
    <!-- 列表 -->
    <div class="choose-list-div" v-for="(item, index) in dataList" :key="index">
      <span class="title">{{item.title}}</span>
      <span class="time">{{item.time}}</span>
      <span class="money">{{item.money}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList:[
        {
          title:'余额充值',
          time:'2019-08-08  15:45:45',
          money:'+8888'
        },
        {
          title:'余额提现',
          time:'2019-08-08  15:45:45',
          money:'-8888'
        },
        {
          title:'投标支付',
          time:'2019-08-08  15:45:45',
          money:'+8888'
        },
        {
          title:'回收本金',
          time:'2019-08-08  15:45:45',
          money:'+8888'
        },
      ]
    }
  },
};
</script>

<style lang="less" scoped>
#main-div {
  .first-content-line {
    margin-top: 0.72rem;
    background: #f8f8f8;
    width: 100%;
    height: 0.08rem;
  }

  padding: 1.28rem 0 1.28rem 0;
  .header-data-statistics {
    margin-top: 0.71rem;
    display: flex;
    justify-content: space-around;
    :first-child {
      font-size: 0.4rem;
      color: #32404e;
      font-weight: bold;
    }
    :last-child {
      font-size: 0.24rem;
      color: #b3b6ba;
    }
  }
  .action-div {
    display: flex;
    justify-content: space-around;
    margin-top: 0.64rem;
    a {
      font-size: 0.4rem;
      color: #ffffff;
      font-weight: bold;
      border-radius: 0.1rem;
      width: 2.59rem;
      height: 0.72rem;
      display: inline-block;
      line-height: 0.72rem;
    }
    :first-child {
      background: #19cd60;
    }
    :last-child {
      background: #1c9bff;
    }
  }
  .choose-div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    > div {
      height: 0.98rem;
      display: flex;
      text-align: center;
      justify-content: center;
      flex-direction: column;
      p {
        font-size: 0.3rem;
        color: #32404e;
        font-weight: bold;
        flex-grow: 0.3;
      }
      div {
        background: #32404e;
        width: 0.54rem;
        height: 0.04rem;
        margin: 0 auto;
      }
    }
  }
  .choose-list-div {
    position: relative;
    height: 1.7rem;
    width: 100%;
    :first-child {
      position: absolute;
      top: 0.4rem;
      left: 0.4rem;
      font-size: 0.32rem;
      color: #32404E;
      font-weight: bold;
    }
    :nth-child(n + 2) {
      position: absolute;
      top: 1.11rem;
      left: 0.4rem;
      font-size: 0.24rem;
      color: #C3C8CF;
    }
    :last-child {
      position: absolute;
      top: 0.72rem;
      right: 0.39rem;
      left: 0rem;
      font-size: 0.34rem;
      font-weight: bold;
      color: #19CD60;
      text-align: right;
    }
  }
}
</style>