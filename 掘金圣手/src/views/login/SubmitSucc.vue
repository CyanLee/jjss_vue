<template>
  <div id="main-view">
    <span class="title-span">提交成功</span>
    <img class="icon-img" src="../../img/submitSucc.png" />
    <span class="tip-span">恭喜您，注册申请提交成功，审核结果 我们会以短信的形式通知您，届时请注意查收</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#main-view {
  position: relative;
  .title-span {
    position: absolute;
    color: #32404e;
    font-size: 0.5rem;
    font-weight: bolder;
    top: 1.89rem;
    left: 0.62rem;
  }
  .icon-img {
    text-align: center;
    position: absolute;
    width: 3.3rem;
    height: 3.3rem;
    top: 2.94rem;
    left: 2.1rem;
  }
  .tip-span {
      position: absolute;
    color: #32404E;
    font-size: 0.3rem;
    font-weight: bolder;
    top: 6.83rem;
    left: 0.62rem;
  }
}
</style>