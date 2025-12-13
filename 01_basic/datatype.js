"use strict"; // treat all JS code as newer version through acient version mean ye ancient version to suppoert krega but use only newer version for syntax

// alert(3+3)   we are using node.js ,not browser
// ecma and mdn

let name = "abc"
let age  =16
let isLogin = true

// datatypes :-> number => 2 power 53
// bigint => large value
//  string => " "(preferred) or ''
// boolean => true/false
//  null => standalone value (empty)
//  undefined => value defined nhi h or value assign nh hui
// symbol => for unique values

// object 

console.log(typeof age );
console.log(typeof null);       // object 
console.log(typeof undefined);  // undefined








//DATAYPE SUMMARY

// 1 => Primitive
// 7 types: String, Number, Boolearn, null, undefined, Symbol,
//BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')

 const anotherId = Symbol('123')

console.log(id === anotherId);   //false

const bigNumber = 3456543576654356754n






// 2 => Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
      name: "hitesh",
      age:22,
}


const myFunction = function(){
console.log("Hello world");
}

console.log(typeof myFunction);      //function 
console.log(typeof myobj);         //object
console.log(typeof heros);        //object

//generally non primitive ka type object function hi aata h 

/*

Type of val            Result

Undefined                "undefined"
Null                     "object"
Boolean                  "boolean"
Number                   "number"
String                   "string"
Object                   "object"
(native and does not implement [[Call]])

Clbject                  "function"
(native or host and does implement [[Call]])

Object                   Implementation-defined except may not be "undefined", "boolean", "number", or "string".
(host and does not implement [[Call]])
*/





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)
let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);