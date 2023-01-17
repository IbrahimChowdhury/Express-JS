

let express=require('express')
const { send } = require('process')
let app=express()
let port=3000


/*  
when we normally use to show html and css together then we cannot show the css file.so we need to make a public folder for html and css and make the file as static
like:
app.use(express.static("folder_name"))

when we use it then we can easily see the css used in html file

*/
app.use(express.static("public"))

app.get('/',(req,res)=>{
    res.statusCode=200
   res.sendFile(__dirname+'/public/indx.html')
})

app.listen(port,()=>{
    console.log("your server is running")
})