import readlineSync from 'readline-sync';

const NUM_OF_ROUNDS = 3; // to win the game

const greeting = () => {
  console.log(
    `---------------------------
Welcome to the Brain Games!
---------------------------`,
  );
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const startGame = (game) => {
  const userName = greeting();
  console.log(game.task);

  for (let correctCounter = 0;
    correctCounter < NUM_OF_ROUNDS;
    correctCounter += 1) {
    const round = game.newRound();
    console.log(`Question: ${round.question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (round.correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `"${userAnswer}" is the wrong answer.`,
        `The correct answer is "${round.correctAnswer}".`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { greeting, startGame };
