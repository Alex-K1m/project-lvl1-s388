import readlineSync from 'readline-sync';
import greeting from './greeting';

const NUM_OF_ROUNDS = 3; // to win the game

const startGame = (task, newRound) => {
  const userName = greeting();
  console.log(task);

  for (let correctCounter = 0;
    correctCounter < NUM_OF_ROUNDS;
    correctCounter += 1) {
    const { question, correctAnswer } = newRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `"${userAnswer}" is the wrong answer.`,
        `The correct answer is "${correctAnswer}".`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { greeting, startGame };
