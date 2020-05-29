
const http = require ("http")

//rwq: http.ClientRequest
const req = http.get(
	{"http://www.google.com",method:'GET'}, //get is by default so we can skip it, url from where we have to get
	(res)=>{
		//res:http.IncomingMessage
		console.log(res.statusCode);
		console.log(res.headers);
		res.on("data",data=>{
			console.log(data.toString())
		})
	}

)

req.on("error",(err)=>{
	console.log(err)
})

console.log(req.Agent) //http.Agent

