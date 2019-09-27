<template>
  <div id="main-view">
    <navi class="navi-view" naviTitle="个人中心"></navi>
    <!-- 头部视图 -->
    <div>
      <div class="header-bg-div">
        <img src="../../img/mine-header-bg.png" alt />
      </div>
      <div class="header-user-div">
        <img src="../../img/mine-header.png" alt />
      </div>
      <p class="phone-p">136 **** 8027</p>
      <div class="content-div">
        <div>
          <p class="money-p">8000.00</p>
          <p class="tip-p">账户总额(元)</p>
        </div>
        <div>
          <p class="money-p">8000.00</p>
          <p class="tip-p">可用余额(元)</p>
        </div>
        <div>
          <p class="money-p">8000.00</p>
          <p class="tip-p">待收总额(元)</p>
        </div>
      </div>
    </div>
    <div class="first-content-line"></div>
    <!-- 我的资产 -->
    <div class="assets-div">
      <p>我的资产</p>
      <div>
        <div>
          <p class="money-p">8000.00</p>
          <p class="tip-p">账户总额(元)</p>
        </div>
        <div>
          <p class="money-p">8000.00</p>
          <p class="tip-p">可用余额(元)</p>
        </div>
        <div>
          <p class="money-p">8000.00</p>
          <p class="tip-p">待收总额(元)</p>
        </div>
      </div>
    </div>
    <div class="first-content-line"></div>
    <!-- 必备工具 -->
    <div class="need-tools-div">
      <p>必备工具</p>
      <div>
        <div v-for="(item, index) in toolsList" :key="index" @click="pushClick(item.push)">
          <div>
            <img :src="item.icon" alt />
          </div>
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            toolsList:[
                {
                    icon:require('../../img/mine-wallet.png'),
                    name:'我的钱包',
                    push:'mineWallet'
                },
                {
                    icon:require('../../img/mine-wallet.png'),
                    name:'投标记录',
                    push:''
                },
                {
                    icon:require('../../img/mine-wallet.png'),
                    name:'回款记录',
                    push:''
                },
                {
                    icon:require('../../img/mine-wallet.png'),
                    name:'支付密码',
                    push:'mineSetting'
                },
                {
                    icon:require('../../img/mine-wallet.png'),
                    name:'修改登录密码',
                    push:'mineSetting'
                },
                {
                    icon:require('../../img/mine-wallet.png'),
                    name:'退出登录',
                    push:''
                },
            ]
        }
    },
    methods: {
      pushClick(pushUrl) {
        this.$router.push(pushUrl);
      }
    },
};
</script>

<style lang="less" scoped>
#main-view {
  padding: 1.28rem 0 1.28rem 0;

  .first-content-line {
    margin-top: 0.34rem;
    background: #f8f8f8;
    width: 100%;
    height: 0.08rem;
  }

  .navi-view {
    background: #19cd60;
  }
  .header-bg-div {
    img {
      width: 100%;
      height: 1.62rem;
    }
  }
  .header-user-div {
    margin-top: -1.2rem;
    img {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
  .phone-p {
    font-size: 0.4rem;
    color: #32404e;
    font-weight: bold;
  }
  .content-div {
    margin-top: 0.4rem;
    display: flex;
    justify-content: space-around;
    div {
      .money-p {
        font-size: 0.4rem;
        color: #32404e;
        font-weight: bolder;
      }
      .tip-p {
        font-size: 0.24rem;
        color: #b3b6ba;
      }
    }
  }
  .assets-div {
    margin-top: 0.4rem;
    > p {
      font-size: 0.34rem;
      color: #32404e;
      font-weight: bolder;
      text-align: left;
      margin-left: 0.6rem;
    }
    > div {
      margin-top: 0.4rem;
      display: flex;
      justify-content: space-around;
      div {
        .money-p {
          font-size: 0.4rem;
          color: #32404e;
          font-weight: bolder;
        }
        .tip-p {
          font-size: 0.24rem;
          color: #b3b6ba;
        }
      }
    }
  }
  .need-tools-div {
    margin-top: 0.4rem;
    > p {
      font-size: 0.34rem;
      color: #32404e;
      font-weight: bolder;
      text-align: left;
      margin-left: 0.6rem;
    }
    > div {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      div {
          margin: 0 auto;
          width: 100% / 3;
        img {
          width: 0.44rem;
          height: 0.44rem;
        }
        p {
          font-size: 0.24rem;
          color: #b3b6ba;
        }
      }
    }
  }
}
</style>