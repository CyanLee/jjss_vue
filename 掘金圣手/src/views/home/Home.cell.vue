<template>
  <div id="home-cell-vue">
    <div class="home-cell">
      <div class="home-cell-top">
        <span class="home-cell-top-title">这是个标题大标题</span>
        <span class="home-cell-top-state">招标中</span>
      </div>
      <div class="home-cell-bottom">
        <div class="home-cell-bottom-content">
          <span class="home-cell-bottom-content-money">2000</span>
          <span class="home-cell-bottom-content-title">投标金额</span>
        </div>
        <div class="home-cell-bottom-content">
          <span class="home-cell-bottom-content-money">2000</span>
          <span class="home-cell-bottom-content-title">投标金额</span>
        </div>
        <div class="home-cell-bottom-content">
          <span class="home-cell-bottom-content-money">2000</span>
          <span class="home-cell-bottom-content-title">投标金额</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#home-cell-vue {
  width: 100%;
  .home-cell {
    border-bottom: 0.01rem solid #f8f8f8;
    .home-cell-top {
      position: relative;
      height: 0.86rem;
      .home-cell-top-title {
        top: 0.48rem;
        left: 0.4rem;
        position: absolute;
        font-size: 0.32rem;
        font-weight: bolder;
        color: #32404e;
      }
      .home-cell-top-state {
        top: 0.42rem;
        right: 0.4rem;
        position: absolute;
        width: 1rem;
        height: 0.44rem;
        background: #19cd60;
        font-size: 0.23rem;
        border-radius: 0.1rem;
        color: #fff;
        line-height: 0.44rem;
      }
    }
    .home-cell-bottom {
      display: flex;
      justify-content: space-between;
      height: 1.66rem;
      .home-cell-bottom-content {
        width: 2.5rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .home-cell-bottom-content-money {
          top: 0.41rem;
          font-size: 0.34rem;
          color: #fd7a4e;
        }
        .home-cell-bottom-content-title {
          width: 100%;
          font-size: 0.3rem;
          color: #b3b6ba;
          top: 0.9rem;
        }
      }
    }
  }
}
</style>