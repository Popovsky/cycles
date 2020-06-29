'use strict';

const firstNumber = Number(prompt('Enter first number'));
const secondNumber = Number(prompt('Enter second number'));
let i = 1, result = 0;


while (firstNumber >= i && secondNumber >= i) {
    if (!(firstNumber % i) && !(secondNumber % i)) {
        result++;
    }
    i++;
}
alert(result);
