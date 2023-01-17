let express=require("express")
let app=express()
let bodyParser=require("body-parser")
let cors=require("cors")
let userRouter=require("./router/router")


app.use(cors())

// if we want to use json from  body-form then we must declare the below two things(urlencoded,  json) before we use userRouter

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

// parse application/json
app.use(bodyParser.json())


//user router 

app.use(userRouter)


app.use((req,res,next)=>{
    res.status(404).json({massage:"Router error"})
})

app.use((err,req,res,next)=>{
    res.status(500).json({massage:"Server error"})
})


module.exports=app