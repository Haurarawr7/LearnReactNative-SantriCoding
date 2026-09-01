// 1
function sum(...rest) {
  let sum = 0;
  for (let number of rest) sum += number;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77); // <-- output "326"

//2
function sum(initVal, ...rest) {
  let sum = 0;
  for (let number of rest) sum += number;
  return initVal + sum;
}

let x = sum(10, 5); // <-- output "15"
