<template>
  <div >
    <div class="box"></div>
	<div class="txt">---所有宝贝都尽收眼底啦---</div>
     <div id="shuju">
      <ul class="ul-flex">
        <li v-for="(item) in arr" class="list" @click="jump(item)">
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
      this.$router.push({path: "/jump", query: {path:"store",img:item.img,title:item.title,price:item.price,sold:item.sold,inventory:item.inventory}});
			},
    send() {
      //页面加载完时触发函数
      this.$http //发起ajax请求
        .get("http://localhost:9999/findall", {
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
.txt {
	height: 50px;
	line-height: 50px;
	text-align: center;
	color: orangered;
	font-size: 30px;
	font-weight: bold;
}

.box {
  width: 100%;
  height: 400px;
  background-position: center;
  background-image: url(https://images.mituo.cn/mui107/upload/mui107/201804/1523676392.jpg);
  background-size: cover;
}

#shuju {
  width: 100%;
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
  color: gray;
  font-size: 14px;
}
</style>
