// console.log("Sanity Check!!");

// Include http and fs
var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res)=>{
	console.log("Someone connected via HTTP");
	fs.readFile('index.html', 'utf-8',(error, fileData)=>{
		if(error){
			// responsd with a 500 error!!
			res.writeHead(500,{'content-type':'text/html'});
			res.end(error);
		}else{
			// the file was able to be read in
			res.writeHead(200,{'content-type':'text/html'});
			res.end(fileData);
		}
	});
});

// Include the server versino of socketIo and assign it to a variable
var socketIo = require('socket.io');
// Sockets are going to listen to the server which is listening on port 8080.
var io = socketIo.listen(server);

server.listen(8080);
console.log("Listening on port 8080...");