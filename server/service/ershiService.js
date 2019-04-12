const ershiDb = require('../db/ershiDb.js')

function ershi(index,cb) { 
	
    ershiDb.selectErShi(index,function(results) { 
            // 返回数据成功
//          console.log(results)
            cb(results);
        
     });
 };
 function ershiNum(cb){
    ershiDb.ershiNum(function(results) { 
                // 返回数据成功
    //          console.log(results)
                cb(results);
            
         });
 }
 function ershidel(id,cb) { 
	
    ershiDb.delErShi(id, function(results) { 
            // 返回数据成功
//          console.log(results)
            cb(results);
        
     });
 };

 function ershidelall(arrid,cb) { 
    ershiDb.delErShiall(arrid, function(results) { 
                // 返回数据成功
    //          console.log(results)
                cb(results);
         });
     };
     function ershiadd(objs,cb) { 
        ershiDb.addErShi(objs, function(results) { 
                // 返回数据成功
    //          console.log(results)
                cb(results);
            
         });
     };

     function ershifond(storename,cb) { 
	
        ershiDb.fondErShi(storename, function(results) { 
                // 返回数据成功
    //          console.log(results)
                cb(results);
            
         });
     };

  exports.ershi=ershi;
  exports.ershidel=ershidel;
  exports.ershidelall=ershidelall;
  exports.ershiadd=ershiadd;
  exports.ershifond=ershifond;
  exports.ershiNum=ershiNum;




  