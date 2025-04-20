const convertToCelsius = function (fDegs) {
  // Faharenheit - 32 / 1.8
  const cDegs = (fDegs - 32) / 1.8;
  const cDegsRound = Number(cDegs.toFixed(1));
  return cDegsRound;
};

const convertToFahrenheit = function (cDegs) {
  // Celsius * 1.8 + 32
  const fDegs = cDegs * 1.8 + 32;
  const fDegsRound = Number(fDegs.toFixed(1));
  return fDegsRound;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
