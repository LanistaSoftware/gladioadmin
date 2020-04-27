<template>
  <ul class="nav nav-tabs" >
    <p>Tabs bölümü</p>
    <router-link :to="tab.link" tag="a"  class="nav-link" v-for="tab in tabs" :key="tab.id" active-class="active">
      {{tab.label}}
    </router-link>
  </ul>
</template>

<script>
 import {mapGetters} from 'vuex'
  export default {
    name: 'Tabs',
   
    data() {
      return {   

      }
    },
    computed:{
      ...mapGetters({
        tabs:'getTabs'
      })

    }
  }
</script>
<style lang="less" scoped>
  @nbfcolor: #303030;
  @bgcolor: #ffffff;
  @incolor: #B5B5B5;
  @redcolor: #e33;
  @pagebgcolor: #E5E5E5;
  @btntextcolor: #eee;
  @headingfont: 'Kanit', sans-serif;
  @contentfont: 'Exo', sans-serif;

  a {
      color: @nbfcolor;
  }


</style>
