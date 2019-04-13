<template>
  <div class="outer">
    <div class="box" :style="box">
      <div class="login">
        <div>
          <span>欢迎注册</span>
					<router-link to="/login" class="jump"><span class="login1">已有账号可<u>直接登录</u></span></router-link>
        </div>
        <div>
          <div class="name">
            <span>账号：</span>
            <input type="text" v-model="users.name" @blur="blur" placeholder="请输入账号...">
            <div v-if="kong">账号不能为空！</div>
            <div v-if="exsit">账号已存在！</div>
          </div>
          <div class="pwd">
            <span>密码：</span>
            <input type="password" v-model="users.pwd" placeholder="请输入密码...">
            <div v-if="mima1">密码不能为空！</div>
            <div v-if="mima2">密码错误！</div>
          </div>
          <div class="pwd">
            <span>确认：</span>
            <input type="password" v-model="users.pwd1" placeholder="请确认密码...">
            <div v-if="mima3">两次密码不同！</div>
          </div>
          <div class="we">
            <input type="checkbox">我已阅读<span>《今生今饰注册协议》</span>
          </div>
          <div>
            <button @click="reg">
              <a href="javascript:void(0)">注册</a>
            </button>
          </div>
        </div>
      </div>
      <div class="box-bottom">
        <div class="landli1">10年品牌，真实口碑</div>
        <div class="landli2">饰品实拍秀展示</div>
        <div class="landli3">200%退赔承诺</div>
      </div>
    </div>
    <div class="box1"></div>
  </div>
</template>

<script>
export default {
  name: "Reg",
  data() {
    return {
      box: {
        height: ""
      },
      exsit: false,
      kong: false,
      mima1: false,
      mima2: false,
      mima3: false,
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
          .get("http://localhost:9999/userreg.do", {
            params: {
              name: this.users.name,
              pwd: this.users.pwd
            }
          })
          .then(result => {
            console.log(result.data);
            if (result.data) {
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
    reg() {
      //		post方式
      if (this.users.name == "" || this.users.name == null) {
        this.kong = true;
      } else if (this.users.pwd == "" || this.users.pwd == null) {
        this.kong = false;
        this.mima1 = true;
      } else if (this.users.pwd != this.users.pwd1) {
        (this.mima1 = false), (this.mima3 = true);
      } else {
        this.mima3 = false;
        this.$http
          .post("http://localhost:9999/userreg.do", this.users, {
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

            this.$router.push("login");
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
.outer {
  width: 100%;
  /* height: 100%; */
  display: flex;
  margin-top: 72px;
}
.box1 {
  width: 50%;
  height: 625px;
  background-size: 100% 100%;
  background-image: url(https://i.loli.net/2019/04/11/5caf2f234f4fe.jpg);
}

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
.login {
  width: 400px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* background-color: rgba(42, 121, 160, 0.3); */
  border-radius: 5px;
}
.login > div:last-child {
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.jump {
	text-decoration: none;
}
.login1 {
  margin-left: 90px;
}
.login1 > u {
  color: red;
  font-size: 18px;
}
.we {
  width: 100%;
  height: 30px;
  /* background-color: pink; */
}
.we > input {
  width: 16px;
  height: 16px;
  cursor: pointer;
	margin-right: 5px;
  vertical-align: middle;
}
.we > span {
	color: red;
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
  background-color: sienna;
  border-radius: 10px;
}
button > a:hover {
  background-color: sienna;
  opacity: 0.8;
}
button {
  border: 1px solid sandybrown;
  border-radius: 10px;
}
.box {
  width: 50%;
  height: 100%;
  /* background-color: #E7E7EA; */
  /* background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1607342354,1528645333&fm=15&gp=0.jpg);
  background-size: 100% 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  background: url(http://ceshi28.thishttp.com/template/default/img/koubei.png)
    no-repeat;
}
.landli2 {
  background: url(http://ceshi28.thishttp.com/template/default/img/bai.png)
    no-repeat;
}
.landli3 {
  background: url(http://ceshi28.thishttp.com/template/default/img/pei.png)
    no-repeat;
}
.name div,
.pwd div {
  color: red;
}
</style>