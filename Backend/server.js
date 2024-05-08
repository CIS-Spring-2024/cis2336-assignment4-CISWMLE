const express=require('express')
const app=express()
const PORT = 3000
const path = require('node:path')
var totalprice = ''


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname,'../Frontend')))
app.use(express.static(path.join(__dirname,'../Frontend/HTML')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Frontend/HTML/biography.html'))
})

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Frontend/HTML/home.html'))
})

app.get('/food',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Frontend/HTML/food.html'))
})

app.get('/order',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Frontend/HTML/order.html'))
});

app.post('/ordercon',(req,res)=>{
    totalprice = req.body
})

app.get('/ordercon',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Frontend/HTML/ordercon.html'))
    res.send(totalprice)
});

app.listen(PORT,()=>{
 console.log('Server running on http://localhost:'+PORT)
});