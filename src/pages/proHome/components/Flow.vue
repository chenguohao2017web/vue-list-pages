<template>
  <div class="detail" v-html="data">
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: String,
      default: ""
    }
  }
};
</script>

