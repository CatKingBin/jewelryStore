<template>
  <div class="bigbox">
    <div class="box">
      <div class="box-img"><router-link :to="this.$route.query.path"><img :src="this.$route.query.img" alt></router-link> </div>
      <div class="content">
          <p>{{this.$route.query.title}}</p>
          <div class="content-price">
              <p>价格&nbsp;&nbsp;&nbsp;<b class="b">￥<span>{{this.$route.query.price}}</span></b></p>
              <p class="yishou">已售：{{this.$route.query.sold}}件</p>
          </div>
          <div class="num">
              数量：<el-input-number size="small" v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>件（库存{{this.$route.query.inventory}}）
          </div>
          <div class="shop">
              <button class="buy" @click="buy">立即购买</button>
              <button class="add" @click="add">加入购物车 </button>

          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jump",
   data() {
      return {
        num1: 1
      };
    },
    methods: {
      buy(){
         this.$message({
            message: "亲，你还没有登录哦!",
            type: "warning"
          });
      },
      handleChange(value) {
        this.num1=value;
        // console.log(this.num1)
      },
      add(){
        // console.log(this.num1)
         this.$http //发起ajax请求
        .get("http://localhost:9999/gouwucheadd", {
          params: { //请求携带的参数
           obj:{
            img:this.$route.query.img,
            title:this.$route.query.title,
            price:this.$route.query.price,
            num:this.num1
           }
          }
        })
        .then(result => {
          //请求成功
          this.$message({
            message: "成功加入购物车",
            type: "success"
          });
        })
        .catch(function() {
          //请求失败
          alert("添加失败");
        });
     
      }
      
  }
   

};
</script>

<style scoped="scoped">

.bigbox {
  width: 100%;
}
.box {
    width: 80%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    border: 1px solid grey;
    justify-content: space-around;
}
.box-img {
    margin-top: 50px;
    width: 300px;
    height: 450px;
}
.box-img  img {
  width: 100%;
  height: 300px;
}
.content {
    width: 65%;
    height: 300px;
    margin-top: 50px;
    padding-top: 10px;
}
.content>p {
    font-size: 18px;
}
.content-price {
    margin: 30px 0px;
    width: 80%;
    height: 100px;
    font-size: 16px;
    padding-top: 5px;
    opacity: 0.7;
    background-color: pink;
}
.content-price .b {
     color: orangered;
     font-size: 25px;
     font-weight: 500;
}
.yishou {
    padding-top: 20px;
}
.num {
    width: 100%;
    height: 50px;
    margin-top: 30px;
}
.shop {
    width: 100%;
    height: 45px;
    font-size: 18px;
    line-height: 45px;
    letter-spacing: 2px;
    text-align: center;
    display: flex;
}
.buy {
    width: 150px;
    height: 100%;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: bold;
    color:orangered;
    cursor: pointer;
    background-color: rgb(247, 207, 207);
    transition: all 0.4s
}
.buy:hover {
  color: white;
  background-color: orangered;
  transition: all 0.4s
}
.add {
  width: 150px;
  height: 100%;
  border-radius: 5px;
  border: none;
  outline: none;
  margin-left: 20px;
   font-size: 18px;
    font-weight: bold;
  color: white;
  cursor: pointer;
  background-color: orangered;
  transition: all 0.4s
}
.add:hover {
  color: orangered;
  background-color: rgb(247, 207, 207);
  transition: all 0.4s
}
</style>
