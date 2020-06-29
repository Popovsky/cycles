'use strict';

const userNumber = Number(prompt('Enter the number'));

for (let i = userNumber; i <= 100; i += userNumber) {
    if (!i) {
        break;
    }
    document.write(`${i}\t`);
}
