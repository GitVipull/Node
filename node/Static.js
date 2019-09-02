var express=require('express');
var app=express();
var bodyParser=require('body-parser');

var urlencodedParser=bodyParser.urlencoded({extended:false});


app.use(express.static('public'));

app.get('/index.htm', function(req,res){

	res.sendFile('G:/node' +"/"+'index.html');
});

app.post('/process_post',urlencodedParser,function(req, res){

	response={

		firstName: req.body.first_name,
		lastName: req.body.last_name
	}

	console.log(response);

	res.end(JSON.stringify(response));
})

var server=app.listen(8081, function(){

	var host=server.address().address;
	var port=server.address().port;

	console.log("listening on the given port..",host, port);
})