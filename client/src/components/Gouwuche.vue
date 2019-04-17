<template>
  <div class="bigbox">
    
		<div v-if="products.length">
			<table width="1200px" >
				<tr>
					<th><input type="checkbox" v-model="isChecked" @change="change"> 全选</th>
					<th>商品</th>
					<th>单价</th>
					<th>数量</th>
					<th>金额</th>
					<th>操作</th>
				</tr>
				<tr v-for="(pro,index) in products" :key="index">
					<td><input type="checkbox" :value="index" v-model="cb"></td>
					<td><img :src="pro.img" alt="">
					    <span>{{pro.title}}</span>
					</td>
					<td>￥：{{pro.price}}元</td>
					<td>
						<button @click="sub(index)" :disabled="pro.num===1">-</button>
						{{pro.num}}
					    <button @click="add(index)">+</button>
					</td>
					<td>￥：{{(pro.price*pro.num).toFixed(2)}}元</td>
					<td>
					    <button @click="del(index)">删除</button>
					</td>
				</tr>
			</table>
			<div class="jiezhang">
       	 <div class="zongjia">总价：{{all}}元</div>
			   <button class="jiesuan">立即结算</button>
			</div>
		
			</div>
			<div v-else class="kong"><h1>购物车空空如也。。。</h1></div>
  </div>
</template>

<script>
export default {
	name: "Gouwuche",
	data () {
		return {
			isChecked:false,
			products:[],
			cb:[]
		}
	},
	mounted() {
    // 让send函数在页面加载完后就执行
    this.send();
  },
	methods:{
		      send() {
      //页面加载完时触发函数
      this.$http //发起ajax请求
        .get("http://localhost:9999/gouwuche", {
         params:{} 
        })
        .then(result => {
          //请求成功
        console.log(result.data)
        
        this.products=result.data
        // console.log(this.arr)
        })
        .catch(function() {
          //请求失败
          alert("失败");
        });
		},
		change:function(){
					if(this.isChecked){
						for(let i=0;i<this.products.length;i++){
							this.cb.push(i)
						}
					}else{
						this.cb=[]
					}
				},
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
					// console.log(this.products[index])
					this.$confirm("确认删除该商品吗?", "提示", {
          //弹框
          type: "warning"
        })
          .then(() => {
            //弹框确定按钮触发
            this.$http //发起ajax请求
              .get("http://localhost:9999/gouwuchedel", {
                params: {
                  obj: this.products[index] //携带的参数
                }
              })
              .then(result => {
                //请求成功
                this.$message({
                  //弹框
                  message: "删除成功",
                  type: "success"
                });
                this.products.splice(index,1)
              })
              .catch(function() {
                //请求失败
                alert("失败");
              });
          })
          .catch(() => {}); //弹框取消按钮触发
					
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
.bigbox{
	display: flex;
	justify-content: center;
}

  img{
		width: 100px;
		height: 100px;
	  vertical-align: middle;
	}
.jiezhang{
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}
.jiezhang>button{
	border: none;
	width: 100px;
	height: 40px;
	background-color: blue;
	color: white;
}
	.kong{
		height: 454px;
	}
</style>