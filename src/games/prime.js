import generateNum from '../utils';

const name = 'Prime or Not';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const newRound = () => {
  const task = generateNum();
  const correctAnswer = isPrime(task);
  return { task, correctAnswer };
};

export default { name, description, newRound };
