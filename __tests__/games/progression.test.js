import { generateProgression } from '../../src/games/progression';

it('calculate', () => {
  expect(generateProgression(1, 1, 1)).toEqual([1]);
  expect(generateProgression(1, 1, 0)).toEqual([]);
  expect(generateProgression(1, 3, 3)).toEqual([1, 4, 7]);
  expect(generateProgression(-20, 5, 4)).toEqual([-20, -15, -10, -5]);
  expect(generateProgression(34, -2, 2)).toEqual([34, 32]);
});
