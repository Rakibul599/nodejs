const fs=require('fs');
fs.writeFileSync('myfile.txt',"How are you");
fs.appendFileSync('myfile.txt',' Hellow');
const data=fs.readFile('myfile.txt',(err,da)=>{
    console.log(da.toString())
});
console.log("hellow");