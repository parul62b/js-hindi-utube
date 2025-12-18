
/*
// object declare by singleton
const tinderUser = new Object () //declare as singleton {}
// const tinderUser = {}        //{}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);    //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
email: "some@gmail.com",
fullname: {
userfullname: {
firstname: "hitesh",
lastname: "choudhary"
}
}
}
console.log(regularUser.fullname);   //{ userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
console.log(regularUser.fullname.userfullname); // { firstname: 'hitesh', lastname: 'choudhary' } 
// ? is val not exist 

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj3 = {5: "a" , 6: "b"}

// const obj4 ={obj1,obj2}                           //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
 const obj4 = Object.assign({} ,obj1 ,obj2 ,obj3)     //{  '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//const obj4 = {...obj1,...obj2}            //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj4);


console.log(tinderUser);                                        //{ id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys (tinderUser));                          //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values (tinderUser));                   //[ '123abc', 'Sammy', false ]
console.log(Object.entries (tinderUser));                    //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn'));      //true

*/



const  course = {
    coursename :"js in hindi",
    price : "999",
    courseInstructor:"hitesh"
}

//course.courseInstructor
const {courseInstructor: instructor} = course
// console.log(courseInstructor);          //hitesh
console.log(instructor);            //hitesh


// destructuring with nested objects
{
//"name": "hitesh",
//"coursename": "js in hindi",
//"price": "free"
// }


//arrays destructuring
[
{},
{},
{}
]