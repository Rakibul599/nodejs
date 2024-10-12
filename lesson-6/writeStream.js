const fs=require('fs');
const ourReadsteam=fs.createReadStream(`${__dirname}/bigdata.txt`);
const ourWritestream=fs.createWriteStream(`${__dirname}/output.txt`);
// manually read file with event event listen
// ourReadsteam.on('data',(chunk)=>{
//     ourWritestream.write(chunk);
// })
// same this read with pipe
ourReadsteam.pipe(ourWritestream);