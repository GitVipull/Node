var express=require('express');
var app=express();

app.get('/', function(req, res){
	console.log('Got a request for Home page data');
	res.send("Hello home page");
});


app.get('/list_user', function(req, res){
	console.log('Got a request for List user Get');
	res.send("List user get is called");
});

app.delete('/del_user', function(req,res){

	console.log("Got a request for Delete user");
	res.send("deleting the user");
});

app.post('/', function(req, res){
	console.log("got a post request for homepage");
	res.send('hello Post');
});

var server= app.listen(8081, function(){

	var host= server.address().address;
	var port=server.address().port;

	console.log("App is beng listened at the port number..",host,port);
});

