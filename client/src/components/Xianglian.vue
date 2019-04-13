<template>
  <div class="bigbox">
    <div class="contain">
      <div class="lunbo">
        <el-carousel :interval="4000" type="card" height="270px" indicator-position="none">
          <el-carousel-item v-for="item in 4" :key="item"></el-carousel-item>
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
.el-carousel__item:nth-child(4n) {
  background-image: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2874166175,1318701774&fm=15&gp=0.jpg);
}

.el-carousel__item:nth-child(4n + 1) {
  background-image: url(http://img0.imgtn.bdimg.com/it/u=3411804117,3716124559&fm=26&gp=0.jpg);
}
.el-carousel__item:nth-child(4n + 2) {
  background-color: rgb(220, 245, 242);
  background-image: url(http://img4.ido-love.com/art/pc/151334059046823088.png);
}
.el-carousel__item:nth-child(4n + 3) {
  background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555745936&di=7a81afb95b021a9a8faa71bcf104bec4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi4%2F683623708%2FTB2hajwlVXXXXaOXpXXXXXXXXXX_%21%21683623708.jpg);
}
.lunbo1 {
  width: 100%;
  height: 500px;
  background-color: pink;
}
</style>