<template>
  <div id="app">
    <div class="header">
      <img src="../assets/liuyan.jpg" alt>
    </div>
    <hr>
    <div class="txt">您的宝贵建议,就是我们无限的动力!</div>
    <div class="body">
      <div class="left">
        <el-table :data="tableData" height="350" border style="width: 100%">
          <el-table-column prop="username" label="用户姓名" width="150"></el-table-column>
          <el-table-column prop="usersite" label="用户地址" width="150"></el-table-column>
          <el-table-column prop="content" label="留言内容" width="400"></el-table-column>
          <el-table-column prop="date" label="留言日期" width="150"></el-table-column>
        </el-table>
      </div>
      <div class="right">
        <div>
          <input type="text" @blur="blur1" placeholder="姓名" v-model="msg.username">
          <div v-if="name" class="test">姓名不能为空!</div>
        </div>
        <div>
          <input
            @blur="blur2"
            type="number"
            placeholder="联系电话"
            oninput="if(value.length>11)value=value.slice(0,11)"
            v-model="msg.usertel"
          >
          <div v-if="num" class="test">联系电话不能为空!</div>
        </div>
        <div>
          <input type="text" @blur="blur3" placeholder="联系地址" v-model="msg.usersite">
          <div v-if="dizhi" class="test">联系地址不能为空!</div>
        </div>
        <div>
          <textarea
            @blur="blur4"
            name
            id
            cols="40"
            rows="8"
            placeholder="留言内容"
            v-model="msg.content"
          ></textarea>
          <div v-if="liuyan" class="test">留言内容不能为空!</div>
        </div>
        <div>
          <button @click="submit">提交留言</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Story",
  data() {
    return {
      name: false,
      num: false,
      dizhi: false,
      liuyan: false,
      yanzhengma: false,
      msg: {
        username: "",
        usertel: "",
        usersite: "",
        content: "",
        date: "",
        time:""
      },
      tableData: []
    };
  },
  mounted() {
    // 让send和resetForm函数在页面加载完后就执行
    this.getmsg();
  },

  methods: {
    blur1() {
      if (this.msg.username == null || this.msg.username == "") {
        this.name = true;
      } else {
        this.name = false;
      }
    },
    blur2() {
      if (this.msg.usertel == null || this.msg.usertel == "") {
        this.num = true;
      } else {
        this.num = false;
      }
    },
    blur3() {
      if (this.msg.usersite == null || this.msg.usersite == "") {
        this.dizhi = true;
      } else {
        this.dizhi = false;
      }
    },
    blur4() {
      if (this.msg.content == null || this.msg.content == "") {
        this.liuyan = true;
      } else {
        this.liuyan = false;
      }
    },
    submit() {
      //   console.log(this.msg)
      let myDate = new Date();
      let year = myDate.getFullYear();
      let month = myDate.getMonth() + 1;
      let date = myDate.getDate();
      let hours = myDate.getHours();
      let minutes = myDate.getMinutes();
      let seconds = myDate.getSeconds();
      this.msg.date = year +"-" +month +"-" +date 
      this.msg.time= hours +":" +minutes +":" +seconds
      if (this.msg.username == null || this.msg.username == "") {
        this.name = true;
      } else if (this.msg.usertel == null || this.msg.usertel == "") {
        this.name = false;
        this.num = true;
      } else if (this.msg.usersite == null || this.msg.usersite == "") {
        this.num = false;
        this.dizhi = true;
      } else if (this.msg.content == null || this.msg.content == "") {
        this.dizhi = false;
        this.liuyan = true;
      } else {
        this.liuyan = false;
        this.$http //发起ajax请求
        .get("http://localhost:9999/buy", {
          params: {
            //请求携带的参数
            obj: {
            }
          }
        })
        .then(result => {
          //请求成功
          // console.log(result)
          if (result.data) {
           this.$http
          .get("http://localhost:9999/liuyan", {
            params: {
              msg: this.msg
            }
          })
          .then(result => {
            // console.log(result.data);
            this.$message({
              message: "留言提交成功!",
              type: "success"
            });
            this.msg.username="";
            this.msg.usertel="";
            this.msg.usersite="";
            this.msg.content=""

          })
          .catch(function() {
            alert("失败");
          });
          } else {
            this.$message({
              message: "亲，你还没有登录哦!",
              type: "warning"
            });
          }
        })
        .catch(function() {
          //请求失败
          alert("支付失败");
        });
        
      }
    },
    getmsg() {
      this.$http
        .get("http://localhost:9999/getmsg", {
          params: {}
        })
        .then(result => {
          // console.log(result.data);
          this.tableData = result.data;
        })
        .catch(function() {
          alert("失败");
        });
    }
  }
};
</script>
<style scoped>
.header > img {
  width: 100%;
  height: 400px;
}
.test {
  color: red;
}
.txt {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: orangered;
  margin-top: 10px;
  margin-bottom: 20px;
}
.body {
  display: flex;
  justify-content: space-around;
}
input {
  width: 295px;
  height: 30px;
  padding-left: 3px;
}
textarea {
  padding: 3px;
}
.right {
  height: 350px;
  overflow: auto;
}
.right div:not(:nth-child(1)) {
  margin-top: 20px;
}
.right div:last-child {
  text-align: center;
}
.right div:last-child > button {
  width: 302px;
  height: 30px;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  background-color: black;
  transition: all 0.4s;
}
.right div:last-child > button:hover {
  background-color: orangered;
  transition: all 0.4s;
}
</style>
