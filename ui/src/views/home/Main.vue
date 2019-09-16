<template>
  <div>
    <router-box></router-box>
    <container>
      <split-bar></split-bar>
      <new-item :dataList="newListData" ></new-item> 
    </container>
  </div>
</template>


<script>
  import RouterBox from "publicComponents/RouterBox"
  import SplitBar from "publicComponents/SplitBar"
  import Container from 'layoutComponents/container'
  import NewItem from 'itemComponents/NewItem'

  import axios from 'axios'
  import {
    mapActions,
    mapState
  } from 'vuex';

  export default {
    components: {
      RouterBox,
      SplitBar,
      Container,
      NewItem
    },
    computed: {
      ...mapState({
        newListData: state => state.home.newList
      })
    },
    async mounted() {
      await this.LoadNewList()
      // console.log(this.newListData)
      //  console.log(res); 
    },
    methods: {
      ...mapActions(['LoadNewList'])
    }
  }


  // let res= await this.$get('http://localhost:8080/api/timelines/feed?offset=1567557284584&_=ec4f745c18afe1d7254a98ad9bc8b79b')
  // console.log( res.data.data)
</script>