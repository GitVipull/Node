var fs= require('fs');


fs.readFile('input.txt',function(err, data){
		if(err){
			console.log(err.stack);
		}
		console.log('Asynch read...'+data.toString());
});

console.log("Asynch End");

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");