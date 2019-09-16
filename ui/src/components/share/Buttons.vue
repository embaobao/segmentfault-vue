<template>
  <div>
  <el-button :autofocus="true">最新问答</el-button>
  <el-button>为我推送</el-button>
  <el-button > 等待回答</el-button>
  <el-button > 等待回答</el-button>
<el-dropdown>
  <span class="el-dropdown-link">
    更多<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  </div>
</template>
<script>
  export default {
    data() {
      return {
       
      };
    },
    methods: {
     
    }
  };
</script>

<style lang="stylus">
.el-button
    border 0 !important
    margin-left .01rem !important
    color #009a61 !important
.el-button:focus, .el-button:hover 
    color #555 !important
    border .01rem solid  #ddd !important
    border-bottom none !important
    border-radius 4px 4px 0 0 !important
    background-color #fff  !important
    &.clicked
        background-color #eee  !important

</style>
