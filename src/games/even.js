import generateNum from '../utils';
import { startGame } from '..';

const task = 'Answer "yes" if a number is even, otherwise answer "no".';

const isEven = num => num % 2 === 0;

const newRound = () => {
  const question = generateNum();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => startGame(task, newRound);
