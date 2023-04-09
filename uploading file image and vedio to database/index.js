let express =require("express")
let multer =require("multer")
let mongoose = require("mongoose");
const { type } = require("os");
let app=express()
let port=4000;


app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("This is home page")
})


app.get("/upload",(req,res)=>{
    res.sendFile(__dirname + "/uploading.html")
})



// connecting to db 
mongoose.connect("mongodb://127.0.0.1:27017/institute")
.then(()=>{
    console.log("mongoDB is connected")
})
.catch((error)=>{
    console.log(error)
})



//   creating schema
let users_schema=new mongoose.Schema({
    name:String,
  
    file:String
})

// creating model
let users_model= mongoose.model("users",users_schema)


// npm package multer for uploading file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + '-' + file.originalname
      cb(null, name)
    }
  })
  
  const upload = multer({ storage: storage })



//   uploading file
app.post("/upload",upload.single(""),  async(req,res)=>{
try {
    let user= users_model({
        name: req.body.name,
        file: req.file.filename
      })
   user.save()
    res.status(202).json(user)
  
} catch (error) {
    res.status(404).json(error)
}
})



// server is running 
app.listen(port,()=>{
    console.log("your server is running")
})