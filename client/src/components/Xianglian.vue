<template>
  <div class="bigbox">
    <div class="contain">
      <div class="lunbo">
        <el-carousel :interval="4000" type="card" height="270px" indicator-position="none">
          <el-carousel-item v-for="item in 6" :key="item"></el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="lunbo1"></div>
  </div>
</template>

<script>
export default {
  name: "Xianglian"
};
</script>

<style scoped="scoped">
.bigbox {
  width: 100%;
  margin-top: 72px;
}
.contain {
   width: 100%;
   /* opacity: 0.3; */
   background-color: rgb(29, 21, 21,0.6);
}
.lunbo {
  width: 80%;
  margin: 0 auto;
}
.el-carousel__item {
  background-position: center;
  background-size: cover;
}
.el-carousel__item:nth-child(6n) {
  background-image: url(https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2069558775/O1CN01eNI0hS2EgzyzCWjvC_!!0-item_pic.jpg_230x230.jpg_.webp);
}

.el-carousel__item:nth-child(6n + 1) {
  background-image: url(https://img.alicdn.com/bao/uploaded/i1/367859690/O1CN012LS4LSJvB4BkgqI_!!367859690.jpg_240x240.jpg);
}
.el-carousel__item:nth-child(6n + 2) {
  background-color: lightblue;
  background-image: url(http://img4.ido-love.com/art/pc/151334059046823088.png);
}
.el-carousel__item:nth-child(6n + 3) {
  background-image: url(https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/3490192654/TB2XWsXov1TBuNjy0FjXXajyXXa_!!3490192654.jpg_230x230.jpg_.webp);
}
.el-carousel__item:nth-child(6n + 4) {
  background-image: url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4101222371,1090581937&fm=15&gp=0.jpg);
}
.el-carousel__item:nth-child(6n + 5) {
  background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=928764994,609316283&fm=26&gp=0.jpg);
}
.lunbo1 {
  width: 100%;
  height: 500px;
  background-color: pink;
}
</style>