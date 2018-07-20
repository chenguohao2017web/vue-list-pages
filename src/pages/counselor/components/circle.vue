<template>
  <div class="circle">
    <div class="item" v-for="(item, index) of data" :key="index">
      <div class="top">
        <div class="user">
          <div class="icon">
            <img :src="baseUrl + item.entity.avatarImg" alt="">
          </div>
          <div class="name">{{item.entity.nickName}}</div>
        </div>
      </div>
      <div class="text">{{item.entity.content}}</div>
      <div class="img-group">
        <div class="img-wrap" v-for="(img,index) of item.entity.fileUrls" :key="index">
          <img :src="baseUrl + img" alt="">
        </div>
      </div>
      <div class="info">
        <div class="left">{{item.entity.viewCount}}人阅读</div>
        <div class="right">
          <div class="right-item1">
            <div class="icon"></div>
            <div class="nums">{{item.entity.commentsCount}}</div>
          </div>
          <div class="right-item2">
            <div class="icon"></div>
            <div class="nums">{{item.entity.favCount}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.circle {
  background: #eee;;
  .item {
    background: #fff;
    margin-bottom: 30px;
    padding:30px;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .user {
        display: flex;
        align-items: center;
        .icon {
          width:100px;
          height:100px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width:100%;
          }
        }
        .name {
          font-size: 30px;
          color:#c3292b;
          font-weight: bold;
          margin-left: 30px;
        }
      }
    }
    .text {
      margin-top: 20px;
      font-size: 30px;
    }
    .img-group {
      margin-top: 20px;
      display:flex;
      .img-wrap {
        flex:1;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
        img {
          width:100%;
        }
      }
    }
    .info {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      font-size: 30px;
      color: #666;
      .left {
        letter-spacing: 3px;
      }
      .right {
        display: flex;
        align-items: center;
        .right-item1 {
          display: flex;
          align-items: center;
          .icon {
            margin-right: 20px;
            width:30px;
            height:30px;
            background: url(../images/icon_ask.png);
            background-size:100%;
          }
        }
        .right-item2 {
          margin-left: 50px;
          display: flex;
          align-items: center;
           .icon {
             margin-right: 20px;
            width:30px;
            height:30px;
            background: url(../images/icon_share.png);
            background-size:100%;
          }
        }
      }
    }
  }
}
</style>
<script>
import { baseUrl } from "@/common/api";
import axios from "axios";
export default {
  props:{
    consultantId:Number
  },
  data() {
    return {
      baseUrl: baseUrl,
      data:[]
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get(`${baseUrl}/public/getImmigrantCirclesForUser?userId=${this.consultantId}&page=1&pageSize=3`).then(res=>{
        if(res.status===200) {
          this.data = res.data.body.records
        }
      })
    }
  }
};
</script>
