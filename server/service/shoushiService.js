const shoushiDb = require('../db/shoushiDb.js')

function shoushi(index,cb) { 
	
    shoushiDb.selectShouShi(index,function(results) { 
            // 返回数据成功
//          console.log(results)
            cb(results);
        
     });
 };
 function shoushiNum(cb){
    shoushiDb.shoushiNum(function(results) { 
                // 返回数据成功
    //          console.log(results)
                cb(results);
            
         });
 }
 function shoushidel(id,cb) { 
	
    shoushiDb.delShouShi(id, function(results) { 
            // 返回数据成功
//          console.log(results)
            cb(results);
        
     });
 };

 function shoushidelall(arrid,cb) { 
    shoushiDb.delShouShiall(arrid, function(results) { 
                // 返回数据成功
    //          console.log(results)
                cb(results);
         });
     };
     function shoushiadd(objs,cb) { 
        shoushiDb.addShouShi(objs, function(results) { 
                // 返回数据成功
    //          console.log(results)
                cb(results);
            
         });
     };

     function shoushifond(storename,cb) { 
	
        shoushiDb.fondShouShi(storename, function(results) { 
                // 返回数据成功
    //          console.log(results)
                cb(results);
            
         });
     };

  exports.shoushi=shoushi;
  exports.shoushidel=shoushidel;
  exports.shoushidelall=shoushidelall;
  exports.shoushiadd=shoushiadd;
  exports.shoushifond=shoushifond;
  exports.shoushiNum=shoushiNum;




  