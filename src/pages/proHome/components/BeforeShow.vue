<template>
  <div class="show" ref="show" v-html="data">过往表现</div>
</template>
<script>
import { handleDom } from "../../../common/fn";
import { baseUrl } from "../../../common/api";
import axios from "axios";
export default {
  props: {
    id: Number
  },
  data() {
    return {
      data: ""
    };
  },
  created() {
    const url = `${baseUrl}/public/project-details?id=${this.id}`;
    axios.get(url).then(res => {
      if (res.status === 200) {
          this.data = res.data.body.projectLineWithBLOBs.projectShowcase;
        this.$nextTick(() => {
          handleDom(this.$refs.show);
        });
      }
    });
  }
};
</script>
<style lang="less" scoped>
.detail {
  width: 100%;
  overflow: hidden;
}
</style>