// 引入模块
const dbutils = require('../utils/dbutils.js');

function selectErShi(index,cb) {
	// console.log(index)
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select * from ershi limit ?,?";
			conn.query(sql,[(index-1)*7,7],function(err1, results) {
                // console.log(results)
				cb(results);
				//释放连接池
				conn.release();
			})
		}
	});
}

function ershiNum(cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select * from ershi";
			conn.query(sql,function(err1, results) {
         	// console.log(results)
				cb(results);
				//释放连接池
				conn.release();
			})
		}
	});
}


function delErShi(id,cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "delete from ershi where id=?";
			conn.query(sql,[id],function(err1, results) {
//          	console.log(results)
				cb(results);
				//释放连接池
				conn.release();
			})
		}
	});
}

function delErShiall(arrid,cb) {
	dbutils.pool.getConnection(function(err, conn) {

		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			
			// console.log(arrid.join(","))
			let sql = "delete from ershi where id in ("+arrid.join(",")+")";
			conn.query(sql,function(err1, results) {
				cb(results);
			})
			//释放连接池
			conn.release();
		}
	});
}

function addErShi(objs,cb) {
	dbutils.pool.getConnection(function(err, conn) {

		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			
			// console.log(objs.src)
			let sql = "insert into ershi (img,title,price,inventory) values(?,?,?,?) ";
			conn.query(sql,[objs.src,objs.title,objs.price,objs.number],function(err1, results) {
				cb(results);
			})
			//释放连接池
			conn.release();
		}
	});
}

function fondErShi(storename,cb) {
	dbutils.pool.getConnection(function(err, conn) {
		if(err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = `select * from ershi where title like "%${storename}%"` ;
			conn.query(sql,function(err1, results) {
				// console.log(results)
				cb(results);
			})
			//释放连接池
			conn.release();
		}
	});
}

exports.selectErShi = selectErShi;
exports.delErShi = delErShi;
exports.delErShiall = delErShiall;
exports.addErShi = addErShi;
exports.fondErShi = fondErShi;
exports.ershiNum = ershiNum;



