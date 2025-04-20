const leapYears = function (year) {
  // leap year = % 4 = 0 && !%100 = 0 %% 400 =0;
  const isYearDividedByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDividedByFourHundred = year % 400 === 0;
  if (isYearDividedByFour || isYearDividedByFourHundred) {
    if (isCentury && !isYearDividedByFourHundred) {
      return false;
    }
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
