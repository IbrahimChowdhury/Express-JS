let express=require("express")
const { copyFileSync } = require("fs")
let multer =require("multer")
let app=express()

let port =3000




// home page 
app.get("/",(req,res)=>{
    res.send("this is home page")
})

// multer using from  https://www.npmjs.com/package/multer
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



// getting html file
  app.get("/upload",(req,res)=>{
    res.sendFile(__dirname + "/upload.html")
})

// posting photo
app.post("/upload",upload.single('file'),(req,res)=>{
    res.send("<h1> uploaded Successfully  </h1>")
})



// server is running
app.listen(port,()=>{
   console.log(`server is running `) 
})