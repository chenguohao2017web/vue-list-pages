<template>
    <div class="home-activity">
        <div class="activity-item" v-for="(item,index) of list" :key="index">
            <div class="item-img">
                <img :src="baseUrl+ item.activityImage" alt="img">
            </div>
            <div class="item-info">
                <div class="info-title">{{item.activityName}}</div>
                <div class="info-wrap info-pos">
                    <div class="icon"></div>
                    <div class="text">{{item.nationName}}</div>
                </div>
                <div class="info-wrap info-date">
                    <div class="icon"></div>
                    <div class="text">{{item.activityTime}}</div>
                </div>
                <div class="info-wrap info-city">
                    <div class="icon"></div>
                    <div class="text">{{item.cityName}}</div>
                </div>
            </div>
            <div class="btn" @click="handleClick">报名</div>
        </div>
    </div>
</template>
<script>
import {baseUrl} from '@/common/api'
import axios from "axios";
export default {
    data(){
        return {
            list:[],
            baseUrl:baseUrl
        }
    },
    props:{
        consultantId:Number
    },
    mounted(){
        this.getData()
    },
    methods: {
        getData(){
            const url = `${baseUrl}/public/get-initiate-activities?consultantId=${this.consultantId}&page=1&pageSize=10`
            axios.get(url).then(res=>{
                if(res.status===200) {
                    this.list = res.data.body.records
                }
            })
        },
        handleClick(){
            window.open(`http://api.migrantju.cn/indexReg.html`)
        }
    }
}
</script>
<style lang="less" scoped>
.home-activity {
    padding:0 30px;
    .activity-item {
        padding: 30px 0;
        position: relative;
        display: flex;
        border-bottom: 1px solid #ccc;
        .item-img {
            width:266px;
            height:180px;
            margin-right:20px;
            img {
                width:100%;
                height:100%;
            }
        }
        .item-info {
            flex: 1;
            .info-title {
                font-size: 28px;
                color: #333333;
            }
            .info-wrap {
                display: flex;
                align-items: center;
                margin-top:24px;
                .icon {
                    width: 38px;
                    height: 38px;
                    margin-right: 16px;
                }
                .text {
                    font-size:22px;
                    color:#333333;
                }
            }
            .info-pos .icon {
                background:url(../images/pos1.png);
                background-size: 100% 100%;
            }
            .info-date .icon {
                background:url(../images/date.png);
                background-size: 100% 100%;
            }
            .info-city .icon {
                background:url(../images/city.png);
                background-size: 100% 100%;
            }
        }
        .btn {
            position: absolute;
            bottom:30px;
            right:0;
            width:130px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color:#fff;
            font-size: 24px;
            border-radius: 5px;
            background: #c3292b;
        }
    }
}
</style>
