
// connectivity

var mongoose = require('mongoose'); // import mongoose module
mongoose.connect('mongodb://localhost:27017/shop_db'); // conect mongodb

var express=require('express');
const app=express();
app.use(express.json());


// validation schema
var emp_schema=mongoose.Schema({	
	name:{
		type: String,
        required: true},
	email:{
		type: String,
		unique: true,
        required: true},
	password:{
		type: String,
        required: true},
	mobile:{ 
		type: String,
		required: [true, "Mobile number is required"],
		match: [/^[0-9]{10}$/, "Enter valid 10 digit mobile number"]},
	dob:{ 
		type: Date,default: Date.now}
});


// create model/table appy validation on table coumn
var emp_model = mongoose.model('employees',emp_schema);

// insert data by schema   save();
app.post("/post_emp", async (req, resp) => {
    let data = new emp_model(req.body);
    const result=await data.save();  // save buildin function of mongoose
	resp.send(result);
    
});


// get all data
app.get("/get_emp", async (req, resp) => {
	let result = await emp_model.find()
    resp.send(result);
})

// get data by column
app.get("/get_single", async (req, resp) => {
    let data = await emp_model.find({name:"pinal nagar"});
    resp.send(data);
})

// get data by id
app.get("/get_single1/:_id", async (req, resp) => {
	console.log(req.params)
    let data = await emp_model.find({_id:req.params});
    resp.send(data);
})

// search data by patern column  
app.get("/search/:key", async (req, resp) => {	
	//console.log(req.params.key);
	let data = await emp_model.find({
		"$or":[
                {name:{$regex:req.params.key,$options: "i" }},  //$option  for case incensitive
				{email:{$regex:req.params.key,$options: "i" }}
              ]
	});
    resp.send(data);
});


// delete data
app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await emp_model.deleteOne(req.params);
    resp.send(data);
});




app.listen(5000);