const net = require("net")
const server =net.createServer();

var counter=0;
var sockets={};
server.on("connection",socket=>{

	socket.id = counter++;
	

	console.log("connection made");
	socket.write("welcome\n");
	socket.write("please enter your name:");

	socket.on("data",data=>{
		console.log(`data from socket ${socket.id} : `, data);
		
		if(!sockets[socket.id]){
			sockets[socket.id] = socket;
			socket.name=data.toString().trim();// to string o conver from buffer to string
			return
		}
		Object.entries(sockets).forEach(([key,cs])=>{
			if(socket.id == key){
				return
			}
			cs.write(`${socket.name} :`)
		 	cs.write(data);
		})
		//NOTE: we have to use for each because return end the loop
	});

	socket.on("end",()=>{
		delete sockets[socket.id]
		console.log("connection terminated")
	});

	//socket.setEncoding('utf8'); // if we disable it then on server we will get data in form of buffer
});

server.listen("1234",()=>{

	console.log("listening to socket");
})