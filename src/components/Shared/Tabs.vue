<template>
<div class="tab-container">
  <ul class="tablist">
    <li v-for="tab in tabs" :key="tab.id" class="tabitem" active-class="activetab">
      <router-link :to="tab.link" tag="a" class="tablink" active-class="activetab">
        {{tab.label}}
      </router-link>
    </li>
  </ul>
  <div class="tab-spacing"></div>
</div>

  
</template>

<script>
  export default {
    name: 'Tabs',
   
    data() {
      return {   
        activeClass:"active-tab"
      }
    },
    props:[
      "tabs"
    ],
    methods:{

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

  .tab-container {
    display: grid;
    grid-template-columns: fit-content(80%) auto;
    align-content: end;

    .tab-spacing {
      border-bottom: thin solid #dee2e6;
    }
  }

  .tablist {
    margin: 0;

    .tabitem {
      float: left;


      .tablink {
        color: @nbfcolor;
        display: inline-block;
        padding: 0.5rem 1rem 0.5rem 1rem;
        border-bottom: thin solid #dee2e6;

      }
    }
  }

  .activetab {
    background-color: @bgcolor;
    color: @redcolor !important;
    border: thin solid #dee2e6;

    border-top-right-radius: 0.5em;
    border-bottom: none !important;
  }

</style>
