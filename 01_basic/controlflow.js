// IF LOOP 

const isUserLoggedIn = true
const temp =41

if(temp === 41){
    console.log("executed")
}
else{
    console.log("temp >50")
}
console.log("temp is good")

// < ,> ,<= ,>= , != ,!==

//=== -> check val and type too ; == -> check value only (2 == "2") true for == 


const score = 200
if(score >100){
    let power = "fly"
    console.log(`User power :${power}`);     //User power :fly

}
console.log(`User power:${power}`);        //ReferenceError: power is not defined
// it fine bcoz actually it is within if scope call outside it give error

//impicit scope -> maan liyea h ki itna scope h 
if(balance < 500) console.log("test") ,console.log("test2"); // likh skte h w/o scope comma lga ke but not a good practice



// NESTING LOOP
const balance = 130;
if(balance < 100){
    console.log("balance is < 100");
}
else if(balance >200){
    console.log("balance is >200")

}
else {
    console.log("balance is b/w 100 &200");
}