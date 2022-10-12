// armstrong number or not
let n = 299, rem, val = 0, len = n.toString().length;
let t = n;

while (n > 0) {
	rem = n % 10;
	val = val + Math.pow(rem, len);
	n = Math.floor(n / 10);
}
if (t == val) {
	console.log("armstrong");
}
else {
	console.log("no armstrong");
}
