const month = "march"

switch(month){
    case "jan":
        console.log("jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;   
    default:
      console.log("default case match");
        break;         
}

const useremail = []       // assume krte h ki val true h 
if(useremail){
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

// flassy values = false , 0 , -0 , "" , BigInt 0n, null , undefined , NaN

//truthy values = except above all are truthy values
// some truthy values amaze u  -> "0" , 'false' , " " , [] , {}(empty object) ,function(){}

//how to fing is array empty
 if(useremail.length === 0){
    console.log("Array is empty");
  }

  //find how is object empty
const emptyObj ={}
  if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");

  } 

  //fasle == 0 ->true
  //false == '' ->true
  //0 == '' ->true

// Nullish Coalescing Operator (??): null undefined

//let val1;
// val1 = 5 ?? 10
// val1 = null ??10
// val1 = undefined ?? 15
//val1 = null ?? 10?? 20



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80? console.log("less than 80"): console.log
("more than 80")
