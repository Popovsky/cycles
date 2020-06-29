'use strict';

let userValue = Number(prompt('Enter the number'));

while (userValue) {
    userValue > 0 ? alert(userValue--) : alert(userValue++);
}
alert(0);
