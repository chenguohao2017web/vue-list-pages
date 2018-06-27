<template>
  <div class="data" v-html="data" ref="flow"></div>
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
        this.data = res.data.body.projectLineWithBLOBs.commissionStatement
        this.$nextTick(() => {
          handleDom(this.$refs.flow);
        });
      }
    });
  }
};
</script>

<style lang="less" scoped>
.flow {
  width: 100%;
  overflow: hidden;
}
</style>