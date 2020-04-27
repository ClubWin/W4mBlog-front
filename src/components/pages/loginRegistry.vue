<template>
    <div class="container-warp clearFix">
      <div class="login-left">
        <img src="../../assets/login-img2.png" alt="">
      </div>
      <div class="login-right">
          <div class="top-title clearFix">
            <div class="top-title-right">
              <span>注册</span>
            </div>
            <div class="top-title-left">
              存在账户？ <a href="#">点击登录</a>
            </div>
          </div>
          <div class="login-content">
             在这里渲染，登录组件还是注册
          </div>
          <div class="login-footer">
            <el-tooltip class="item" effect="dark" content="以后需要使用图标来替换" placement="top-start">
              <el-divider>其它登录方式</el-divider>
            </el-tooltip>
            <div class="login-3dr">
                <a href="#" >QQ</a>
                <a href="#">wechat</a>
                <a href="#">GITHUB</a>
                <a href="#">others</a>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "loginRegistry"
    }
</script>

<style lang="less" scoped>
  .container-warp{
    position: fixed;
    width: 1100px;
    box-shadow: #c9cace 10px 10px 30px;
    background: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .login-left,.login-right{
    float: left;
  }
  .login-left{
    width: 550px;
    overflow: hidden;
  }

  .login-right{
    width:390px;
    padding:0 80px;
  }
  .top-title{
    margin-top: 50px;
    .top-title-right{
      font-weight: lighter;
      font-size: 25px;
      float: left;
      line-height: 50px;
    }
    .top-title-left{
      float: right;
      line-height: 50px;
    }
    .top-title-left > a{
      display: inline;
    }
  }

  .login-footer{
    position: absolute;
    bottom: 50px;
    width:390px ;
  }

  .login-3dr{
    display: flex;
    justify-content: space-between;
  }
  .login-3dr a {
    display: inline-block;
  }
</style>
