const express = require("express");
const app = express();

//设置处理post请求参数
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

const adminService=require("./service/adminService")
const userService=require("./service/userService")
//管理员注册
app.get("/adminreg.do", function(req, res) {
	res.setHeader("Access-Control-Allow-Origin","*")
	console.log(req.query)
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
	console.log(req.body)
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
//判断账号是否存在
app.get("/adminlogin.do", function(req, res) {
	res.setHeader("Access-Control-Allow-Origin","*")
	console.log(req.query)
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
	console.log(req.body)
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
	console.log(req.query)
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
	console.log(req.body)
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
//	console.log(req.query)
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

//接收管理者请求数据
const xianglianService=require("./service/xianglianService")
app.get("/xianglian", function(req, res) {
	res.setHeader("Access-Control-Allow-Origin","http://localhost:8080")
    xianglianService.xianglian(function(results) {
//  	console.log(results)
		res.send(results)
	})
});
//删除数据
app.get("/xiangliandel", function(req, res) {
	res.setHeader("Access-Control-Allow-Origin","http://localhost:8080")
    console.log(req.query)
    let id=req.query.id
    xianglianService.xiangliandel(id,function(results) {
//  	console.log(results)
		res.send(results)
	})
});

app.listen(9999, function() {
	console.log("服务器正在监听中9999...");
});