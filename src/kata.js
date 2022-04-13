class Kata {

  distinctDigitYear(year) {
    for (let i = year + 1; i <= 2040; i++) {
      let yearValues = `${i}`.split('');
      let result = yearValues.filter(y =>
        yearValues.filter(d => d === y).length === 1);
      if (result.length === 4) {
        return i;
      }
    }
  }
}

module.exports = {
  Kata,
};