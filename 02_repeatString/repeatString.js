const repeatString = function (string, repetitions) {
  let finalString = "";
  if (repetitions < 0) {
    return "ERROR";
  }
  for (let i = 0; i < repetitions; i++) {
    finalString += string;
  }
  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
