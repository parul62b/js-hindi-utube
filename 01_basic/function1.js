function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
} 

sayMyName();

function addTwoNum(num1 , num2){
    console.log(num1 + num2);
}

const ans = addTwoNum (3,5)     //8
// const ans1 = addTwoNum (10,"15")   //1015 - it's problem in js it take as string
const ans1 = addTwoNum (10,null)   //10 - it take null as 0
console.log(ans1);   

//(num1 =0 , num2=0) - default parameter
// const ans = addTwoNum (3,5) - are argument

const res = addTwoNum ( 10 , 15)
console.log(res);    //undefined - as function not return anything

function addTwoNumReturn(num1 , num2){
    //let sum = num1 + num2
   // return sum
    return num1 + num2
}
const res1 = addTwoNumReturn ( 10 , 15)
console.log(res1);    //25


function loginUserMessage(username  ){
   /* if (username === undefined){
        return "please enter username"
    }*/
   if (!username){
    return "please enter username"
   }
    return ` ${username} just logged in`
}

console.log(loginUserMessage("hitesh"));    // hitesh just logged in
console.log(loginUserMessage()); 


function calculateCartPrice(val1,val2,...num1){
    return num1
}       
const price = calculateCartPrice(200,300,400,500)
console.log(price);      //[ 200, 300, 400, 500 ] - it treat as array

const price1 = calculateCartPrice(200,300,400,500,600,700,800)
console.log(price1);    //[ 400, 500, 600, 700, 800 ]
// rest parameter - it take all the parameter as array
//... spread operator - it spread the array into individual element

//1 way 
const user ={
    firstname: "hitesh",
    price: 3000,
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.firstname} and price is ${anyobject.price}`);
}
handleObject(user);   //username is hitesh and price is 3000

handleObject(user)    //username is hitesh and price is undefined (if price is change to prices then we face this issue)

//2 way -
handleObject({
    firstname: "ashish",
    price: 5000,
})   //username is ashish and price is 5000         

//3 ways -arrays 
const myNewArray = [1,2,3,4,5]
function returnSecondValue(getArray) {
return getArray[1]
}
console.log(returnSecondValue(myNewArray));   //2

//4 way - direct
console.log(returnSecondValue([10,20,30,40,50]));   //20