const fs = require("fs")
const https = require ("https")


//server: http.Server
const server = https.createServer({
	key:fs.readFileSync('server.key'),
	cert:fs.readFileSync('server.cert')
});

server.on("request",(req,res)=>{
	//res :  http.ServerResponse
	//req:http.IncomingMessage
	res.writeHead(200,{'content-type':'text/plain'})
	res.end("hello")
})


server.listen(443,()=>{
	console.log("running")
})