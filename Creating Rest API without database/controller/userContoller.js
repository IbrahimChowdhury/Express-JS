let {v4: uuidv4} =require("uuid")

let users=require("../model/users_model")



// get all users

let getAllUsers=(req,res)=>{
    res.status(200).json(users)
}



// create Users

let createUsers=(req,res)=>{
   let newUser={
    id:uuidv4(),
    username:req.body.username,
    email:req.body.email
   }

   users.push(newUser)

   res.status(201).json(users)
}



// update users

let updateUser=(req,res)=>{
    let id=req.params.id
   let {username,email}=req.body
   users.filter((user)=>user.id==id).map((selectedUser)=>{
    selectedUser.username=username
    selectedUser.email=email
   })

   res.status(203).json({users})
}



// delete user
let deleteuser=(req,res)=>{
    let id=req.params.id
    let {username,email}=req.body
    users=users.filter((user)=>user.id!=id)
    res.status(200).json(users)
}



module.exports={getAllUsers,createUsers,updateUser,deleteuser}