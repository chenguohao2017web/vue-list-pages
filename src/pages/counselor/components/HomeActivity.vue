<template>
    <div class="home-activity">
        <div class="activity-item">
            <div class="item-img">
                <img src="../images/banner.png" alt="img">
            </div>
            <div class="item-info">
                <div class="info-title">189澳大利亚独立技术移民</div>
                <div class="info-wrap info-pos">
                    <div class="icon"></div>
                    <div class="text">广东省广州市丽丰中心...</div>
                </div>
                <div class="info-wrap info-date">
                    <div class="icon"></div>
                    <div class="text">2018-02-12 10:30</div>
                </div>
                <div class="info-wrap info-city">
                    <div class="icon"></div>
                    <div class="text">广州</div>
                </div>
            </div>
            <div class="btn">报名</div>
        </div>
        <div class="activity-item">
            <div class="item-img">
                <img src="../images/banner.png" alt="img">
            </div>
            <div class="item-info">
                <div class="info-title">189澳大利亚独立技术移民</div>
                <div class="info-wrap info-pos">
                    <div class="icon"></div>
                    <div class="text">广东省广州市丽丰中心...</div>
                </div>
                <div class="info-wrap info-date">
                    <div class="icon"></div>
                    <div class="text">2018-02-12 10:30</div>
                </div>
                <div class="info-wrap info-city">
                    <div class="icon"></div>
                    <div class="text">广州</div>
                </div>
            </div>
            <div class="btn">报名</div>
        </div>
        <div class="activity-item">
            <div class="item-img">
                <img src="../images/banner.png" alt="img">
            </div>
            <div class="item-info">
                <div class="info-title">189澳大利亚独立技术移民</div>
                <div class="info-wrap info-pos">
                    <div class="icon"></div>
                    <div class="text">广东省广州市丽丰中心...</div>
                </div>
                <div class="info-wrap info-date">
                    <div class="icon"></div>
                    <div class="text">2018-02-12 10:30</div>
                </div>
                <div class="info-wrap info-city">
                    <div class="icon"></div>
                    <div class="text">广州</div>
                </div>
            </div>
            <div class="btn">报名</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomeActivity'
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
