let express=require('express')
let app=express()
let port=3000

var bodyParser = require('body-parser')



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// home section
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/home.html")
})


// triangle section
app.get('/triangle',(req,res)=>{
    res.sendFile(__dirname + "/triangle.html")
})
app.post('/triangle',(req,res)=>{
    let h = req.body.height
    let b= req.body.base
    let area=0.5*h*b
    res.send(`
    <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/triangle">triangle</a></li>
    <li><a href="/circle">circle</a></li>
    </ul>
    <h2>Area of the triangle : ${area} </h2>`)
})


// circle section
app.get('/circle',(req,res)=>{
    res.sendFile(__dirname+"/circle.html")
})

app.post('/circle',(req,res)=>{
    let pi=3.1416
    let r=req.body.radius
    let area=pi*r*r
   
    res.send(`
    <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/triangle">triangle</a></li>
    <li><a href="/circle">circle</a></li>
    </ul>
    <h1> Area of the Circle : ${area} </h1>`)
})




app.listen(port,()=>{
    console.log("your server is running")
})