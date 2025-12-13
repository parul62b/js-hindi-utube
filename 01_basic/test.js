console.log("fpp");
const accountId = 123;
let accountEmail ="wse123@gmail.com";
var accountName = "jaipur";
accountCity = "abc"

// accountId = 234; not allowed for constant


console.log(accountId);
console.log(accountName);

let accountState;//undefined


accountEmail ="abs234@gmail.com";
accountName = "indore";

// for printing all thing at once 
console.table([accountName,accountId,accountEmail,accountCity,accountState]);


/* conclusion: # let,const ka use kre ;
# var ka use nhi bcoz easy to change h ;
# some variables w/o assign bhi use hota jase accountCity pr hme nhi krna ;
# use table if want to print too many var's
# const change nhi hota but baki lastest assign pr kaam krte h 
*/
