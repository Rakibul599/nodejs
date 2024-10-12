const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=='/')
        {
            res.write('<html><head><title>form</title></head>');
            res.write("<body><form method='post' action='/process'><input name='message'/></form></body>")
            res.end();
        }
        else if(req.url==='/process' && req.method==='POST' )
            {
                const body=[];
                req.on('data',(chunk)=>{
                   body.push(chunk);
                        // console.log(chunk);

                });
                req.on('end',()=>{
                    const parsebody=Buffer.concat(body).toString();
                    console.log(parsebody);
                    res.write("thanks for submit");
                    res.end();
                })
               
            }
            else
            {
                res.write("not find");
            }

})
server.listen(30000);
console.log("server is running in 3000 port");





// const fs=require('fs');
// const ourReadsteream=fs.createReadStream(`${__dirname}/bigdata.txt`,'utf8');
// ourReadsteream.on('data',(chunk)=>{
//     console.log(chunk);
// });