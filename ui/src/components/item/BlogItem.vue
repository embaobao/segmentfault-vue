<template>
  <div>
    <section v-for="i in list" :key="i.url" class="blog-item">
      <div class="blog-rank">
        <div class="item-zan btn">
          <span class="zan-icon"></span>
          <span class="zan-number">
             {{i.votes}}
          </span>
        </div>
      </div>
      <div class="summary">
        <h2 class="title blog-type-common  blog-type-1">
          <a href="/a/1190000020393391"> {{i.title}}</a>
        </h2>
        <ul class="author ">
          <li>
            <a href="/u/niwajiang_5c99fa77b0858">
              <img
                class="avatar-24 mr10 hidden-xs"
                src="https://avatar-static.segmentfault.com/365/753/3657530265-5c9c754d3285d_small"
                :alt="i.author"
              />
            </a>
            <span>
              <a :href="'https://segmentfault.com/'+i.columnUrl">{{i.author}}</a>
              发布于 
              <a href="/u/niwajiang_5c99fa77b0858/articles/">{{i.column}}</a>
            </span>
          </li>
          <li class="bookmark" :title="i.bookmark+'收藏'">
            <span>
              <small><i class="fa fa-bookmark"></i></small>
              <span>{{i.bookmark}}  收藏</span>
            </span>
          </li>
        </ul>
        <p
          class="excerpt wordbreak hidden-xs"
        >写出整洁的代码，是每个程序员的追求。《clean code》指出，要想写出好的代码，首先得知道什么是肮脏代码、什么是整洁代码；然后通过大量的刻意练习，才能真正写出整洁的代码。</p>
      </div>
    </section>
  </div>
</template>
<script>


export default {
  props: ["list"]
};
</script>

<style lang="stylus" scoped>




section, summary 
  display: block;
.btn 
  display inline-block
  margin-bottom 0
  font-weight normal
  text-align center
  vertical-align middle
  cursor: pointer
  background-image none
  border: 1px solid transparent
  white-space nowrap
  padding .06rem .12rem
  font-size .14rem
  line-height 1.42858
  border-radius .04rem
  -webkit-user-select none
  -moz-user-select none
  -ms-user-select none
  user-select none
  color #333
  background-color #fff
  border-color #ccc
  
.blog-type-common::before 
  display: inline-block;
  margin-left: 10px;
  font-size: 13px;
  height: 22px;
  line-height: 22px;
  padding: 0 6px;
  border-radius: 3px;
  font-weight: normal;
  font-family: PingFang SC;
  display: inline-block;
  font-size: 13px;
  height: 22px;
  line-height: 22px;
  padding: 0 6px;
  vertical-align: middle;
  max-width: 146px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
.blog-type-common::after
  display: inline-block;
  margin-left: 10px;
  font-size: 13px;
  height: 22px;
  line-height: 22px;
  padding: 0 6px;
  border-radius: 3px;
  font-weight: normal;
  font-family: PingFang SC;
.blog-type-1::after 
  content: '原创';
  background-color: rgba(242,174,67,0.25);
  color: #F2AE43;

a,a:hover, a:active, a:focus
  outline: 0;



.blog-item
  margin: 0;
  border-bottom: .01rem solid #eee;
  padding: .12rem 0;
  .btn
    padding: 0
  .blog-rank
    float: left;
    border-right: none;
    padding-right: 0;
    margin-right: 0;
    text-align: center;
    line-height: .2rem;
    color: #666;
    font-size: .16rem
    .item-zan
      float: left;
      margin: .15rem .15rem .15rem 10px;
      width: .4rem;
      height: .46rem;
      margin-top: 0 !important;
      span
        display: block;
        color: #212121;
      .zan-icon
        height: .16rem;
        width: 100%;
        background: transparent url(https://cdn.segmentfault.com/v-5d5e3c1d/global/img/vote-bg.svg) -1px -1px no-repeat;
        -moz-background-size: auto .6rem;
        -o-background-size: auto .6rem;
        -webkit-background-size: auto .6rem;
        background-size: auto .56rem;
      .zan-number
        font-size:.16rem;
        line-height:.26rem;
        font-weight: 500;




        
   

      











  
  
  
  
  
  
  
  
  
  .summary
    overflow: auto;
    overflow-x: hidden;
    .title 
      display: inline-block;
      margin: 0 .05rem 0 0;
      font-size: .16rem;
      height: .22rem;
      line-height: .22rem;
      a
        color: #333;
        outline: 0;
        text-decoration: none;
        font-size: .14rem;
        font-weight: normal;
        &:visited
          font-weight: 400;
    .author
      margin-bottom: 0;
      margin-top: 10px;
      color: #999;
      font-size: 13px;
      margin-left: -5px;
      padding-left: 0;
      list-style: none;
      small
        color: #999;
        margin-right :.05rem;
        margin-top :.01rem;
      a
        color: #009a61;
      &>li
        display: inline-block;
        padding-left: 5px;
        padding-right: 5px;
        &>span 
          vertical-align: middle;
    .bookmark 
      cursor: pointer;








</style>
