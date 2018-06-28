<template>
  <div class="tweetDetail">
    <!-- <div class="header">推文详情</div> -->
    <div class="cut-off"></div>
    <div class="container">
      <div class="member-info">
        <div class="img">
          <img :src="baseUrl+data.consultantUrl" alt="avator">
        </div>
        <div class="desc">
          <div class="desc-top">
            <div class="name">{{data.nickName}}</div>
            <div class="pos">{{data.cityName}}</div>
          </div>
          <div class="desc-tips">
           {{data.title}}
          </div>
        </div>
      </div>
      <div class="pic">
        <img :src="baseUrl + data.profileBannerUrl" alt="banner">
      </div>
      <div class="content" v-html="data.content" ref="content">
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
  .pic {
    margin-top: 20px;
    width: 100%;
    img {
      width: 100%;
    }
  }
  .content {
    margin-top: 40px;
    font-size: 30px;
    color: #333333;
    line-height: 1.5;
  }
}
</style>
<script>
import {handleUrl,handleDom} from '../../common/fn'
import { baseUrl } from "../../common/api";
import axios from "axios";
export default {
  name: "CicleDetail",
  created() {
    this.query = handleUrl();
    this.getData();
  },
  data() {
    return {
      data: {},
      baseUrl: baseUrl,
      query: {}
    };
  },
  methods: {
    getData() {
      const url = `${baseUrl}/public/tweetsDetail?tweetsId=${
        this.query.tweetsId
      }`;
      axios.get(url).then(res => {
        if (res.status === 200) {
          this.data = res.data.body;
          handleDom(this.$refs.content);
        }
      });
    }
  }
};
</script>
