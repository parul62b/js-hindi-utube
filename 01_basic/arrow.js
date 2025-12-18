const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to the course`);
        console.log(this); //{ username: 'hitesh', price: 999, welcomeMessage: [Function: welcomeMessage]
    }
    }   
user.welcomeMessage();   //hitesh , welcome to the course   
user.username = "sam"
user.welcomeMessage();   //sam , welcome to the course

console.log(this);   //{} - empty object in node js
// in browser it take window object

function chai(){
    let username = "hitesh chaiwala"
    console.log(this.username);  //undefined in node js
}
chai();
/*
const addTwo = (num1 , num2) => {
   return num1 + num2
}
//agar curly braces h toh return krna h toh explicitly return krna pdega

const addTwo = (num1 , num2) => num1 + num2
//agar single line h toh implicitly return kr dega
//agar paranthesis h toh arrow function me direct add hoga no need to write return 
*/
const addTwo = (num1 , num2) => ({username : "hitesh"})  //return object from arrow function -hitesh
const ans = addTwo (3,5)
console.log(ans);    //8


const myArray = [1,2,3,4]
myArray.forEach
