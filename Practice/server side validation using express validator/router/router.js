const { llogin, registration_con } = require("../controller/controller");
const { registration, signin } = require("../validator/valid");
const { error_validation } = require("../validator/validation_error");

let router=require("express").Router()






// register section
router.post("/register", registration,error_validation,registration_con)





// login section
router.post("/login",signin,error_validation,llogin)







module.exports=router