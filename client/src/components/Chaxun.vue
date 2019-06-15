<template>
  <div class="bigbox">
    <div id="shuju">
      <h1 v-if="this.$route.query.arr.length===0">很遗憾！没有查询到您要的商品。。。</h1>
      <ul class="ul-flex">
				<li v-for="(item,index) in this.$route.query.arr" :key="index" class="list" @click="jump(item)">
          <div class="list-img"><img :src="item.img" alt=""></div>
          <div class="list-word">{{item.title}}</div>
          <div class="list-price">
            <p >￥<span class="money">{{item.price}}</span></p>
            <span class="price">已售:{{item.sold}}件</span>
          </div>
        </li>
			</ul> 
    </div>
  </div>
</template>

<script>
export default {
  name: "Chaxun",
  
  methods:{
    jump: function(item) {
      console.log(item)
      this.$router.push({path: "/jump", query: {img:item.img,title:item.title,price:item.price,sold:item.sold}});
			}
  }
}
</script>

<style scoped="scoped">
h1{
  height: 410px;
}
.bigbox {
  width: 100%;
}

#shuju {
  width: 100%;
  /* height: 2040px; */
  background-color: rgba(248, 248, 248, 0.973);
}
.ul-flex {
  width: 92%;
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