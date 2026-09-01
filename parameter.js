// 1
function hello(message) {

	let message = message || 'Hello World!';
	
	console.log(message);

}

//panggil function tanpa parameter
console.log(hello()); // <-- output "Hello World!"

//panggil function dengan parameter
console.log(hello('Belajar ES6')); //<-- output "Belajar ES6"


// 2
function hello(message = 'Hello World!') {

	console.log(message);

}

//panggil function tanpa parameter
console.log(hello()); // <-- output "Hello World!"

//panggil function dengan parameter
console.log(hello('Belajar ES6')); //<-- output "Belajar ES6"

