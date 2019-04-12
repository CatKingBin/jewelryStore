<template>
  <div class="outer">
    <div class="container">
      <ul>
        <li class="list">
          <router-link class="mylink" to="/">首页</router-link>
        </li>
        <li class="list">
          <router-link class="mylink" to="xianglian">项链</router-link>
        </li>
        <li class="list">
          <router-link class="mylink" to="ershi">耳饰</router-link>
        </li>
        <li class="list">
          <router-link class="mylink" to="shoushi">手饰</router-link>
        </li>
        <li class="list">
          <router-link class="mylink" to="jiezhi">戒指</router-link>
        </li>
      </ul>
    </div>
    <div class="logo"><i>今生今饰</i></div>
    <div class="login-car"> 
      <router-link to="login">
        <img class="imglogin" src="https://i.loli.net/2019/04/11/5caee84d99b69.png" alt>
      </router-link>
       <router-link to="car">
        <img class="imgcar" src="https://i.loli.net/2019/04/11/5caee7e98d873.png" alt>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer {
  width: 100%;
}
ul,
li {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.container {
  width: 45%;
  height: 67px;
  line-height: 67px;
  font-size: 18px;
  display: inline-block;
  text-align: left;
  padding-left: 40px;
}

.container > ul {
  height: 67px;
  display: inline-block;
}

.container .list {
  display: inline-block;
  padding: 0 20px;
  position: relative;
}

.container .list .mylink {
  color: #959595;
  text-decoration: none;
}

.container .list:hover .mylink {
  color: #333333;
}
.logo {
  width: 135px;
  height: 67px;
  display: inline-block;
  line-height: 67px;
  font-size: 30px;
  color: coral;
  letter-spacing: 3px;
  float: center;
}
.login-car {
  width: 110px;
  height: 41px;
  float: right;
  display: inline-block;
  padding-right: 60px;
  padding-top: 13px;
}
.login-car .imglogin {
  width: 41px;
  height: 41px;
  padding-right: 23px;
  display: inline-block;
}
.login-car .imgcar {
  width: 38px;
  height: 38px;
  display: inline-block;
}
</style>
