

const shoushiService=require("../service/shoushiService")

function shoushi(req, res){
    let index=req.query.index;
    shoushiService.shoushi(index,function(results) {
        res.send(results)
    })
}
function shoushiNum(req, res){
    shoushiService.shoushiNum(function(results) {
        res.send(results)
    })
}
function shoushidel(req, res){
    let id=req.query.id
    shoushiService.shoushidel(id,function(results) {
        res.send(results)
    })
}
function shoushidelall(req, res){
    let arrid=req.query.arrid
    shoushiService.shoushidelall(arrid,function(results) {
        res.send(results)
    })
}
function shoushiadd(req, res){
    let obj=req.query.obj
    let objs=JSON.parse(obj)
    shoushiService.shoushiadd(objs,function(results) {
        res.send(results)
    })
}
function shoushifond(req, res){
    let storename=req.query.storename
    shoushiService.shoushifond(storename,function(results) {
        res.send(results)
    })
}
  exports.shoushi=shoushi;
  exports.shoushiNum=shoushiNum;
  exports.shoushidel=shoushidel;
  exports.shoushidelall=shoushidelall;
  exports.shoushiadd=shoushiadd;
  exports.shoushifond=shoushifond;

