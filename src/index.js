import readlineSync from 'readline-sync';
import greeting from './greeting';

const numOfRounds = 3; // to win the game

export default (task, newRound) => {
  const userName = greeting();
  console.log(task);

  for (let correctCounter = 0;
    correctCounter < numOfRounds;
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
