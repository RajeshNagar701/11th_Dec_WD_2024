const express=require('express');
const app=express();

// line for all public assest pages load in all views pages
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs');

app.get('/',(_,resp)=>{
   resp.render(`index`);
});

app.get('/about',(_,resp)=>{
   resp.render(`about`);
});

app.get('/skating',(_,resp)=>{
   resp.render(`skating`);
});

app.get('/shop',(_,resp)=>{
   resp.render(`shop`);
});

app.get('/contact',(_,resp)=>{
   resp.render(`contact`);
});

app.listen(5000);
