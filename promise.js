//define variable
let done = true;

//define a promise
const task = new Promise((resolve, reject) => {

	if(done) {
		
		resolve('Task berhasil diselesaikan');
		
	} else {
		
		reject('Task belum diselesaikan');
	
	}

});

// run promise
console.log(task); // <-- ouput "Task berhasil diselesaikan"

// 2

//define variable
let done = true;

//define a promise
const task = new Promise((resolve, reject) => {

	if(done) {
		
		resolve('Task berhasil diselesaikan');
		
	} else {
		
		reject('Task belum diselesaikan');
	
	}

});

// run promise with action
task
	.then(response => console.log(response))
	.catch(response => console.log(response))
