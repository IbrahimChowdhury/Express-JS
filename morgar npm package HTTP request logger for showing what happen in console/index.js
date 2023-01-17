let express=require("express")
let morgan =require("morgan")
let app=express()
let port=3000

// website for morgan https://www.npmjs.com/package/morgan?activeTab=readme
app.use(morgan("dev"))



app.get("/user",(req,res)=>{
    res.send("this is get request")
})


app.post("/user",(req,res)=>{
    res.status(202).send("this is post requiest")
})




app.listen(port,()=>{
    console.log(`your server is running at http://localhost:${port}`)
})