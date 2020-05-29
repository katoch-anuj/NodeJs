const http = require ("http")

const server = http.createServer((req,res)=>{
	res.writeHead(200,{'content-type':'text/plain'}) // it introduces Transfer-Encoding: chunked
	res.end("hello jj kaksc")
})

server.listen(1111,()=>{
	console.log("running")
})