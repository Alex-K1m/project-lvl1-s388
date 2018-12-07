import generateNum from '../utils';
import startGame from '..';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1 && num !== 0;
};

const newRound = () => {
  const question = generateNum();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => startGame(task, newRound);
