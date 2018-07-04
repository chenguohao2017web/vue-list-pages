<template>
  <div class="detail" v-html="data" ref="detail">
  </div>
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
        if (res.data.body.projectType === 0) {
          // 移民
          this.data =
            res.data.body.projectLineWithBLOBs.immigrantApplyRequirement;
        } else if (res.data.body.projectType === 1) {
          // 房产
          this.data = res.data.body.projectLineWithBLOBs.houseDecorateSituation;
          this.data += res.data.body.projectLineWithBLOBs.superiority;
          this.data += res.data.body.projectLineWithBLOBs.houseProperty;
        } else {
          // 投资
          this.data = res.data.body.projectLineWithBLOBs.projectShowcase;
        }

        this.data += res.data.body.projectLineWithBLOBs.projectDecription;
        this.$nextTick(() => {
          handleDom(this.$refs.detail);
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

