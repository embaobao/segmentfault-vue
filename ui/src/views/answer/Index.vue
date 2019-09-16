<template>
  <div>
    <container>
      <tabs></tabs>
      <answera-box :list="list"></answera-box>
    </container>
  </div>
</template>

<script>
import Container from "layoutComponents/container";
import Tabs from "publicComponents/Tabs";
import Buttons from "publicComponents/Buttons";
import AnsweraBox from "itemComponents/AnsweraBox";

import { mapActions, mapState } from "vuex";

export default {
  components: {
    Container,
    Tabs,
    Buttons,
    AnsweraBox
  },
  computed: {
    ...mapState({
      list: state => state.requstion.requstionList
    })
  },
  async mounted() {
    await this.LoadRequstionList()
  
  },
  methods: {
    ...mapActions(["LoadRequstionList"])
  }
}
</script>