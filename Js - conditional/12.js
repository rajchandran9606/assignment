//print the given three numbers in descending order
let result = (a = 100, b = 100, c = 444);
/*
switch (result) {
	case a, b, c: if (a >= b && a >= c && b >= c) {
		console.log(a, b, c);
	}
		break;
	case b, c, a: if (b >= c && b >= a && c >= a) {
		console.log(b, c, a);
	}
		break;
	case c, a, b: if (c >= a && c >= b && a >= b) {
		console.log(c, a, b);
	}
		break;
	case a, c, b: if (a >= c && a >= b && c >= b) {
		console.log(a, c, b);
	}
		break;
	case b, a, c: if (b >= a && b >= c && a >= c) {
		console.log(b, a, c);
	}
		break;
	case c, b, a: if (c >= b && c >= a && b >= a) {
		console.log(c, b, a);
	}
		break;
	default: console.log("Number is not valid");
}*/

if (a >= b && a >= c && b >= c) {
	console.log(a, b, c);
}
else if (b >= c && b >= a && c >= a) {
	console.log(b, c, a);
}
else if (c >= a && c >= b && a >= b) {
	console.log(c, a, b);
}
else if (a >= c && a >= b && c >= b) {
	console.log(a, c, b);
}
else if (b >= a && b >= c && a >= c) {
	console.log(b, a, c);
}
else {
	console.log(c, b, a);
}