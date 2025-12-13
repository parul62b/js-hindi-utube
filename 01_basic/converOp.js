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