var express=require('express');
var fs=require('fs');
var app=express();

var bodyParser=require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: 'upload/'});
var type = upload.single('recfile');

//app.use(multer({dest:'./uploads/'}).single('singleInputFileName'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));


app.get('/upload.htm', function(req,res){

	res.sendFile('G:/node' +"/"+'upload.html');
});


app.post('/file_upload',type,function(req, res){

	console.log(req.files.recfile.name);
	console.log(req.files.recfile.path);
	console.log(req.files.recfile.type);

	var file= 'upload/'+'/'+req.files.recfile.name;

	fs.readFile(req.files.file.path, function(req,res){
		fs.writeFile(file,data,function(req,res){

			if(err){
				console.log(err.stack);
			}
			else{
				response={

					message:'file uploaded successfully',
					filename:req.files.recfile.name

				}

				console.log(response);

				res.end(JSON.stringify(response));
			}
		})
	})

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