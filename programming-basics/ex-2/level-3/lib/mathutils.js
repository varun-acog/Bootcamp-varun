function add(numbers) {
  return numbers.reduce((acc, num) => acc + Number(num), 0);
}

function multiply(numbers) {
  return numbers.reduce((acc, num) => acc * Number(num), 1);
}

module.exports = {
  add,
  multiply
};

