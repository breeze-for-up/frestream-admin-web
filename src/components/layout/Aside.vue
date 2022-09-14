<template>
  <el-aside :width="asideWidth + 'px'">
    <el-menu
      :router="true"
      :default-openeds="['1', '3']"
      background-color="rgb(48,65,86)"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse-transition="false"
      :collapse="isCollapse"
    >
      <div class="logo">
        <img class="logoImg" src="../../../public/719a.jpg" alt="" />
        <b class="logoText" v-show="logoTextShow">FreStream</b>
      </div>
      <el-menu-item index="1">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </template>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item index="/user">用户管理</el-menu-item>
        <el-menu-item index="/org">机构管理</el-menu-item>
        <el-menu-item index="/role">角色管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapState } from 'vuex'

	export default {
		name: 'Aside',
    computed: {
      ...mapState('layout', ['asideWidth', 'isCollapse', 'logoTextShow']),
    }
	}
</script>

<style scoped>
.el-aside {
  color: #333;
}
.el-menu {
  overflow-x: hidden;
  height: 100%;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}
.logo{
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: white;
}
.logoImg{
  width: 40px;
  position: relative;
  top: 14px;
  margin-right: 10px;
}
</style>