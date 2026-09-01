//define a promise with 3 seconds
const taskPromise = () => {
	return new Promise(resolve => {    
		setTimeout(() => resolve('Selesai'), 3000)  
	})
}

//define function "task" with async
const task = async () => {
	const done = await taskPromise();
	console.log(done);
}

//print
console.log('Mulai');
task();
console.log('Akhir');

// 2

return new Promise(resolve => {    
	setTimeout(() => resolve('Selesai'), 3000)  
})

// 3
const task = async () => { // <--  add async keyword

	const done = await taskPromise();	// <-- add await keyword
}

// 4

console.log('Mulai');

task(); // <-- async

console.log('Akhir');
