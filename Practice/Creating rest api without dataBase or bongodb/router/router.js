let router=require("express").Router()

const { homePage, getAllUser, createUser, updateUser, deleteUser } = require("../controller/userController")


router.get("/",homePage)


router.get("/users",getAllUser)
router.post("/users",createUser)
router.put("/users/:id",updateUser)
router.delete("/users/:id",deleteUser)

module.exports=router