
let app=require("./app")

let port=4000
app.listen(port,()=>{
    console.log(`your server running at http://localhost:${port}`)
})