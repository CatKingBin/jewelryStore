<template>
  <div id="app">
    <div class="header">
      <div class="h1">
        <img src="../assets/dengji.png" alt>&nbsp;&nbsp;等级
      </div>
      <div class="h2">
        <img src="../assets/logo.png" alt>
      </div>
      <div class="h3">
        <img src="../assets/jifen.png" alt>&nbsp;&nbsp;积分
      </div>
    </div>
    <div class="yinying">
      <div class="body">
        <div>请在APP中访问</div>
        <div>
          <img src="../assets/erweima.png" alt>
        </div>
      </div>
    </div>
    <router-link :to="this.$route.query.path"><button>返回</button></router-link> 
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style scoped>
#app {
  position: relative;
}
button {
  position: absolute;
  top: 426px;
  left: 626px;
  width: 100px;
  height: 50px;
  cursor: pointer;
  text-align: center;
  line-height: 50px;
}
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  margin-bottom: 450px;
  background-color: rgb(251, 87, 87);
}
.h1,
.h3 {
  font-size: 20px;
  font-weight: bold;
  color: gold;
}
.h1 > img,
.h3 > img {
  width: 50px;
  height: 50px;
  vertical-align: middle;
}
.yinying {
    height: 650px;
    width: 100%;
    position: absolute;
    top: 0px;
    background-color: black;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
}
.body {
  display: flex;
  width: 400px;
  height: 200px;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}
</style>
