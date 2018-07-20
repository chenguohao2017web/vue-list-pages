<template>
    <div class="home">
        <div class="header" ref="header">
            <div class="container">
                <div class="header-avator">
                    <img :src="baseUrl + data.avatarImg" alt="avator">
                    <div class="text">已认证</div>
                </div>
                <div class="header-content">
                    <div class="top">
                        <div class="top-left">
                            <div class="name">{{data.nickName}}</div>
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
                            <div class="val">{{data.workingExperience}}年</div>
                        </div>
                        <div class="item">
                            <div class="key">咨询量</div>
                            <div class="val">{{data.consultCount}}</div>
                        </div>
                    </div>
                    <div class="other">
                      <div class="item">
                        <div class="key">擅长的国家:</div>
                        <div class="content">
                          <span class="span" v-for="(item,index) of data.expertNationList" :key="index">
                            {{item.name}}
                          </span>
                        </div>
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
                    :class="{active:index==currentIndex,featured:index==data.tagList.length-1}"
                    v-for="(item,index) of data.tagList" 
                    :key="index">{{item.tagName}}</div>
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
                            <img :src="baseUrl+ '/images/icons/'+ item.nationList[0].nationCode + '.png'" alt="img">
                        </div>
                        <div class="item-info">
                            <div class="title">{{item.projectName}}</div>
                            <div class="nums">收藏数：{{item.favCount}}</div>
                        </div>
                        <!-- <div class="item-new"></div> -->
                        <div @click="handleclick" class="item-save">收藏</div>
                    </div>
                    <div class="item-content">
                        <div class="item-content-img">
                            <div class="tap" v-if="item.projectType==0">移民项目</div>
                            <div class="tap" v-if="item.projectType==1">房产项目</div>
                            <div class="tap" v-if="item.projectType==2">投资项目</div>
                            <img :src="baseUrl + item.projectImagePath" alt="img">
                        </div>
                        <div class="item-content-info">
                            <div class="info-title">{{item.projectName}}</div>
                            <div class="info-desc">价格：{{item.priceCcy}}{{item.minPriceAmt.split(',')[0]}}{{item.priceUnit}}</div>
                            <template v-if="item.projectType==0">
                              <div class="info-desc">身份类型：绿卡</div>
                              <div class="info-desc">办理周期：{{item.projectPeriod}}{{item.projectPeriodUnit}}</div>
                            </template>
                            <template v-else-if="item.projectType==1">
                              <div class="info-desc">近一年涨幅：{{item.houseAnnualIncreasePercent}}%</div>
                              <div class="info-desc">预期回报：{{item.houseExpectedRecompense}}%</div>
                            </template>
                            <template v-else-if="item.projectType==2">
                              <div class="info-desc">投资期限：{{item.investDuration}}</div>
                              <div class="info-desc">预期年化：{{item.investAnnualRatio}}%</div>
                            </template>
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
import { redirctUrl } from "@/common/fn";
import { baseUrl } from "../../common/api";
export default {
  name: "Home",
  created() {
    redirctUrl()
    const obj = this.handleUrl();
    this.id = obj.id;
    this.inviteCode = obj.inviteCode;
    this.consultantId = obj.consultantId - 0;
    this.getData();
  },
  data() {
    return {
      inviteCode: "",
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
        },{
          linkUrl: "/circle",
          text: "圈子",
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
            this.$refs.header.style.backgroundImage = `url(${baseUrl +
              res.data.body.consultantBackgroundUrl})`;
            this.$refs.header.style.backgroundSize = "100% 3.3333rem";
            this.$refs.header.style.backgroundRepeat = "no-repeat";
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
      window.open(
        `http://api.migrantju.cn/indexReg.html?inviteCode=${this.inviteCode}`
      );
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
  height: 20px;
  background: #eee;
}
.header {
  padding-top: 180px;
  width: 100%;
  & .container {
    display: flex;
    align-items: flex-end;
  }
  .header-avator {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .text {
      margin-top: 15px;
      color:#c3292b;
      font-size: 24px;
    }
    img {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .header-content {
    flex: 1;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:20px 0;
      .top-left {
        display: flex;
        align-items: center;
        .name {
          font-size: 30px;
          color: #fff;
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
          color: #fff;
        }
      }
    }
    .mid {
      margin-bottom: 20px;
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
    .other .item {
      margin-top: 20px;
      display: flex;
      flex-wrap:wrap;
      .key {
        margin-right: 10px;
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
      color: #3d6b7d;
      line-height: 36px;
      text-align: center;
      background: #dddddd;
      margin-right: 20px;
      background:#9fcbd0;
      
      &.active {
        color: #c3292b;
        background: #ffe5e5;
      }
      &.featured {
        background:#ccc;
        color:#333;
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
      background: url(./images/icon_share.png);
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
    // &:after {
    //   content: "";
    //   display: block;
    //   width: 44px;
    //   height: 6px;
    //   background: #c3292b;
    //   border-radius: 5px;
    //   position: relative;
    //   left: 35px;
    // }
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
      position: relative;
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
      .item-save {
        position:absolute;
        right:0;
        bottom:20px;
        padding:8px 26px;
        color: #fff;
        font-size: 24px;
        background:#c3292b;
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
          color: #333;
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

