<template>
    <div class="home-acticle">
        <div class="acticle-item" v-for="(item,index) of list" :key="index">
            <div class="item-title">
                <div class="title-info">
                    <div class="avator">
                        <img :src="baseUrl + item.consultantUrl" alt="img">
                    </div>
                    <div class="name">{{item.consultantNickName}}</div>
                </div>
                <div class="more"></div>
            </div>
            <div class="text-header">{{item.title}}</div>
            <div class="parage" v-html="item.content" ref="parage"></div>
        </div>
    </div>
</template>
<script>
import {handleDom} from '@/common/fn'
import axios from 'axios'
export default {
  props:{
    consultantId:Number
  },
  data() {
    return {
        baseUrl:"https://api.migrantju.cn",
        list:[]
    };
  },
  mounted(){
    this.getData()
  },
  methods: {
    getData() {
      const url = `${this.baseUrl}/public/getConsultantTweets?consultantId=${this.consultantId}`;
      axios.get(url).then(res=> {
        if(res.status===200) {
          this.list = res.data.body
          this.$nextTick(()=>{
            handleDom(this.$refs.parage)
          })
        }
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
