<template>
	<div class="box" :style="box">
	<div class="login">
		<div><h1>后台注册系统</h1></div>
		<div>
			 <div class="name">
        	账号：<input type="text" v-model="users.name" @blur="blur" placeholder="请输入账号..."/>
                <div v-if="kong">账号不能为空！</div>
                <div v-if="exsit">账号已存在！</div>
              </div>
              <div class="pwd">
    	          密码：<input type="password" v-model="users.pwd" placeholder="请输入密码..."/>
                <div v-if="mima1">密码不能为空！</div>
                <div v-if="mima2">密码错误！</div>
              </div>
              <div class="pwd">
    	          确认：<input type="password" v-model="users.pwd1" placeholder="请确认密码..."/>
                <div v-if="mima3">两次密码不同！</div>
              </div>
              <div><button @click="reg"><a href="javascript:void(0)">注册</a></button></div>
		</div>
       
	</div>
	
	</div>
	 
</template>

<script>
	export default {
		name:"Login",
		data(){
  	return{
  		box:{
  			height:''
  		},
  		exsit:false,
  		kong:false,
  		mima1:false,
  		mima2:false,
  		mima3:false,
  		users:{
  			name:'',
  			pwd:''
  		}
  	}
  },
  methods:{
  	 getHeight(){
      this.box.height=window.innerHeight+'px';
    },
  	blur(){
//		get方式
        if(this.users.name==''||this.users.name==null){
         	this.kong=true
         }else{
         	this.kong=false
         	this.$http.get('http://localhost:9999/adminreg.do',{
            params: {
					  name: this.users.name,
					  pwd: this.users.pwd
						}
      }).then((result)=>{
      	
        	console.log(result.data)
        	if(result.data){
        		this.exsit=true
        	}else{
        		this.exsit=false
        	}
        }).catch(function() {
							alert("失败");
						})
         }
		
  	},
  	reg(){
//		post方式
         if(this.users.name==''||this.users.name==null){
         	this.kong=true
         }else if(this.users.pwd==''||this.users.pwd==null){
         	this.kong=false
         	this.mima1=true
         }else if(this.users.pwd!=this.users.pwd1){
         	this.mima1=false,
         	this.mima3=true
         }else{
         	this.mima3=false
         	this.$http.post('http://localhost:9999/adminreg.do',
            this.users, {
						transformRequest: [
							function(data) {
								let params = '';
								for(let index in data) {
									params += index + "=" + data[index] + "&";
								}
								return params;
							}
						]
					}).then((result)=>{
        	console.log(result)
        	
        		this.$router.push('/')
        	
        	 
        }).catch((err)=>{
        	console.log("失败")
        })
         }
		
  	}
  },
   created(){
    window.addEventListener('resize', this.getHeight);
    this.getHeight()
  },
  destroyed(){
    window.removeEventListener('resize', this.getHeight)
  }
	}
	
</script>

<style scoped="scoped">
	input{
		height: 25px;
		border: 1px solid #007DDB;
		padding-left: 3px;
	}
	.login{
		width: 400px;
		height: 250px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		background-color: #ACE6F9;
		border: 20px solid rgba(0,134,193,0.4);
		border-radius: 5px;
	}
	.login>div:last-child{
		height: 130px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		
	}
	button>a{
		display: inline-block;
		width: 100px;
		line-height: 40px;
		height: 40px;
		font-size: 20px;
		text-decoration: none;
		color: whitesmoke;
		font-weight: bold;
		background-color: #2CBFF0;
		border-radius: 5px;
		border: none;
	}
	button>a:hover{
		background-color:#24B2E0
	}
	button{
		border: none;
	}
	.box{
		width: 100%;
		height: 100%;
		background-image: url("../assets/back.jpg");
		background-size: 100% 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.name div,.pwd div{
		color: red;
	}
</style>