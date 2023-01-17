
require("dotenv").config()



let app=require("./app")
let port=process.env.port || 5000
app.listen(port,()=>{
    console.log(`your server running at https://localhost:${port}`)
})