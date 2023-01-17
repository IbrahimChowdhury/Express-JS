let path=require("path")
let products=require("../model/product_model")
exports.m1=(req,res)=>{
   res.sendFile(path.join(__dirname + "/../view/h.html"))
}

exports.m2=(req,res)=>{
    res.sendFile(path.join(__dirname + "/../view/products.html"))
}

exports.m3=(req,res)=>{
    let name=req.body.pname
    let price=req.body.price
    let product={
        name,
       price
    }
   products.push(product)
   res.status(201).json(products)
}
