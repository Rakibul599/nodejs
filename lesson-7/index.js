/*
 * Title: Quotes Library
 * Description: Utility library for getting a list of Quotes
 * Author: Rakibul Alam
 * Date: 16/09/24
 *
 */

//Dependencies
const mathLibrary=require('./lib/math');
const qutesLibrary=require('./lib/quotes/index')

const app={}  //empty object for module scaffolding

app.config={
    deffTime:1000 //millisecond

}
//print the qutes
app.printQutes=function printQutes()
{


    const allqutes=qutesLibrary.allQutes();
    const allquteslength=allqutes.length;
    const randomnum=mathLibrary.getRandomNumber(allquteslength);
    const slectQutes=allqutes[randomnum];
    console.log(slectQutes);


}
app.infinitee=function Infinitee()
{
    setInterval(app.printQutes,app.config.deffTime);
}
app.infinitee();