let express=require('express')
let app=express()

require('dotenv').config();



let port=process.env.PORT || 3000

/*
what is environment variable
*/


app.get('/',(req,res)=>{
    res.send("<h1>Hello everyone</h1>")
})

app.listen(port,()=>{
    console.log(`Your server is running at http://localhost:${port}`)
})