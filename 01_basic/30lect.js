// const coding = ['JavaScript', 'Python', 'C++', 'Java', 'Ruby'];

// const values = coding.forEach((item) => {
//     console.log(item);             //JavaScript Python C++ Java Ruby
//        return item;        // it not return anything 
//        //undefined
// });


const myNums = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => num >4)
console.log(newNums);  //[ 5, 6, 7, 8, 9, 10 ]
// w/o curly braces ye khud hi return kr dega
// filter method new array return krta hai
//agar scope lgaya toh return krna padega




// const newNums2 = myNums.filter((num) => {
//     return num >4
// })



myNums.forEach((num) => {
    if(num >4){
       newNums.push(num);   //5 6 7 8 9 10
    }
});
console.log(newNums);  //[ 5, 6, 7, 8, 9, 10 ]



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981 ,edition: 2002},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992 ,edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1999 ,edition: 2007},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989 ,edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 2009 ,edition: 2014},
    { title: 'Book Six', genre: 'Fiction', publish: 1987 ,edition: 2011},
]

let newBooks = books.filter((book) => book.genre === 'Science' && book.publish > 2000);
 //[ { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 } ]

 newBooks = books.filter((book) => {
    return book.genre === 'Science' && book.publish > 2000
 });                  // agr curly braces use kr rhe ho toh return krna padega
 //  [ { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 } ]
console.log(newBooks); 



// filter method ka use krke hum kisi bhi array se specific criteria k basis pr naya array bana skte hain
// filter method original array ko modify nhi krta balki ek naya array return krta hai jo criteria pr khra utarta hai

// FILTER MAP AND REDUCE IN JAVASCRIPT

const myNumber = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10]
constnewNums =myNumber.map((num)=>num *10);
console.log(constnewNums);  //[10,20,30,40,50,60,70,80,90,100]

// map method bhi ek naya array return krta hai jisme hum original array k har element pr koi operation kr skte hain
// map method original array ko modify nhi krta balki ek naya array return krta hai jisme humne har element pr operation kiya hota hai

constnewNums = myNumber.map((num) => {return num * 10});
console.log(constnewNums);  //[10,20,30,40,50,60,70,80,90,100]

const newNums1 = myNumber.map((num)=>{num*10}).map((num)=>num+1).filter((num)=>num>=40)
console.log(newNums1);  //[ 40, 50, 60, 70, 80, 90, 100, 101 ]
//it called chaining method by chaining we can apply different function to array one after another


// REDUCE METHOD

// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place.

const myNums2 =[1,2,3]
const myTotal = myNums2.reduce(function (accumulator, currentValue) {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;      
}, 0);   //0 is initial value
console.log(myTotal);  //6

//Accumulator: 0, Current Value: 1
//Accumulator: 1, Current Value: 2
//Accumulator: 3, Current Value: 3
//6

// in first iteration accumulator is 0 (initial value) and current value is 1
// in second iteration accumulator is 1 (returned value from first iteration) and current value is 2
// in third iteration accumulator is 3 (returned value from second iteration) and current value is 3
// finally it returns the total sum which is 6

const myTotal2 = myNums2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(myTotal2);  //6


const shoppingCart = [
    { item: 'Book', price: 15.99, quantity: 2 },
    { item: 'Pen', price: 1.99, quantity: 5 },
    { item: 'Notebook', price: 6.49, quantity: 3 },
];

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0);
console.log(priceToPay);  //34.44