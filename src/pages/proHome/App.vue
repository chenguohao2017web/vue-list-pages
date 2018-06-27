<template>
  <div class="home">
    <div class="banner">
      <img :src="baseUrl + data.projectImageUrl" alt="banner">
    </div>
    <div class="project">
      <div class="pro-top">
        <div class="top-name">{{data.projectName}}</div>
        <div class="top-nums">数量：{{data.minPriceAmt}}</div>
      </div>
      <div class="pro-content">
        <div class="sudoku-item">
          <div class="val">25万-30万</div>
          <div class="key">最底认购额（元）</div>
        </div>
        <div class="sudoku-item">
          <div class="val">25万-30万</div>
          <div class="key">投资期限</div>
        </div>
        <div class="sudoku-item">
          <div class="val">25万-30万</div>
          <div class="key">国家或城市</div>
        </div>
        <div class="sudoku-item">
          <div class="val">{{data.commissionCcy}}</div>
          <div class="key">类型</div>
        </div>
        <div class="sudoku-item">
          <div class="val">25万-30万</div>
          <div class="key">募集期限</div>
        </div>
        <div class="sudoku-item heightLight">
          <div class="val">25万-30万</div>
          <div class="key">预计年华</div>
        </div>
        <div class="sudoku-item">
          <div class="val">{{data.commissionValue}}</div>
          <div class="key">佣金比例</div>
        </div>
      </div>
    </div>
    <div class="cut-off"></div>
    <div class="counselor">
      <div class="title">项目顾问</div>
      <div class="counselor-content">
        <img src="./imgs/avator.png" alt="img">
        <img src="./imgs/avator.png" alt="img">
        <img src="./imgs/avator.png" alt="img">
        <img src="./imgs/avator.png" alt="img">
        <img src="./imgs/avator.png" alt="img">
        <img src="./imgs/avator.png" alt="img">
        <img src="./imgs/avator.png" alt="img">
      </div>
    </div>
    <div class="cut-off"></div>
    <div class="advantage">
      <div class="title">项目优势</div>
      <div class="advantage-content">
        <div class="advantage-item">
          {{data.advantage1}}
        </div>
        <div class="advantage-item">
          {{data.advantage2}}
        </div>
        <div class="advantage-item">
          {{data.advantage3}}
        </div>
        <div class="advantage-item">
          {{data.advantage4}}
        </div>
      </div>
    </div>
    <div class="cut-off"></div>
    <div class="more-wrap">
      <div class="tab" ref="tab">
        <router-link tag="div" to="/detail" class="tab-item">详情</router-link>
        <router-link tag="div" to="/flow" class="tab-item">交易流程</router-link>
        <router-link tag="div" to="/money" class="tab-item">佣金</router-link>
        <router-link tag="div" to="/data" class="tab-item">项目资料</router-link>
      </div>
      <div class="tab-content">
        <router-view />
      </div>
    </div>
    <div class="footer">
      <div class="btn agency">一键代理</div>
      <div class="btn order">创建订单</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.home {
  padding-bottom: 100px;
}
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
    border-bottom: 1px solid #ccc;
    height: 96px;
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
  .pro-content {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 40px;
    .sudoku-item {
      box-sizing: border-box;
      width: 33.3333%;
      border-right: 1px solid #ccc;
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &.heightLight {
        .val {
          color: #3aa5ff;
        }
      }
      .key {
        margin-top: 20px;
        font-size: 24px;
        color: #999999;
      }
      .val {
        font-size: 30px;
        color: #333333;
      }
      &:nth-child(3n) {
        border-right: none;
      }
    }
  }
}
.counselor {
  padding: 0 30px;
  .title {
    height: 80px;
    line-height: 80px;
    font-size: 28px;
    color: #333333;
  }
  .counselor-content {
    display: flex;
    padding-bottom: 20px;
    &:after {
      content: "...";
      display: block;
      position: relative;
      top: 40px;
      right: -30px;
    }
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin-right: 18px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.advantage {
  padding: 0 30px;
  .title {
    padding: 30px 0;
    text-align: center;
    font-size: 28px;
    color: #333333;
  }
  .advantage-content {
    display: flex;
    flex-wrap: wrap;
    .advantage-item {
      padding: 20px 28px;
      background: #eee;
      color: #999999;
      font-size: 21px;
      width: 48%;
      box-sizing: border-box;
      margin-bottom: 30px;
      &:nth-child(1n) {
        margin-right: 2%;
      }
    }
  }
}
.more-wrap {
  .tab {
    display: flex;
    height: 86px;
    line-height: 86px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    padding: 0 30px;
    .tab-item {
      flex: 1;
      text-align: center;
      font-size: 28px;
      color: #999999;
      margin: 0 10px;
      &.router-link-active {
        border-bottom: 8px solid #c3292b;
        color: #c3292b;
        font-weight: bold;
      }
    }
  }
  .tab-content {
    padding: 30px;
  }
}
.footer {
  height: 100px;
  position: fixed;
  left: 0;
  width: 100%;
  bottom: 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  .btn {
    box-sizing: border-box;
    width: 290px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 30px;
    color: #333333;
    border-radius: 3px;
    border: 1px solid #333;
    &.agency {
      margin-right: 20px;
      color: #fff;
      background: #c3292b;
      border: 1px solid #c3292b;
    }
  }
}
</style>
<script>
import {baseUrl} from '../../common/api'
import axios from 'axios'
export default {
  data(){
    return {
      data:{},
      baseUrl:baseUrl
    }
  },
  created(){
    this.getData()
  },
  mounted() {
    this.changeTab();
  },
  methods: {
    getData(){
      const url = `${baseUrl}/public/project-details?id=117`
      axios.get(url).then(res=>{
        if(res.status===200) {
          this.data = res.data.body
        }
      })
    },
    changeTab() {
      const aDiv = this.$refs.tab.children;
      for (let i = 0; i < aDiv.length; i++) {
        aDiv[i].onclick = function() {
          this.className = "tab-item router-link-active";
        };
      }
    }
  }
};
</script>
