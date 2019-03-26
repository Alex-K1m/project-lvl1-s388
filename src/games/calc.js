import generateNum from '../utils';

const operations = ['+', '-', '*'];

const name = 'Calculator';

const description = 'What is the result of the expression?';

const calculate = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
};

const newRound = () => {
  const num1 = generateNum();
  const num2 = generateNum();
  const operation = operations[generateNum(0, operations.length - 1)];

  const task = `${num1} ${operation} ${num2}`;
  const correctAnswer = `${calculate[operation](num1, num2)}`;

  return { task, correctAnswer };
};

export default { name, description, newRound };
