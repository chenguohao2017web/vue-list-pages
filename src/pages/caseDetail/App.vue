<template>
  <div class="case">
    <div class="header">案例详情</div>
    <div class="cut-off"></div>
    <div class="container">
      <div class="title">
        {{data.caseTitle}}
      </div>
      <div class="title-info">
        <div class="time">{{data.publishTime}}</div>
        <div class="nums">{{data.viewCount}}</div>
      </div>
      <div class="content">
        <div class="parage" v-html="data.content" ref="parage"></div>
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
      margin-right: 50px;
    }
  }
  .content {
    margin-top: 40px;
    .parage {
      font-size: 30px;
      width: 100%;
      overflow: hidden;
      color: #333333;
      line-height: 1.5;
      text-indent: 60px;
    }
  }
}
</style>
<script>
import { handleDom, handleUrl } from "@/common/fn";
import { baseUrl } from "@/common/api";
import axios from "axios";
export default {
  data() {
    return {
      data: {},
      caseId: ""
    };
  },
  created() {
    const query = handleUrl();
    this.caseId = query.caseId;
    this.getData();
  },
  methods: {
    getData() {
      const url = `${baseUrl}/public/getSuccessCaseDetail?caseId=${
        this.caseId
      }`;
      axios.get(url).then(res => {
        if (res.status === 200) {
          this.data = res.data.body;
          this.$nextTick(() => {
            handleDom(this.$refs.parage);
          });
        }
      });
    },
    handleDom(el) {
      const arrP = el.children;
      for (let i = 0; i < arrP.length; i++) {
        let p = arrP[i];
        p.style.fontSize = "0.4rem";
        p.style.marginBottom = "10px";
        const inner = p.children;
        for (let i = 0; i < inner.length; i++) {
          let item = inner[i];
          if (item.nodeName === "SPAN") {
            item.style.fontSize = ".4rem";
          } else if (item.nodeName === "IMG") {
            item.style.display = "flex";
            item.style.width = "100%";
          }
        }
      }
    }
  }
};
</script>
