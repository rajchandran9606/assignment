//fibonacci series
let a = 0, b = 1, c, n = 2;
let i = 2;
console.log(a);
console.log(b);
while (n <= 17) {
	c = a + b;
	console.log(c);
	a = b;
	b = c;
	n++;
}