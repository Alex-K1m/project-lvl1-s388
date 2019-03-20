import generateNum from '../utils';

const name = 'Even or Not';

const description = 'Answer "yes" if a number is even, otherwise answer "no".';

export const isEven = num => num % 2 === 0;

const newRound = () => {
  const task = generateNum();
  const correctAnswer = isEven(task);
  return { task, correctAnswer };
};

export default { name, description, newRound };
