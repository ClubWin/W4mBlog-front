<template>
  <div class="content-warp">
    <div class="opts">
      <div class="content-title">
        <span>根据阿里巴巴研究院决定的未来大数据趋势</span>
      </div>
      <div class="content-main">
        “没有不出轨的男人”，这句话听起来太过于绝对，也并非真理，只能说是一部分人生活当中的映射吧。

        婚姻中存在着很多问题，“出轨”是被提及最多的一个问题。
        很多正处于婚姻中的人都有这样的困惑，为什么明明跟相爱的人结了婚，婚后的生活却没有让人觉得很快乐。

        周国平老师曾经在他的书中这样说过：爱情是精神生活，遵循理想原则；婚姻是社会生活，遵循现实原则。

        这是完全不同的东西。

        其实这也就说明，在婚姻，很难有一个人能够完完全全地满足对方对爱情、对生活的所有需求，即使存在，也很少很少。
      </div>
    </div>
    <div class="content-info">
      点赞 | 作者名字 | 评论数 | 关注
    </div>
</div>
</template>

<script>
    export default {
        name: "Content"
    }
</script>

<style lang="less" scoped>
  .content-warp{
    margin-bottom: 20px;
  }

  .content-title{
    font-size: 20px;
    line-height: 25px;
  }
  .content-main{
    font-size: 14px;
    line-height: 1.5;
    height: 40px;
    overflow: hidden;
    color: #a2a5ac;
    margin-top:5px;
  }
  .content-info{
    font-size: 16px;
    padding: 0 10px;
  }
  .opts{
    padding: 10px;
  }
  .opts:hover{
    cursor: pointer;
    background: #F2F6FC;
  }
</style>
