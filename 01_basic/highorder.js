// ["" ,"" ,""]
// [{},{},{}]
const arr = [1,2,3,4,5]
for(const num of arr){
 console.log(num);
}
//1
//2
//3
//4
//5


const myObj ={
'game1': 'NFS',
'game2': 'Spiderman'
}
/*
for (const [key, value] of myObj) {
console.log(key, ':-', value);
} // myObj is not iterable so other way to iterate object is used below

*/

// FOR IN LOOP
//used for iterating object

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject){
    console.log(key, ':-', myObject[key]);     //js :- javascript  cpp :- C++  rb :- ruby  swift :- swift by apple

}

for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`);  //js :- javascript  cpp :- C++  rb :- ruby  swift :- swift by apple
}

const languages = ['javascript', 'C++', 'ruby', 'swift']

for (const key in languages){
    console.log(key);  //0 1 2 3  ..gives index of array or keys

}
//for values in array
for (const index in languages){
    console.log(languages[index]); //javascript C++ ruby swift ..gives values of array
}

//map are not iterable using for in loop
const myMap = new Map();
myMap.set(1, 'one');
myMap.set(2, 'two');
myMap.set(3, 'three');

for (const key in myMap){
    console.log(key); //empty as map is not iterable using for in loop
}  

// FOR EACH LOOP
// used for iterating array and map

const coding = ['javascript', 'C++', 'ruby', 'swift', 'python']

// coding.forEach(function(val){
//     console.log(val);             //javascript C++ ruby swift python
// });


// coding.forEach((item) => {
//     console.log(item);             //javascript C++ ruby swift python

// })

function printMe(item){
    console.log(item);             //javascript C++ ruby swift python
}
coding.forEach(printMe);
//function name is passed as argument without parenthesis
//function is called here for each item in the array


//arrow function with multiple arguments
coding.forEach((item,index,arr)=>{}){    //it takes three arguments item,index,array
    console.log(item, index, arr);
    //javascript 0 [ 'javascript', 'C++', 'ruby', 'swift', 'python' ]
    //C++ 1 [ 'javascript', 'C++', 'ruby', 'swift', 'python' ]
    //ruby 2 [ 'javascript', 'C++', 'ruby', 'swift', 'python' ]
    //swift 3 [ 'javascript', 'C++', 'ruby', 'swift', 'python' ]
    //python 4 [ 'javascript', 'C++', 'ruby', 'swift', 'python' ]
}


//["" ,"" ,""]
//[{},{},{}] - array of objects used in for each loop

const users = [
    {languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    },
    {
        languageName : "ruby",
        languageFileName : "rb"
    }
]

users.forEach((user)=>{
    console.log(` ${user.languageName} is ${user.languageFileName}`);
   // javascript is js
   // C++ is cpp
   // ruby is rb
})    

