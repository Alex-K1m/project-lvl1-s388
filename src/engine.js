import { question, keyInYNStrict } from 'readline-sync';

const numOfRounds = 3; // to win the game

const startGame = (gameData, userName) => {
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
      console.log(`Wrong. The correct answer is "${correctAnswer}".`);
      console.log(`\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`\nCongratulations, ${userName}!`);
};

export default startGame;
