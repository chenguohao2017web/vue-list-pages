<template>
  <div class="circleDetail">
    <!-- <div class="header">圈子详情</div> -->
    <!-- <div class="cut-off"></div> -->
    <div class="container">
      <div class="member-info">
        <div class="img">
          <img :src="baseUrl + data.userImage.fileUrl" alt="avator">
        </div>
        <div class="desc">
          <div class="desc-top">
            <div class="name">{{data.user.nickName}}</div>
            <div class="pos">{{data.user.cityName}}</div>
          </div>
          <div class="desc-tips">
            签名：{{data.user.personalSignature}}
          </div>
        </div>
      </div>
      <div class="content">
        <div class="parage">{{data.immigrantCircle.content}}</div>
      </div>
    </div>

    <!-- modal -->
    <transition name="animate">
    <div class="modal" v-show="modalIsShow">
        <transition name="drop">
          <div class="modal-inner" v-show="modalIsShow" @click="handleClick">请登录</div>
        </transition>
    </div>
    </transition>
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
  filter: blur(10px);
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
  .content {
    margin-top: 40px;
    .parage {
      font-size: 30px;
      color: #333333;
      line-height: 1.5;
    }
  }
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-inner {
    width: 600px;
    height: 100px;
    background: #fff;
    font-size: 40px;
    color: #333;
    text-align: center;
    line-height: 100px;
    border-radius: 10px;
  }
}
.animate-enter,
.animate-leave-to {
  opacity: 0;
}
.animate-enter-active,
.animate-leave-active {
  transition: all 0.3s;
}
.drop-enter,
.drop-leave-to {
  transform: translate3d(0, -50px, 0);
}
.drop-enter-active,
.drop-leave-active {
  transition: all 0.3s linear;
}
</style>
<script>
import { redirctUrl } from "@/common/fn";
import qs from "qs";
import { baseUrl } from "../../common/api";
import axios from "axios";
export default {
  name: "CicleDetail",
  mounted() {
    setTimeout(() => {
      this.modalIsShow = true;
    }, 100);
  },
  data() {
    return {
      modalIsShow: false,
      inviteCode: "",
      appId: "",
      data: {},
      baseUrl: baseUrl
    };
  },
  created() {
    redirctUrl();
    const url = location.href;
    if (url.indexOf("?") > 0) {
      let query = url.split("?")[1];
      let obj = qs.parse(query);
      this.appId = obj.appId;
      this.inviteCode = obj.inviteCode;
      this.id = obj.id;
    }
    axios.get(`${baseUrl}/public/circles/${this.id}`).then(res => {
      if (res.data.body) {
        this.data = res.data.body.immigrantCircleDetailsBean
      }
    });
  },
  methods: {
    handleClick() {
      window.open(
        `http://api.migrantju.cn/indexReg.html?inviteCode=${this.inviteCode}`
      );
    }
  }
};
</script>
