//Immediately Invoked Function Expressions (IIFE)

// use case : to avoid polluting global scope
// to create private scope
//to access data only once
//to use immediately

/*
function chai(){
    console.log("DB connected");
}
    */
   chai();  //DB connected
   
//IIFE

(function chai(){
    console.log("DB connected");
})();
//DB connected
// ; - to end the scope

// console.log(chai);   //ReferenceError: chai is not defined
// as it is in private scope can't access outside
//()- to make function expression,second () to invoke immediately


(function aurcode(){
    console.log(`DB CONNECTED SUCCESSFULLY`);
})()
//DB CONNECTED SUCCESSFULLY

// console.log(aurcode);   //ReferenceError: aurcode is not defined
// as it is in private scope can't access outside


((name) => {
console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')
//DB CONNECTED TWO hitesh