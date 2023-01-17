let users=require("../model/userModel")
let path=require("path")
let {v4: uuidv4}=require("uuid")

let homePage=(req,res)=>{
    res.sendFile(path.join(__dirname + "/../view/home.html"))
}


// Get all users
let getAllUser=(req,res)=>{
    res.status(200).json(users)
}


// Create users
let createUser=(req,res)=>{
    let newUser={
        id:uuidv4(),
        username:req.body.username,
        email:req.body.email
    }

    users.push(newUser)
    res.status(201).json(users)
}


// update  users
let updateUser=(req,res)=>{
    let id=req.params.id
    let {username,email} = req.body
    users.filter((user)=>user.id==id).map((user)=>{
        user.username=username
        user.email=email
    })
    
    res.status(202).json(users)
}



// delete users
let deleteUser=(req,res)=>{
    let id=req.params.id
    users=users.filter((user)=>user.id!=id)
    res.status(201).json(users)
}

module.exports={homePage,getAllUser,createUser,updateUser,deleteUser}