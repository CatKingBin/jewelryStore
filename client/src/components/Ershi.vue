<template>
  <div class="container">
    <div class="top">
      <div class="topimg1"></div>
      <div class="topimg2"></div>
      <div class="topimg3"></div>
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
.top {
  width: 100%;
  height: 300px;
  background-position: center;
  position: relative;
  /* margin-top: 72px; */
  margin-bottom: 180px;
  opacity: 0.7;
  background-size: contain;
  background-image: url(http://img4.imgtn.bdimg.com/it/u=2496227324,3461031432&fm=26&gp=0.jpg);
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
  background-image: url(http://img0.imgtn.bdimg.com/it/u=541665049,679696133&fm=26&gp=0.jpg);
}
.topimg2 {
  width: 250px;
  height: 250px;
  position: absolute;
  background-position: center;
  background-size: cover;
  top: 20%;
  left: 38%;
  background-image: url(http://img0.imgtn.bdimg.com/it/u=2736817597,1922491119&fm=26&gp=0.jpg);
}
.topimg3 {
  width: 200px;
  height: 200px;
  position: absolute;
  background-position: center;
  background-size: cover;
  top: 65%;
  left: 55%;
  background-image: url(http://img5.imgtn.bdimg.com/it/u=3386306103,3030630408&fm=26&gp=0.jpg);
}
#shuju {
  width: 100%;
  height: 2240px;
  background-color: rgba(248, 248, 248, 0.973);
}
.ul-flex {
  width: 90%;
  height: 350px;
  margin: 0px auto;
  padding: 20px 0px;
  display: flex;
  flex-wrap: wrap;

}
.list {
  width: 23%;
  height: 100%;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
}
.list-img {
   width: 100%;
   height: 72%;
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
  font-size: 14px;
}
.list-price>p {
  color: gray;
}
.money {
  color: orangered;
}
.price {
  padding-left: 35%;
  color: gray;
  font-size: 14px;
}
</style>
