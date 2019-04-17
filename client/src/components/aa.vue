<template>
  <div class="bigbox">
    
		<div v-if="products.length">
			<table border="1" cellspacing="0" cellpadding="30px" width="800px" >
				<tr>
					<th><input type="checkbox" name="" id=""> 全选</th>
					<th>商品</th>
					<th>单价</th>
					<th>数量</th>
					<th>金额</th>
					<th>操作</th>
				</tr>
				<tr v-for="(pro,index) in products" :key="index">
					<td><input type="checkbox" name="" id=""></td>
					<td><img :src="pro.name" alt=""></td>
					<td>{{pro.price}}</td>
					<td>
						<button @click="sub(index)" :disabled="pro.num===1">-</button>
						{{pro.num}}
					    <button @click="add(index)">+</button>
					</td>
					<td>{{pro.price*pro.num}}</td>
					<td>
					    <button @click="del(index)">删除</button>
					</td>
				</tr>
			</table>
			<div>总价：{{all}}</div>
			</div>
			<div v-else>购物车空空如也。。。</div>
  </div>
</template>

<script>
export default {
	name: "Gouwuche",
	data () {
		return {
			products:[
				{id:1,name:"https://img.alicdn.com/bao/uploaded/i2/2458031661/O1CN011O8mKbnBq3YQH4h_!!2458031661.jpg_80x80.jpg",price:8000,num:1},
				{id:2,name:"vivo",price:3000,num:2},
				{id:5,name:"小米",price:5000,num:4},
				{id:8,name:"魅族",price:4000,num:3},
				]
		}
	},
	methods:{
				sub:function(index){
					if(this.products.num===1){
						return ;
					}
					this.products[index].num--;
				},
				add:function(index){
					this.products[index].num++;
				},
				del:function(index){
					this.products.splice(index,1)
				}
				
			},
			computed:{
				all:function(){
					var total=0
					for(var i=0;i<this.products.length;i++){
						var item=this.products[i]
						total+=item.num*item.price
					}
					return total;
				}
			}
}
</script>

<style scoped>
  table{
	    		border-color: red;
	    		border-collapse: collapse;
	    	}
</style>