

const jiezhiService=require("../service/jiezhiService")

function jiezhi(req, res){
    let index=req.query.index;
    jiezhiService.jiezhi(index,function(results) {
        res.send(results)
    })
}
function jiezhiNum(req, res){
    jiezhiService.jiezhiNum(function(results) {
        res.send(results)
    })
}
function wxshuju(req, res){
    jiezhiService.wxshuju(function(results) {
        res.send(results)
    })
}
function jiezhidel(req, res){
    let id=req.query.id
    jiezhiService.jiezhidel(id,function(results) {
        res.send(results)
    })
}
function jiezhidelall(req, res){
    let arrid=req.query.arrid
    jiezhiService.jiezhidelall(arrid,function(results) {
        res.send(results)
    })
}
function jiezhiadd(req, res){
    let obj=req.query.obj
    let objs=JSON.parse(obj)
    jiezhiService.jiezhiadd(objs,function(results) {
        res.send(results)
    })
}
function jiezhifond(req, res){
    let storename=req.query.storename
    jiezhiService.jiezhifond(storename,function(results) {
        res.send(results)
    })
}
  exports.jiezhi=jiezhi;
  exports.jiezhiNum=jiezhiNum;
  exports.jiezhidel=jiezhidel;
  exports.jiezhidelall=jiezhidelall;
  exports.jiezhiadd=jiezhiadd;
  exports.jiezhifond=jiezhifond;
  exports.wxshuju=wxshuju;


