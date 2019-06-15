<template>
    <div id="app">
      
        <div class="header">
          <img src="https://images.mituo.cn/mui568/upload/mui568/201904/1556608935.jpg" alt="sorry">
        </div>
         <hr/>
        <div class="body">
          <img src="https://images.mituo.cn/mui568/upload/mui568/201903/1552018047233819.jpg" alt="sorry">
        </div>
        <ul>
          <li>脫俗非凡的传承</li>
          <li>早于上个世纪90年代，珠宝便在意大利开始从事裸钻定制,以寻求、欣赏珍宝的眼光，苛刻的甄选标准，</li>
          <li>这些品质的钻石珠宝只提供给少数专属的顶尖珠宝商,让钻石在不同珠宝艺术大师演绎绝美工艺创作。</li>
          <li>选钻标准较4C更为严密，独家採用第5项标准「美钻风采」为钻石，以深远方式影响钻石的亮光、火光与闪光。</li>
          <li>每件作品都凝聚着珠宝大师们的艺术构想和精妙绝伦的手工技艺，更是他们对生活感悟和真挚情感的全情灌注。</li>
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
ul li:nth-child(3),
ul li:nth-child(4) {
margin-top: 20px;
  font-size: 16px;
}
ul li:nth-child(5) {
  margin-top: 20px;
  margin-bottom: 60px;
  font-size: 16px;
}
</style>
