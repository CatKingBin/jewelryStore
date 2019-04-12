

const ershiService=require("../service/ershiService")

function ershi(req, res){
    let index=req.query.index;
    ershiService.ershi(index,function(results) {
        res.send(results)
    })
}
function ershiNum(req, res){
    ershiService.ershiNum(function(results) {
        res.send(results)
    })
}
function ershidel(req, res){
    let id=req.query.id
    ershiService.ershidel(id,function(results) {
        res.send(results)
    })
}
function ershidelall(req, res){
    let arrid=req.query.arrid
    ershiService.ershidelall(arrid,function(results) {
        res.send(results)
    })
}
function ershiadd(req, res){
    let obj=req.query.obj
    let objs=JSON.parse(obj)
    ershiService.ershiadd(objs,function(results) {
        res.send(results)
    })
}
function ershifond(req, res){
    let storename=req.query.storename
    ershiService.ershifond(storename,function(results) {
        res.send(results)
    })
}
  exports.ershi=ershi;
  exports.ershiNum=ershiNum;
  exports.ershidel=ershidel;
  exports.ershidelall=ershidelall;
  exports.ershiadd=ershiadd;
  exports.ershifond=ershifond;

