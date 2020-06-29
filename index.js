'use strict';

let userNumber = Number(prompt('Enter the number'));
let result = userNumber;

while (--userNumber > 1) {
    result *= userNumber;
}
alert(result);
