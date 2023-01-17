let express=require('express')
let router=express.Router()

router.get('/',(req,res)=>{
    res.send("<h1>Hellow everyone</h1>")
})
router.get('/contact',(req,res)=>{
    res.send("<h1>Hellow everyone, I am contact</h1>")
})
router.get('/register',(req,res)=>{
    res.send("<h1>Hellow everyone, i am register</h1>")
})



module.exports=router
