<template>
  <div class="assess">
    <div class="project-group"> <!-- 国家地区 -->
      <div class="project-title">
        1.意向国家地区<span class="s_title">(最多可选3个)</span>
      </div>
      <div class="project-content">
        <div class="item">
          <div class="innerItem">
            澳大利亚
          </div>
        </div>
        <div class="item">
          <div class="innerItem">
            澳大利亚
          </div>
        </div>
        <div class="item">
          <div class="innerItem">
            澳大利亚
          </div>
        </div>
        <div class="item">
          <div class="innerItem">
            澳大利亚
          </div>
        </div>
      </div>
    </div>
    <div class="project-group"> <!-- 目的 -->
      <div class="project-title">
        1.移民目的<span class="s_title">(最多可选3个)</span>
      </div>
      <div class="project-content">
        <div class="item">
          <div class="innerItem">
            出行遍历
          </div>
        </div>
        <div class="item">
          <div class="innerItem">
            出行遍历
          </div>
        </div>
        <div class="item">
          <div class="innerItem">
            出行遍历
          </div>
        </div>
        <div class="item">
          <div class="innerItem">
            出行遍历
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .assess {
    background: #eee;;
    .project-group {
      background: #fff;
      padding:30px;
      margin-bottom: 30px;
      .project-title {
        height:70px;
        line-height: 70px;
        font-size: 28px;
        color: #fb3b37;
        .s_title {
          font-size: 24px;
          color: #999999;
        }
      }
      .project-content {
        padding:20px 20px 0 20px;
        display: flex;
        flex-wrap:wrap;
        .item {
          width:33%;
          display:flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
          .innerItem {
            width: 160px;
            height: 74px;
            box-sizing: border-box;
            border:1px solid #ccc;
            background: #eee;
            line-height: 74px;
            text-align: center;
            border-radius:50px;
            color: #666;
          }
        }
      }
    }
  }
</style>
<script>
import {baseUrl} from '@/common/api'
import axios from 'axios'
export default {
  data(){
    return {
      data:[],
      baseUrl: baseUrl
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get(this.baseUrl + 'customer/immigrantAssess').then(res=>{
        console.log(res)
      })
    }
  }
}
</script>

