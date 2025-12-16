// DATE
let myDate = new Date()
console.log(myDate);     //2025-12-16T13:21:19.471Z it is standard that is default
console.log(myDate.toString());     //Tue Dec 16 2025 13:23:17 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());                // Tue Dec 16 2025
console.log(myDate.toISOString());                 // 2025-12-16T14:13:38.068Z
console.log(myDate.toJSON());                      // 2025-12-16T14:13:38.068Z
console.log(myDate.toLocaleString());              // 12/16/2025, 2:13:38 PM
console.log(typeof myDate);                        //object

let myCreateDate1 = new Date(2023 , 0,23)           // we NOTE that month start at 0 in js
console.log(myCreateDate1);                                                   //2023-01-23T00:00:00.000Z
//let myCreateDate = new Date(2023 ,0,23,5,3)          //1/23/2023, 5:03:00 AM
//let myCreateDate = new Date("2023-01-23")             // 1/23/2023, 12:00:00 AM   here jan start from 1
                      //(YYYY - MM - DD)
let myCreateDate = new Date("01-14-2023")             //1/14/2023, 12:00:00 AM
                          //(MM -DD -YYYY) IN INDIA WE generally use this 
console.log(myCreateDate.toLocaleString());
 


let myTimeStamp = Date.now() 
console.log(myTimeStamp);                             // 1765898791658  
console.log(myCreateDate.getTime());                  // 1673654400000     (for comparing time or date)
console.log(Math.floor(Date.now()/1000));             //1765898791


let newDate = new Date()
console.log(newDate);                                 //2025-12-16T15:26:31.658Z
console.log(newDate.getMonth());                       //11
console.log(newDate.getDay());                        //2


//string interpolation also use for date
//  `${newDate.getDay()} and the time

newDate.toLocaleString('default',{
    weekday:"long",
})
 