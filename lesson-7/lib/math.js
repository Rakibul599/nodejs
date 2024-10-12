/*
 * Title: Math Library
 * Description: Utility library for math-related functions
 * Author: Rakibul Alam
 * Date: 07
*/
// Math Object for Scaffolding
math={};

// Function for return random number off qutes array
math.getRandomNumber=function getRandomNumber(max){
        let maxiMum=max;
        let randomNum=Math.floor(Math.random()*maxiMum); //store in random number within max number range
        return randomNum;/* return random number */

}
// console.log(math.getRandomNumber(5));
module.exports=math;