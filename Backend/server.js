const express=require('express');
const app=express();
const PORT = 3000;

var totalprice = '';

app.use(express.urlencoded({extended:true}));

app.use(express.static('Frontend'));

app.post('/order',(req,res)=>{
    totalprice = req.body.tot;
    console.log(totalprice);
    res.status(300).json({total: totalprice});
})

app.get('/order',(req,res)=>{
    res.status(300).send(totalprice);
});

app.listen(PORT,()=>{
 console.log('Server running on http://localhost:'+PORT);
});