//define function
const hello = function (name) {

	return `Hello ${name}`;

}

//panggil function
hello('Fika Ridaul Maulayya') //< -- output "Hello Fika Ridaul Maulayya"

// 2
//define function
const hello = name => `Hello ${name}`;

//panggil function
hello('Fika Ridaul Maulayya') //< -- output "Hello Fika Ridaul Maulayya"

// 3
//define function
const hello = (name, umur) => `Hello ${name} umur ${umur}`;

//panggil function
hello('Fika Ridaul Maulayya', 25) //< -- output "Hello Fika Ridaul Maulayya umur 25"

//4
//define function
const hello = (name, umur) => ({
	status: 'OK',
	mesaage: `Hello $name umur ${umur}`
});


//5
//define function
const hello = name => {

	if(!name) {
		console.log('Name is required');
	}
	
	return `Hello ${name}`;

}