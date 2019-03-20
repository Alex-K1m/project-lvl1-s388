import { isPrime } from '../../src/games/prime';

it('is prime', () => {
  expect(isPrime(0)).toEqual(false);
  expect(isPrime(1)).toEqual(false);
  expect(isPrime(-5)).toEqual(false);
  expect(isPrime(3)).toEqual(true);
  expect(isPrime(13)).toEqual(true);
  expect(isPrime(53)).toEqual(true);
  expect(isPrime(40)).toEqual(false);
  expect(isPrime(24)).toEqual(false);
});
