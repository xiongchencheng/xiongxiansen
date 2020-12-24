<template>
  <div id="app">
    <topBar></topBar>
    <sideBar></sideBar>
    <section class="container">
      <router-view></router-view>
    </section>
    <footerBar></footerBar>
  </div>
</template>

<script>
import topBar from "./components/topBar/index";
import footerBar from "./components/footerBar/index";
import sideBar from "./components/sideBar/index";
export default {
  name: "App",
  components: {
    topBar,
    footerBar,
    sideBar
  },
  data() {
    return {};
  }
};
</script>

<style>
body {
  margin: 0;
}
.container {
  position: absolute;
  top: 50px;
  left: 200px;
}
</style>
