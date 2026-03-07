
const dbConnect= require('./conn');


// SELECT ALL USER COLLECTION DATA

/*
const getdata=async ()=>{
   let data = await dbConnect();
   let result = await data.find({}).toArray();
   console.log(result)
}
getdata();
*/


// SELECT SINGLE COLLECTION DATA

/*
const singledata=async ()=>{
   let data = await dbConnect();
   let result = await data.find({'mobile': '9722041171'}).toArray();
   console.log(result)
}
singledata();
*/



// insert COLLECTION DATA
/*
const insertdata=async ()=>{
   let data = await dbConnect();
   let result = await data.insertMany([
          {name:'akash',email:'akash@gmail.com',password:"1234",mobile:'123454555'},
          {name:'patel',email:'patel@gmail.com',password:"1234",mobile:'123444444'},
          {name:'mihir',email:'mihir@gmail.com',password:"1234",mobile:'123466666'}
      ]
	);
	if(result)
	{
		console.log('data inserted success');
	}
}
insertdata();
*/

/*
const updateData=async ()=>{
    let data = await dbConnect();
    let result = await data.updateMany(
        { mobile:'9722041171'},
        {
            $set:{name:'R Kumar', email:'rkumar@gmail.com'}
        }
      )
	if(result)
	{
		console.warn("data is Updated")
	}
}
updateData();
*/


const deleteData=async ()=>{
	let data = await dbConnect();
	let result = await data.deleteMany({mobile:'123454555'});
	if(result)
	{
		console.warn("data is Deleted")
	}
}
deleteData();

