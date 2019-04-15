<template>
  <div id="app">
    <div class="head">
      <my-header></my-header>
    </div>
    <div class="blank"></div>
    <div class="contain">
      <router-view></router-view>  
    </div>
    <div class="foot">
       <my-foot></my-foot>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Foot from "./components/Foot";
export default {
  name: "App",
  components: {
    "my-header": Header,
    "my-foot": Foot
  }
};
</script>

<style scoped="scoped">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.head {
  width: 100%;
  height: 72px;
  padding: 0px 0px;
  background-color: #f5f5f5;
  border-bottom: 3px solid rgb(5, 34, 5);
  text-align: left;
  position: fixed;
  z-index: 999;
}
.blank {
  width: 100%;
  height: 72px;
}
.contain {
  width: 100%;
  padding: 0px 0px;
}
.foot {
  width: 100%;
  padding: 0px 0px;
  background-color: #f5f5f5;
  height: 100px;
}
</style>
