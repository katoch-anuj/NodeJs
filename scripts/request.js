
const http = require ("http")

const req = http.request(
	{hostname:"www.google.com",method:'GET'}, //get is by default so we can skip it, url from where we have to get
	(res)=>{
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
req.end();

