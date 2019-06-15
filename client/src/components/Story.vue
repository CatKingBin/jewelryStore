<template>
    <div id="app">
      
        <div class="header">
          <img src="https://images.mituo.cn/mui568/upload/mui568/201904/1556611785.jpg" alt="">
        </div>
        <hr/>
        <div class="body">
          <img src="https://images.mituo.cn/mui568/upload/mui568/201903/1552017845728848.jpg" alt="">
        </div>
        <ul>
          <li>品牌传承</li>
          <li>汇聚了顶级时尚潮流元素，凭设计引领时尚，致力于为所有女性解放美丽而孜孜不倦地追求。</li>
          <li>一切从时尚女性的角度出发，以精致的审美态度诠释女性之美，并为女性魅力的彰显而创新不止。</li>
          <li>凭借对意大利传统珠宝工业的深厚了解和鉴赏经验</li>
          <li>将旗下数十家意大利珠宝工坊及工作室的制作工艺与艺术精髓进行保留和创新，</li>
          <li>并特别甄选代表瓦伦萨和卢卡等地顶尖工坊中的珍品，用极致密镶技术和匠心独具的配石。</li>
          <li>大小不同、颜色各异的每一颗钻石均经过珠宝工匠严格的筛选，</li>
          <li>通过精准的计算和设计，从多角度细密镶嵌，体现空间层次 感。</li>
          <li>经过严格选材的钻石与宝石，虽大小不一，但在设计师精湛的手工技艺下各司其位，</li>
          <li>令对角线上精准把控的波浪呈现丝绒一般细腻光滑的触感</li>
        </ul>

    </div>
</template>
<script>
export default {
    name:"Story"
}
</script>
<style scoped>
.header>img {
  width: 100%;
}
.header {
  margin-bottom: 20px;
}
.body {
  margin-top: 20px;
  text-align: center;
}
ul li {
  text-align: center;
}
ul li:nth-child(1) {
  margin-top: 15px;
  font-size: 24px;
  font-weight: bold;
}
ul li:nth-child(2),
ul li:nth-child(3) {
  margin-top: 30px;
  font-size: 16px;
  font-weight: bold;
}
ul li:nth-child(4),
ul li:nth-child(7),
ul li:nth-child(8),
ul li:nth-child(9) {
  margin-top: 60px;
  font-size: 16px;
}
ul li:nth-child(5),
ul li:nth-child(6) {
margin-top: 20px;
  font-size: 16px;
}
ul li:nth-child(10) {
  margin-top: 20px;
  margin-bottom: 60px;
  font-size: 16px;
}
</style>
