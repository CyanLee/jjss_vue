/* 修改支付密码 */
<template>
  <div id="main-div">
    <navi naviTitle="设置"></navi>
    <div class="lock-div">
      <img src="../../img/mine-seting-sel-lock.png" alt />
    </div>
    <p class="tip-p">尊敬的用户，您好！ <br />您已经为您的账户设置了支付密码，请放心</p>
    <div class="action-div">
      <router-link to>修改支付密码</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#main-div {
    padding: 1.28rem 0 1.28rem 0;
  .lock-div {
      margin-top: 1.61rem;
    img {
      width: 3.3rem;
      height: 3.3rem;
    }
  }
  .tip-p {
    margin-top: 0.39rem;
    font-size: 0.3rem;
    color: #32404e;
    margin-left: 0.92rem;
    margin-right: 0.92rem;
  }
  .action-div {
    margin-top: 0.44rem;
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