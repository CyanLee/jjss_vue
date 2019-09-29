<template>
  <div id="main-div">
    <navi naviTitle="添加银行卡"></navi>
    <!-- 提示 -->
    <div class="tip-div">为了保证您的账号资金安全，只能绑定自己的银行卡</div>
    <!-- 姓名 -->
    <div class="name-div">
      <span>持卡人姓名</span>
      <input type="text" placeholder="请输入您的姓名" />
    </div>
    <!-- 身份证 -->
    <div class="idCard-div">
      <span>身份证号码</span>
      <input type="text" placeholder="请输入持卡人身份证号码" />
    </div>
    <!-- 选择开户行 -->
    <div class="where-bank-div">
      <span>选择开户行</span>
      <span>未选择</span>
      <img src="../../img/arrow.png" alt />
    </div>
    <!-- 银行卡号 -->
    <div class="bankCard-num-div">
      <span>银行卡卡号</span>
      <input type="text" placeholder="请输入银行卡卡号" />
    </div>
    <!-- 手机号 -->
    <div class="phone-num-div">
      <span>预留手机号</span>
      <input type="text" placeholder="请输入银行卡预留手机号" />
    </div>
    <!-- 短信验证码 -->
    <div class="code-num-div">
      <span>短信验证码</span>
      <input type="text" placeholder="请输入短信验证码" />
      <a href>发送验证码</a>
    </div>
    <!-- 手机号提示 -->
    <p class="phone-tip-p">手机号是您在办理银行卡所留的手机号</p>
    <!-- 立即添加按钮 -->
    <a class="actionBtn" href="">立即添加</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
/* input placeholder 的样式设置 */
::-webkit-input-placeholder {
  color: #c3c8cf;
}

#main-div {
  padding: 1.28rem 0 1.28rem 0;
  .tip-div {
    margin: 0.39rem auto;
    margin-bottom: 0;
    font-size: 0.14rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #32404e;
    width: 6.07rem;
    height: 0.56rem;
    background: #d6d9dc;
    border-radius: 0.28rem;
    line-height: 0.56rem;
  }
  .name-div {
    position: relative;
    height: 1.22rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    border-bottom: 0.01rem solid rgba(59, 48, 96, 0.3);
    span {
      position: absolute;
      top: 0.64rem;
      left: 0;
      font-size: 0.28rem;
      color: #666666;
    }
    input {
      position: absolute;
      top: 0.64rem;
      left: 2.02rem;
      font-size: 0.3rem;
      color: #32404e;
    }
  }
  .idCard-div {
    position: relative;
    height: 1.22rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    border-bottom: 0.01rem solid rgba(59, 48, 96, 0.3);
    span {
      position: absolute;
      top: 0.64rem;
      left: 0;
      font-size: 0.28rem;
      color: #666666;
    }
    input {
      position: absolute;
      top: 0.64rem;
      left: 2.02rem;
      font-size: 0.3rem;
      color: #32404e;
    }
  }
  .where-bank-div {
    position: relative;
    height: 1.22rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    border-bottom: 0.01rem solid rgba(59, 48, 96, 0.3);
    :first-child {
      position: absolute;
      top: 0.64rem;
      left: 0;
      font-size: 0.28rem;
      color: #666666;
    }
    :nth-child(n + 2) {
      position: absolute;
      top: 0.64rem;
      right: 0.72rem;
      text-align: right;
      font-size: 0.3rem;
      color: #c3c8cf;
    }
    :last-child {
      top: 0.64rem;
      right: 0rem;
      width: 0.5rem;
      height: 0.5rem;
    }
  }
  .bankCard-num-div {
    position: relative;
    height: 1.22rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    border-bottom: 0.01rem solid rgba(59, 48, 96, 0.3);
    span {
      position: absolute;
      top: 0.64rem;
      left: 0;
      font-size: 0.28rem;
      color: #666666;
    }
    input {
      position: absolute;
      top: 0.64rem;
      left: 2.02rem;
      font-size: 0.3rem;
      color: #32404e;
    }
  }
  .phone-num-div {
    position: relative;
    height: 1.22rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    border-bottom: 0.01rem solid rgba(59, 48, 96, 0.3);
    span {
      position: absolute;
      top: 0.64rem;
      left: 0;
      font-size: 0.28rem;
      color: #666666;
    }
    input {
      position: absolute;
      top: 0.64rem;
      left: 2.02rem;
      font-size: 0.3rem;
      color: #32404e;
    }
  }
  .code-num-div {
    position: relative;
    height: 1.22rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    border-bottom: 0.01rem solid rgba(59, 48, 96, 0.3);
    span {
      position: absolute;
      top: 0.64rem;
      left: 0;
      font-size: 0.28rem;
      color: #666666;
    }
    input {
      position: absolute;
      top: 0.64rem;
      left: 2.02rem;
      font-size: 0.3rem;
      color: #32404e;
    }
    a {
      position: absolute;
      font-size: 0.3rem;
      color: white;
      display: inline-block;
      width: 1.7rem;
      height: 0.58rem;
      border-radius: 0.1rem;
      top: 0.54rem;
      right: 0;
      background: #D6D8D7;
      line-height: 0.58rem;
    }
  }
  .phone-tip-p{
      margin-top: 0.24rem;
      font-size: 0.24rem;
      color: #FD7A4E;
      text-align: left;
      margin-left: 0.4rem;
  }
  .actionBtn{
      font-size: 0.4rem;
      font-weight: bold;
      color: white;
      background: #D6D8D7;
      width: 6.3rem;
      height: 1rem;
      border-radius: 0.1rem;
      display: inline-block;
      line-height: 1rem;
  }
}
</style>