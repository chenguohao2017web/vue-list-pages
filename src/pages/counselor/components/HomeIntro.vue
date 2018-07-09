<template>
    <div class="home-intro">
      {{data}}
    </div>
</template>
<script>
import {baseUrl} from '@/common/api'
import axios from "axios";
export default {
  props: {
    consultantId: Number
  },
  data() {
    return {
      baseUrl: baseUrl,
      data: ""
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      // const url = `${baseUrl}/public/getConsultantTweets?consultantId=${
      //   this.consultantId
      // }`;
      const url = `${baseUrl}/public/consultantAllDynamic?consultantId=${
        this.consultantId
      }`;
      axios.get(url).then(res => {
        if (res.status === 200) {
          this.data = res.data.body.introduction;
          this.$nextTick(() => {
              setTimeout(() => {
                const arrP = this.$refs.content.children;
                for (let i = 0; i < arrP.length; i++) {
                  const elP = arrP[i];
                  elP.style.fontSize = "0.4rem";
                  elP.style.lineHeight = "1.5";
                  elP.style.marginBottom = "0.2667rem";
                  const arrImg = elP.getElementsByTagName("img");
                  for (let i = 0; i < arrImg.length; i++) {
                    arrImg[i].style.width = "100%";
                    arrImg[i].style.height = "auto";
                  }
                  const arrSpan = elP.getElementsByTagName("span");
                  for (let i = 0; i < arrSpan.length; i++) {
                    arrSpan[i].style.fontSize = "0.3rem";
                  }
                }
              }, 50)
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.home-intro {
  padding: 30px 30px;
}
</style>

