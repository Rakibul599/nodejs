const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const ourReadsteam=fs.createReadStream(`${__dirname}/bigdata.txt`,'utf8');
    ourReadsteam.pipe(res);
})
server.listen(3000);
console.log("this server is running in 3000");