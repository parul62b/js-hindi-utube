// arrray

const myArr = [0,1,2,3,4,5]
console.log(myArr[0]);

// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.

// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you

// ARRAY METHODS

myArr.push(6)
myArr.push(7)
console.log(myArr);            //[0, 1, 2, 3,4, 5, 6, 7]
myArr.pop()                   //[0, 1, 2, 3,4, 5, 6]
   

myArr.unshift(9)                  //[9, 0, 1, 2,3, 4, 5, 6]
myArr.shift()                     // [  0, 1, 2, 3, 4, 5, 6]    -no argument as pop


console.log(myArr.includes(9));       //false(gives boolean values)
console.log(myArr.indexOf(3));        //3  return -1 when element is no there

const newArr  =myArr.join()
console.log(myArr); 
console.log(newArr);                       //0,1,2,3,4,5,6 conveert arr to string

//SLICE ,SPLICE

console.log("A" , myArr);                   //A [0, 1, 2, 3, 4, 5, 6]

const myn1 = myArr.slice(1,3)

console.log(myn1);                           //[ 1, 2 ]     last in not included
console.log("B" , myArr);                    // B [0, 1, 2, 3,4, 5, 6]  no change in og

const myn2 = myArr.splice(1,3)
console.log(myArr);                     //[ 0, 4, 5, 6 ]       og change remove range from arr
console.log("C",myn2);                 //C [ 1, 2, 3 ]         and last is included