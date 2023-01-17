let express=require("express")
const { m1, m2, m3 } = require("../controller/products")
let router=express.Router()


router.get('/',m1)
router.get('/products',m2)
router.post('/products',m3)



module.exports=router
