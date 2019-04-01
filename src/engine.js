import { question, keyInYNStrict } from 'readline-sync';

const format = (value) => {
  if (value === true) return 'yes';
  if (value === false) return 'no';
  return value;
};

const startGame = (gameData, numOfRounds = 3) => {
  const { name, description, newRound } = gameData;

  console.log(`\n${name.toUpperCase()}`);
  console.log(`${description}`);

  for (let correctCounter = 0;
    correctCounter < numOfRounds;
    correctCounter += 1) {
    const { task, correctAnswer } = newRound();

    console.log(`\nCurrent task: ${task}`);
    const userAnswer = typeof correctAnswer === 'boolean'
      ? keyInYNStrict('Your answer') : question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`Wrong. The correct answer is "${format(correctAnswer)}".`);
      return false;
    }
  }
  return true;
};

export default startGame;
