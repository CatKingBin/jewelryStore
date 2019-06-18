// 引入模块
const dbutils = require('../utils/dbutils.js');

// 添加(注册)
function insertUser(username, passwd, cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err);
			cb(false);
		} else { //连接成功,conn是连接对象

			let sql = "insert into manager (name,passwd) values(?,?)";
			conn.query(sql, [username, passwd], function(err1, results) {

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
			let sql = "select name,passwd from manager where name=?";
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
			let sql = "select name,passwd from manager where name=?";
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
			let sql = "select name,passwd from manager where name=?";
			conn.query(sql, [username], function(err1, results) {
//            console.log(results[0].passwd)
				cb(results);
				conn.release();
			})

		}
	});
}
// selectNameByUsernameAndPasswd("xm",'123',function(){})//模拟数据

function huifu(msg, cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			// console.log(msg)
			let sql = "select content from msguser where usertel=?";
			conn.query(sql, [msg.usertel], function(err1, results) {
				//    console.log(results)
							let nr= results[0].content+msg.content
							let sql = "update msguser set content=? where usertel=?";
							conn.query(sql, [nr,msg.usertel], function(err1, results) {
						//    console.log(results)
								cb(true);
							})
						
						conn.release();//释放连接池
					})
		}
	});
}
exports.insertUser = insertUser;
exports.insertUser1 = insertUser1;
exports.selectNameByUsername = selectNameByUsername;
exports.selectNameByUsernameAndPasswd = selectNameByUsernameAndPasswd;
exports.huifu = huifu;
