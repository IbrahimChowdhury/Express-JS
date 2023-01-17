const { route } = require("../app")
const {getAllUsers, createUsers, updateUser, deleteuser }= require("../controller/userContoller")

let router=require("express").Router()

router.get("/users",getAllUsers)
router.post("/users",createUsers)
router.put("/users/:id",updateUser)
router.delete("/users/:id",deleteuser)





module.exports=router