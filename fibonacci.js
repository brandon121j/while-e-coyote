const prompt = require('prompt-sync')();
let numbers = prompt('Enter a value for ' + "'n' ");
num1 = 0; 
num2 = 1;
var final;

if (numbers == 3) {
    console.log(0);
    console.log(1);
    console.log(1);
}

if (numbers == 2) {
    console.log(0)
    console.log(1)
}

if (numbers == 1) {
    console.log(0)
}

if (numbers >= 4) {
    console.log(num1);
    console.log(num2);
    final = num1 + num2;
    while (final <= numbers) {
        console.log(final)
        num1 = num2;
        num2 = final;
        final = num1 + num2;
    }
}