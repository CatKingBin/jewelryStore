<template>
  <div class="outer" style="position:relative">
   
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
    <!-- <div class="logo"><i>今生今饰</i></div> -->
     <h3>请先登录！</h3>
    <div class="sousuo">
      <el-col :span="24" style="padding-bottom: 0px;">
        <el-form :inline="true">
          <el-form-item>
            <el-input placeholder="请输入关键字" v-model="storename"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="find">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </div>

    <div class="loginreg">
      <ul>
         <li class="list1">
          <router-link class="mylink1" to="Login">登录</router-link>
        </li>
        <li class="list1 list2">
          <router-link class="mylink1" to="Reg">注册</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  
  data(){
    return{
      storename:""
    }
  },
  methods: {
    find(){
      if(this.storename!=''){
this.$http //发起ajax请求
        .get("http://localhost:9999/findall", {
         params:{
             storename:this.storename
         } 
        })
        .then(result => {
          //请求成功
        // console.log(result.data)
        this.$router.push({path:'chaxun',query:{arr:result.data}})
        })
        .catch(function() {
          //请求失败
          alert("失败");
        });
      }
    }
  }
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
.outer > h3 {
  display: inline-block;
  line-height: 72px;
  position: absolute;
  left: 550px;
}
.container {
  width: 38%;
  height: 67px;
  line-height: 72px;
  font-size: 18px;
  /* position: absolute; */
  /* left: 150px; */
  display: inline-block;
  text-align: left;
  padding-left: 20px;
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

.loginreg {
  display: inline-block;
  line-height: 72px;
  float: right;
  width: 12%;
  height: 67px;
  line-height: 67px;
  font-size: 18px;

}
.loginreg > ul {
  line-height: 67px;
  height: 67px;
  margin: 0px 0px;
  display: inline-block;
}
.loginreg .list1 {
  display: inline-block;
  position: relative;
}
.list2 {
  padding-left: 10px;
}
.loginreg .list1 .mylink1 {
  color: #959595;
  text-decoration: none;
}

.loginreg .list1:hover .mylink1 {
  color: #333333;
}
.sousuo{
  position:absolute;
  top: 17px;
  right: 200px;
}
</style>
