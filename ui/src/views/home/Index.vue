<template>
  <el-container>
      <el-progress :percentage="1" color="#009a61" :show-text="false" :text-inside="false"  ></el-progress>
    <el-header>
      <ul>
        <li>
          <a href="" class="searchBtn">
             <i class="fa fa-search" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="" class="logo">
          </a>
        </li>
         <li>
        
          <span class="btn">
          <i class="fa fa-plus" aria-hidden="true"></i>
          </span>
      </li>
        <li>
          <img class="avatar" src="../../assets/images/zmico.jpg"></img>
         </li>
      </ul>
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
    <ul>
      
      <router-link active-class="active" tag="li"  to="/home">
         <div class="ico">
        <i class="fa fa-home" aria-hidden="true"></i>
        </div>
        <div class="text">
        首页
        </div>
      </router-link>
      <router-link active-class="active" tag="li"  to="/answer">
        <div class="ico">
        <i class="fa fa-comments" aria-hidden="true"></i>
        </div>
        <div class="text">
        问答
        </div>
        </router-link>
      <router-link active-class="active" tag="li"  to="/column">
        <div class="ico">
        <i class="fa fa-pencil-square" aria-hidden="true"></i>
        </div>
        <div class="text">
        专栏
        </div>
        </router-link>
      <router-link active-class="active" tag="li"  to="/lecture">
        <div class="ico">
        <i class="fa fa-play-circle" aria-hidden="true"></i>
        </div>
        <div class="text">
        讲堂
        </div>
      </router-link>
     
      <router-link active-class="active" tag="li"  to="/more">
        <div class="ico">
        <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div class="text">
        更多
        </div>
        </router-link>
    </ul>
    </el-footer>
  </el-container>

</template>




<style lang="stylus" scoped>
@import '~styles/core.styl'
.el-container
  height 100%
  .fa
    color #757575
    font-size 20px
  .avatar
    border-radius 50%
    width .34rem
    height .34rem
    margin 0 .1rem
  .btn
    width .4rem
    height .34rem
    display flex
    align-items center
    justify-content center
  .el-header, .el-footer 
    background-color #fff
    color  #333
    padding 0
  .el-progress
    height 2px!important
    overflow hidden
  .el-header
    height 0.44rem!important
    box-shadow 0px 2px 10px 0px rgba(0,0,0,0.1), 0 1px rgba(0,0,0,0.1)
    borderSlim(0 0 1px 0)
    >ul
      height 100%
      display flex
      >li
        height 100%
        display flex
        justify-content center
        align-items  center
        &:nth-child(1)
          justify-content flex-start
          width .46rem
          margin-right .15rem
          a
            width .46rem            
            display flex
            justify-content center
            align-items center
            height .34rem
            margin-left .15rem
        &:nth-child(2)
          flex 1
        &:nth-child(3)
          width .4rem 
          padding-right 15px
        &:nth-child(4)
          width .5rem 
          padding-right 15px
      .logo
        width 1.5rem
        display block
        height .24rem
        background-image  url('../../assets/images/logo-b.svg') 
        background-repeat no-repeat
        background-size 100% 100%
  .el-footer
    height 0.5rem!important
    borderSlim(1px 0 0 0)
    box-shadow 0 -1px rgba(0,0,0,0.1), 0 -2px 10px rgba(0,0,0,0.1)
    padding-top 5px
    >ul
      display flex
      height 100%
      >li
        color #9e9e9e
        flex 1
        display flex
        flex-direction column
        align-items center
        justify-content center
        .fa 
          color #9e9e9e
        &.active
          color #009A61
          .fa
            color #009A61
          
  i.fa
    font-size 20px!important
  .text
    font-size 12px
    padding-top 1px
  .el-main
    padding .3rem 0 0 0 
    background-color #fff 
</style>



<script>
  
 export default {
    data() {
      return {
    
      }
    },
    methods: {
   
    }
  }
</script>
