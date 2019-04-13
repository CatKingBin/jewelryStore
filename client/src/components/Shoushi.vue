<template>
  <div class="outer">
    <div class="container">
      <el-carousel trigger="click" height="450px">
        <el-carousel-item v-for="item in 2" :key="item">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container1"></div>
  </div>
</template>
<script>
export default {
  name: "Shoushi"
};
</script>

<style scoped>
.outer {
  margin-top: 72px;
  width: 100%;
}
.container {
  width: 100%;
  height: 450px;
  border-bottom: 25px solid #f5f5f5;
  background-position: center;
  background-size: cover;
}
  .el-carousel__item:nth-child(2n) {
     background-image: url(http://img3.ido-love.com/art/pc/151331017881787674.png);
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-image: url(http://img5.ido-love.com/art/pc/151334426849419799.png);
     /* background-image: url(https://img1.ido-love.com/20190403/155428732483769726.png); */
  }
.container1 {
  width: 100%;
  height: 30px;
  background-color: #f5f5f5;
}
</style>
