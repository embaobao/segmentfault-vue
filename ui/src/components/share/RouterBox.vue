<template>

    <div class="router-box">

        <a class="router-box-item active" href="/">
            <i class="fa fa-newspaper-o" aria-hidden="true"></i>
            <span class="name">我的订阅</span>
        </a>

        <a class="router-box-item " href="/hottest">
            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <span class="name">近期热门</span>
        </a>

        <a class="router-box-item " href="/newest">
            <i class="fa fa-globe" aria-hidden="true"></i>
            <span class="name">最新内容</span>
        </a>

        <a class="router-box-item showChannels visible-xs-block" href="/">
            <i class="fa fa-server" aria-hidden="true"></i>
            <span class="name">技术频道</span>
        </a>

    </div>


</template>


<style lang="stylus">
.router-box
    display flex
    padding 0 .15rem
    margin-left -.1rem
    .router-box-item
        flex 1
        line-height .34rem
        height .34rem
        border-radius .04rem
        color #757575
        text-decoration none
        margin-bottom .01rem
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        padding  0 .05rem
        font-size .13rem;
        .fa 
            font-size .12rem
            margin 0 .05rem
        &.active
            background-color #009A61
            color #fff
            font-weight 900

</style>