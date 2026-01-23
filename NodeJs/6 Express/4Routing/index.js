
var express=require('express');

var app=express();

app.get('/',(req,res)=>{
	
	res.send('<h1>Hello word</h1>');
})

app.get('/about',(req,res)=>{
	
	res.send('<h1>Hello about</h1>');
})

app.get('/contact',(req,res)=>{
	
	res.send('<h1>Hello contact</h1>');
})

app.get('/blog',(req,res)=>{
	
	res.send('<h1>Hello blog</h1>');
})

// Get parameter by Routing
//http://localhost:3000/argument?name=rajesh

app.get('/argument',(req,res)=>{
	console.log('Data sent by Browser', req.query) // get object
	res.send(`<h1>Hello argument : ${req.query.name}</h1>`);
})

app.get('/data/:userid', (req, res) => {
  console.log('User ID Parameter:', req.params.id);
  res.send(`user Id is : ${req.params.userid}`);
});



app.listen(3000);
