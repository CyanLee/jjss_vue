<template>
  <div id="navi-main">
    <div class="left-view">
      <a href>
        <!-- <img src="../../img/back.png" alt /> -->
      </a>
    </div>
    <span class="title">{{this.naviTitle}}</span>
    <div class="right-view">
      <a href></a>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:['naviTitle'],
};
</script>

<style lang="less" scoped>
#navi-main {
    background: white;
  border-bottom: 0.01rem solid #f8f8f8;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.28rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-view {
    background: url("../../img/back.png") blue;
    width: 0.44rem;
    height: 0.44rem;
    margin-left: 0.2rem;
  }
  .title {
    color: #32404e;
    font-size: 0.4rem;
    font-weight: bolder;
    // line-height: 1.28rem;
  }
  .right-view {
    background: url("../../img/back.png") blue;
    width: 0.44rem;
    height: 0.44rem;
    margin-right: 0.2rem;
  }
}
</style>