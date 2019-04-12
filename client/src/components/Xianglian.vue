<template>
  <div class="bigbox">
    <div class="lunbo">
      <el-carousel :interval="4000" type="card" height="270px" indicator-position="none">
        <el-carousel-item v-for="item in 6" :key="item"></el-carousel-item>
      </el-carousel>
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
.lunbo {
  width: 100%;
  /* height: 300px; */
}
.el-carousel__item:nth-child(6n) {
  background-position: center;
  background-size: cover;
  background-image: url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3839664297,2296190049&fm=26&gp=0.jpg);
}

.el-carousel__item:nth-child(6n + 1) {
 background-position: center;
  background-size: cover;
  background-image: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2266762795,63308880&fm=15&gp=0.jpg);
}
.el-carousel__item:nth-child(6n + 2) {
  background-position: center;
  background-size: cover;
  background-image: url(https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=254799038,2262345218&fm=15&gp=0.jpg);
}
.el-carousel__item:nth-child(6n + 3) {
  background-position: center;
  background-size: cover;
  background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2649214861,4294735284&fm=15&gp=0.jpg);
}
.el-carousel__item:nth-child(6n + 4) {
  background-position: center;
  background-size: cover;
  background-image: url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4101222371,1090581937&fm=15&gp=0.jpg);
}
.el-carousel__item:nth-child(6n + 5) {
  background-position: center;
  background-size: cover;
  background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=928764994,609316283&fm=26&gp=0.jpg);
}
.lunbo1 {
    width: 100%;
    height: 500px;
    background-color: pink;
}
</style>