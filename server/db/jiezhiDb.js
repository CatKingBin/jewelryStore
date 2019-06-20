// 引入模块
const dbutils = require('../utils/dbutils.js');

function selectJieZhi(index, cb) {
	dbutils.pool.getConnection(function (err, conn) {
		if (err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select * from jiezhi limit ?,?";
			conn.query(sql, [(index - 1) * 7, 7], function (err1, results) {
				cb(results);
				//释放连接池
				conn.release();
			})
		}
	});
}

function jiezhiNum(cb) {
	dbutils.pool.getConnection(function (err, conn) {
		if (err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select * from jiezhi";
			conn.query(sql, function (err1, results) {
				cb(results);
				//释放连接池
				conn.release();
			})
		}
	});
}

function wxshuju(cb) {
	dbutils.pool.getConnection(function (err, conn) {
		if (err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select * from xianglian union all select * from ershi union all select * from shoushi union all select * from jiezhi";
			conn.query(sql, function (err1, results) {
				cb(results);
				//释放连接池
				conn.release();
			})
		}
	});
}

function findall(storename, cb) {
	dbutils.pool.getConnection(function (err, conn) {
		if (err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			// console.log(storename)
			if (storename == undefined) {
				let sql = `select * from xianglian union all select * from ershi union all select * from shoushi union all select * from jiezhi`;
				conn.query(sql, function (err1, results) {
					cb(results);
					//释放连接池
					conn.release();
				})
			} else {
				let sql = `select * from xianglian where title like '%${storename}%' union all select * from ershi where title like '%${storename}%' union all select * from shoushi where title like '%${storename}%' union all select * from jiezhi where title like '%${storename}%'`;
				conn.query(sql, function (err1, results) {
					cb(results);
					//释放连接池
					conn.release();
				})
			}

		}
	});
}

function delJieZhi(id, cb) {
	dbutils.pool.getConnection(function (err, conn) {
		if (err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "delete from jiezhi where id=?";
			conn.query(sql, [id], function (err1, results) {
				cb(results);
				//释放连接池
				conn.release();
			})
		}
	});
}

function delJieZhiall(arrid, cb) {
	dbutils.pool.getConnection(function (err, conn) {

		if (err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "delete from jiezhi where id in (" + arrid.join(",") + ")";
			conn.query(sql, function (err1, results) {
				cb(results);
			})
			//释放连接池
			conn.release();
		}
	});
}

function addJieZhi(objs, cb) {
	dbutils.pool.getConnection(function (err, conn) {
		if (err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "insert into jiezhi (img,title,price,inventory) values(?,?,?,?) ";
			conn.query(sql, [objs.src, objs.title, objs.price, objs.number], function (err1, results) {
				cb(results);
			})
			//释放连接池
			conn.release();
		}
	});
}

function gouwucheadd(obj, cookie, cb) {
	dbutils.pool.getConnection(function (err, conn) {
		if (err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			
			let sql = "select id from user where name=?"
			conn.query(sql, [cookie], function (err, results) {
				var userid = results[0].id
				let sql = "select user_id,num from gouwuche where img=? ";
				conn.query(sql, [obj.img], function (err1, results) {
					
					if (results.length == 0||results[0].user_id != userid) {
						
							let sql = "insert into gouwuche (img,title,price,num,user_id) values(?,?,?,?,?) ";
							conn.query(sql, [obj.img, obj.title, obj.price, obj.num, userid], function (err1, results) {
								cb(results);
							})
						

					} else {
						let n = results[0].num
						let sql = "update gouwuche set num=?+? where img=? ";
						conn.query(sql, [obj.num, n, obj.img], function (err1, results) {
							cb(results);
						})
					}

				})
			})

			//释放连接池
			conn.release();
		}
	});
}

function gouwuche(cookie, cb) {
	dbutils.pool.getConnection(function (err, conn) {
		if (err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = "select id from user where name=?"
			conn.query(sql, [cookie], function (err, results) {
				let userid = results[0].id
				let sql = "select * from gouwuche where user_id=?";
				conn.query(sql, [userid], function (err1, results) {
					cb(results);
					// console.log(results.length)
				})
			})

			//释放连接池
			conn.release();
		}
	});
}

function gouwuchedel(obj, cb) {
	dbutils.pool.getConnection(function (err, conn) {
		if (err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			// console.log(obj.join())
			let sql = "delete from gouwuche where id in (" + obj.join() + ")";
			conn.query(sql, function (err1, results) {
				cb(results);
			})


			//释放连接池
			conn.release();

		}
	});
}

function fondJieZhi(storename, cb) {
	dbutils.pool.getConnection(function (err, conn) {
		if (err) { //连接失败
			console.log(err)
		} else { //连接成功,conn是连接对象
			let sql = `select * from jiezhi where title like "%${storename}%"`;
			conn.query(sql, function (err1, results) {
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
exports.gouwucheadd = gouwucheadd;
exports.gouwuche = gouwuche;
exports.gouwuchedel = gouwuchedel;