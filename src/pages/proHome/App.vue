<template>
  <div class="home">
    <div class="banner">
      <img src="./imgs/banner.png" alt="banner">
    </div>
    <div class="project">
      <div class="pro-top">
        <div class="top-name">澳大利亚技术项目</div>
        <div class="top-nums">数量：100</div>
      </div>
      <div class="pro-content"></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.banner {
  width: 100%;
  img {
    width: 100%;
  }
}
.cut-off {
  height: 26px;
  background: #f2f6f7;
}
.project {
  padding: 0 30px;
  .pro-top {
    border-bottom:1px solid #ccc;
    height:96px;
    line-height: 96px;
    display: flex;
    justify-content: space-between;
    .top-name {
      color: #333333;
      font-size: 36px;
    }
    .top-nums {
      color: #999999;
      font-size: 24px;
    }
  }
}
</style>
