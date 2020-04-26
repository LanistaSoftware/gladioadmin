<template>
  <div id="app">
    <div id="header">
      <div class="logo"></div>
      <div class="heading">Gladio Blog Admin Panel & Control Systems</div>
    </div>
    <div id="content">
      <div id="sidemenu">
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </nav>
      </div>
      <div class="incontent">
        <router-view />
      </div>
    </div>
    <div id="footer">
      <h3>Footer</h3>
    </div>
  </div>
</template>

<style lang="less">

@import url("./assets/styles/bootstrap/css/bootstrap.css");
@import url("./assets/styles/fontawesome/css/all.css");
@import url("./assets/styles/style.css");
@import url("./assets/styles/grid.css");
@import url("./assets/styles/media.css");


</style>
