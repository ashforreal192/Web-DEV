const accountId = 14455
let accountEmail = "hitesh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId can't be changed as it is a constant
// let and var can be changed but we still prefer to use let over var as var doesn't have any scope because JS didn't have the aspect
// of scope in it in the old days

accountEmail = "hitesh@google.com"
var accountPassword = "1122"
accountCity = "Bangalore"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);


console.table([accountId, accountEmail, accountPassword, accountState, accountCity])
