const userDb = require('../db/userDb.js')

// 注册
 function reg(username,passwd,cb) { 
 	
    userDb.insertUser(username,passwd,function(result) { 
        // console.log(result)//当注册的名字已存在时，result为undefined
      if(typeof result != "undefined"){
        //   console.log("注册成功");
          cb(true);
      }else{
        // console.log("注册失败");
        cb(false);
      }
     });
 };
 function reg1(username,passwd,cb) { 
    userDb.insertUser1(username,passwd,function(result) { 
           
        if(result.length!=0){
            //账号已存在
            cb(true);
        }else{
            // 账号可注册
           cb(false); 
            
        }
     });
 };
//  reg('阿萨德','xm2ewr','2342423423432',function(){})

// 登录
function login(username,passwd,cb) { 
	
    userDb.selectNameByUsername(username,passwd,function(result) { 
           
        if(result.length==0){
            // 账号不存在
            cb(false)
        }else{
            // 账号存在
            cb(result[0].passwd);
        }
     });
 };
function login1(username,passwd,cb) { 
	
    userDb.selectNameByUsernameAndPasswd(username,passwd,function(result) { 
           
        if(result.length!=0&&result[0].passwd==passwd){
            // 登录成功
            cb( result[0])
        }else{
            // 登录失败
            cb(false);
            
        }
     });
   };
 // login('xm','123')
exports.login=login;
exports.login1=login1;
exports.reg=reg;
exports.reg1=reg1;
