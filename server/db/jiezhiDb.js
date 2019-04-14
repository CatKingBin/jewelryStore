// 引入模块
const dbutils = require('../utils/dbutils.js');

function selectJieZhi(index,cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select * from jiezhi limit ?,?";
			conn.query(sql,[(index-1)*7,7],function(err1, results) {
				cb(results);
				//释放连接池
				conn.release();
			})
		}
	});
}

function jiezhiNum(cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select * from jiezhi";
			conn.query(sql,function(err1, results) {
				cb(results);
				//释放连接池
				conn.release();
			})
		}
	});
}

function wxshuju(cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select * from xianglian union all select * from ershi union all select * from shoushi union all select * from jiezhi";
			conn.query(sql,function(err1, results) {
				cb(results);
				//释放连接池
				conn.release();
			})
		}
	});
}

function findall(storename,cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = `select * from xianglian where title like '%${storename}%' union all select * from ershi where title like '%${storename}%' union all select * from shoushi where title like '%${storename}%' union all select * from jiezhi where title like '%${storename}%'`;
			conn.query(sql,function(err1, results) {
				cb(results);
				
				//释放连接池
				conn.release();
			})
		}
	});
}

function delJieZhi(id,cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "delete from jiezhi where id=?";
			conn.query(sql,[id],function(err1, results) {
				cb(results);
				//释放连接池
				conn.release();
			})
		}
	});
}

function delJieZhiall(arrid,cb) {
	dbutils.pool.getConnection(function(err, conn) {

		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "delete from jiezhi where id in ("+arrid.join(",")+")";
			conn.query(sql,function(err1, results) {
				cb(results);
			})
			//释放连接池
			conn.release();
		}
	});
}

function addJieZhi(objs,cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "insert into jiezhi (img,title,price,inventory) values(?,?,?,?) ";
			conn.query(sql,[objs.src,objs.title,objs.price,objs.number],function(err1, results) {
				cb(results);
			})
			//释放连接池
			conn.release();
		}
	});
}

function fondJieZhi(storename,cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = `select * from jiezhi where title like "%${storename}%"` ;
			conn.query(sql,function(err1, results) {
				cb(results);
			})
			//释放连接池
			conn.release();
		}
	});
}

exports.selectJieZhi = selectJieZhi;
exports.delJieZhi = delJieZhi;
exports.delJieZhiall = delJieZhiall;
exports.addJieZhi = addJieZhi;
exports.fondJieZhi = fondJieZhi;
exports.jiezhiNum = jiezhiNum;
exports.wxshuju = wxshuju;
exports.findall = findall;





