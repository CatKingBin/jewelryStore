<template>
     <div class="outer">
        <div v-if="products.length">
					<div class="goods" v-for="(item, index) in products" v-bind:key="item">
					<div class="goods-img"><img src="https://img.alicdn.com/bao/uploaded/i2/367859690/O1CN01GNbNnG2LS4OERI6SX_!!367859690.jpg_240x240.jpg" alt=""></div>
					<ul>
						<li class="one" style="display:block"> 商品名称：{{ item.name }} </li>
						<li style="display:block">价格： {{ item.price }} </li>
						<li style="display:block">   购买数量：
							<!--disabled的作用是当数量为1时，此按钮不能点击-->
							<button @click="sub(index)" :disabled="item.num === 1">-</button>
							{{ item.num }} 
							<button @click="add(index)">+</button>
						</li>
						<li style="display:block">小计： {{ item.price * item.num }} </li>
						<li style="display:block">
							<button @click="del(index)">删除</button>
						</li>
					</ul>
					</div>
				
			 <p class="all"> 	总价： {{ totalPrice }} </p>
			</div>
			
			<div v-else style="font-size:30px; color:red;">购物车空空如也~</div>
     </div>
</template>

<script>
export default {
     name: 'Addcar',
      data(){
    return {
        products: [
					{id: 1, name: "iPhoneX", price: 8000, num: 1},
						{id: 1, name: "iPhoneX", price: 8000, num: 1}
				]
    } 
  },
  methods: {
//				根据商品在数组中的下标来进行增加/减少/删除操作
				sub: function(index) {
//					如果商品的数量已经是1时,那么在触发此函数那么不会再减少
					if(this.products[index].num === 1) {
						return; //结束函数执行
					}
					this.products[index].num--;
					
				},
				add: function(index) {
					this.products[index].num++;
				},
				del: function(index) {
					this.products.splice(index, 1); //从数组中移除元素
				}
			},
			computed: { //计算属性：依赖缓存，依赖的变量值发生变化时，会重新计算
				totalPrice: function() {
					var total = 0;
					
//					遍历商品数组,取出每一个商品的数量以及价格进行计算,最后累加就是总价
					for(var i = 0; i < this.products.length; i++) {
						var item = this.products[i];
						total += (item.num * item.price);
					}
					
					return total;
				}
			}
}
</script>

<style scoped='scoped'>
.outer {
    width: 100%;
		/* height: 453px; */
}
.goods {
	display: flex;
	width: 100%;
	margin-bottom: 30px;
}
.goods-img {
    width: 250px;
    height: 280px;		
}
.goods-img>img {
   width: 100%;
	 height: 100%;
}
ul {
	/* display: flex; */
	flex-wrap: wrap;
}
ul>li {
	padding-left: 20px;
	list-style: none;
	width: 100%;
	height: 50px;
  font-size: 18px;
	color: black;
}
.img {
	display: inline-block;
}
.one {
	display: inline-block;
}
.all {
	float:right;
	color: orange;
	font-size: 30px;
	padding-right: 30px;
}
</style>
