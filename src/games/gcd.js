import generateNum from '../utils';
import startGame from '..';

const task = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) return findGcd(num1 % num2, num2);
    return findGcd(num1, num2 % num1);
  }
  return num1 + num2;
};

const newRound = () => {
  const num1 = generateNum();
  const num2 = generateNum();

  const question = `${num1} ${num2}`;
  const correctAnswer = `${findGcd(num1, num2)}`;

  return { question, correctAnswer };
};

export default () => startGame(task, newRound);
