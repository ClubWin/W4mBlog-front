<template>
  <div class="el-header-container">
    <div class="el-header-logo">
      <img src="../../assets/logo.png" alt="">
      <span class="el-header-logo-text">ClubWin W4m</span>
    </div>
    <div class="el-header-menu">
      <router-link to="/home"><a class="el-header-submenu" href="#">首页</a></router-link>
      <router-link to="/qa"><a class="el-header-submenu" href="#">问答</a></router-link>
      <router-link to="/course"><a class="el-header-submenu" href="#">课程</a></router-link>
    </div>
    <el-input
      placeholder="请输入搜索内容"
      suffix-icon="el-icon-search"
      v-model="searchKey">
    </el-input>
    <div class="login-bts">
      <a href="#">登录</a>
      <span>|</span>
      <a href="#">注册</a>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Header",
      data () {
        return {
          searchKey: ''
        }
      }
    }
</script>

<style lang="less" scoped>
  .el-header-container,.el-main,.el-footer{
    width: 1200px;
    margin: 0 auto;
  }

  div > a ,.el-header-container > .el-input{
    display: inline-block;
  }

  .el-header-logo > img{
    height: 56px;
    width: 60px;
  }

  .el-header-logo {
    display: flex;
    align-items: center;
    float: left;
  }

  .el-header-menu{
    float: left;
    line-height: 56px;
    margin: 0 20px;
    display: flex;
    align-items: center;
  }
  .el-header-logo-text{
    font-size: 30px;
    font-weight: bold;
  }

  .login-bts{
    line-height: 56px;
    float: right;
  }

  .el-header-submenu{
    font-size: 20px;
    margin: 0 10px;
    padding: 0 10px;
  }
  .el-input{
    float: left;
    width: 400px;
    line-height: 56px;
  }

  .el-header-submenu:hover{
    color: #d1d1d1;
  }
  .login-bts > a:hover{
    color: red;
  }
</style>
