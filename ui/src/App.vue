<template>
  <div id="app">
    <home></home>
  </div>
</template>



<script>
  // 样式的导入
  import 'styles/reset.css'
  import Home from "./views/home/Index";
  import axios from 'axios'


  export default {
    name: "app",
    components: {
      Home
    },
    async mounted() {


      
    }
  };
</script>

<style lang="stylus">
  #app
    height 100%
</style>