let score = "43hj";
// score = "null" // it will return NaN as it has letters.
// score = null //it will return its value as 0 because it is a object type.
//score = undefined // it will return NaN
//score = true // it will be boolean

let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn);

// 2 types of consoling to get same output
// console.log(typeof score);
// console.log(typeof(score));

// when converting "string or anything to number"ex: chaeck the above score ,it will convert the string but the value would be NaN,
// but if the check the typeOf it, it will be number so make sure to verify or to answer in interview.
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// boolean type
console.log(typeof isLoggedIn);
console.log(typeof booleanIsLoggedIn);

console.log(isLoggedIn);
console.log(booleanIsLoggedIn);
