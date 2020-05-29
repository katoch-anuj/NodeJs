const fs = require("fs");

const path = require("path")

const dirname = path.join(__dirname,'creatingTestFile');

const files = fs.readdirSync(dirname);
const time = 24*60*60*1000;

files.forEach((file)=>{
	const filePath = path.join(dirname,file)
	fs.stat(filePath,function(err,stat){
		if(err) throw err;
		//console.log(stat.mtime.getTime())

		if((Date.now()-stat.mtime.getTime()>7*time)){
			fs.unlink(filePath,function(err){
				console.log(`${filePath} delted`)
			})
		}
	})
})

