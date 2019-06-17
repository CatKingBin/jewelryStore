// 引入模块
const dbutils = require('../utils/dbutils.js');

// 添加(注册)
function insertUser(username, passwd, cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err);
			cb(false);
		} else { //连接成功,conn是连接对象

			let sql = "insert into user (name,passwd) values(?,?)";
			conn.query(sql, [username, passwd], function(err1, results) {
                // console.log(results)
				cb(results);
				//释放连接池
				conn.release();
			})

		}
	});
}

function insertUser1(username, passwd, cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select name,passwd from user where name=?";
			conn.query(sql, [username, passwd], function(err1, results) {

				cb(results);
				conn.release();
			})

		}
	});
}

// 查询（登录）

function selectNameByUsername(username, passwd, cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select name,passwd from user where name=?";
			conn.query(sql, [username, passwd], function(err1, results) {
				cb(results);
				conn.release();
			})

		}
	});
}

function selectNameByUsernameAndPasswd(username, passwd, cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select name,passwd from user where name=?";
			conn.query(sql, [username], function(err1, results) {
//            console.log(results[0].passwd)
				cb(results);
				conn.release();
			})

		}
	});
}
// selectNameByUsernameAndPasswd("xm",'123',function(){})//模拟数据
function liuyan(msg, cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select usertel,content,num from msguser where usertel=?";
			conn.query(sql, [msg.usertel], function(err1, results) {
				//    console.log(msg)
				 
						if(results.length==0){
							let num=1
							let sql = "insert into msguser (num,username,usertel,usersite,content,date) values(?,?,?,?,?,?)";
							conn.query(sql, [num,msg.username,msg.usertel,msg.usersite, num+":"+msg.content+"("+msg.time+")------",msg.date], function(err1, results) {
						//    console.log(results)
								cb(true);
							})
						}else {
							let num=parseInt(results[0].num)+1
							let nr= results[0].content+ num+":"+msg.content+"("+msg.time+")------"
							let sql = "update msguser set num=?,content=?,date=? where usertel=?";
							// let sql = "insert into msguser (content,date) values(?,?)";
							conn.query(sql, [num, nr,msg.date,msg.usertel], function(err1, results) {
						//    console.log(results)
								cb(true);
							})
						}
						conn.release();//释放连接池
					})
		}
	});
}

function getmsg(cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select * from msguser";
			conn.query(sql, function(err1, results) {
        //    console.log(results)
				cb(results);
				conn.release();
			})

		}
	});
}
exports.insertUser = insertUser;
exports.insertUser1 = insertUser1;
exports.selectNameByUsername = selectNameByUsername;
exports.selectNameByUsernameAndPasswd = selectNameByUsernameAndPasswd;
exports.liuyan = liuyan;
exports.getmsg = getmsg;

