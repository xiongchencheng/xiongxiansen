<template>
  <div class="user">
    <table border="1" class="infos">
      <tr>
        <th>姓名</th>
        <td>{{data.name}}</td>
        <th>性别</th>
        <td>{{data.gender}}</td>
        <th>身高</th>
        <td>{{data.height}}</td>
      </tr>
      <tr>
        <th>学校</th>
        <td>{{data.school}}</td>
        <th>爱好</th>
        <td>{{data.hobby}}</td>
        <th>其他</th>
        <td>{{data.others}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "userTable",
  data() {
    return {};
  },
  props: {
    data: {
      default: () => {}
    }
  }
};
</script>


<style lang="scss" scoped>
.infos {
  // width: 100%;
  border-collapse: collapse;
  border: 1.5px solid rgb(243, 117, 117);
  tr {
    height: 40px;
    th {
      width: 150px;
      border: 1.5px solid rgb(243, 117, 117);
      background-color: rgb(226, 226, 226);
    }
    td {
      text-align: center;
      min-width: 200px;
      border: 1.5px solid rgb(243, 117, 117);
    }
  }
}
</style>
