const prompt = require('prompt-sync')();
let numbers = prompt('Enter a number ');



// for (let i = numbers; i <= 100; i*=2) {
//     while (i < 100) {
//         console.log(i)
//     }
// }
console.log(numbers)
while (numbers <= 100) {
    console.log(numbers *= 2);
}