// 引入模块
const dbutils = require('../utils/dbutils.js');

function selectXiangLian(index,cb) {
	console.log(index)
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select * from xianglian limit ?,?";
			conn.query(sql,[(index-1)*7,index*7],function(err1, results) {
                console.log(results)
				cb(results);
				//释放连接池
				conn.release();
			})
		}
	});
}

function getNecklaceNum(cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select * from xianglian";
			conn.query(sql,function(err1, results) {
         	// console.log(results)
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

function delXiangLianall(arrid,cb) {
	dbutils.pool.getConnection(function(err, conn) {

		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			
			// console.log(arrid.join(","))
			let sql = "delete from xianglian where id in ("+arrid.join(",")+")";
			conn.query(sql,function(err1, results) {
				cb(results);
			})
			//释放连接池
			conn.release();
		}
	});
}

function addXiangLian(objs,cb) {
	dbutils.pool.getConnection(function(err, conn) {

		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			
			// console.log(objs.src)
			let sql = "insert into xianglian (img,title,price,inventory) values(?,?,?,?) ";
			conn.query(sql,[objs.src,objs.title,objs.price,objs.number],function(err1, results) {
				cb(results);
			})
			//释放连接池
			conn.release();
		}
	});
}

function fondXiangLian(storename,cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = `select * from xianglian where title like "%${storename}%"` ;
			conn.query(sql,function(err1, results) {
				// console.log(results)
				cb(results);
			})
			//释放连接池
			conn.release();
		}
	});
}

exports.selectXiangLian = selectXiangLian;
exports.delXiangLian = delXiangLian;
exports.delXiangLianall = delXiangLianall;
exports.addXiangLian = addXiangLian;
exports.fondXiangLian = fondXiangLian;
exports.getNecklaceNum = getNecklaceNum;



