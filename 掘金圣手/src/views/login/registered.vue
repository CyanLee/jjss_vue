<template>
  <div id="main-view">
    <!-- title -->
    <span class="title-span">申请注册</span>
    <div class="content-view">
      <!-- 姓名 -->
      <div class="name-view">
        <span>姓名</span>
        <input type="text" placeholder="请输入您的姓名" />
      </div>
      <!-- 手机号 -->
      <div class="phone-view">
        <span>手机号</span>
        <input type="text" placeholder="请输入您的手机号" />
      </div>
      <!-- 验证码 -->
      <div class="code-view">
        <span>验证码</span>
        <input type="text" placeholder="请输入短信验证码" />
      </div>
      <!-- 推荐人手机号 -->
      <div class="friend-view">
        <span>推荐人手机号(必填)</span>
        <input type="text" placeholder="请输入您的推荐人姓名" />
      </div>
    </div>
    <!-- 申请注册/立即登录 -->
    <div class="register-btn">
      <!-- <a href></a> -->
      <router-link :to="'submitSucc'">申请注册</router-link>
    </div>
    <div class="login-btn">
      <!-- <a href>立即登录</a> -->
      <router-link :to="'home'">立即登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-view"
};
</script>

<style lang="less" scoped>
/* 去除input默认样式 */
input {
  background: none;
  outline: none;
  border: none;
}

/* input placeholder 的样式设置 */
::-webkit-input-placeholder {
  color: #c3c8cf;
}

a {
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

#main-view {
  width: 100%;
  position: relative;
  .title-span {
    position: absolute;
    color: #32404e;
    font-size: 0.48rem;
    top: 1.87rem;
    left: 0.66rem;
    font-weight: bold;
    display: block;
  }
  .content-view {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    // height: 6.24rem;
    top: 2.9rem;
    .name-view {
      margin: 0 0.61rem auto;
      position: relative;
      height: 1.56rem;
      span {
        position: absolute;
        font-size: 0.25rem;
        color: #222222;
        top: 0.04rem;
        left: 0;
      }
      input {
        border-bottom: 0.01rem solid rgba(59, 48, 96, 0.3);
        position: absolute;
        top: 0.65rem;
        font-size: 0.42rem;
        width: 100%;
        left: 0;
      }
    }
    .phone-view {
      margin: 0 0.61rem auto;
      position: relative;
      height: 1.56rem;
      span {
        position: absolute;
        font-size: 0.25rem;
        color: #222222;
        top: 0.04rem;
        left: 0;
      }
      input {
        border-bottom: 0.01rem solid rgba(59, 48, 96, 0.3);
        position: absolute;
        top: 0.65rem;
        font-size: 0.42rem;
        width: 100%;
        left: 0;
      }
    }
    .code-view {
      margin: 0 0.61rem auto;
      position: relative;
      height: 1.56rem;
      span {
        position: absolute;
        font-size: 0.25rem;
        color: #222222;
        top: 0.04rem;
        left: 0;
      }
      input {
        border-bottom: 0.01rem solid rgba(59, 48, 96, 0.3);
        position: absolute;
        top: 0.65rem;
        font-size: 0.42rem;
        width: 100%;
        left: 0;
      }
    }
    .friend-view {
      margin: 0 0.61rem auto;
      position: relative;
      height: 1.56rem;
      span {
        position: absolute;
        font-size: 0.25rem;
        color: #222222;
        top: 0.04rem;
        left: 0;
      }
      input {
        width: 100%;
        border-bottom: 0.01rem solid rgba(59, 48, 96, 0.3);
        position: absolute;
        top: 0.65rem;
        font-size: 0.42rem;
        left: 0;
      }
    }
  }
  .register-btn {
    position: absolute;
    top: 9.6rem;
    a {
      background: #d6d8d7;
      color: #ffffff;
      height: 1rem;
      font-size: 0.38rem;
      width: 6.3rem;
      display: inline-block;
      line-height: 1rem;
      margin: 0.4rem 0.6rem auto;
    }
  }
  .login-btn {
    position: absolute;
    top: 10.89rem;
    a {
      color: #1c9bff;
      height: 1rem;
      font-size: 0.38rem;
      width: 6.3rem;
      display: inline-block;
      line-height: 1rem;
      margin: 0.4rem 0.6rem auto;
    }
  }
}
</style>