import { calculate } from '../../src/games/calc';

it('calculate', () => {
  expect(calculate('+', 10, 20)).toEqual(30);
  expect(calculate('-', 10, 20)).toEqual(-10);
  expect(calculate('*', 10, 20)).toEqual(200);

  expect(calculate('+', -25, -5)).toEqual(-30);
  expect(calculate('-', -25, -5)).toEqual(-20);
  expect(calculate('*', -25, -5)).toEqual(125);
});
