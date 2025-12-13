console.log(2 > 1);    //true
console.log(2 >= 1);    //t
console.log(2 < 1);     //f
console.log(2 == 1);   //f
console.log(2 != 1);    //t

console.log("2" > 1);   //t
console.log("02"> 1);   //t




console.log(null > 1);        //f
console.log(null == 0);      //f
console.log(null >=  0);     //t

console.log(undefined > 0);     //f
console.log(undefined == 0 );     //f
console.log(undefined >= 0);     //f
// The reason is that an equality check == and comparisons > < >= <= work differently.
//Comparisons convert null to a number, treating it as 0.
//That's why (3) null >= 0 is true and (1) null > 0 is false.

console.log("2" === 2);     //false