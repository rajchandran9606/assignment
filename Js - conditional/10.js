//print the least of given three numbers
let a = 4355, b = 35, c = 243;
let result = (a <= b && a <= c) ? `${a} is smaller` : (b <= a && b <= c) ? `${b} is smaller` : `${c} is smaller`;
console.log(result);