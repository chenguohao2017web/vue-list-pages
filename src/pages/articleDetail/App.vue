<template>
  <div id="app">
    <div class="article-detail">
        <my-header title="文章详情"></my-header>
        <div class="cut-off"></div>
        <div class="content">
            <div class="title">{{axiosData.title}}</div>
            <div class="deta">
                <span class="item">{{axiosData.createTime}}</span>
                <span class="item">{{axiosData.viewCount}}阅读</span>
            </div>
            <div class="banner">
                <img class="img" :src="'https://api.migrantju.cn/' + axiosData.articleImage" alt="img">
            </div>
            <div class="parage" v-html="axiosData.content" ref="parage"></div>
        </div>
        <div class="footer" @click="handleclick">
           查看详情
        </div>
    </div>
  </div>
</template>

<script>
import {handleDom} from '../../common/fn'
import qs from 'qs'
import axios from "axios";
import MyHeader from "@/components/header/Header";
export default {
  data() {
    return {
      axiosData: {},
      id: "",
      articleid: ""
    };
  },
  components: {
    MyHeader
  },
  created() {
    const query = this.handleUrl();
    this.id = query.id
    this.articleid = query.articleid
    this.getAxios();
  },
  methods: {
    handleUrl() {
      let url = location.href;
      if(url.indexOf('?') > 0){
        return qs.parse(url.split('?')[1])
      }
    },
    handleclick() {
      if (this.id) {
        if ((this.id = 2)) {
          window.open(
            "https://itunes.apple.com/us/app/移居平台/id1394521017?l=zh&ls=1&mt=8"
          );
        } else if ((this.id = 3)) {
          window.open(
            "https://itunes.apple.com/us/app/移居/id1394522776?l=zh&ls=1&mt=8"
          );
        }
      }
    },
    getAxios() {
      const url =
        "https://api.migrantju.cn/public/article-detail?articleId=" +
        this.articleid;
      axios.get(url).then(res => {
        if (res.status === 200) {
          this.axiosData = res.data.body;
         handleDom(this.$refs.parage)
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.article-detail {
  padding-bottom: 100px;
}
.cut-off {
  width: 100%;
  height: 30px;
  background: #f2f6f7;
}
.content {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0 30px;
  .title {
    font-size: 42px;
    color: #333333;
    line-height: 1.5;
  }
  .deta {
    padding: 38px 0;
    font-size: 26px;
    color: #999999;
    .item {
      margin-right: 70px;
    }
  }
  .parage {
    font-size: 30px;
    color: #333;
    line-height: 1.5;
    text-indent: 60px;
    width: 100%;
    overflow: hidden;
    & img {
      width: 100%;
    }
  }
  .banner {
    padding: 10px 0;
    .img {
      width: 100%;
    }
  }
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100px;
  background: #c3292b;
  color: #fff;
  text-align: center;
  line-height: 100px;
  width: 100%;
}
</style>



