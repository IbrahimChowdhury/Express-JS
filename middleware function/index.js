let express=require('express')
let app=express()
let port=3000;

/*

what is middleware?
= Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next
*/

// website==>   https://expressjs.com/en/guide/using-middleware.html

// making a middleware function
let middleware=(req,res,next)=>{
    console.log("hello, I am middleware")
    req.currentTime=new Date(Date.now())
    next()
}

/* using middleware into app.get()
app.get('/', middleware,(req,res)=>{
    res.send("<h1>Hellow i am home </h1>")
    console.log(req.currentTime)
    console.log("I am home")
})
*/

app.get('/', middleware,(req,res)=>{
    res.send("<h1>Hellow i am home </h1>")
    console.log(req.currentTime)
    console.log("I am home")
})
app.get('/contact', middleware,(req,res)=>{
    res.send("<h1>Hellow, i am contact</h1>")
    console.log(req.currentTime)
    console.log("I am contact")
})
app.get('/register', middleware,(req,res)=>{
    res.send("<h1>Hellow i am register </h1>")
    console.log(req.currentTime)
    console.log("I am register")
})
app.get('/login', middleware,(req,res)=>{
    res.send("<h1>Hellow i am home </h1>")
    console.log(req.currentTime)
    console.log("I am home")
})






// if we want to add middleware for all the app.get() then we will use app.use()
app.use(middleware)

app.listen(port,()=>{
    console.log(`Your server is running at http://localhost:${port}`)
})