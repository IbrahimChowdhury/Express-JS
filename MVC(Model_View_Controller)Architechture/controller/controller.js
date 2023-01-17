let path=require("path")
let users=require("../model/model")
exports.m1=(req,res)=>{
   res.sendFile(path.join(__dirname + "/../view/h.html"))
}

exports.m2=(req,res)=>{
    res.sendFile(path.join(__dirname + "/../view/register.html"))
}

exports.m3=(req,res)=>{
    let name=req.body.name
    let age=req.body.age
    let user={
        name,
        age
    }
   users.push(user)
   res.status(201).json(users)
}
