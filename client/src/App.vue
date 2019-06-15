<template>
  <div id="app">
    <my-header></my-header>
    <div class="body">
<router-view></router-view>
    </div>
    

    <my-foot></my-foot>
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
.body {
  margin-top: 90px;
}
</style>
