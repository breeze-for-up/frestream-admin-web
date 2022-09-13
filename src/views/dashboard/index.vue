<template>
  <el-container style="height: 100vh">
    <Aside />
    
    <el-container>
      <el-header>
        <Header />
      </el-header>

      <el-main style="padding: 0 20px">
        <router-view></router-view>
      </el-main>
      
    </el-container>
  </el-container>
</template>

<script>
import Aside from '@/components/layout/Aside'
import Header from '@/components/layout/Header'

export default {
  name: "Dashboard",
  components:{
    Aside, Header
  }
};
</script>

<style>
.el-header {
  width: 100%;
  padding-right: 60px;
  text-align: right;
  font-size: 12px;
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
</style>