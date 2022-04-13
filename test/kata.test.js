const { Kata } = require('../src/kata');

describe('First story', () => {
  test('GIVEN 2013 WHEN logic THEN should return 2014', () => {
    const kata = new Kata();
    expect(kata.distinctDigitYear(2013)).toStrictEqual(2014);
  });

  test('GIVEN 2019 WHEN logic THEN should return 2031', () => {
    const kata = new Kata();
    expect(kata.distinctDigitYear(2019)).toStrictEqual(2031);
  });
});




