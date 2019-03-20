import generateNum from '../src/utils';

it('Generate a random number in a range', () => {
  expect(generateNum(0, 0, () => 0)).toEqual(0);
  expect(generateNum(0, 0, () => 0.99)).toEqual(0);

  expect(generateNum(1, 100, () => 0)).toEqual(1);
  expect(generateNum(1, 100, () => 0.99)).toEqual(100);
  expect(generateNum(1, 100, () => 0.46)).toEqual(47);

  expect(generateNum(-50, -1, () => 0.3)).toEqual(-35);

  expect(generateNum(-50, 49, () => 0.56)).toEqual(6);

  expect(generateNum(20, 11, () => 0.3)).toEqual(17);
});
