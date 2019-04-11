// 引入模块
const dbutils = require('../utils/dbutils.js');

function selectXiangLian(cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select id, img,title,price,inventory from xianglian";
			conn.query(sql, function(err1, results) {
//          	console.log(results)
				cb(results);
				//释放连接池
				conn.release();
			})
		}
	});
}

function delXiangLian(id,cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "delete from xianglian where id=?";
			conn.query(sql,[id],function(err1, results) {
//          	console.log(results)
				cb(results);
				//释放连接池
				conn.release();
			})
		}
	});
}

exports.selectXiangLian = selectXiangLian;
exports.delXiangLian = delXiangLian;