#!/usr/bin/env node

const { add, multiply } = require('../lib/mathutils');

const [operation, ...operands] = process.argv.slice(2);

if (operands.length === 0 || !operands.every(arg => !isNaN(arg))) {
  console.error("Error: Please provide valid numbers as operands.");
  process.exit(1);
}

const numbers = operands.map(Number);

let result;

switch (operation) {
  case 'add':
    result = add(numbers);
    console.log(`The sum is: ${result}`);
    break;
  case 'multiply':
    result = multiply(numbers);
    console.log(`The product is: ${result}`);
    break;
  default:
    console.error("Error: Invalid operation. Please use 'add' or 'multiply'.");
    process.exit(1);
}

