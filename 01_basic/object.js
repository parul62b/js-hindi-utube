// objects are created by two methods :
// 1.singleton
// Object.create - this is constructor method 




// 2.object literals


const mySym = Symbol("key1")


const JsUser = {
name: "Hitesh",
"full name ":"ashi jain",
[mySym]:"mykey1",
age: 18,
location: "Jaipur",
email: "hitesh@google.com",
isLoggedIn: false,
lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)    //method1 - a way to acess object but not ideal
console.log(JsUser["email"])  //method2
console.log(JsUser["full name"])  // u can't access w/o this format as it is string not access by method 1
console.log(JsUser[mySym])
// w/o square bracket it not take as symbol typeof is string 


JsUser.email = "hitesh@chatgpt.com"  // overwrite the email
//Object.freeze(JsUser) // by it obj lock won't change
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting());  //Hello JS user
console.log(JsUser.greeting)      //[Function (anonymous)]

JsUser.greeting2 = function(){
    console.log(`Hello JS users,${this.name}`)
}
console.log(JsUser.greeting2());         //Hello JS users,Hitesh