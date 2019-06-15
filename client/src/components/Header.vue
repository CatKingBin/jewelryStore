<template>
  <div class="outer">
      <div class="logo"><router-link to="/"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560516550964&di=899ddff02679587b901dc16c728fb29d&imgtype=0&src=http%3A%2F%2Fwww.lilo-park.com%2Farchive%2Fimage%2Fmodel%2Fimages%2F1503972527.png" alt="logo"></router-link></div>
    
    <div class="sousuo hidden-sm-and-down">
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

      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <router-link class="mylink" to="/">网站首页</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <router-link class="mylink" to="xianglian">商品展示</router-link>
          </template>
          <el-menu-item index="2-1">
            <router-link class="mylink" to="xianglian">项链</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link class="mylink" to="ershi">耳饰</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link class="mylink" to="shoushi">手饰</router-link>
          </el-menu-item>
          <el-menu-item index="2-4">
            <router-link class="mylink" to="jiezhi">戒指</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <router-link class="mylink" to="story">关于我们</router-link>
          </template>
          <el-menu-item index="3-1">
            <router-link class="mylink" to="story">品牌故事</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link class="mylink" to="design">设计理念</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <router-link class="mylink" to="callus">联系我们</router-link>
          </template>
          <el-menu-item index="4-1">
            <router-link class="mylink" to="message">在线留言</router-link>
          </el-menu-item>
          <el-menu-item index="4-2">
            <router-link class="mylink" to="callus">联系我们</router-link>
          </el-menu-item>
        </el-submenu>
        </el-menu-item>
      </el-menu>
    
    <div class="login-car hidden-xs-only">
      <router-link to="login">
        <img class="imglogin" src="../assets/user.png" alt="图片加载失败">
      </router-link>
      <router-link to="gouwuche">
        <img class="imgcar" src="../assets/car.png" alt>
      </router-link>
    </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
export default {
  name: "Header",

  data() {
    return {
      storename: "",
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    find() {
      if (this.storename != "") {
        this.$http //发起ajax请求
          .get("http://localhost:9999/findall", {
            params: {
              storename: this.storename
            }
          })
          .then(result => {
            //请求成功
            // console.log(result.data)
            this.$router.push({ path: "chaxun", query: { arr: result.data } });
            this.storename = "";
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
.logo img {
    width: 200px;
    height: 90px;
}
.imglogin {
  width: 45px;
  height: 45px;
  margin-right: 15px;
}
.imgcar {
  width: 45px;
  height: 45px;
}
.outer {
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: 90px;
   z-index: 999;
  justify-content: space-around;
  align-items: center;
  background-color: white;
}

.mylink {
  color: #959595;
  text-decoration: none;
}
.mylink:hover {
  color: #333333;
}

.sousuo {
  position: relative;
  top: 12px;
}
</style>
