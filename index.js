'use strict';

const userNumber = Number(prompt('Enter the number'));
let userPower = Number(prompt('Enter the power'));
let result = 1;

while (userPower) {
    if (userPower > 0) {
        result *= userNumber;
        userPower--;
    } else {
        result /= userNumber;
        userPower++;
    }
}
alert(result);
