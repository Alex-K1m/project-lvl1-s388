import generateNum from '../utils';

const operations = ['+', '-', '*'];

const name = 'Calculator';

const description = 'What is the result of the expression?';

export const calculate = (operation, num1, num2) => {
  switch (operation) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return null;
  }
};

const newRound = () => {
  const num1 = generateNum();
  const num2 = generateNum();
  const operation = operations[generateNum(0, operations.length - 1)];

  const task = `${num1} ${operation} ${num2}`;
  const correctAnswer = `${calculate(operation, num1, num2)}`;

  return { task, correctAnswer };
};

export default { name, description, newRound };
