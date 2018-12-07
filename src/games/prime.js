import generateNum from '../utils';
import startGame from '..';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const n = Math.abs(num);
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return n !== 1 && n !== 0;
};

const newRound = () => {
  const question = generateNum();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => startGame(task, newRound);
