const score =400
console.log(score);    //400         it is number type

const balance = new Number(100)
console.log(balance);                     //[Number:100] it shows number type in number

console.log(balance.toString());          //convert num into str so type is string 
//string krte hi extra properties add ho jati h jase .length,.toLowerCase()etc


console.log(balance.toFixed(1));       //100.0
//if .toFixed(2) ->100.00

const otherNumber = 23.8966        //23.9
console.log(otherNumber.toPrecision());
/*
(method) Number.toPrecision(precision?: number | undefined): string
Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

precision — Number of significant digits. Must be in the range 1 - 21, inclusive.*/

/* 
if val = 123.8966  -> precision(3)   res = 124
                   -> precision(4)   res = 123.9
*/
                 
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));        // 10,00,000  
//en-IN is indian number system by default it is usa based(the comma pattern )



// ++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math);              //Object[Math]  {}
console.log(Math.abs(-4));               //4
console.log(Math.round(4.6));            //5
console.log(Math.ceil(4.2));             //5
console.log(Math.floor(4.9));            //4
console.log(Math.min(4,3,6,8));          //3
console.log(Math.max(4,3,6,8));          //8

console.log(Math.random());                          // 0.3899508505154795
console.log(Math.random()*10 +1);                    //4.751280076288567
console.log(Math.floor(Math.random()*10 +1));       //8

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min +1))+min);    //16
