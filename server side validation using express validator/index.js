let express=require("express")
let { body,validationResult } =require("express-validator")
let chalk=require("chalk")
const router = require("./route/router")
let app=express()
let port = 4000
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("this is homepage")
})

// website for express-validation : https://express-validator.github.io/docs/


app.use(router)

app.listen(port,()=>{
    console.log(chalk.blue.underline(`your server is running at http://localhost:${port}`))
})