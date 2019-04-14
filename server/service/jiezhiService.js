const jiezhiDb = require('../db/jiezhiDb.js')

function jiezhi(index,cb) { 
	
    jiezhiDb.selectJieZhi(index,function(results) { 
            // 返回数据成功
//          console.log(results)
            cb(results);
        
     });
 };
 function jiezhiNum(cb){
    jiezhiDb.jiezhiNum(function(results) { 
                // 返回数据成功
    //          console.log(results)
                cb(results);
            
         });
 }
 function wxshuju(cb){
   jiezhiDb.wxshuju(function(results) { 
               // 返回数据成功
   //          console.log(results)
               cb(results);
           
        });
}
 function jiezhidel(id,cb) { 
	
    jiezhiDb.delJieZhi(id, function(results) { 
            // 返回数据成功
//          console.log(results)
            cb(results);
        
     });
 };

 function jiezhidelall(arrid,cb) { 
    jiezhiDb.delJieZhiall(arrid, function(results) { 
                // 返回数据成功
    //          console.log(results)
                cb(results);
         });
     };
     function jiezhiadd(objs,cb) { 
        jiezhiDb.addJieZhi(objs, function(results) { 
                // 返回数据成功
    //          console.log(results)
                cb(results);
            
         });
     };

     function jiezhifond(storename,cb) { 
	
        jiezhiDb.fondJieZhi(storename, function(results) { 
                // 返回数据成功
    //          console.log(results)
                cb(results);
            
         });
     };

  exports.jiezhi=jiezhi;
  exports.jiezhidel=jiezhidel;
  exports.jiezhidelall=jiezhidelall;
  exports.jiezhiadd=jiezhiadd;
  exports.jiezhifond=jiezhifond;
  exports.jiezhiNum=jiezhiNum;
  exports.wxshuju=wxshuju;





  