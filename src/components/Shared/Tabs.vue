<template>
  <ul class="tablist">
    <li v-for="tab in tabs" :key="tab.id" class="tabitem">
      <router-link :to="tab.link" tag="a" class="tablink" exact-active-class="activetab">
        {{tab.label}}
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Tabs',
   
    data() {
      return {   

      }
    },
    props:[
      "tabs"
    ]
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
.tablist{
  .tabitem{
    float: left;
    padding-right:1rem;
  }
}
.activetab{
  color:red;
}

</style>
