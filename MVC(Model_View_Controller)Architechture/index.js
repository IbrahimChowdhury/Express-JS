let express=require("express")
let app=express()
let port=3000

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let userRouter=require("./routes/routes")
app.use(userRouter)


let products=require("./routes/products")
app.use(products)


app.listen(port,()=>{
    console.log(`your server running http://localhost:${port}`)
})





