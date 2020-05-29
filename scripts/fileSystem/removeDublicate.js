const fs = require("fs");
const path = require("path")

const dirname = path.join(__dirname,"/duplicate");
// const dirname = path.resolve("/duplicate");
// console.log(dirname)

const files =  fs.readdirSync(dirname);

files.forEach((file)=>{
	const filePath = path.join(dirname,file);

	fs.stat(filePath,function(err,stat){
		if(err) throw err;
		const size=stat.size/2
		console.log(size)
		
		fs.truncate(filePath, parseInt(size),(err)=>{ // parseInt is imp to round up as file size can be in decimals
			if(err) throw err;
		})
	})
})
