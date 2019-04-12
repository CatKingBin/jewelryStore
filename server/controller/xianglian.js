

const xianglianService=require("../service/xianglianService")

function xianglian(req, res){
    let index=req.query.index;
    xianglianService.xianglian(index,function(results) {
        res.send(results)
    })
}
function getNecklaceNum(req, res){
    xianglianService.getNecklaceNum(function(results) {
        res.send(results)
    })
}
function xiangliandel(req, res){
    let id=req.query.id
    xianglianService.xiangliandel(id,function(results) {
        res.send(results)
    })
}
function xiangliandelall(req, res){
    let arrid=req.query.arrid
    xianglianService.xiangliandelall(arrid,function(results) {
        res.send(results)
    })
}
function xianglianadd(req, res){
    let obj=req.query.obj
    let objs=JSON.parse(obj)
    xianglianService.xianglianadd(objs,function(results) {
        res.send(results)
    })
}
function xianglianfond(req, res){
    let storename=req.query.storename
    xianglianService.xianglianfond(storename,function(results) {
        res.send(results)
    })
}
  exports.xianglian=xianglian;
  exports.getNecklaceNum=getNecklaceNum;
  exports.xiangliandel=xiangliandel;
  exports.xiangliandelall=xiangliandelall;
  exports.xianglianadd=xianglianadd;
  exports.xianglianfond=xianglianfond;

