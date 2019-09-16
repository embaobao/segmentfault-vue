<template>
  <div class="tabs">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="推荐文章" name="first">推荐文章</el-tab-pane>
      <el-tab-pane label="热门文章" name="second">热门文章</el-tab-pane>
      <el-tab-pane label="最新文章" name="third">最新文章</el-tab-pane>
      
  <el-tab-pane>
     <el-dropdown slot="label">
      <span class="el-dropdown-link">
        更多
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>付费中心</el-dropdown-item>
        <el-dropdown-item>众审中心</el-dropdown-item>
    </el-dropdown-menu>
</el-dropdown>
    我的行程
  </el-tab-pane>
 
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {

      }
    }
  }

</script>
<style lang="stylus">
@keyframes changeBGC
{
0%   {background: #FFF;}
25%  {background: #EEE;}
50%  {background: #FFE;}
100% {background: #FFF;}
}


.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}
.el-icon-arrow-down {
    font-size: 12px;
  }
.tabs
  .el-tabs--card>.el-tabs__header .el-tabs__nav 
    border none
  .el-tabs--card>.el-tabs__header .el-tabs__item
    width .88rem
    padding:0 0.15rem
    height .42rem
    border-left none
    border-radius .04rem .04rem 0 0 
    color #009a61
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active 
    border-top 1px solid #ddd
    border-left 1px solid #ddd
    border-right 1px solid #ddd
    border-bottom 1px solid #fff
    height .43rem
    color #555
    animation changeBGC 350ms
  li.el-dropdown-menu__item
    width 1.58rem
    height .26rem

</style>