import generateNum from './utils';
import { startGame } from '..';

const operations = ['+', '-', '*'];
const task = 'What is the result of the expression?';
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
  const operation = operations[Math.floor(Math.random() * operations.length)];

  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = `${calculate(operation, num1, num2)}`;

  return { question, correctAnswer };
};

export default () => startGame({ task, newRound });
