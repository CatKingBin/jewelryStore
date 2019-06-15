<template>
  <div class="container">
    <div class="top">
      <div class="topimg1"></div>
      <div class="topimg2"></div>
      <div class="topimg3"></div>
    </div>
    <div class="box"></div>
    <div id="shuju">
      <ul class="ul-flex">
        <li v-for="(item) in arr" :key="item.id" class="list" @click="jump(item)">
          <div class="list-img">
            <img :src="item.img" alt>
          </div>
          <div class="list-word">{{item.title}}</div>
          <div class="list-price">
            <p>￥<span class="money">{{item.price}}</span></p>
            <span class="price">已售：{{item.sold}}件</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ershi",
   data(){
    return {
        arr:[]
    } 
  },
  mounted() {
    // 让send和resetForm函数在页面加载完后就执行
    this.send();
  },
  methods:{
     jump: function(item) {
      // console.log(item)
      this.$router.push({path: "/jump", query: {img:item.img,title:item.title,price:item.price,sold:item.sold,inventory:item.inventory}});
			},
    send() {
      //页面加载完时触发函数
      this.$http //发起ajax请求
        .get("http://localhost:9999/ershiNum", {
         params:{
             
         } 
        })
        .then(result => {
          //请求成功
        // console.log(result.data)
        
        this.arr=result.data
        })
        .catch(function() {
          //请求失败
          alert("失败");
        });
    },

  }
};
</script>

<style scoped="scoped">
.container {
  width: 100%;
}
.box {
  height: 100px;
  background-color: rgba(248, 248, 248, 0.973);;
}
.top {
  width: 100%;
  height: 350px;
  background-position: center;
  position: relative;
  opacity: 0.7;
  background-size: contain;
  background-image: url(http://img2.imgtn.bdimg.com/it/u=611454647,1323463851&fm=15&gp=0.jpg);
  background-size: contain;
}
.topimg1 {
  width: 200px;
  height: 200px;
  position: absolute;
  background-position: center;
  background-size: cover;
  top: 65%;
  left: 25%;
  z-index: 99;
  background-image: url(http://img0.imgtn.bdimg.com/it/u=2734117651,293715203&fm=26&gp=0.jpg);
}
.topimg2 {
  width: 250px;
  height: 250px;
  position: absolute;
  background-position: center;
  background-size: cover;
  top: 20%;
  left: 38%;
  background-image: url(http://img4.imgtn.bdimg.com/it/u=646554755,2786917241&fm=26&gp=0.jpg);
}
.topimg3 {
  width: 200px;
  height: 200px;
  position: absolute;
  background-position: center;
  background-size: cover;
  top: 65%;
  left: 55%;
  background-image: url(http://img2.imgtn.bdimg.com/it/u=1492424836,1588587910&fm=26&gp=0.jpg);
}
#shuju {
  width: 100%;
  /* height: 2040px; */
  background-color: rgba(248, 248, 248, 0.973);
}
.ul-flex {
  width: 94%;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;

}
.list {
  width: 23%;
  height: 350px;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
}
.list-img {
   width: 100%;
   height: 72%;
   cursor:pointer;
}
.list-img>img {
  width: 100%;
  height: 100%;
}
.list-word {
  width: 100%;
  height: 13%;
  color: blue;
  font-size: 14px;
}
.list-price {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}
.list-price>p {
  color: gray;
}
.money {
  color: orangered;
}
.price {
  /* padding-left: 35%; */
  color: gray;
  font-size: 14px;
}
</style>
