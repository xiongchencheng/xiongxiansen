<template>
  <div id="topBar">
    <div class="topBoxLeft">
      <logo-box></logo-box>
    </div>
    <div class="topBoxRight">
      <div class="topBoxRightBoxLeft"></div>
      <div class="topBoxRightBoxRight">
        <span class="headPhoto">
          <img src="../../assets/images/1.jpg" alt />
        </span>
        <span class="userName">熊先森</span>
        <span class="exitBtn icon-tuichu1"></span>
      </div>
    </div>
  </div>
</template>

<script>
import logoBox from "./components/logo/index";
export default {
  name: "topBar",
  components: {
    logoBox
  },
  data() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
#topBar {
  width: 100%;
  height: 50px;
  // background-color: rgb(150, 187, 235);
  .topBoxRight {
    width: 100%;
    height: 50px;
    position: fixed;
    left: 200px;
    top: 0;
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.13);
    .topBoxRightBoxRight {
      width: 800px;
      height: 50px;
      background-color: pink;
      position: absolute;
      top: 0;
      right: 20px;
      display: flex;
      align-items: center;
      .headPhoto {
        position: absolute;
        top: 0;
        right: 400px;
        display: inline-block;
        width: 45px;
        height: 45px;
        border-radius: 45px;
        background-color: red;
        // text-align: center;
        overflow: hidden;

        img {
          width: 45px;
          height: 45px;
          // line-height: 30px;
        }
      }
      .userName {
        position: absolute;
        top: 0;
        right: 280px;
        width: 100px;
        height: 50px;
        line-height: 50px;
        // background-color: red;
        overflow: hidden;
      }
    }
  }
}
</style>