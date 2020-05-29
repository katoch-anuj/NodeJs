const fs = require("fs");

const path = require("path")

const dirPath = path.join(__dirname,"creatingTestFile")

if(!fs.existsSync(dirPath)){ //exists is no longer present
	fs.mkdirSync(dirPath);
	
}


const time=24*60*60*1000;

for (var i=0;i<10;i++){
	const filePath = path.join(dirPath,`files${i}`)
		const updateTime=(Date.now()-time*i);

		fs.writeFile(filePath,updateTime,function(err){
	 	if(err) throw err
	 	fs.utimes(filePath,updateTime/1000,updateTime/1000,function(err){ //access Time ad modified time in seconds
	 		if (err) throw err
	 	})
	 })
}

//use ls -l directory name to get all files along with dates