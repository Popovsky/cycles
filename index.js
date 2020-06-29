'use strict';

let number = 1000;
let count = 0;

do {
    number /= 2;
    count++;
}
while (number >= 50);
alert(`number = ${number}\ncount = ${count}`);
