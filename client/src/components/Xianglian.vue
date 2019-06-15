<template>
  <div class="bigbox">
    <div class="contain">
      <div class="lunbo">
        <el-carousel :interval="4000" type="card" height="270px" indicator-position="none">
          <el-carousel-item v-for="item in 4" :key="item"></el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div id="shuju">
      <ul class="ul-flex">
				<li v-for="item in arr" :key="item.id" class="list" @click="jump(item)">
          <div class="list-img"><img :src="item.img" alt=""></div>
          <div class="list-word">{{item.title}}</div>
          <div class="list-price">
            <p >￥<span class="money">{{item.price}}</span></p>
            <span class="price">已售：{{item.sold}}件</span>
          </div>
        </li>
			</ul> 
    </div>
  </div>
</template>

<script>
export default {
  name: "Xianglian",
  data(){
    return {
        arr:''
    } 
  },
  mounted() {
    // 让send和resetForm函数在页面加载完后就执行
    this.send();
  },
  methods:{
    jump: function(item) {
      console.log(item)
      this.$router.push({path: "/jump", query: {img:item.img,title:item.title,price:item.price,sold:item.sold,inventory:item.inventory}});
			},
    send() {
      //页面加载完时触发函数
      this.$http //发起ajax请求
        .get("http://localhost:9999/necklaceNum", {
         params:{
             
         } 
        })
        .then(result => {
          //请求成功
        // console.log(result.data)
        
        this.arr=result.data
        // console.log(this.arr)
        })
        .catch(function() {
          //请求失败
          alert("失败");
        });
    },

  }
}
</script>

<style scoped="scoped">
.bigbox {
  width: 100%;
}
.contain {
   width: 100%;
   background-color: rgba(46, 42, 42, 0.836);
}
.lunbo {
  width: 80%;
  margin: 0 auto;
}
.el-carousel__item {
  background-position: center;
  background-size: cover;
}
.el-carousel__item:nth-child(4n) {
  background-image: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2874166175,1318701774&fm=15&gp=0.jpg);
}

.el-carousel__item:nth-child(4n + 1) {
  background-image: url(http://img0.imgtn.bdimg.com/it/u=3411804117,3716124559&fm=26&gp=0.jpg);
}
.el-carousel__item:nth-child(4n + 2) {
  background-color: rgb(220, 245, 242);
  background-image: url(http://img4.ido-love.com/art/pc/151334059046823088.png);
}
.el-carousel__item:nth-child(4n + 3) {
  background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555745936&di=7a81afb95b021a9a8faa71bcf104bec4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi4%2F683623708%2FTB2hajwlVXXXXaOXpXXXXXXXXXX_%21%21683623708.jpg);
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