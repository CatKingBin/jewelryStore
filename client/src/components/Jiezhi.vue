<template>
  <div class="contain">
    <div class="box"></div>
    <div class="buzou">
       <el-steps :active="1" align-center>
           <el-step title="" icon="el-icon-star-off"></el-step>
           <el-step title="" icon="el-icon-goods"></el-step>
           <el-step title="" icon="el-icon-star-off" ></el-step>
       </el-steps>
       <h3>优选款式/实物拍摄1</h3>
    </div>
    <div class="center">
      <div class="center-left">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in 4" :key="item.id"></el-carousel-item>
        </el-carousel>
      </div>
      <div class="title-flex">
        <div class="title-flex1"></div>
        <div class="title-flex2"></div>
        <div class="title-flex3"></div>
      </div>
    </div>
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
  name: "Jiezhi",
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
        .get("http://localhost:9999/jiezhiNum", {
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

<style scoped>
.contain {
  /* margin-top: 72px; */
  width: 100%;
}
.box {
  width: 100%;
  height: 400px;
  background-position: center;
  background-image: url('../assets/jiezhi.jpg');
}
.buzou {
    margin: 50px 0px;
}
.buzou>h3 {
  color: orangered;
  font-size: 20px;
  text-align: center;
  margin-top: 30px;
}
.center {
  width: 90%;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.center-left {
  width: 40%;
  height: 100%;
}
.el-carousel__item:nth-child(4n) {
    background-image: url( http://img5.imgtn.bdimg.com/it/u=3475922315,3842169334&fm=26&gp=0.jpg);
    background-size: cover;
}

.el-carousel__item:nth-child(4n + 1) {
    background-image: url( http://img4.imgtn.bdimg.com/it/u=1891876180,4218965884&fm=26&gp=0.jpg);
    background-size: cover;
}
.el-carousel__item:nth-child(4n + 2) {
   background-image: url(http://img2.imgtn.bdimg.com/it/u=2912915834,2600631262&fm=26&gp=0.jpg);
    background-size: cover;
   
}
.el-carousel__item:nth-child(4n + 3) {
  background-image: url( http://img0.imgtn.bdimg.com/it/u=3032510515,599388983&fm=26&gp=0.jpg);
  background-size: cover;
  
 }

.title-flex {
  width: 57%;
  height: 450px;
  display: flex;
  position: relative;
}
.title-flex1 {
  width: 250px;
  height: 250px;
  border-radius: 120px;
  position: absolute;
  top: 10%;
  background-position: center;
  background-size: cover;
  background-image: url(https://img.alicdn.com/bao/uploaded/i2/367859690/O1CN01m6OO5p2LS4ODkYOI9_!!367859690.jpg_240x240.jpg);
}
.title-flex2 {
  width: 250px;
  height: 250px;
  position: absolute;
  top: 10%;
  left: 60%;
  background-position: center;
  background-size: cover;
  border-radius: 120px;
  background-image: url(https://img.alicdn.com/bao/uploaded/i1/367859690/O1CN01FIKsbI2LS4NzILGXU_!!367859690.jpg_240x240.jpg);
}
.title-flex3 {
  width: 250px;
  height: 250px;
  position: absolute;
  top: 50%;
  left: 30%;
  background-position: center;
  background-size: cover;
  border-radius: 120px;
  background-image: url(https://img.alicdn.com/bao/uploaded/i4/367859690/O1CN012LS4LSMBcs7SIP1_!!367859690.jpg_240x240.jpg);
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
