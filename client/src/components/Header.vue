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
    <div class="logo"><i>今生今饰</i></div>

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


    <div class="login-car"> 
      <router-link to="login">
        <img class="imglogin" src="https://i.loli.net/2019/04/11/5caee84d99b69.png" alt>
      </router-link>
       <router-link to="gouwuche">
        <img class="imgcar" src="https://i.loli.net/2019/04/11/5caee7e98d873.png" alt>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  
  data(){
    return{
      storename:"",
     
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
.sousuo{
  position:absolute;
  top: 10px;
  right: 180px;
}
</style>
