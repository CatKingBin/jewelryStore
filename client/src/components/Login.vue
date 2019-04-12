<template>
  <div class="outer">
    <div class="box" :style="box">
      <div class="login">
        <div>
          <p>欢迎您，请登录！</p>
        </div>
        <div>
          <div class="name">
            <span>账号：</span>
            <input type="text" v-model="users.name" @blur="blur" placeholder="请输入账号...">
            <div v-if="kong">账号不能为空！</div>
            <div v-if="exsit">账号不存在！抵押人呀</div>
          </div>
          <div class="pwd">
            <span>密码：</span>
            <input type="password" v-model="users.pwd" placeholder="请输入密码...">
            <div v-if="mima1">密码不能为空！</div>
            <div v-if="mima2">密码错误！</div>
          </div>
          <div>
            <button @click="login">
              <a href="javascript:void(0)">登录</a>
            </button>
          </div>
          <router-link to="/reg" class="reg">去注册>></router-link>
        </div>
      </div>
      <div class="box-bottom">
        <div class="landli1">10年品牌，真实口碑</div>
        <div class="landli2">饰品实拍秀展示</div>
        <div class="landli3">200%退赔承诺</div>
      </div>
    </div>
    <div class="rigt"></div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      box: {
        height: ""
      },
      exsit: false,
      kong: false,
      mima1: false,
      mima2: false,
      users: {
        name: "",
        pwd: ""
      }
    };
  },
  methods: {
    getHeight() {
      this.box.height = window.innerHeight + "px";
    },
    blur() {
      //		get方式
      if (this.users.name == "" || this.users.name == null) {
        this.kong = true;
      } else {
        this.kong = false;
        this.$http
          .get("http://localhost:9999/userlogin.do", {
            params: {
              name: this.users.name,
              pwd: this.users.pwd
            }
          })
          .then(result => {
            console.log(result.data);
            if (!result.data) {
              this.exsit = true;
            } else {
              this.exsit = false;
            }
          })
          .catch(function() {
            alert("失败");
          });
      }
    },
    login() {
      //		post方式
      if (this.users.name == "" || this.users.name == null) {
        this.kong = true;
      } else if (this.users.pwd == "" || this.users.pwd == null) {
        this.kong = false;
        this.mima1 = true;
      } else {
        this.mima1 = false;
        this.$http
          .post("http://localhost:9999/userlogin.do", this.users, {
            transformRequest: [
              function(data) {
                let params = "";
                for (let index in data) {
                  params += index + "=" + data[index] + "&";
                }
                return params;
              }
            ]
          })
          .then(result => {
            console.log(result);
            if (result.data == false) {
              this.mima2 = true;
            } else {
              this.$router.push({ path: "/", query: { name: "aa" } });
            }
          })
          .catch(err => {
            console.log("失败");
          });
      }
    }
  },
  created() {
    window.addEventListener("resize", this.getHeight);
    this.getHeight();
  },
  destroyed() {
    window.removeEventListener("resize", this.getHeight);
  }
};
</script>

<style scoped="scoped">
input {
  height: 25px;
  width: 250px;
  border: 1px solid sienna;
  padding-left: 3px;
}

p,
span {
  color: brown;
}
.reg {
  text-decoration: none;
  color: saddlebrown;
}
.login {
  width: 400px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* background-color: rgba(42,121,160,0.3); */
  border-radius: 5px;
}
.login > div:last-child {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
button > a {
  display: inline-block;
  width: 305px;
  line-height: 40px;
  height: 40px;
  font-size: 20px;
  text-decoration: none;
  color: whitesmoke;
  font-weight: bold;
  border-radius: 10px;
  background-color: sienna;
}
button > a:hover {
  background-color: sienna;
  opacity: 0.8;
}
button {
  border: 1px solid sandybrown;
  border-radius: 10px;
}
.outer {
  width: 100%;
  height: 625px;
  display: flex;
  margin-top: 73px;
}
.box {
  width: 50%;
  height: 625px;
  /* background-image: url("../assets/userback.jpg");
		background-size: 100% 100%; */
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
.box-bottom {
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
}
.box-bottom > div {
  width: 50%;
  height: 30px;
  padding-left: 30px;
  padding-bottom: 10px;
  margin-left: 20%;
  font-size: 16px;
}
.landli1 {
  background: url(http://ceshi28.thishttp.com/template/default/img/koubei.png)no-repeat;
}
.landli2 {
  background: url(http://ceshi28.thishttp.com/template/default/img/bai.png)no-repeat;
}
.landli3 {
  background: url(http://ceshi28.thishttp.com/template/default/img/pei.png)no-repeat;
}
.name div,
.pwd div {
  color: red;
}
.rigt {
  width: 50%;
  height: 100%;
  background-image: url(https://i.loli.net/2019/04/11/5caf2f234f4fe.jpg);
  background-size: 100% 100%;
  background-position: center;
}
</style>