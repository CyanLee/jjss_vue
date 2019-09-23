<template>
  <div id="main-view">
    <navi naviTitle="投标详情"></navi>
    <!-- 头部 -->
    <div class="header-view">
      <div>
        <p class="header-money">1111</p>
        <p class="header-desc">投标金额(元)</p>
      </div>
    </div>
    <div class="first-content-line"></div>
    <!-- 列表 -->
    <!-- 按钮 -->
  </div>
</template>

<script>
export default {};
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
}
</style>