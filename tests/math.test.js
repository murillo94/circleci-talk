import { sum, mul, sub, div } from '../math';

describe('sum', () => {
  test('A soma de dois valores deve ser o resultado esperado', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(3, 2)).toBe(5);
  });
});

describe('mul', () => {
  test('A multiplicação de dois valores deve ser o resultado esperado', () => {
    expect(mul(4, 2)).toBe(80);
    expect(mul(10, 3)).toBe(30);
  });
});

describe('sub', () => {
  test('A subtração de dois valores deve ser o resultado esperado', () => {
    expect(sub(1, 2)).toBe(-1);
    expect(sub(3, 2)).toBe(1);
  });
});

describe('div', () => {
  test('A divisão de dois valores deve ser o resultado esperado', () => {
    expect(div(2, 2)).toBe(1);
    expect(div(10, 5)).toBe(2);
  });
});
