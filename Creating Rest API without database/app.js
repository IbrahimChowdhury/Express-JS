let express=require("express")
let bodyParser=require("body-parser")
let userRouter=require("./router/router")
let cors=require("cors")

let app=express()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



// router use
app.use(userRouter)


// home Route
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/view/home.html")
})


// route error 
app.use((req,res,next)=>{
    res.status(404).json({massage:"Router error "})
})


// Server  error 
app.use((err,req,res,next)=>{
    res.status(500).json({massage:"server error "})
})



module.exports=app