<template>
    <div class="home-acticle">
        <div class="acticle-item" v-for="(item,index) of list" :key="index">
            <div class="img" :style="'background:url('+ baseUrl+ item.tweetsUrl+') center center;backgroundSize:cover'"></div>
            <div class="content">
              <div class="text">{{item.title}}</div>
              <div class="group">
                <div class="icon people"></div>
                <div class="val">{{item.consultantNickName}}</div>
              </div>
              <div class="group">
                <div class="icon clock"></div>
                <div class="val">{{item.createTime}}</div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import { handleDom } from "@/common/fn";
import axios from "axios";
export default {
  props: {
    consultantId: Number
  },
  data() {
    return {
      baseUrl: "https://api.migrantju.cn",
      list: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const url = `${this.baseUrl}/public/getConsultantTweets?consultantId=${
        this.consultantId
      }`;
      axios.get(url).then(res => {
        if (res.status === 200) {
          this.list = res.data.body;
          this.$nextTick(() => {
            handleDom(this.$refs.parage);
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.home-acticle {
  padding: 0 30px;
  .acticle-item {
    padding: 40px 0;
    display: flex;
    .img {
      width: 200px;
      height: 200px;
      overflow: hidden;
      margin-right: 20px;
    }
    .content {
      .text {
        font-size: 32px;
      }
      .group {
        display: flex;
        align-items: center;
        margin: 20px 0;
        .icon {
          width: 38px;
          height: 38px;

          margin-right: 10px;
          &.people {
            background: url(../images/user.png);
            background-size:38px 38px;
          }
          &.clock {
            background: url(../images/date.png);
            background-size:38px 38px;
          }
        }
      }
    }
  }
}
</style>
