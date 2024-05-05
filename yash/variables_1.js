const accountId = 123 //and also want to use....
let accountEmail = "malviya@gmail.com" //this i want to us....
var accountPassword = "123456"
let accountState;

// accountId = 1111
console.log(accountId)

console.table([accountEmail , accountId , accountPassword , accountState])
// Prefer not to use var
// Becouse of issue of block scope and functional scope