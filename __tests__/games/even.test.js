import { isEven } from '../../src/games/even';

it('is even', () => {
  expect(isEven(2)).toEqual(true);
  expect(isEven(30)).toEqual(true);
  expect(isEven(-12)).toEqual(true);
  expect(isEven(3)).toEqual(false);
  expect(isEven(-59)).toEqual(false);
});
