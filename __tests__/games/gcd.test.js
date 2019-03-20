import { findGcd } from '../../src/games/gcd';

it('greatest commond divisor', () => {
  expect(findGcd(0, 0)).toEqual(0);
  expect(findGcd(1, 1)).toEqual(1);
  expect(findGcd(1, 3)).toEqual(1);
  expect(findGcd(5, 15)).toEqual(5);
  expect(findGcd(81, 45)).toEqual(9);
});
