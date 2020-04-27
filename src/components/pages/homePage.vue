<template>
    <div class="container-warp">
      <el-container>
        <el-aside width="150px">
          <el-divider content-position="left">实时动态</el-divider>
          <a href="#" class="el-icon-s-tools"> 为您推荐</a>
          <a href="#" class="el-icon-s-tools"> 近期热门</a>
          <a href="#" class="el-icon-s-tools"> 最新内容</a>
          <el-divider content-position="left">技术社区</el-divider>
          <a href="#" class="el-icon-s-tools"> 大数据</a>
          <a href="#" class="el-icon-s-tools"> 人工智能</a>
          <el-divider content-position="left">技术频道</el-divider>
          <a href="#" class="el-icon-s-tools"> 安卓</a>
          <a href="#" class="el-icon-s-tools"> java</a>
          <a href="#" class="el-icon-s-tools"> 数据库</a>
          <a href="#" class="el-icon-s-tools"> 开源</a>
          <a href="#" class="el-icon-s-tools"> 开发工具</a>
        </el-aside>
        <el-main >
            <div class="content-main">
              <ArticleContent></ArticleContent>
              <ArticleContent></ArticleContent>
              <ArticleContent></ArticleContent>
              <ArticleContent></ArticleContent>
              <ArticleContent></ArticleContent>
            </div>
          <div class="content-right">
              右侧菜单栏 to do ...
          </div>
        </el-main>
      </el-container>
    </div>
</template>

<script>
    import ArticleContent from '../comm/ArticleContent'
    export default {
      components:{
        ArticleContent
      },
        name: "homePage"
    }
</script>

<style lang="less" scoped>
  .container-warp{
  }
  .el-aside a {
    line-height: 25px;
    margin: 10px 0;
    padding: 5px 10px;
    font-size: 14px;
    display: block;
  }
  .el-aside a:hover{
    color: #42494a;
    background: aliceblue;
  }
  .content-main{
    float: left;
  }
  .content-right{
    float: right;
  }
  .content-main{
    width: 750px;
  }
  .content-right{
    width: 250px;
    line-height: 25px;
  }
</style>
