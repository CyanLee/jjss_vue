<template>
  <div id="main-view">
    <navi naviTitle="我的名片"></navi>
    <div class="content-view">
      <!-- 头像 -->
      <img class="header-img" src="../../img/mine-header.png" alt />
      <!-- 手机号 -->
      <span class="phone-p">136****6625</span>
      <!-- ID -->
      <span class="id-p">ID：131636</span>
      <!-- line -->
      <img class="line-img" src="../../img//line.png" alt />
      <!-- qr -->
      <img class="qr-img" src alt />
    </div>
     <!-- 复制按钮 -->
      <a class="copy-a" href>复制注册链接</a>
      <!-- 保存图片 -->
      <a class="save-a" href>保存图片</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#main-view {
  padding: 1.28rem 0 1.28rem 0;
  background: #f8f8f8;
  .content-view {
      height: 7.85rem;
    background: #ffffff;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    position: relative;
    .header-img {
      width: 1.4rem;
      height: 1.4rem;
      position: absolute;
      top: 0.8rem;
      left: 1.15rem;
    }
    .phone-p {
      position: absolute;
      top: 1.08rem;
      left: 2.85rem;
      font-size: 0.4rem;
      font-weight: bold;
      color: #32404e;
    }
    .id-p {
      position: absolute;
      top: 1.68rem;
      left: 2.85rem;
      font-size: 0.3rem;
      color: #c3c8cf;
    }
    .line-img{
        position: absolute;
        top: 2.79rem;
        height: 0.01rem;
        left: 0.8rem;
    }
    .qr-img{
        position: absolute;
        top: 3.39rem;
        width: 3.66rem;
        height: 3.66rem;
        background: #32404e;
        left: 1.52rem;
    }
  }
  .copy-a{
      font-size: 0.4rem;
      font-weight: bold;
      color: white;
      background: #19CD60;
      width: 6.3rem;
      height: 1rem;
      border-radius: 0.1rem;
      display: inline-block;
      line-height: 1rem;
  }
  .save-a{
      font-size: 0.4rem;
      font-weight: bold;
      color: white;
      background: #1C9BFF;
      width: 6.3rem;
      height: 1rem;
      border-radius: 0.1rem;
      display: inline-block;
      line-height: 1rem;
  }
}
</style>