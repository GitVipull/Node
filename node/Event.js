var events = require('events');

var eventEmitter = new events.EventEmitter();


var connectHandler= function connected(){
	console.log("connected..");



	eventEmitter.emit('Data_Received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('Data_Received', function(){

	console.log("Data received successfully");
})


eventEmitter.emit('connection');

console.log("Program end");