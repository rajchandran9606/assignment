//print the greatest of three numbers
let a = 95, b = 456, c = 456;
let result = (a >= b && a >= c) ? `${a} is bigger` : (b >= a && b >= c) ? `${b} is bigger` : `${c} is bigger`;
console.log(result);