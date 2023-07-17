'use strict';

function generateRandomNumber() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const randomNumber = [];

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    const digit = digits.splice(randomIndex, 1)[0];

    randomNumber.push(digit);
  }

  return randomNumber.join('');
}

module.exports = generateRandomNumber;