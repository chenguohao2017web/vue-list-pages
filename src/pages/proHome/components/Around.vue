<template>
  <div class="around" ref="around" v-html="data"></div>
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
          this.data += res.data.body.projectLineWithBLOBs.superiority;
        this.$nextTick(() => {
          handleDom(this.$refs.around);
        });
      }
    });
  }
}
</script>