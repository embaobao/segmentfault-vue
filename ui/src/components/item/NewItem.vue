<template>
<div>

    
    <div v-for="item in dataList" class="new-item">
        <div class="news-labels">
            来自{{item.from.type }} 
            <a :href="'https://segmentfault.com/'+item.from.url" class="news-label">{{item.from.title}}</a>
        </div>
        <div class="new-info">
            <a target="_blank" href="#">
                 <h4 class="new-title">{{item.title}}</h4>
                <div class="article-excerpt">
                 {{item.excerpt}}
                </div>
            </a>
            <div class="news-meta">
                <span class="mark-up pr20" data-id="" >
                    <span class="wrap">
                        <i class="fa fa-thumbs-up"></i>
                    </span>
                    <span class="votes-num hidden">{{item.votes}}</span>
                    <span class="dot hidden">·</span>
                    <span class="votes-word">赞</span>
                </span>
                <span class="author pr20">
                    <a :href="'https://segmentfault.com/'+item.user.url" class="author-name"> {{item.user.name}}</a>
                    <i class="fa fa-check-circle userauthor"></i>
                    <span class="dot">·</span>{{item.createdDate}}
               
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default{
    props:['dataList']
    ,
    data(){
        return{

        }
    },
    mounted(){
        // console.log(
        //     console.log(this.dataList)
        // );
    }

}
</script>


<style lang="stylus" scoped>
.pr20
    padding-right .2rem
.hidden
    display none !important
    visibility hidden !important
.dot
    color #999
    font-weight normal
    padding 0 5px
.userauthor
    color #F5A623
    vertical-align text-bottom
.new-item
    margin-top .15rem
    font-size 14px
    color #9E9E9E
    font-family -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif
    a
        color #9E9E9E
    .new-info
        font-size: 13px;
        font-family -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif
        padding-bottom .15rem
        .new-title
            display inline
            font-weight 500
            font-size .18rem
            line-height: .28rem
            color #212121
            vertical-align middle
        .article-excerpt
            margin-bottom .15rem
            overflow hidden
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
            color #888
        .mark-up
            color #666
            .wrap
                background-color  rgba(1,126,102,0.08)
                color #009a61
                padding 0
                display inline-block
                height .24rem
                width .24rem
                line-height .24rem
                text-align center
                margin-right .05rem
                border-radius .12rem
                margin-bottom  .01rem
            &.active .wrap
                background-color #017E66
                color #FFF
            .votes-num 
                color #009a61
                font-weight bold
        .author
            .author-name
                color #666
            .userauthor
                margin-left .05rem

        
        



</style>