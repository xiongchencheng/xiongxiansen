<template>
  <div id="logo">
    <img @click="toIndex" src="../../../../assets/images/logo.png" alt />
  </div>
</template>

<script>
export default {
  name: "logoBox",
  components: {},
  data() {},
  methods: {
    toIndex() {
      this.$router.push("/first");
    }
  }
};
</script>
<style lang="scss" scoped>
#logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  background-color: rgb(206, 197, 197);
  img {
    width: 100px;
    height: 40px;
    cursor: pointer;
  }
}
</style>