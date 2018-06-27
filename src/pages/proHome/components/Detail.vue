<template>
  <div class="detail" v-html="data" ref="detail">
  </div>
</template>
<script>
import {handleDom} from '../../../common/fn'
import { baseUrl } from "../../../common/api";
import axios from "axios";
export default {
  data() {
    return {
      data: ""
    };
  },
  created() {
    let id = this.$route.params.id;
    const url = `${baseUrl}/public/project-details?id=117`;
    axios.get(url).then(res => {
      if (res.status === 200) {
        this.data = res.data.body.projectLineWithBLOBs.projectDecription;
      }
    });
  },
  mounted(){
    handleDom(this.$refs.detail)
  }
};
</script>

