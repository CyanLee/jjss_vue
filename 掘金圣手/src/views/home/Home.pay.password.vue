<template>
  <div id="main-view">
    <navi naviTitle="支付密码"></navi>
    <!-- header -->
    <div>
      <p class="header-tip-p">为了您的资金安全，请按照以下步骤设置支付密码</p>
    </div>
    <!-- 输入框 -->
    <div class="section-view-div">
      <div class="section-view-phone-view">
        <p>手机号</p>
        <input type="text" placeholder="请输入手机号" />
      </div>
      <div class="section-view-code-view">
        <p>验证码</p>
        <div>
          <input type="text" placeholder="请输入验证码" />
          <a href></a>
        </div>
      </div>
    </div>
    <!-- 按钮 -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#main-view {
  padding: 1.28rem 0 1.28rem 0;
  .header-tip-p {
    margin-top: 0.39rem;
    font-size: 0.24rem;
    color: #b3b6ba;
  }
  .section-view-div {
    p {
      font-size: 0.26rem;
      color: #222222;
    }
    .section-view-phone-view {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      height: 1.56rem;

      input {
        //   margin-top: 0.33rem;
        height: 0.91rem;
        font-size: 0.34rem;
        margin-left: 0.61rem;
        border-bottom: 0.01rem solid rgba(59, 48, 96, 0.3);
        margin-right: 0.61rem;
      }
      p {
        margin-top: 0.4rem;
        margin-left: 0.61rem;
        text-align: left;
      }
    }
    .section-view-code-view {
      margin-top: 0.5rem;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      height: 1.56rem;
      p {
        margin-top: 0.4rem;
        margin-left: 0.61rem;
        text-align: left;
      }
      div {
        display: flex;
        justify-content: flex-start;
        height: 0.91rem;
        input {
          width: 100%;
          font-size: 0.34rem;
          margin-left: 0.61rem;
          margin-right: 0.61rem;
          border-bottom: 0.01rem solid rgba(59, 48, 96, 0.3);
        }
      }
    }
  }
}
</style>