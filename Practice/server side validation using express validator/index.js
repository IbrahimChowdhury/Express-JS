let express=require("express")
let chalk=require("chalk")
let {body,validationResult }=require("express-validator")
const router = require("./router/router")
let app=express()
let port =3000
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("this is HOME page ")
})

app.use(router)

app.listen(port,()=>{
    console.log(chalk.bgCyan.underline(`your server is running at http://localhost:${port}`))
})
