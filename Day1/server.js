var express = require('express');
var serverInstance = express();
var fileSystem = require("fs");

serverInstance.get('/', function(req,res){
	fileSystem.readFile('Main.html', function(err, data) {
		if(err){
			return console.error(err);
		}
		//console.log("Asynchronous read: " + data.toString());
		console.log("Sending this data to client: " + data.toString());
		res.send(data.toString());
	});
});

serverInstance.get('/styles.css', function(req,res){
	fileSystem.readFile('styles.css', function(err,data){
		if(err){
			return console.error(err);
		}
		res.send(data.toString());
	});
});

serverInstance.get('/abc', function(req, res){
	res.send("Hi, there!");
});

serverInstance.get('/def/X/1', function(req, res){
	res.send("I'm at "+ req.url);
});

serverInstance.listen(80,function(){
	console.log("http RESTified Server started successfully at Port 80");	
});