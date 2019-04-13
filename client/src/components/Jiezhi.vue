<template>
  <div class="contain">
    <div class="box"></div>
    <div class="buzou">
       <el-steps :active="1">
           <el-step title="" ></el-step>
           <el-step title="实拍真图" icon="el-icon-upload"></el-step>
           <el-step title="" ></el-step>
       </el-steps>
    </div>
    <div class="center">
      <div class="center-left">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in 4" :key="item"></el-carousel-item>
        </el-carousel>
      </div>
      <div class="title-flex">
        <div class="title-flex1"></div>
        <div class="title-flex2"></div>
        <div class="title-flex3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jiezhi"
};
</script>

<style scoped>
.contain {
  margin-top: 72px;
  width: 100%;
}
.box {
  width: 100%;
  height: 400px;
  background-position: center;
  background-image: url(http://img4.ido-love.com/art/pc/151317231047514220.png);
}
.buzou {
    margin: 20px 0px;
}
.center {
  width: 90%;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.center-left {
  width: 40%;
  height: 100%;
}
.el-carousel__item:nth-child(4n) {
    background-image: url( http://img0.imgtn.bdimg.com/it/u=1353475417,2719900523&fm=26&gp=0.jpg);
}

.el-carousel__item:nth-child(4n + 1) {
    background-image: url( http://img1.imgtn.bdimg.com/it/u=3604790492,590920427&fm=26&gp=0.jpg);
    background-size: cover;
}
.el-carousel__item:nth-child(4n + 2) {
   background-image: url(http://img0.imgtn.bdimg.com/it/u=3543962141,286111177&fm=15&gp=0.jpg);
}
.el-carousel__item:nth-child(4n + 3) {
  background-image: url( http://img3.imgtn.bdimg.com/it/u=2156493573,772595904&fm=26&gp=0.jpg);
}

.title-flex {
  width: 57%;
  height: 450px;
  display: flex;
  position: relative;
}
.title-flex1 {
  width: 250px;
  height: 250px;
  border-radius: 120px;
  position: absolute;
  top: 10%;
  background-position: center;
  background-size: cover;
  background-image: url(https://img.alicdn.com/bao/uploaded/i2/367859690/O1CN01m6OO5p2LS4ODkYOI9_!!367859690.jpg_240x240.jpg);
}
.title-flex2 {
  width: 250px;
  height: 250px;
  position: absolute;
  top: 10%;
  left: 60%;
  background-position: center;
  background-size: cover;
  border-radius: 120px;
  background-image: url(https://img.alicdn.com/bao/uploaded/i1/367859690/O1CN01FIKsbI2LS4NzILGXU_!!367859690.jpg_240x240.jpg);
}
.title-flex3 {
  width: 250px;
  height: 250px;
  position: absolute;
  top: 50%;
  left: 30%;
  background-position: center;
  background-size: cover;
  border-radius: 120px;
  background-image: url(https://img.alicdn.com/bao/uploaded/i4/367859690/O1CN012LS4LSMBcs7SIP1_!!367859690.jpg_240x240.jpg);
}
</style>
