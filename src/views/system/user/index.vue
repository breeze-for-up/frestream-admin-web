<template>
  <div>
    <div style="padding: 10px 0">
      关键词：<el-input
        style="width: 250px"
        type="text"
        placeholder="请输入关键字"
        maxlength="10"
        show-word-limit
        suffix-icon="el-icon-search"
        v-model="dataFilter.keyword"
      >
      </el-input>
      <el-button type="primary" style="margin-left: 5px" @click="loadUserList"
        >搜索</el-button
      >
      <el-button
        type="warning"
        style="margin-left: 5px"
        @click="resetDataFilter"
        >重置</el-button
      >
    </div>

    <div style="margin-bottom: 10px">
      <el-button type="primary" icon="el-icon-plus">新增</el-button>
      <el-button type="danger" icon="el-icon-delete" style="margin-left: 5px"
        >批量删除</el-button
      >
      <el-button type="primary" icon="el-icon-bottom" style="margin-left: 5px"
        >导入</el-button
      >
      <el-button type="primary" icon="el-icon-top" style="margin-left: 5px"
        >导出</el-button
      >
    </div>
    <el-table :data="tableData" border>
      <el-table-column type="selection" width="60"> </el-table-column>
      <el-table-column
        prop="userCode"
        label="用户编码"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="userName"
        label="用户名"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        width="120"
      ></el-table-column>
      <el-table-column prop="email" label="邮箱" width="120"></el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="text"
            >详情</el-button
          >
          <el-button type="text" @click="editRow(scope.row.userCode)">编辑</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="padding: 10px 0">
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { listUser, editUser, deleteUser } from "@/api/system/user.js";

export default {
  name: "UserList",
  data() {
    return {
      dataFilter: {
        keyword: "",
      },
      tableData: [],
      page: {
        total: 0,
      },
    };
  },
  methods: {
    // 用户列表
    loadUserList() {
      listUser({
        pageNo: 0,
        pageSize: 10,
      }).then((res) => {
        this.tableData = res.data;
        this.page.total = res.page;
      });
    },
    // 重置筛选条件
    resetDataFilter() {
      this.dataFilter = {};
    },
	// 行编辑
	editRow(userCode) {
		editUser({
			userCode: userCode,
			type: 1
		}).then(res => {
			console.log('用户编辑success');
		})
	},
  },
  created() {
    this.loadUserList();
  },
};
</script>