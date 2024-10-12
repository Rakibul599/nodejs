const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/')
        {
            res.write("hellow programmers")
            res.end();
        }
        else if(req.url==='/about')
            {
                res.write("this is about us page");
                res.end();
            }
            else{
             res.write("Not found");
            res.end();
            }

});
server.listen(3000);

console.log("server running on 3000 port",server.address());