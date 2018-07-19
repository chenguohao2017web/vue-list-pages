<template>
  <div class="tweetDetail">
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
      <div class="content" v-html="data.content" ref="content">
      </div>
    </div>
    <div class="footer" @click="handleClick">
      查看详情
    </div>
  </div>
</template>
<style lang="less" scoped>
.tweetDetail {
  padding-bottom:90px;
}
.footer {
  position:fixed;
  bottom:0;
  left:0;
  width:100%;
  height: 90px;
  line-height: 90px;
  text-align: center;
  background: #c3292b;
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
import {handleUrl,handleDom, redirctUrl} from '../../common/fn'
import { baseUrl } from "../../common/api";
import axios from "axios";
export default {
  name: "CicleDetail",
  created() {
    redirctUrl()
    this.query = handleUrl();
    this.getData();
    this.inviteCode = this.query.inviteCode
  },
  data() {
    return {
      data: {},
      baseUrl: baseUrl,
      query: {},
      inviteCode:''
    };
  },
  methods: {
    handleClick(){
      window.open(`http://api.migrantju.cn/indexReg.html?inviteCode=${this.inviteCode}`)
    },
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
