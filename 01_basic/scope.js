var c = 300;
let a = 100;
if (true){
    let a =10
    const b =20
    var c = 30;
    console.log("INNER",a);         //10

}
console.log(c);        //30
// console.log(a);        //ReferenceError: a is not defined
// console.log(b);      //ReferenceError: a is not defined
console.log("OUTER",a);      //100


//curly braces create block scope

//NESTED SCOPE
function one(){
    const username = "hitesh"
    console.log(username);          //hitesh

    function two(){
        const website = "learnwithhitesh.com"
        console.log(username);      //hitesh
            console.log(website);       //learnwithhitesh.com
    } 
     //console.log(website);  //ReferenceError: website is not defined
    two()
}
one()
//jb parent function ka variable child function me access kr skte h
// lekin child function ka variable parent function me access nhi kr skte h


if (true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "learnwithhitesh.com"
        console.log(username+ " " + website);      //hitesh learnwithhitesh.com
    }
    //console.log(website);   //ReferenceError: website is not defined
}       
//console.log(username);    //ReferenceError: username is not defined

// +++++++++++++++++++ interesting ++++++++++++++++++++
function addone(num){
    return num+1
}
//also define funct ion like this
addTwoNum(5)    // declaring function before it definition gives error
const addTwo = function (num){
    return num + 2
}