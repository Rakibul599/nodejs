const path=require('path');
let mypath='/home/rakibul/Desktop/nodejsr/people.js';
console.log(path.basename(mypath));
console.log(path.parse(mypath));
console.log(path.delimiter)