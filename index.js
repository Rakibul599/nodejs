
// setTimeout(() => {
//     console.log("test")
// }, 1000);
// console.log(global)
// console.log(__dirname)
// console.log(__filename)

const res=require('./people');
const lods=require('lodash')
console.log(res.name1);
console.log(res.a);
res.test();
console.log(lods.last(res.name1));
