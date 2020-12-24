<template>
  <div id="pageFirst">
    我是内容部分
    <!-- <user-table :data="userInfo"></user-table> -->
    <!-- <el-button type="primary" @click="toSecond">跳转至second页面</el-button> -->
  </div>
</template>

<script>
// import userTable from "../../components/userTable";
export default {
  name: "pageFirst",
  components: {
    // userTable
  },
  data() {
    return {
      // userInfo: {
      //   name: "熊陈诚",
      //   age: 18,
      //   gender: "猛男",
      //   height: "178cm",
      //   school: "家里蹲",
      //   hobby: "看书",
      //   others: "省略"
      // }
    };
  },
  methods: {
    // toSecond() {
    //   this.$router.push("/second");
    // }
  }
};
</script>
<style lang="scss" scoped>
</style>