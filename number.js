
let input1 = [2,4,6];

let input2 = [8,4,5];

let output = [ 1091 ]

let val1 = Number(input1.join(''));
let val2 = Number(input2.join(''));

let total = [val1 + val2];

let totalVal  = total.toString().split('').map(Number);

console.log(totalVal)
