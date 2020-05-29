const net = require("net")
const server =net.createServer();

var counter=0;
server.on("connection",socket=>{

	socket.id = counter++;
	
	console.log("connection made");
	socket.write("welcome\n");

	socket.on("data",data=>{
		console.log(`data from socket ${socket.id} : `, data);
		
		socket.write(`${socket.id} :`)
		socket.write(data);	
		
		
	});

	socket.on("end",()=>{
		console.log("connection terminated")
	});

	socket.setEncoding('utf8');
});

server.listen("1234",()=>{
	console.log("listening to socket");
})