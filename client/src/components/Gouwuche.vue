<template>
  <div class="bigbox">
    
		<div v-if="products.length">
			<table width="1200px" >
				<tr>
					<th><input id="quanxuan" type="checkbox" v-model="isChecked" @change="change">
					   <label for="quanxuan">全选</label> </th>
					<th>商品</th>
					<th>单价</th>
					<th>数量</th>
					<th>金额</th>
					<th>操作</th>
				</tr>
				<tr v-for="(pro,index) in products" :key="index">
					<td><input class="xuanze" type="checkbox" :value="index" v-model="cb"></td>
					<td><img class="img" :src="pro.img" alt="">
					    <span>{{pro.title}}</span>
					</td>
					<td class="qian"><span>￥：</span>{{pro.price}}元</td>
					<td>
						<button class="jj" @click="sub(index)" :disabled="pro.num===1">-</button>
						{{pro.num}}
					    <button class="jj" @click="add(index)">+</button>
					</td>
					<td class="qian"><span>￥：</span> {{(pro.price*pro.num).toFixed(2)}}元</td>
					<td>
					    <button class="dle" @click="del(index)" :disabled="cb.length>10">删除</button>
					</td>
				</tr>
			</table>
			<div class="jiezhang">
				<div class="left">
					<button @click="del()" :disabled="cb.length<2">批量删除</button>
				</div>
				<div class="right">
                    <div>总价：{{ all}}元</div>
			        <button @click="jiesuan">立即结算</button>
				</div>
       	       
			</div>
		
			</div>
			<div v-else class="kong"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3896639434,2608684613&fm=26&gp=0.jpg" alt=""></div>
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
        // console.log(result.data)
        
        this.products=result.data
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
			let arr =[]
			// console.log(this.cb)
		  for(var i=0;i<this.cb.length;i++){
             arr.push(this.products[this.cb[i]].id)
		  }
		  
			if(this.cb.length){
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
				//   obj: this.products[index] //携带的参数
				obj:arr
                }
              })
              .then(result => {
                //请求成功
                this.$message({
                  //弹框
                  message: "删除成功",
                  type: "success"
                });
				this.products.splice(index,this.cb.length);
				this.cb=[]
              })
              .catch(function() {
                //请求失败
                alert("失败");
              });
          })
          .catch(() => {}); //弹框取消按钮触发
		}
				},
		jiesuan(){
			this.$http //发起ajax请求
        .get("http://localhost:9999/buy", {
          params: {
            //请求携带的参数
            obj: {
            }
          }
        })
        .then(result => {
          //请求成功
          // console.log(result)
          if (result.data) {
            this.$message({
              message: "亲，支付页面正在创建中呢!",
              type: "success"
            });
          } else {
            this.$message({
              message: "亲，你还没有登录哦!",
              type: "warning"
            });
          }
        })
        .catch(function() {
          //请求失败
          alert("支付失败");
        });
		}
			},
			computed:{
				all:function(){
					var total=0
					for(var i=0;i<this.products.length;i++){
						var item=this.products[i]
						total+=item.num*item.price
					}
					return total.toFixed(2);
				}
			}
}
</script>

<style scoped>
#quanxuan {
	width: 20px;
	height: 20px;
	margin-left: -7px;
	vertical-align: middle;
}
.xuanze {
	width: 20px;
	height: 20px;
}
.jj {
	width: 25px;
	height: 18px;
}
.dle {
	width: 50px;
	height: 30px;
	color: white;
	outline: none;
	border: none;
	cursor: pointer;
	border-radius: 5px;
	background-color: orangered;
}
.dle:hover {
	background-color: red;
}
.qian {
	color: red;
}
.qian>span {
	font-weight: bold;
}
.bigbox{
	display: flex;
	justify-content: center;
}

  .img{
		width: 100px;
		height: 100px;
	  vertical-align: middle;
	}
.jiezhang{
	height: 80px;
	display: flex;
	justify-content:space-between;
    align-items: center;
}
.left>button{
	border: none;
	width: 100px;
	height: 40px;
	outline: none;
	border-radius: 5px;
	background-color: orangered;
	color: white;
	cursor: pointer;
}
.left>button:hover {
	background-color: red;
}
.right>button{
	border: none;
	width: 100px;
	height: 40px;
	outline: none;
	border-radius: 5px;
	background-color: rgb(56, 212, 77);
	color: white;
	cursor: pointer;
}
.right>button:hover {
	background-color: rgb(30, 158, 47);
}
.right>div {
	color: orangered;
	font-weight: bold;
}
	
</style>