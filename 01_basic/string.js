const name ="sara"
const repoCount = 50

console.log(name + repoCount + "value");   // sara50 value
// lod method that's not look nice in newer version

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
// Hello my name is sara and my repo count is 50
//  `` -> backtick basically use for string interpolation 
// ${...} hum iske andar funct bhi lga skte h like sara.tolower();;etc


const gameName = new String('hitesh');  
console.log(gameName[0]);                    //h
console.log(gameName.__proto__);              //{} -> object abhi empty dekh rha h but h nhi 
// that doesn't mean that we have to use (prototype)__proto__.(function) always so we directly use syntax.tolowecase etc ...

console.log(gameName.toUpperCase());    //HITESHHC
console.log(gameName.length);             //8
console.log(gameName.charAt(2));          //t       remain original string not effect by above funct
console.log(gameName.indexOf('t'));       //2
// NOTE : IN indexOf(' character') -> u can't pass (t) it show index value not char;


// if want to slice string 
const newString = gameName.substring(0,4);         //hite
//here the last in not included that mean 4 is not including
console.log(newString);

// substring me neg val diya toh ye obey nhi krega ans ye starting se hi dega (-8,4)X

const anotherString = gameName.slice(-2,4); //6-2 =4 ->(4,4) result " "(empty string)
/*(-8,4)  6-8=-2 
 Length of "hitesh" = 6

-8 → 6 - 8 = -2

JS treats negative start less than 0 as 0
*/


console.log(anotherString);
const str =gameName.slice(0,4);
console.log(str);
/*
How slice(start, end) works

start → index to begin

end → index before which to stop

Negative index → counts from the end of string. */

const newStringOne ="  Rahul   "
console.log(newStringOne);            //   Rahul   
console.log(newStringOne.trim());       //Rahul it trim the extra spaces

const url ="https://rahul.com/rahul%20asd"
console.log(url.replace('%20','-'))        //https://rahul.com/rahul-asd
//replace it
console.log(url.includes('sundar'))        //false. ->is that word present in string or not (true/false)

const gameeName = "ras-sdf-dfg-trfgf"
console.log(gameeName.split('-'))         //[ 'ras', 'sdf', 'dfg', 'trfgf' ]
 //convert str into array
 
 