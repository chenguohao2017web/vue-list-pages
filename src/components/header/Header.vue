<template>
    <div class="top-header">
        {{title}}
    </div>
</template>
<script>
export default {
    name: 'MyHeader',
    props:{
        title: {
            type:String,
            default: ''
        }
    }
}
</script>
<style lang="less" scoped>
.top-header {
    height:88px;
    line-height: 88px;
    font-size:32px;
    text-align: center;
    color:#fff;
    background:linear-gradient(to right,#c3292b,#fb3b37);
}
</style>

