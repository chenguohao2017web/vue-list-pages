<template>
    <div class="home-acticle">
        <div class="acticle-item">
            <div class="item-title">
                <div class="title-info">
                    <div class="avator">
                        <img src="../images/banner.png" alt="img">
                    </div>
                    <div class="name">xxx</div>
                </div>
                <div class="more"></div>
            </div>
            <div class="text-header">189澳大利亚独立技术一移民</div>
            <div class="parage">打瞌睡JFK劳动时间风口浪尖迪斯科浪费建设靠大家风口浪尖上的开发建设打开链接数据库的JFK的历史JFK</div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  props:{
    consultantId:Number
  },
  data() {
    return {
        baseUrl:"https://api.migrantju.cn",
    };
  },
  created(){
    this.getData()
  },
  methods: {
    getData() {
      const url = `${this.baseUrl}/public/get-initiate-activities?consultantId=${this.consultantId}&page=1&pageSize=10`;
      axios.get(url).then(res=> {
        console.log(res)
      })
    }
  }
};
</script>
<style lang="less" scoped>
.home-acticle {
  padding: 0 30px;
  .acticle-item {
    padding: 40px 0;
    .item-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title-info {
        display: flex;
        align-items: center;
        .avator {
          margin-right: 15px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .more {
        width: 28px;
        height: 6px;
        background: url(../images/icon_more2.png);
        background-size: 100% 100%;
      }
    }
    .text-header {
      padding: 20px 0;
      font-size: 28px;
      color: #333333;
    }
    .parage {
      font-size: 24px;
      color: #666666;
      line-height: 1.5;
    }
  }
}
</style>
