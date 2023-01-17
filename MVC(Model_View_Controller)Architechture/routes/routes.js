let express=require("express")
const { m1, m2, m3 } = require("../controller/controller")
let router=express.Router()


router.get('/',m1)
router.get('/register',m2)
router.post('/register',m3)



module.exports=router
