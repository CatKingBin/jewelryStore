const xianglianDb = require('../db/xianglianDb.js')

function xianglian(cb) { 
	
    xianglianDb.selectXiangLian(function(results) { 
            // 返回数据成功
//          console.log(results)
            cb(results);
        
     });
 };
 function xiangliandel(id,cb) { 
	
    xianglianDb.delXiangLian(id, function(results) { 
            // 返回数据成功
//          console.log(results)
            cb(results);
        
     });
 };
  exports.xianglian=xianglian;
  exports.xiangliandel=xiangliandel;
  