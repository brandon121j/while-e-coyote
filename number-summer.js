const prompt = require('prompt-sync')();
let numbers = prompt('Enter some numbers ');
const numberNum = Number(numbers);

while (numbers !== "done") {
    numbers = prompt('Enter some numbers ');
}