<template>
  <div id="app">
      <Header />
    <div id="content">
      <section class="tabsection">
        <div class="spacing"></div>
        <div class="tabs">
          <div class="tab"><Tabs :tabs="tabs" /></div>
          <div class="tabicon"><IconSet /></div>
          </div>
      </section>
      <section class="nav-content-section">
        <div id="side-container">
          <Navigation :navs="getNavs"/>
        </div>
        <div id="view-container">
          <router-view />
        </div>
      </section>
    </div>
    <div id="footer">
      <Footer-v />
    </div>
  </div>
</template>
<script>
import Header from "./components/shared/Header.vue"
import Navigation from "./components/shared/Navigation.vue"
import FooterV from "./components/shared/FooterV.vue"
import Tabs from "./components/shared/Tabs.vue"
import IconSet from "./components/shared/IconSet.vue"
import {

    mapGetters

} from 'vuex'
export default {
  components: {
      Header,
      Navigation,
      Tabs,
      FooterV,
      IconSet
    },
    computed: {
      ...mapGetters({
        getTabs: "getTabs",
        getNavs: "getNavs"
      })
    },

    data() {
      return {
        tabs: []
      }
    },
    watch: {
      getTabs() {
        this.tabs = this.getTabs
      }
    },

  }
</script>

<style lang="less">
// @import url('https://fonts.googleapis.com/css2?family=Exo:wght@100;300;400;600;700;900&family=Kanit:wght@100;300;400;600;700;900&display=swap');
@import url("./assets/styles/bootstrap/css/bootstrap.css");
@import url("./assets/styles/fontawesome/css/all.css");
@import url("./assets/styles/style.css");
@import url("./assets/styles/grid.css");
@import url("./assets/styles/media.css");
</style>