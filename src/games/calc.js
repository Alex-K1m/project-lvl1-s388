import generateNum from '../utils';

const operations = ['+', '-', '*'];

const description = 'What is the result of the expression?';

const calculate = (operation, num1, num2) => {
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

  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = `${calculate(operation, num1, num2)}`;

  return { question, correctAnswer };
};

export default { description, newRound };
