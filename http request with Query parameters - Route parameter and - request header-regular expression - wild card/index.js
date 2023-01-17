let express=require('express')
let app=express()
let port=3000

// these are for body-parser  and we need body-parse if we want to work with form data
let body_parser=require('body-parser')

app.use(body_parser.urlencoded({extended:false}))
app.use(body_parser.json())



// how to request query parameter ==>  http://localhost:3000/query?id=200&name=ibrahim
app.get('/query',(req,res)=>{
    let id =req.query.id
    let name=req.query.name

    res.send(`Name : ${name} and ID : ${id}`)
})


// how to request route parameter ==> http://localhost:3000/userID/101/userName/ibrahim
app.get('/userID/:id/userName/:name',(req,res)=>{
    let id=req.params.id
    let name=req.params.name
    res.send(`Name is : ${name} and ID is : ${id} `)
})



// how to make a request using header ==> first, we need to set the headers using postman software 
app.get('/',(req,res)=>{
    let id=req.header("id")
    let name=req.header("name")
    res.send(`Name is : ${name} and  ID is : ${id} `)

})






/* 
how to make post request using with JSON or form data ==>
1st--> install body-parser 
2nd--> then, 
    code: 
        var bodyParser = require('body-parser')
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())

3rd --> then go to postman software and select post. then  select body and after that select row and json 

4th--> then enter json file name age etc


*/

app.post('/user',(req,res)=>{
    let name=req.body.name
    let age=req.body.age
    res.send(`Name is : ${name} and age is ${age}`)
})






// sending and receiving data form data 
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+"/indx.html")
})

app.post('/register',(req,res)=>{
    let name =req.body.fullName
    let age=req.body.age
    res.send(`<h1>Name : ${name} , age: ${age}</h1>`)
})









// regular expression ==> if we want a specific type of number like we dont want any other things except number then we use regular expression

// go to ==> http://localhost:3000/product/123

app.get('/product/:id([0-9]+)',(req,res)=>{
    res.send(`
   <h3> if we write /product/abc instead of /product/123 then we can not see the id number </h3>
    <h1>the id number is : ${req.params.id} </h1>`)
}
)
app.get('/product/:title([a-zA-Z0-9]+)',(req,res)=>{
    res.send(`
    <h1>The Title number is : ${req.params.title} </h1>`)
})



// wild card
app.use('*',(req,res)=>{
    res.send({
        statusCode:404,
        value:"404! page not found"
    })
})







app.listen(port,()=>{
    console.log("your server is running ")
})