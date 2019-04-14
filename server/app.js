const express = require("express");
const app = express();

//设置处理post请求参数
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

//管理员注册
const userService=require("./service/userService")

app.get("/adminreg.do", function(req, res) {
	res.setHeader("Access-Control-Allow-Origin","*")
	let username=req.query.name
	let passwd=req.query.passwd
adminService.reg1(username, passwd, function(myname) {
		if(myname) {
			// 账号重复
			res.send(true);
		}else{
			res.send(false);
		}
	})
});
app.post("/adminreg.do",function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*")
	let username = req.body.name;
	let passwd = req.body.pwd;
	adminService.reg(username, passwd, function(myname) {
		if(myname) {
			//注册成功
			res.send(true);
		} else {
			//注册失败
			res.send(false);
		}
	})
})

//管理员登录
const adminService=require("./service/adminService")

//判断账号是否存在
app.get("/adminlogin.do", function(req, res) {
	res.setHeader("Access-Control-Allow-Origin","*")
	let username=req.query.name
	let passwd=req.query.passwd
	adminService.login(username, passwd, function(name1) {
		if(name1){
			// 账号存在
			res.send(true);
		}else {
			// 账号不存在
			res.send(false);
		}
	})
});
app.post("/adminlogin.do",function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*")
	let username = req.body.name;
	let passwd = req.body.pwd;
	adminService.login1(username, passwd, function(passwd1) {
		if(passwd1){
//			密码正确
			res.send(true);
		}else{
//			密码错误
			res.send(false);
		}
	})
});

//用户注册
app.get("/userreg.do", function(req, res) {
	res.setHeader("Access-Control-Allow-Origin","*")
	let username=req.query.name
	let passwd=req.query.pwd
userService.reg1(username, passwd, function(myname) {
		if(myname) {
			// 账号重复
			res.send(true);
		}else{
			res.send(false);
		}
	})
});
app.post("/userreg.do",function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*")
	let username = req.body.name;
	let passwd = req.body.pwd;
	userService.reg(username, passwd, function(myname) {
		if(myname) {
			//注册成功
			res.send(true);
		} else {
			//注册失败
			res.send(false);
		}
	})
	
})

//用户登录
//判断账号是否存在
app.get("/userlogin.do", function(req, res) {
	res.setHeader("Access-Control-Allow-Origin","*")
	let username=req.query.name
	let passwd=req.query.passwd
	userService.login(username, passwd, function(name1) {
		if(name1){
			// 账号存在
			res.send(true);
		}else {
			// 账号不存在
			res.send(false);
		}
	})
});
app.post("/userlogin.do",function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*")
//	console.log(req.body)
	let username = req.body.name;
	let passwd = req.body.pwd;
	userService.login1(username, passwd, function(passwd1) {
		if(passwd1){
//			密码正确
			res.send(true);
		}else{
//			密码错误
			res.send(false);
		}
	})
	
});

var url=require("url");
//项链请求
const xianglianController=require("./controller/xianglian")
const ershiController=require("./controller/ershi")
const shoushiController=require("./controller/shoushi")
const jiezhiController=require("./controller/jiezhi")
app.get("/*",function(req,res){
	res.setHeader("Access-Control-Allow-Origin","http://localhost:8080")
	var urlObj=url.parse(req.url);
	var urlPath=urlObj.pathname;
	if(urlPath=="/xianglian"){  //项链列表
		xianglianController.xianglian(req,res)
	}else if(urlPath=="/necklaceNum"){ //获取商品总数量
		xianglianController.getNecklaceNum(req,res)
	}else if(urlPath=="/xiangliandel"){ //删除数据
		xianglianController.xiangliandel(req,res)
	}else if(urlPath=="/xiangliandelall"){ //批量删除
		xianglianController.xiangliandelall(req,res)
	}else if(urlPath=="/xianglianadd"){  //增加商品
		xianglianController.xianglianadd(req,res)
	}else if(urlPath=="/xianglianfond"){  //查询商品
		xianglianController.xianglianfond(req,res)
	}else 
	if(urlPath=="/ershi"){  //耳饰列表
		ershiController.ershi(req,res)
	}else if(urlPath=="/ershiNum"){ //获取商品总数量
		ershiController.ershiNum(req,res)
	}else if(urlPath=="/ershidel"){ //删除数据
		ershiController.ershidel(req,res)
	}else if(urlPath=="/ershidelall"){ //批量删除
		ershiController.ershidelall(req,res)
	}else if(urlPath=="/ershiadd"){  //增加商品
		ershiController.ershiadd(req,res)
	}else if(urlPath=="/ershifond"){  //查询商品
		ershiController.ershifond(req,res)
	}else 
	if(urlPath=="/shoushi"){  //手饰列表
		shoushiController.shoushi(req,res)
	}else if(urlPath=="/shoushiNum"){ //获取商品总数量
		shoushiController.shoushiNum(req,res)
	}else if(urlPath=="/shoushidel"){ //删除数据
		shoushiController.shoushidel(req,res)
	}else if(urlPath=="/shoushidelall"){ //批量删除
		shoushiController.shoushidelall(req,res)
	}else if(urlPath=="/shoushiadd"){  //增加商品
		shoushiController.shoushiadd(req,res)
	}else if(urlPath=="/shoushifond"){  //查询商品
		shoushiController.shoushifond(req,res)
	}else 
	if(urlPath=="/jiezhi"){  //戒指列表
		jiezhiController.jiezhi(req,res)
	}else if(urlPath=="/jiezhiNum"){ //获取商品总数量
		jiezhiController.jiezhiNum(req,res)
	}else if(urlPath=="/jiezhidel"){ //删除数据
		jiezhiController.jiezhidel(req,res)
	}else if(urlPath=="/jiezhidelall"){ //批量删除
		jiezhiController.jiezhidelall(req,res)
	}else if(urlPath=="/jiezhiadd"){  //增加商品
		jiezhiController.jiezhiadd(req,res)
	}else if(urlPath=="/jiezhifond"){  //查询商品
		jiezhiController.jiezhifond(req,res)
	}else if(urlPath=="/wxshuju"){  //查询商品
		jiezhiController.wxshuju(req,res)
	}
})

// const ershiController=require("./controller/ershi")
// app.get("/*",function(req,res){
// 	res.setHeader("Access-Control-Allow-Origin","http://localhost:8080")
// 	var urlObj=url.parse(req.url);
// 	var urlPath=urlObj.pathname;
	// if(urlPath=="/ershi"){  //列表
	// 	xianglianController.xianglian(req,res)
	// }else if(urlPath=="/ershiNum"){ //获取商品总数量
	// 	xianglianController.getNecklaceNum(req,res)
	// }else if(urlPath=="/ershidel"){ //删除数据
	// 	xianglianController.xiangliandel(req,res)
	// }else if(urlPath=="/ershilall"){ //批量删除
	// 	xianglianController.xiangliandelall(req,res)
	// }else if(urlPath=="/ershiadd"){  //增加商品
	// 	xianglianController.xianglianadd(req,res)
	// }else if(urlPath=="/ershifond"){  //查询商品
	// 	xianglianController.xianglianfond(req,res)
	// }
// })
// const xianglianService=require("./service/xianglianService")
// //列表
// app.get("/xianglian", function(req, res) {
// 	res.setHeader("Access-Control-Allow-Origin","http://localhost:8080")
// 	let index=req.query.index;
//     xianglianService.xianglian(index,function(results) {
// 		res.send(results)
// 	})
// });
// //获取商品总数量
// app.get("/necklaceNum", function(req, res) {
// 	res.setHeader("Access-Control-Allow-Origin","http://localhost:8080")
//     xianglianService.getNecklaceNum(function(results) {	
// 		res.send(results)
// 	})
// });
// //删除数据
// app.get("/xiangliandel", function(req, res) {
// 	res.setHeader("Access-Control-Allow-Origin","http://localhost:8080")
//     let id=req.query.id
//     xianglianService.xiangliandel(id,function(results) {
// 		res.send(results)
// 	})
// });
// //批量删除
// app.get("/xiangliandelall", function(req, res) {
// 	res.setHeader("Access-Control-Allow-Origin","http://localhost:8080")
//     let arrid=req.query.arrid
//     xianglianService.xiangliandelall(arrid,function(results) {
// 		res.send(results)
// 	})
// });
// //增加商品
// app.get("/xianglianadd", function(req, res) {
// 	res.setHeader("Access-Control-Allow-Origin","http://localhost:8080")
// 	let obj=req.query.obj
// 	let objs=JSON.parse(obj)
//     xianglianService.xianglianadd(objs,function(results) {
// 		res.send(results)
// 	})
// });
// //查询商品
// app.get("/xianglianfond", function(req, res) {
// 	res.setHeader("Access-Control-Allow-Origin","http://localhost:8080")
// 	let storename=req.query.storename
//     xianglianService.xianglianfond(storename,function(results) {
// 		res.send(results)
// 	})
// });


// // 耳饰请求
// const ershiService=require("./service/ershiService")
// app.get("/ershi", function(req, res) {
// 	res.setHeader("Access-Control-Allow-Origin","http://localhost:8080")
// 	let index=req.query.index;
//     ershiService.ershi(index,function(results) {
		
// 		res.send(results)
// 	})
// });

// app.get("/ershiNum", function(req, res) {
// 	res.setHeader("Access-Control-Allow-Origin","http://localhost:8080")
	
//     ershiService.ershiNum(function(results) {
		
// 		res.send(results)
// 	})
// });

// //删除数据
// app.get("/ershidel", function(req, res) {
// 	res.setHeader("Access-Control-Allow-Origin","http://localhost:8080")
//     // console.log(req.query)
//     let id=req.query.id
//     ershiService.ershidel(id,function(results) {
// //  	console.log(results)
// 		res.send(results)
// 	})
// });
// //批量删除
// app.get("/ershidelall", function(req, res) {
// 	res.setHeader("Access-Control-Allow-Origin","http://localhost:8080")
//     // console.log(req.query.arrid)
//     let arrid=req.query.arrid
//     ershiService.ershidelall(arrid,function(results) {
// //  	console.log(results)
// 		res.send(results)
// 	})
// });

// //增加商品
// app.get("/ershiadd", function(req, res) {
// 	res.setHeader("Access-Control-Allow-Origin","http://localhost:8080")
// 	// console.log(req.query.obj)
// 	let obj=req.query.obj
// 	let objs=JSON.parse(obj)
// 	// console.log(objs)
//     ershiService.ershiadd(objs,function(results) {
// //  	console.log(results)
// 		res.send(results)
// 	})
// });

// //查询商品
// app.get("/ershifond", function(req, res) {
// 	res.setHeader("Access-Control-Allow-Origin","http://localhost:8080")
// 	// console.log(req.query.storename)
// 	let storename=req.query.storename
//     ershiService.ershifond(storename,function(results) {
// //  	console.log(results)
// 		res.send(results)
// 	})
// });

app.listen(9999, function() {
	console.log("服务器正在监听中9999...");
});