
const { sign } = require("crypto")
let express=require("express")
const { body } = require("express-validator")
const { registration, signIn } = require("../controller/user")
const { registrationValidator, signinvalidation } = require("../validation/auth")
const { runValidation } = require("../validation/validation")
let router=express.Router()



// For register 

router.post("/register",registrationValidator,runValidation,registration)




// for login

router.post("/login",signinvalidation, runValidation,signIn)








module.exports=router
