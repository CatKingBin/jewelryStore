// 引入模块
const dbutils = require('../utils/dbutils.js');

function selectShouShi(index,cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select * from shoushi limit ?,?";
			conn.query(sql,[(index-1)*7,7],function(err1, results) {
				cb(results);
				//释放连接池
				conn.release();
			})
		}
	});
}

function shoushiNum(cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select * from shoushi";
			conn.query(sql,function(err1, results) {
				cb(results);
				//释放连接池
				conn.release();
			})
		}
	});
}


function delShouShi(id,cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "delete from shoushi where id=?";
			conn.query(sql,[id],function(err1, results) {
				cb(results);
				//释放连接池
				conn.release();
			})
		}
	});
}

function delShouShiall(arrid,cb) {
	dbutils.pool.getConnection(function(err, conn) {

		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "delete from shoushi where id in ("+arrid.join(",")+")";
			conn.query(sql,function(err1, results) {
				cb(results);
			})
			//释放连接池
			conn.release();
		}
	});
}

function addShouShi(objs,cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "insert into shoushi (img,title,price,inventory) values(?,?,?,?) ";
			conn.query(sql,[objs.src,objs.title,objs.price,objs.number],function(err1, results) {
				cb(results);
			})
			//释放连接池
			conn.release();
		}
	});
}

function fondShouShi(storename,cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = `select * from shoushi where title like "%${storename}%"` ;
			conn.query(sql,function(err1, results) {
				cb(results);
			})
			//释放连接池
			conn.release();
		}
	});
}

exports.selectShouShi = selectShouShi;
exports.delShouShi = delShouShi;
exports.delShouShiall = delShouShiall;
exports.addShouShi = addShouShi;
exports.fondShouShi = fondShouShi;
exports.shoushiNum = shoushiNum;



