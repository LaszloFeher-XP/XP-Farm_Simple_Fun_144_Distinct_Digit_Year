const { Kata } = require('../src/kata');

describe('First story', () => {
  test('GIVEN ... WHEN ... THEN ...', () => {
    const kata = new Kata();
    expect(kata.distinctDigitYear(2013)).toStrictEqual(2014);
  });
});




