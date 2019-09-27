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
      <router-link to>充值</router-link>
      <router-link to>提现</router-link>
    </div>
    <!-- 分割线 -->
    <div class="first-content-line"></div>
    <!-- 选择器 -->
    <!-- 列表 -->
  </div>
</template>

<script>
export default {};
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
}
</style>