<template>
  <div class="case">
    <div class="container">
      <div class="title">
        {{data.caseTitle}}
      </div>
      <div class="title-info">
        <div class="time">{{data.publishTime}}</div>
        <div class="nums">{{data.viewCount}}阅读</div>
      </div>
      <div class="content">
        <div class="parage" v-html="data.content" ref="parage"></div>
      </div>
    </div>
    <div class="footer" @click="handleClick">
      查看详情
    </div>
  </div>
</template>
<style lang="less" scoped>
.case {
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
  .title {
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
import { handleDom, handleUrl, redirctUrl } from "@/common/fn";
import { baseUrl } from "@/common/api";
import axios from "axios";
export default {
  data() {
    return {
      data: {},
      caseId: "",
      inviteCode:''
    };
  },
  created() {
    redirctUrl()
    const query = handleUrl();
    this.caseId = query.caseId;
    this.inviteCode = query.inviteCode
    this.getData();
  },
  methods: {
    handleClick(){
      window.open(`http://api.migrantju.cn/indexReg.html?inviteCode=${this.inviteCode}`)
    },
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
