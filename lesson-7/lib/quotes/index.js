/*
 * Title: Quotes Library
 * Description: Utility library for getting a list of Quotes
 * Author: Rakibul Alam
 * Date: 16/09/24
 *
 */

const fs=require('fs'); // Dependecies

const qutes={}  //empty object  Module scaffolding

//this function return the all qutes to user
qutes.allQutes=function allQutes()
{
    const fileContent=fs.readFileSync(`${__dirname}/qutes.txt`,'utf8') //read the file
    const arrayQutes=fileContent.split(/\r?\n/); //convert into array line by line
    return arrayQutes;


}
module.exports =qutes;