const sumAll = function (numOne, numTwo) {
  if (numOne < 0 || numTwo < 0) {
    return "ERROR";
  }
  if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
    return "ERROR";
  }

  let count = 0;

  if (numOne > numTwo) {
    for (let i = numTwo; i <= numOne; i++) {
      count += i;
    }
  } else if (numTwo > numOne) {
    for (let i = numOne; i <= numTwo; i++) {
      count += i;
    }
  }
  return count;
};

// Do not edit below this line
module.exports = sumAll;
