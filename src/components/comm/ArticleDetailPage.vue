<template>
    <div class="content-warp">
        <div class="content-left">
          <div class="article-title">
            根据阿里巴巴研究院决定的未来大数据趋势
          </div>
          <div class="article-content">
            <span v-html="content"></span>
          </div>
        </div>
      <div class="menu-right">
         推荐区域 to do ...
      </div>
    </div>
</template>

<script>
    export default {
        name: "ArticaleDetailPage",
      data(){
          return{
            content:"   很多正处于婚姻中的人都有这样的困惑，为什么明明跟相爱的人结了婚，婚后的生活却没有让人觉得很快乐。\n" +
              "            周国平老师曾经在他的书中这样说过：爱情是精神生活，遵循理想原则；婚姻是社会生活，遵循现实原则。\n" +
              "            这是完全不同的东西。\n" +
              "            其实这也就说明，在婚姻，很难有一个人能够完完全全地满足对方对爱情、对生活的所有需求，即使存在，也很少很少。"
          }
      }
    }
</script>

<style lang="less" scoped>
  .content-warp{
    margin: 20px;
  }
  .content-left{
    float: left;
    width: 900px;
  }
  .content-right{
    float: right;
    width: 250px;
  }
  .article-title{
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    margin: 20px 0;
  }
  .article-content{
    line-height: 1.5;
    margin-bottom: 10px;
  }
</style>
