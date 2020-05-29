const net = require("net")
const server =net.createServer();

var counter=0;
var sockets={};
server.on("connection",socket=>{

	socket.id = counter++;
	sockets[socket.id] = socket;

	console.log("connection made");
	socket.write("welcome\n");

	socket.on("data",data=>{
		console.log(`data from socket ${socket.id} : `, data);
		for(var key in sockets){
			sockets[key].write(`${socket.id} :`)
			sockets[key].write(data);	
		}
		// Object.entries(sockets).forEach(([key,cs])=>{
		// 	cs.write(`${socket.id} :`)
		//  	cs.write(data);
		// })
	});

	socket.on("end",()=>{
		delete sockets[socket.id]
		console.log("connection terminated")
	});

	socket.setEncoding('utf8');
});

server.listen("1234",()=>{

	console.log("listening to socket");
})