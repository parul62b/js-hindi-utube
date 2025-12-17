const marvel_hero = ["thor" ,"ironman","spiderman"]
const dc_hero = ["superman","flash" ,"batman"] 

//marvel_hero.push(dc_hero)           //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// it treats as element of array 
//console.log(marvel_hero);
// console.log(marvel_hero[3][1]);


//for joining the array we use concat and it declare as new  array added
//Combines two or more arrays. This method returns a new array without modifying any existing arrays.


const con = marvel_hero.concat(dc_hero);
console.log(con);

//shift uses infinity arrays to concatenate
const all_new_hero = [...marvel_hero ,...dc_hero] 
console.log(all_new_hero)                                        //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [[1, 2, 3, 4, 5, 6], 7, 6, 7,[4,5]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);                                     //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5]


console.log(Array.isArray("Hitesh"))              //false
console.log(Array.from("Hitesh"))                //[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting  [] 


let score1 = 100
let score2 = 200
let score3 =300
console.log(Array.of(score1,score2,score3));     //[ 100, 200, 300 ]
