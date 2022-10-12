//reverse of digit of numbers
let n = 12345, rem, result = 0;
while (n > 0) {
	rem = n % 10;
	result = result * 10 + rem;
	n = Math.floor(n / 10);
}
console.log(result);
