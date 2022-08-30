<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      msg: "你好啊",
      name: "a",
      games: ["王者荣耀", "穿越火线"],
    };
  },
  methods: {
    getSchoolName(name) {
      this.name = name;
    },
    getStudentName(name) {
      this.name = name;
    },
    sendRequest() {
      axios.get("http://localhost:8080/api/add").then(
        (response) => {
          console.log("完整response: ", response);
          console.log("请求成功:", response.data);
        },
        (error) => {
          console.log("完整error: ", error);
          console.log("请求失败:", error.message);
        }
      );
    },
  },
  components: {

  }
}
</script>

<style>

</style>
