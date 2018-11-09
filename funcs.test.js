const sum = require('./funcs');

describe('sum', () => {
  test('A soma de dois valores deve ser o resultado esperado', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(3, 2)).toBe(5);
    expect(sum(5, 2)).toBe(7);
    expect(sum(10, 10)).toBe(20);
  });
});
