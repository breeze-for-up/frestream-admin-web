<template>
  <div>
    <div class="navMenu">
      <span :class="changeCollapseClass" @click="changeCollapse"></span>
    </div>
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>王小虎</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState("layout", ["changeCollapseClass"]),
  },
  methods: {
    ...mapMutations("layout", ["changeCollapse"]),
  },
};
</script>

<style scoped>

.navMenu {
  float: left;
  font-size: 22px;
}
</style>