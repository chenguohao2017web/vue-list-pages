<template>
  <div class="repair" ref="repair" v-html="data">装修情况</div>
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
          this.data = res.data.body.projectLineWithBLOBs.houseDecorateSituation;
        this.$nextTick(() => {
          handleDom(this.$refs.repair);
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