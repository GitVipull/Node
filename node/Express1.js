var express=require('express');
var app=express();

app.get('/',function(req, res){

	res.send("Hello Vipul Home Page");
})

var server=app.listen(8081, function(){

	var host=server.address().address;
	var port=server.address().port;

	console.log("Listening app on the given port..",host, port);
})