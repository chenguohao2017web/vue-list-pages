<template>
    <div class="home-intro" v-html="data" ref="content">
    </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    consultantId: Number
  },
  data() {
    return {
      baseUrl: "https://api.migrantju.cn",
      data: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const url = `${this.baseUrl}/public/getConsultantTweets?consultantId=${
        this.consultantId
      }`;
      axios.get(url).then(res => {
        if (res.status === 200) {
          this.data = res.data.body[0];
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