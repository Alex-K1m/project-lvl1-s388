import generateNum from '../utils';

const name = 'Greatest common divisor';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return findGcd(num2, num1 % num2);
};

const newRound = () => {
  const num1 = generateNum();
  const num2 = generateNum();

  const task = `${num1} ${num2}`;
  const correctAnswer = `${findGcd(num1, num2)}`;

  return { task, correctAnswer };
};

export default { name, description, newRound };
