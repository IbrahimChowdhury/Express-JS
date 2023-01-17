let express=require("express")
let multer=require("multer")
let app=express()
let port=3000


// multer uploading code 
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





// home page
app.get("/",(req,res)=>{
    res.send("this is HOME page ")
})

// upload page
app.get("/upload",(req,res)=>{
    res.sendFile(__dirname + "/upload_file.html")
})



//   upload 
app.post("/upload",upload.single("file"),(req,res)=>{
    res.send("file is uploaded")
})





// server running 
app.listen(port,(req,res)=>{
    console.log("your server is running")
})