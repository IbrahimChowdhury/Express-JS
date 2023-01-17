const express=require('express')
let app=express()

module.exports=app

app.get('/',(req,res)=>{
    res.send("hellow i am get request")
})
app.get('/contact',(req,res)=>{
    res.send("hey everyone i am here")
})

app.post('/',(req,res)=>{
    res.send("i am post request")
})
app.put('/',(req,res)=>{
    res.send("i am put request")
})
app.delete('/',(req,res)=>{
    res.send("i am delete request")
})

