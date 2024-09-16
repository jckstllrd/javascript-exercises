const convertToCelsius = function (farenheit) {
  let celsius = ((farenheit - 32) * 5) / 9;
  celsius = parseFloat(celsius.toFixed(1));
  console.log(celsius);

  return celsius;
};

const convertToFahrenheit = function (celsius) {
  let farenheit = celsius * (9 / 5) + 32;
  farenheit = parseFloat(farenheit.toFixed(1));
  console.log(farenheit);

  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
