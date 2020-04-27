<template>
  <div class="el-header-container">
    <div class="el-header-logo">
      <img src="../../assets/logo1.png" alt="">
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
      <router-link to="/LoginRegistry"><a href="#" class="el-icon-user"> 注册-登录</a></router-link>
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
    background: #303643;
  }

  div > a ,.el-header-container > .el-input{
    display: inline-block;
  }

  .el-header-logo > img{
    border-radius: 45%;
    margin-right: 10px;
  }

  .el-header-logo {
    display: flex;
    align-items: center;
    float: left;
  }

  .el-header-menu{
    float: left;
    line-height: 50px;
    margin: 0 20px;
    display: flex;
    align-items: center;
  }
  .el-header-logo-text{
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    line-height: 56px;
  }

  .login-bts{
    line-height: 56px;
    float: right;
    a{
      font-size: 16px;
      color: #a2a5ac;
    }
  }

  .el-header-submenu{
    font-size: 20px;
    margin: 0 10px;
    padding: 0 10px;
    color:#c9cace;
    line-height: 56px;
  }
  .el-input{
    float: left;
    width: 250px;
    line-height: 56px;
  }
  .el-input:focus{
    width: 400px;
  }
  .el-header-submenu:hover{
    color:#fff;
  }
  .login-bts > a:hover{
    color: red;
  }
</style>
