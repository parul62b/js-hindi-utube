/*
let score = 33
console.log(typeof score); // number

 let scoree ="33abc"
console.log(typeof scoree); // string

let valueInNumber = Number(scoree)
console.log(typeof valueInNumber);  // number
console.log(valueInNumber);  //NAN


let a = null
let valInNumber = Number(a)
console.log(typeof valInNumber);   // number
console.log(valInNumber);  // 0

let b = undefined
let valInNumb = Number(b)
console.log(typeof valInNumb);  //number
console.log(valInNumb);  //NAN


let c = true
let valInNum = Number(c)
console.log(typeof valInNum);  //number
console.log(valInNum); // 1


// "33" => 33
// "33abe" => NAN
// true =>1;false =>0

// let isLogged = 1           // true
//let isLogged = "parul"     // true

let isLogged = ""            //false (for empty)
console.log(isLogged);
let booleanLogged = Boolean(isLogged)
console.log(booleanLogged);   // true


let s = 33
let stringNumber  =String(s)
console.log(stringNumber);          //33
console.log(typeof stringNumber);  // string


*/

//***************************************** */OPERATION****************************************//
let val = 3
let negval = -val
console.log(negval);    //-3

/*
console.log(2+2);        //4
console.log(2-2);        //0
console.log(2*2);        //4
console.log(2/2);        //1
console.log(2**2);       //4
console.log(2%2);        //0
*/

let str ="3"
let str1 = "2"
let str2 = str + str1
console.log(str2);     //32


console.log("1" + 2);                //12
console.log(1 +"2");               //12
console.log("1"+2+2);             //122
console.log(1 + 2 + "3");        // 33

console.log((3 + 4) * 5 % 3);   //2

console.log(true);          // true
console.log(+true);        //1
//console.log(true+);        //error in this line


console.log(+"");       // 1

let num1,num2,num3
num1=num2=num3=2+2      //not readible so it priority

let gameCounter =100
++gameCounter        //101 diff h preceding and post me go to mdn 
gameCounter++         //101
console.log(gameCounter);    