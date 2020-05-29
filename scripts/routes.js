const fs = require("fs")
const http = require ("http")


const server = http.createServer();
const data={}

server.on("request",(req,res)=>{
	console.log(req.url)
	switch(req.url){
		case "/json":
		res.writeHead(200,{'content-type':'application/json'})
		res.end(JSON.stringify(data));
		case '/body':
		case "/home":
			res.writeHead(200,{'content-type':'text/html'}) //'text/html' cz its html file
			res.end(fs.readFileSync(`./../html${req.url}.html`))
			break;
		case '/':
		//res.end("root element")
		res.writeHead(301, {'Location':"/body"});
		res.end();
		break;
		default:
		res.writeHead(404)
		res.end()

	}
})


server.listen(1111,()=>{
	console.log("running")
})