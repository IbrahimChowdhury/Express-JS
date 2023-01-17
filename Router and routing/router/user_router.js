let express=require('express')
let router=express.Router()


router.get(('/'),(req,res)=>{
    res.send("<h1>This is home page</h1>")
    res.end()
})
router.get(('/contact'),(req,res)=>{
    res.send("<h1>This is a contact page</h1>")
    res.end()
})
router.get(('/register'),(req,res)=>{
    res.send("<h1>This is a register page</h1>")
    res.end()
})
router.get(('/login'),(req,res)=>{
    res.send("<h1>This is a log in page</h1>")
    res.end()
})


module.exports=router
