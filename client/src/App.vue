<template>
  <div id="app">
    <el-container>
      <el-header height="72px" position="fixed">
        <my-hello></my-hello>
      </el-header>
      <el-main>
        <router-view></router-view>  
      </el-main>
      <el-footer height="100px">
         <my-foot></my-foot>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Foot from "./components/Foot";
export default {
  name: "App",
  components: {
    "my-hello": HelloWorld,
    "my-foot": Foot
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
}
.el-header,
.el-footer {
  width: 100%;
  padding: 0px 0px;
  background-color: #f5f5f5;
}
.el-header {
  border-bottom: 3px solid rgb(5, 34, 5);
  text-align: left;
  position: fixed;
  z-index: 999;
}
.el-main {
  width: 100%;
  padding: 0px 0px;

}
</style>
