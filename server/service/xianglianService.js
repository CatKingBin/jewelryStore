const xianglianDb = require('../db/xianglianDb.js')

function xianglian(index,cb) { 
	
    xianglianDb.selectXiangLian(index,function(results) { 
            // 返回数据成功
//          console.log(results)
            cb(results);
        
     });
 };
 function getNecklaceNum(cb){
        xianglianDb.getNecklaceNum(function(results) { 
                // 返回数据成功
    //          console.log(results)
                cb(results);
            
         });
 }
 function xiangliandel(id,cb) { 
	
    xianglianDb.delXiangLian(id, function(results) { 
            // 返回数据成功
//          console.log(results)
            cb(results);
        
     });
 };


 function xiangliandelall(arrid,cb) { 
	
        xianglianDb.delXiangLianall(arrid, function(results) { 
                // 返回数据成功
    //          console.log(results)
                cb(results);
            
         });
     };
     function xianglianadd(objs,cb) { 
	
        xianglianDb.addXiangLian(objs, function(results) { 
                // 返回数据成功
    //          console.log(results)
                cb(results);
            
         });
     };

     function xianglianfond(storename,cb) { 
	
        xianglianDb.fondXiangLian(storename, function(results) { 
                // 返回数据成功
    //          console.log(results)
                cb(results);
            
         });
     };

  exports.xianglian=xianglian;
  exports.xiangliandel=xiangliandel;
  exports.xiangliandelall=xiangliandelall;
  exports.xianglianadd=xianglianadd;
  exports.xianglianfond=xianglianfond;
  exports.getNecklaceNum=getNecklaceNum;




  