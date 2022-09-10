<template>
  <el-container style="height: 100vh">
    <el-aside :width="menuInfo.asideWidth + 'px'">
      <el-menu
        :default-openeds="['1', '3']"
        style="overflow-x: hidden; height: 100%; box-shadow: 2px 0 6px rgba(0,21,41,.35);"
        background-color="rgb(48,65,86)"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse-transition="false"
        :collapse="menuInfo.isCollapse"
      >
      <div class="logo">
        <img class="logoImg" src="../../../public/719a.jpg" alt="">
        <b class="logoText" v-show="menuInfo.logoTextShow">FreStream</b>
      </div>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">导航二</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="navMenu">
          <span :class="menuInfo.changeCollapseClass" @click="changeCollapse"></span>
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
      </el-header>

      <el-main>
        <div style="padding: 10px 0">
          <el-input
            style="width: 250px"
            type="text"
            placeholder="请输入关键字"
            maxlength="10"
            show-word-limit
            suffix-icon="el-icon-search"
            v-model='dataFilter.keyword'
          >
          </el-input>
          <el-button type="primary" style="margin-left: 5px">搜索</el-button>
        </div>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
        <div style="padding: 10px 0">
          <el-pagination
            :page-sizes="[10, 20, 50, 100]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {listUser} from '@/api/system/user.js'

export default {
  name: "Dashboard",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(10).fill(item),
      menuInfo:{
        asideWidth: 200, // 菜单侧边栏宽度
        isCollapse: false, // 菜单侧边栏是否收缩
        changeCollapseClass: 'el-icon-s-fold', // 收缩icon
        logoTextShow: true,
      },
      dataFilter:{
        keyword:''
      }
    };
  },
  methods: {
    // 收缩/展开菜单侧边栏
    changeCollapse() {
      const menu = this.menuInfo;
      menu.logoTextShow = !menu.logoTextShow;
      menu.isCollapse = !menu.isCollapse;
      if (menu.isCollapse) {
        menu.changeCollapseClass = 'el-icon-s-unfold';
        menu.asideWidth = 64;
      } else {
        menu.changeCollapseClass = 'el-icon-s-fold';
        menu.asideWidth = 200;
      }
    },
  },
  mounted() {
    listUser().then(res => {
      console.log('=======', res);
    })
  },
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.navMenu {
  float: left;
  font-size: 22px;
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