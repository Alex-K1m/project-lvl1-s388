import readlineSync from 'readline-sync';

// numbers for questions are generated randomly from [1; MAX_NUMBER]
const MAX_NUMBER = 100;
const NUM_OF_CORRECT_ANSWERS = 3; // to win the game

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

const generateNum = () => Math.ceil(Math.random() * MAX_NUMBER);

const isEven = num => num % 2 === 0;

const startBrainEven = () => {
  const userName = greeting();

  console.log('Answer "yes" if a number is even, otherwise answer "no".');

  for (let correctCounter = 0;
    correctCounter < NUM_OF_CORRECT_ANSWERS;
    correctCounter += 1) {
    const question = generateNum();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(question) ? 'yes' : 'no';

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

export { greeting, startBrainEven };
