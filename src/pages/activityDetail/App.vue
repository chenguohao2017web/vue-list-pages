<template>
  <div id="app">
    <div class="activity-detail">
        <!-- <my-header title="活动详情"></my-header> -->
        <div class="banner-wrap">
            <img :src="baseUrl+data.activityImage" alt="img">
        </div>
        <div class="cut-off"></div>
        <div class="activity-content">
            <div class="wrap theme">
                <div class="item">
                    <div class="title">活动主题</div>
                    <div class="text">{{data.activityName}}</div>
                </div>
            </div>
            <div class="wrap nums">
                <div class="item">
                    <div class="title">活动人数</div>
                    <div class="text">{{data.maxCount}}人</div>
                </div>
                <div class="item tc">
                    <div class="title">已报名人数</div>
                    <div class="text">{{data.appliedCount}}人</div>
                </div>
                <div class="item tr">
                    <div class="title">活动城市</div>
                    <div class="text">{{data.cityName}}</div>
                </div>
            </div>
            <div class="wrap date">
                <div class="item">
                    <div class="title">活动日期</div>
                    <div class="text">{{data.activityBeginDate}}</div>
                </div>
                <div class="item tr">
                    <div class="title">活动时间</div>
                    <div class="text">{{data.activityBeginTime}}</div>
                </div>
            </div>
            <div class="wrap pos">
                <div class="item">
                    <div class="title">活动地点</div>
                    <div class="text">{{data.activityPlace}}</div>
                </div>
            </div>
            <div class="wrap stream">
                <div class="item">
                    <div class="title">活动流程</div>
                    <div class="text parage" v-html="data.process" ref="parage2"></div>
                </div>
            </div>
            <div class="wrap introdu">
                <div class="item">
                    <div class="title">活动详情</div>
                    <div class="text" v-html="data.description" ref="parage"></div>
                </div>
            </div>
        </div>
        <div class="cut-off"></div>
        <div class="join-list">
            <div class="title">报名列表</div>
            <div class="img-list">
                <img class="img" :src="baseUrl + item.avatarImg" alt="img" :key="index" v-for="(item,index) of data.applyUsers">
            </div>
        </div>
        <div class="cut-off"></div>
        <div class="footer" @click="handleclick">
            <div class="f-item">
                <div class="icon fx"></div>
                <div class="text">分享</div>
            </div>
            <div class="f-item">
                <div class="icon share"></div>
                <div class="text">收藏</div>
            </div>
            <div class="join-btn">报名参加</div>
        </div>
    </div>
  </div>
</template>

<script>
import {handleDom,redirctUrl} from '../../common/fn'
import {baseUrl} from '../../common/api'
import axios from 'axios'
import qs from "qs";
export default {
  data() {
    return {
      showMore: false,
      id: "",
      data:{},
      baseUrl:baseUrl,
      inviteCode: '',
      baseUrl : baseUrl
    };
  },
  created() {
    redirctUrl()
    const query = this.handleUrl();
    this.id = query.id;
    this.inviteCode = query.inviteCode
    this.getData()
  },
  methods: {
    getData(){
      const url = `${baseUrl}/public/activity-details?id=${this.id}`
      axios.get(url).then(res=> {
        if(res.status===200) {
          this.data = res.data.body
          this.$nextTick(()=>{
            handleDom(this.$refs.parage)
            handleDom(this.$refs.parage2)
          })
        }
      })
    },
    handleShowMore(e) {
      this.showMore = !this.showMore;
    },
    handleUrl() {
      let queryStr = location.href;
      if (queryStr.indexOf("?") > 0) {
        return qs.parse(queryStr.split("?")[1]);
      }
    },
    handleclick() {
      window.open(`http://api.migrantju.cn/indexReg.html?inviteCode=${this.inviteCode}`)
    }
  }
};
</script>
<style lang="less" scoped>
.activity-detail {
  padding-bottom: 100px;
}
.banner-wrap {
  width: 100%;
  img {
    width: 100%;
  }
}
.cut-off {
  width: 100%;
  height: 30px;
  background: #f2f6f7;
}
.activity-content {
  padding: 0 30px;
  .wrap {
    display: flex;
    padding: 32px 0;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    .tc {
      text-align: center;
    }
    .tr {
      text-align: right;
    }
    
    .item {
      width:100%;
      .title {
        font-size: 28px;
        color: #666666;
      }
      .title2 {
        margin-left: 16px;
        font-size: 24px;
        color: #666666;
      }
      .text {
        margin-top: 50px;
        font-size: 38px;
        color: #333333;
        font-weight: 200;
        width:100%;
        overflow: hidden;
      }
    }
  }
  .introdu {
    position: relative;
    &.wrap {
      border-bottom: none;
    }
    .more {
      position: absolute;
      top: 30px;
      right: 0px;
      font-size: 30px;
      color: #42adff;
    }
  }
}
.join-list {
  padding: 25px 30px;
  position: relative;
  .more {
    position: absolute;
    right: 30px;
    bottom: 30px;
    font-size: 30px;
  }
  .img-list {
    margin-top: 28px;
    overflow: hidden;
    white-space: nowrap;
    .img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin-right: 20px;
    }
  }
}
.footer {
  height: 100px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  border-top: 1px solid #ccc;
  .f-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    &:first-child {
      border-right: 1px solid #ccc;
    }
    .icon {
      width: 38px;
      height: 38px;
      &.fx {
        background: url(./images/icon_fx.png);
        background-size: 100% 100%;
      }
      &.share {
        background: url(./images/icon_share.png);
        background-size: 100% 100%;
      }
    }
    .text {
      margin-top: 7px;
      color: #999999;
      font-size: 20px;
    }
  }
  .join-btn {
    width: 330px;
    line-height: 100px;
    color: #fff;
    background: #c3292b;
    font-size: 36px;
    text-align: center;
  }
}
</style>

