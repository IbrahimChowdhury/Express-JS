// here we use require instead of import 

let app=require('./app.js')

let port=2000




app.listen(port,()=>{
    console.log("server is working fine")
})
