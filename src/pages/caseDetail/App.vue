<template>
  <div class="case">
    <div class="header">案例详情</div>
    <div class="cut-off"></div>
    <div class="container">
      <div class="title">
        阿姆斯特丹市长见面会重庆站
      </div>
      <div class="title-info">
        <div class="time">2017.10.10</div>
        <div class="nums">123</div>
      </div>
      <div class="content">
        <div class="parage">荷兰作为媲美北欧福利的花园国家，经济高度发达，教育资源丰富，13所大学位列全球200强，物价水平也低于多数欧洲国家，移民政策一经开放，便吸引众多国人申请，因其超高的性价比，更被称作"经济适用移民国"。近年来，国内的荷兰移民热度持续升温，2017年度申请人数、增长率均创新高。</div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.header {
  height: 90px;
  line-height: 90px;
  text-align: center;
  background: linear-gradient(to right, #c3292b, #fb3b37);
  color: #fff;
  font-size: 32px;
}
.cut-off {
  height: 26px;
  background: #f2f6f7;
}
.container {
  padding: 0 30px;
  .title {
    margin-top: 40px;
    font-size: 42px;
    color: #333333;
    line-height: 1.5;
  }
  .title-info {
    margin-top: 32px;
    display: flex;
    font-size: 26px;
    color: #999999;
    .time {
      margin-right:50px;
    }
  }
  .content {
    margin-top: 40px;
    .parage {
      font-size: 30px;
      color: #333333;
      line-height: 1.5;
      text-indent: 60px;
    }
  }
}
</style>
