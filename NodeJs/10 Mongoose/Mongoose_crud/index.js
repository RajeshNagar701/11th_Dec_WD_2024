
// connectivity

var mongoose = require('mongoose'); // import mongoose module
mongoose.connect('mongodb://localhost:27017/shop_db'); // conect mongodb

var express=require('express');
const app=express();
app.use(express.json());


// validation schema
var emp_schema=mongoose.Schema({	
	name:String,
	email:String,
	password:String,
	mobile:Number,
	dob:Date
});


// create model/table appy validation on table coumn
var emp_model = mongoose.model('employees',emp_schema);



// insert data by schema   save();
app.post("/post_emp", async (req, resp) => {
    let data = new emp_model(req.body);
    const result=await data.save();  // save buildin function of mongoose
    resp.send({'success':"Data Inserted success"});
});


// get all data
app.get("/get_emp", async (req, resp) => {
	let result = await emp_model.find()
    resp.send(result);
})


// get data by column

app.get("/get_single", async (req, resp) => {
    let data = await userModel.find({name:"prem"});
    resp.send(data);
})




app.listen(5000);