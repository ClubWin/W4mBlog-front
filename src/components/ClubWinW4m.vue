<template>
  <el-container>
    <el-header>
      <W4mHeader></W4mHeader>
    </el-header>
    <el-main>
      <AdvertisingPage></AdvertisingPage>
     <div class="main-content">
        <router-view>
        </router-view>
     </div>
    </el-main>
    <el-footer>
      <FooterPage></FooterPage>
    </el-footer>
  </el-container>

</template>
<script>
  import FooterPage from './pages/footerPage'
  import AdvertisingPage from './comm/AdvertisingPage'
  import W4mHeader from './comm/Header'
  export default {
    name: "ClubWinW4m",
    components:{
      FooterPage,AdvertisingPage,W4mHeader
    },
    data(){
      return {
        input2:''
      }
    },
    created() {
      console.log("the named of ClubWinW4m component was created")
    }
  }
</script>

<style lang="less" scoped>
  .el-container{
    min-width: 1200px;
  }
  .el-header-container,.el-main{
    width: 1200px;
    margin: 0 auto;
  }
  .el-header{
    box-shadow: 0 3px 3px #d1d1d1;
    background: #303643;
    width: 100%;
    position: fixed;
  }
  .el-main{
    margin-top: 56px;
  }
  .iActive {
    color: #409EFF;
  }
  .el-footer{
    border-top: #a2a5ac 1px solid;
    background: #fbfbfb;
  }
</style>

