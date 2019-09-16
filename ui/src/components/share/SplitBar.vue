

<template>
    <div class="split-bar">
        <h5>
           我的订阅
        </h5>
        <span>只看推荐</span>
        <span>自动更新</span>   
    </div>
</template>

<style lang="stylus">
@import '~styles/core.styl'
.split-bar
    borderSlim(0 0 1px 0)
    height .4rem
    padiding .1rem 0
    display  flex
    justify-content  flex-start
    align-items center
    >h5,>span 
        display flex
        justify-content  center
        align-items center 
        font-weight normal
    h5 
        font-size .16rem
        padding-right .1rem
    span
        height 12px
        font-size  .12rem
        padding 0 .1rem
        border-left 1px solid #ddd
        color #777
</style>