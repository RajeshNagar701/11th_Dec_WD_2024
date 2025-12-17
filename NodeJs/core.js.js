console.log('Helo word');  // core module global

const  fs=require('fs');   // core module Non global 
fs.writeFileSync('Hello.txt','Hello all');



