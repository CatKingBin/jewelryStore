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
function findall(storename,cb){
        jiezhiDb.findall(storename,function(results) { 
                    // 返回数据成功
        //          console.log(results)
                    cb(results);
             });
}

function gouwucheadd(obj,cb){
        jiezhiDb.gouwucheadd(obj,function(results) { 
                    // 返回数据成功
                    cb(results);
             });
}
function gouwuche(cb){
        jiezhiDb.gouwuche(function(results) { 
                    // 返回数据成功
                    cb(results);
             });
}
function gouwuchedel(obj,cb){
        jiezhiDb.gouwuchedel(obj,function(results) { 
                    // 返回数据成功
                    cb(results);
             });
}
 function jiezhidel(obj,cb) { 
	
    jiezhiDb.delJieZhi(obj, function(results) { 
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
  exports.findall=findall;
  exports.gouwucheadd=gouwucheadd;
  exports.gouwuche=gouwuche;
  exports.gouwuchedel=gouwuchedel;









  