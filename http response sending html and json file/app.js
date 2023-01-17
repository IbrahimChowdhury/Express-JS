/* first of all we need to install -->> npm init -y
 then -->>  npm install nodemon express

 then our express js works fine 

 after that we need to require express

 */
let express=require('express')

let app=express()

let userRouting=require('./User_routing/router')

app.use(userRouting)


//this is how we can send a json file
app.get('/json',(req,res)=>{
    res.status(200).json({
        name:"ibrhaim",
        roll:2019299,
        university:"IU"
    })
})







/*
 this is how we can send a html file 

app.get('/hml',(req,res)=>{
    res.statusCode=400
    res.sendFile(__dirname+'/html/indx.html')
})
*/



// this is how we can send cookie in our website

app.get('/cookie',(req,res)=>{
    // res.cookie("name", "ibrhaim")
    // res.cookie("age", 23)
    // res.cookie("department", "Islamic University")

    res.clearCookie("name")

    // how to send header -->
    res.append("id","130000")
    // then if we go to -->inspect>network>cookie/login>header -->then u can see the id=130000
    
    res.end()
})

app.get((req,res)=>{
    res.send("<h1>404! .... page not found</h1>")
})



module.exports=app