<template>
    <div class="home">
        <!-- <my-header title="顾问主页"></my-header> -->
        <div class="header" ref="header">
            <div class="container">
                <div class="header-avator">
                    <img :src="baseUrl + data.avatarImg" alt="avator">
                </div>
                <div class="header-content">
                    <div class="top">
                        <div class="top-left">
                            <div class="name">{{data.userName}}</div>
                            <div class="icon"></div>
                        </div>
                        <div class="top-right">
                            <div class="icon"></div>
                            <div class="nums">{{data.focusCount}}</div>
                        </div>
                    </div>
                    <div class="mid">
                        <div class="icon"></div>
                        <div class="text">{{data.cityName}}</div>
                    </div>
                    <div class="foo">
                        <div class="item">
                            <div class="icon"></div>
                            <div class="key">从业年限</div>
                            <div class="val">{{data.serviceCount}}年</div>
                        </div>
                        <div class="item">
                            <div class="key">咨询量</div>
                            <div class="val">{{data.consultCount}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="signature">
            <div class="container">
                <div class="info">
                    <div class="icon"></div>
                    <div class="text">{{data.personalSignature}}</div>
                </div>
                <div class="btn-group">
                    <div class="btn" 
                    :class="{active:index==currentIndex}"
                    v-for="(item,index) of data.categoryList" 
                    :key="index">{{item.categoryName}}</div>
                </div>
            </div>
        </div>
        <div class="evaluate">
            <div class="container">
                <div class="inner">
                    <div class="icon"></div>
                    <div class="text">顾问评价</div>
                </div>
            </div>
        </div>
        <div class="cut-off"></div>
        <div class="recommend">
           <div class="container">
                <div class="top-title">推荐项目</div>
                <div class="item" v-for="(item,index) of data.projectSolrModels" :key="index">
                    <div class="item-top">
                        <div class="item-icon">
                            <img :src="baseUrl+ '/images/icons/'+ item.nationCodes + '.png'" alt="img">
                        </div>
                        <div class="item-info">
                            <div class="title">{{item.projectName}}</div>
                            <div class="nums">收藏数：{{item.agentCount}}</div>
                        </div>
                        <!-- <div class="item-new"></div> -->
                    </div>
                    <div class="item-content">
                        <div class="item-content-img">
                            <div class="tap">房产项目</div>
                            <img :src="baseUrl + item.projectImagePath" alt="img">
                        </div>
                        <div class="item-content-info">
                            <div class="info-title">{{item.projectName}}</div>
                            <div class="info-desc">价格：{{item.minPriceAmt}}-{{item.maxPriceAmt}}</div>
                            <div class="info-desc">近一年涨幅：10%-50%</div>
                            <div class="info-desc">预期回报：{{item.minPriceAmt}}{{item.priceUnit}}</div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
        <div class="cut-off"></div>
        <div class="tab">
            <router-link tag="div" 
                        :to="item.linkUrl" 
                        v-for="(item,index) of tabList"
                        :key="index"
                        class="item"
                        :class="{active:item.isActive}"
                        @click.native="changeTab(index)"
            >{{item.text}}</router-link>
        </div>
        <router-view :consultantId="consultantId" />
        <div class="footer" @click="handleclick">
            <div class="inner">
                <div class="btn ask">在线咨询</div>
                <div class="btn tel">拨打电话</div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
// import MyHeader from "@/components/header/Header";
import { baseUrl } from "../../common/api";
export default {
  name: "Home",
  // components: {
  //   MyHeader
  // },
  created() {
    const obj = this.handleUrl();
    this.id = obj.id;
    this.inviteCode = obj.inviteCode
    this.consultantId = obj.consultantId - 0;
    this.getData();
  },
  data() {
    return {
      inviteCode: '',
      tabList: [
        {
          linkUrl: "/intro",
          text: "个人简介",
          isActive: true
        },
        {
          linkUrl: "/acticle",
          text: "推文",
          isActive: false
        },
        {
          linkUrl: "/activity",
          text: "活动",
          isActive: false
        }
      ],
      id: "",
      data: {},
      baseUrl: "https://api.migrantju.cn",
      currentIndex: 0,
      consultantId: ""
    };
  },
  methods: {
    getData() {
      const url = `${this.baseUrl}/public/consultantAllDynamic?consultantId=${
        this.consultantId
      }`;
      axios.get(url).then(res => {
        if (res.status === 200) {
          this.data = res.data.body;
          this.$nextTick(() => {
            setTimeout(() => {
              this.$refs.header.style.backgroundImage = `url(${baseUrl +
                res.data.body.consultantBackgroundUrl})`;
              this.$refs.header.style.backgroundSize = "100%";
              this.$refs.header.style.backgroundRepeat = "no-repeat";
            }, 50);
          });
        }
      });
    },
    changeTab(index) {
      this.tabList.forEach(item => {
        item.isActive = false;
      });
      this.tabList[index].isActive = true;
    },
    handleUrl() {
      const url = location.href;
      if (url.indexOf("?") > 0) {
        const querystr = url.split("?")[1].split("#")[0];
        const obj = {};
        if (querystr.indexOf("&") > 0) {
          let queryArr = querystr.split("&");
          for (let i = 0; i < queryArr.length; i++) {
            let itemStr = queryArr[i].split("=");
            obj[itemStr[0]] = itemStr[1];
          }
        } else {
          let str = querystr.split("=");
          obj[str[0]] = str[1];
        }
        return obj;
      }
    },
    handleclick() {
      // if (this.id) {
      //   if ((this.id = 2)) {
      //     window.open(
      //       "https://itunes.apple.com/us/app/移居平台/id1394521017?l=zh&ls=1&mt=8"
      //     );
      //   } else if ((this.id = 3)) {
      //     window.open(
      //       "https://itunes.apple.com/us/app/移居/id1394522776?l=zh&ls=1&mt=8"
      //     );
      //   }
      // }
      window.open(`http://api.migrantju.cn/indexReg.html?inviteCode=${this.inviteCode}`)
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  padding-bottom: 100px;
}
.container {
  padding: 0 30px;
}
.cut-off {
  width: 100%;
  height: 30px;
  background: #f2f6f7;
}
.header {
  padding-top: 160px;
  width: 100%;
  background-size: 100%;
  & .container {
    display: flex;
    align-items: center;
  }
  .header-avator {
    margin-right: 20px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .header-content {
    flex: 1;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .top-left {
        display: flex;
        align-items: center;
        .name {
          font-size: 36px;
          color: #333;
          margin-right: 20px;
        }
        .icon {
          width: 38px;
          height: 38px;
          background: url(./images/start.png);
          background-size: 100% 100%;
        }
      }
      .top-right {
        display: flex;
        align-items: center;
        .icon {
          width: 38px;
          height: 38px;
          background: url(./images/obj.png);
          background-size: 100% 100%;
          margin-right: 10px;
        }
        .nums {
          font-size: 26px;
          color: #333;
        }
      }
    }
    .mid {
      margin: 30px 0;
      display: flex;
      align-items: center;
      .text {
        font-size: 24px;
        color: #333333;
      }
      .icon {
        width: 38px;
        height: 38px;
        background: url(./images/pos.png);
        background-size: 100% 100%;
        margin-right: 10px;
      }
    }
    .foo {
      display: flex;
      .item {
        &:first-child {
          margin-right: 50px;
        }
        display: flex;
        align-items: center;
        .icon {
          width: 38px;
          height: 38px;
          background: url(./images/icon_xx.png);
          background-size: 100% 100%;
          margin-right: 10px;
        }
        .key {
          font-size: 24px;
          color: #333333;
          margin-right: 5px;
        }
        .val {
          font-size: 30px;
          color: #333333;
        }
      }
    }
  }
}
.signature {
  margin-top: 50px;
  padding: 30px 0;
  &::before {
    content: "";
    display: block;
    width: 690px;
    height: 1px;
    background: #ccc;
    position: relative;
    top: -30px;
    left: 30px;
  }
  .info {
    display: flex;
    align-items: center;
    .icon {
      margin-right: 20px;
      width: 102px;
      height: 25px;
      background: url(./images/sig.png);
      background-size: 100% 100%;
    }
    .text {
      flex: 1;
      font-size: 26px;
      color: #333333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .btn-group {
    margin-top: 24px;
    display: flex;
    align-items: center;
    .btn {
      width: 100px;
      height: 36px;
      font-size: 20px;
      color: #666666;
      line-height: 36px;
      text-align: center;
      background: #dddddd;
      margin-right: 10px;
      &.active {
        color: #c3292b;
        background: #ffe5e5;
      }
    }
  }
}
.evaluate {
  .inner {
    padding: 26px 0;
    border-top: 1px solid #ccc;
    display: flex;
    align-items: center;
    .icon {
      width: 40px;
      height: 35px;
      background: url(./images/icon_Collection.png);
      background-size: 100% 100%;
      margin-right: 30px;
    }
  }
}
.recommend {
  .top-title {
    font-size: 30px;
    color: #333333;
    height: 84px;
    line-height: 84px;
    &:after {
      content: "";
      display: block;
      width: 44px;
      height: 6px;
      background: #c3292b;
      border-radius: 5px;
      position: relative;
      left: 35px;
    }
  }
  .item {
    padding: 30px 0 30px 0;
    &:last-child:after {
      height: 0;
    }
    &:after {
      content: "";
      display: block;
      width: 750px;
      height: 10px;
      background-color: #f2f6f7;
      position: relative;
      left: -30px;
      bottom: -30px;
    }

    .item-top {
      padding-bottom: 30px;
      display: flex;
      align-items: flex-start;
      border-bottom: 1px solid #ccc;
      .item-icon {
        width: 80px;
        height: 54px;
        margin-right: 15px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .item-info {
        margin-right: 15px;
        display: flex;
        flex-direction: column;
        .title {
          font-size: 24px;
          color: #333333;
          margin-bottom: 15px;
        }
        .nums {
          font-size: 18px;
          color: #999999;
        }
      }
      .item-new {
        width: 59px;
        height: 16px;
        background: url(./images/icon_new2.png);
        background-size: 100% 100%;
      }
    }
    .item-content {
      padding: 20px 0;
      display: flex;
      .item-content-img {
        position: relative;
        width: 220px;
        margin-right: 20px;
        img {
          width: 100%;
        }
        .tap {
          width: 110px;
          height: 36px;
          background: url(./images/square.png);
          background-size: 100% 100%;
          line-height: 36px;
          text-align: center;
          color: #fff;
          font-size: 20px;
          position: absolute;
          top: 15px;
          left: 0;
        }
      }
      .item-content-info {
        flex: 1;
        .info-title {
          font-size: 24px;
          color: #333333;
          margin-bottom: 10px;
        }
        .info-desc {
          color: #999999;
          font-size: 20px;
          margin-top: 24px;
        }
      }
    }
  }
}
.tab {
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #ccc;
  display: flex;
  .item {
    flex: 1;
    text-align: center;
    line-height: 90px;
    color: #666666;
    font-size: 28px;
    &.active {
      color: #c3292b;
      &:after {
        content: "";
        display: block;
        width: 44px;
        height: 6px;
        background: #c3292b;
        border-radius: 6px;
        position: relative;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
.footer {
  border-top: 1px solid #ccc;
  box-sizing: border-box;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  .inner {
    display: flex;
    justify-content: space-between;
    padding: 10px 70px;
    .btn {
      width: 290px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      box-sizing: border-box;
      border: 1px solid #c3292b;
      border-radius: 5px;
      font-size: 30px;
      &.ask {
        color: #fff;
        background: #c3292b;
      }
      &.tel {
        color: #c3292b;
      }
    }
  }
}
</style>

