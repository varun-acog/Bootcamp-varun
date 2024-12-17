const args = process.argv.slice(2);

function areNumbers(values) {
  return values.every((value) => !isNaN(value));
}

if (args.length === 0) {
  console.error("Error: No arguments provided. Please provide numbers as arguments.");
  process.exit(1);
}

if (!areNumbers(args)) {
  console.error("Error: Invalid input detected. Please provide only numeric values.");
  process.exit(1);
}

function calculateProduct(numbers) {
  return numbers.reduce((acc, num) => acc * Number(num), 1);
}

const product = calculateProduct(args);
console.log(`The product of the provided numbers is: ${product}`);

