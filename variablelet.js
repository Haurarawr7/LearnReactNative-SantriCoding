// 1
var name = 'Fika Ridaul Maulayya';

if (true) {
    var name = 'Ahmad';
    console.log(name); //<-- output "Ahmad"
}

console.log(name); // <-- output "Ahmad"


// 2
var name = 'Fika Ridaul Maulayya';
var name = 'Ahmad';

if (true) {
    console.log(name); //<-- output "Ahmad"
}

console.log(name); // <-- output "Ahmad"


// 3
var name = 'Fika Ridaul Maulayya';

if (true) {
    let name = 'Ahmad';
    console.log(name); //<-- output "Ahmad"
}

console.log(name); // <-- output "Fika Ridaul Maulayya"
