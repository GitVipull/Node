var fs=require('fs');

var data="This is data which should be in the file";

var writeStream=fs.createWriteStream('output.txt');

writeStream.write(data, 'UTF8');

writeStream.end();

writeStream.on('finish', function(){

	console.log("Data is written successfully");
});

writeStream.on('error', function(err){

	console.log(err.stack);
});

console.log('Prgram is end');