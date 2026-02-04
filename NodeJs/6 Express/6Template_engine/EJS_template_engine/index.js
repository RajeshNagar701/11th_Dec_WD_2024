

const express = require('express');
const app = express();

const path = require('path');
var publicpath=path.join(__dirname,'public') // public sudhi no path

app.set('view engine','ejs') // load ejs on app

app.get('/',(_,resp)=>{
   resp.render(`${publicpath}/index`);
});

app.get('/about',(_,resp)=>{
   resp.render(`${publicpath}/about`);
});

app.get('/blog',(_,resp)=>{
   resp.render(`${publicpath}/blog`);
});

app.get('/*',(_,resp)=>{	
   resp.render(`${publicpath}/pnf`);
});


app.listen(3000);