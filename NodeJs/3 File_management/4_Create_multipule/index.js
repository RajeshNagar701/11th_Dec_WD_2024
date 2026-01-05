const fs = require('fs');

//path Module
const path = require('path');  // folder module
const dirpath=path.join(__dirname,'public/demo')

//create file in crud folder


for(i=1;i<=100;i++)
{
	fs.writeFileSync(`${dirpath}/hello${i}.txt`,`Your Roll No is : ${i}`)
	
	/*
	fs.unlinkSync(`${dirpath}/hello${i}.txt`,(err)=>{
	if(!err) console.log("file is deleted")
	});
	*/

}




