/*
eikhane amra notun ekta folder-router name banayechi ebong oikhane user_router.js name e ekta file banayechi jekhane sob routing object gula thakbe 
 */


const express=require('express')
let app=express()
let userRouter=require('./router/user_router') //we get this from router folder

app.use(('/api/user'),userRouter)    //then how to use routing object in the app file


module.exports=app   // app ta export korchi jate eita index.js e use korte pari

app.use((req,res)=>{
    res.send("404 !!!!!!!!  page not found")
})


