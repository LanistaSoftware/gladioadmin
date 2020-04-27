<template>
  <div id="app">
      <Header />
    <div id="content">
      <section class="tabsection">
        <div class="spacing"></div>
        <div class="tabs">
          <div class="tab"><Tabs /></div>
          <div class="tabicon">Icons</div>
          </div>
      </section>
      <section class="nav-content-section">
        <div id="side-container">
          <Navigation />
        </div>
        <div id="view-container">
          <router-view />
        </div>
      </section>
    </div>
    <div id="footer">
      <h3>Footer</h3>
    </div>
  </div>
</template>
<script>
import Header from "./components/Shared/Header.vue"
import Navigation from "./components/Shared/Navigation.vue"
import Tabs from "./components/Shared/Tabs.vue"
export default {
  components:{
    Header,
    Navigation,
    Tabs
  }
}
</script>
<style lang="less">
@import url("./assets/styles/bootstrap/css/bootstrap.css");
@import url("./assets/styles/fontawesome/css/all.css");
@import url("./assets/styles/style.css");
@import url("./assets/styles/grid.css");
@import url("./assets/styles/media.css");
</style>
