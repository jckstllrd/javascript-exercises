const removeFromArray = function (array) {
  newArray = [];
  argsArray = [];

  for (let i = 1; i < arguments.length; i++) {
    argsArray.push(arguments[i]);
  }

  for (let x = 0; x < arguments.length; x++) {
    while (array.includes(arguments[x], 0)) {
      let index = array.indexOf(arguments[x]);

      array.splice(index, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
