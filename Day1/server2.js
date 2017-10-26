var express = require('express');
var serverInstance = express();

serverInstance.use(express.static('.'));

serverInstance.get('/abc', function(req, res){
	res.send("Hi, there!");
});

serverInstance.get('/def/X/1', function(req, res){
	console.log("I received an incoming http request at: " + req.url);
	res.send({"Jagadeesh":"Rampam", "rollno": 102606, "emp": {"id": 66201, "employer": "VMware", "years": "2006-09"}});
});

serverInstance.listen(80,function(){
	console.log("http RESTified Server started successfully at Port 80");	
});