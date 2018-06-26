<template>
  <div class="circleDetail">
    <div class="header">推文详情</div>
    <div class="cut-off"></div>
    <div class="container">
      <div class="member-info">
        <div class="img">
          <img src="./images/avator.png" alt="avator">
        </div>
        <div class="desc">
          <div class="desc-top">
            <div class="name">寒山潜龙</div>
            <div class="pos">广州</div>
          </div>
          <div class="desc-tips">
            签名：个人感觉还剋吧！
          </div>
        </div>
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
  .member-info {
    margin-top: 40px;
    display: flex;
    align-items: flex-start;
    .img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 40px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .desc {
      flex: 1;
      .desc-top {
        display: flex;
        color: #333333;
        .name {
          margin-right: 38px;
          font-size: 28px;
        }
        .pos {
          font-size: 24px;
        }
      }
      .desc-tips {
        margin-top: 30px;
        color: #999999;
        font-size: 22px;
      }
    }
  }
  .content {
    margin-top: 40px;
    .parage {
      font-size: 30px;
      color: #333333;
      line-height: 1.5;
    }
  }
}
</style>
<script>
import axios from 'axios'
export default {
  name: 'CicleDetail',
  created(){
    this.getData()
  },
  methods: {
    getData(){
      const url = `https://api.migrantju.cn/user/circles/1`
      axios.get(url).then(res=>{
        console.log(res)
      })
    }
  }
}
</script>
