// numbers for questions are generated randomly from [1; MAX_NUMBER]
const MAX_NUMBER = 100;

export default () => {
  const task = 'Answer "yes" if a number is even, otherwise answer "no".';
  const newRound = () => {
    const question = Math.ceil(Math.random() * MAX_NUMBER);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    return { question, correctAnswer };
  };
  return { task, newRound };
};
